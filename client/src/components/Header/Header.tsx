import { Avatar, Button, Typography } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setAuthData } from "../../store/reducers/authSlice";
import { selectIsAuth } from "../../store/selectors/authSelectors";
import { selectProfileDetails } from "../../store/selectors/profileSelectors";
import * as S from "./Header.styles";

export const Header: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(selectIsAuth);
  const { firstname, lastname } = useAppSelector(selectProfileDetails);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    dispatch(setAuthData({ isAuth: false, token: "" }));
    navigate("/login");
  };

  const goToProfilePage = () => {
    navigate("/profile");
  };

  return (
    <S.AppBar>
      <Typography
        variant="h5"
        component="div"
        sx={{ flexGrow: 1, mt: 2, mb: 2, ml: 4 }}
      >
        Test task for Interexy
      </Typography>
      {isAuth ? (
        <>
          <Button color="inherit" onClick={handleLogout} sx={{ mr: 2 }}>
            Log out
          </Button>
          <Avatar onClick={goToProfilePage}>{`${firstname.at(0)}${lastname.at(
            0
          )}`}</Avatar>
        </>
      ) : (
        <Button color="inherit" onClick={handleLogin} sx={{ mr: 2 }}>
          Log in
        </Button>
      )}
    </S.AppBar>
  );
};
