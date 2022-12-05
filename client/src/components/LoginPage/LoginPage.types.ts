export type LoginFormInputs = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type LoginData = Omit<LoginFormInputs, "rememberMe">
