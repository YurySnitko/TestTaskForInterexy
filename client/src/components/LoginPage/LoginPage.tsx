import { LoginRounded } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { SubmitButton } from "../../controls/SubmitButton/SubmitButton";
import { login } from "../../store/reducers/authSlice";
import { useAppDispatch } from "../../store/hooks";
import { ControlledTextField } from "../../controls/ControlledTextField/ControlledTextField";
import * as S from "./LoginPage.styles";
import { LoginFormInputs } from "./LoginPage.types";

const defaultValues = {
  email: "",
  password: "",
};

export const LoginPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({ defaultValues });

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      const id = await dispatch(login(data)).unwrap();
    if (id) {
      navigate("/profile");
    }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.Container>
      <S.Paper elevation={4}>
        <Typography variant="h4">Log in</Typography>
        <S.IconContainer>
          <LoginRounded color="primary" fontSize="inherit" />
        </S.IconContainer>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          {Object.keys(defaultValues).map((field) => (
            <ControlledTextField
              key={field}
              control={control}
              name={field as keyof LoginFormInputs}
              label={field.at(0)?.toUpperCase() + field.slice(1)}
              rules={{
                required: { value: true, message: "field is required" },
              }}
              error={!!errors[field as keyof LoginFormInputs]}
              helperText={errors[field as keyof LoginFormInputs]?.message}
              fullWidth
              size="small"
              type={field}
            />
          ))}
          <SubmitButton label="Log in" />
        </S.Form>
        <S.NavLinkTextWrapper>
          <Typography component="span">Don't have an account? </Typography>
          <Link to="/signup">Sign up</Link>
        </S.NavLinkTextWrapper>
      </S.Paper>
    </S.Container>
  );
};
