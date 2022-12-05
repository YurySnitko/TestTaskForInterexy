export type SignUpFormInputs = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  rememberMe: boolean;
};

export type SignUpData = Omit<SignUpFormInputs, "rememberMe">
