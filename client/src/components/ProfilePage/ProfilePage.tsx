import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { FC, useEffect } from "react";
import { redirect } from "react-router-dom";
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
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(selectIsAuth);
  const isLoading = useAppSelector(selectIsLoading);
  const profileDetails = useAppSelector(selectProfileDetails);

  useEffect(() => {
    dispatch(me());
  }, [dispatch]);

  useEffect(() => {
    !isAuth && redirect("/login");
  }, [isAuth]);

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
        </S.Container>
      ) : (
        <Loader />
      )}
    </>
  );
};
