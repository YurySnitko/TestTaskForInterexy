import { AppBar, Avatar, Button, IconButton, Typography } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { selectIsAuth } from "../../store/selectors/authSelectors";
import { selectProfileDetails } from "../../store/selectors/profileSelectors";

export const Header: FC = () => {
  const navigate = useNavigate();
  const isAuth = useAppSelector(selectIsAuth);
  const { firstname, lastname } = useAppSelector(selectProfileDetails);

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <AppBar>
      <Typography
        variant="h5"
        component="div"
        sx={{ flexGrow: 1, mt: 2, mb: 2, ml: 4 }}
      >
        Test task for Interexy
      </Typography>
      {isAuth ? (
        <IconButton size="large">
          <Avatar>{`${firstname.at(0)}${lastname.at(0)}`}</Avatar>
        </IconButton>
      ) : (
        <Button onClick={handleClick}>Log in</Button>
      )}
    </AppBar>
  );
};
