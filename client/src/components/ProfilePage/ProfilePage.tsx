import {
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { FC, useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { me } from "../../store/reducers/profileSlice";
import { selectIsAuth } from "../../store/selectors/authSelectors";
import {
  selectIsLoading,
  selectProfileDetails,
} from "../../store/selectors/profileSelectors";
import { Loader } from "../Loader/Loader";
import * as S from "./ProfilePage.styles";

export const ProfilePage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(selectIsAuth);
  const isLoading = useAppSelector(selectIsLoading);
  const profileDetails = useAppSelector(selectProfileDetails);

  useEffect(() => {
    (async () => {
      const res = await dispatch(me()).unwrap();
      !res && navigate("/login");
    })();
  }, [dispatch, navigate]);

  useEffect(() => {
    !isAuth && redirect("/login");
  }, [isAuth]);

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      {!isLoading ? (
        <S.Container>
          <S.Paper>
            <Typography variant="h4">Profile details</Typography>
            <List>
              {Object.entries(profileDetails).map((infoItem) => (
                <ListItem key={infoItem[0]}>
                  <ListItemText
                    primary={infoItem[0]}
                    secondary={infoItem[1]}
                    primaryTypographyProps={{
                      variant: "caption",
                      color: "GrayText",
                    }}
                    secondaryTypographyProps={{ variant: "body1" }}
                  />
                </ListItem>
              ))}
            </List>
          </S.Paper>
          <Button variant="contained" size="large" onClick={handleClick}>
            Home Page
          </Button>
        </S.Container>
      ) : (
        <Loader />
      )}
    </>
  );
};
