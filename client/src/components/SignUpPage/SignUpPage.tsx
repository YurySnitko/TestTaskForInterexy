import { AccountCircleRounded } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { SubmitButton } from "../../controls/SubmitButton/SubmitButton";
import { signup } from "../../store/reducers/authSlice";
import { useAppDispatch } from "../../store/hooks";
import { ControlledTextField } from "../../controls/ControlledTextField/ControlledTextField";
import * as S from "./SignUpPage.styles";
import { SignUpFormInputs } from "./SignUpPage.types";

const defaultValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};

export const SignUpPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInputs>({ defaultValues });

  const onSubmit: SubmitHandler<SignUpFormInputs> = async (data) => {
    const id = await dispatch(signup(data)).unwrap();
    if (id) {
      navigate("/profile");
    }
  };

  return (
    <S.Container>
      <S.Paper elevation={4}>
        <Typography variant="h4">Sign Up</Typography>
        <S.IconContainer>
          <AccountCircleRounded color="primary" fontSize="inherit" />
        </S.IconContainer>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          {Object.keys(defaultValues).map((field) => (
            <ControlledTextField
              key={field}
              control={control}
              name={field as keyof SignUpFormInputs}
              label={field.at(0)?.toUpperCase() + field.slice(1)}
              rules={{
                required: { value: true, message: "field is required" },
              }}
              error={!!errors[field as keyof SignUpFormInputs]}
              helperText={errors[field as keyof SignUpFormInputs]?.message}
              fullWidth
              size="small"
              type={field === "email" || field === "password" ? field : "text"}
            />
          ))}
          <SubmitButton label="Sign Up" />
        </S.Form>
        <S.NavLinkTextWrapper>
          <Typography component="span">Have an account? </Typography>
          <Link to="/login">Log in</Link>
        </S.NavLinkTextWrapper>
      </S.Paper>
    </S.Container>
  );
};
