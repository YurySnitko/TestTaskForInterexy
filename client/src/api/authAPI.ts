import { LoginFormInputs } from "../components/LoginPage/LoginPage.types";
import { SignUpFormInputs } from "../components/SignUpPage/SignUpPage.types";
import { axiosInstance } from "./api";

type SignUpResponseData = {
  token: string;
};
type LoginResponseData = {
  token: string;
};

export const authAPI = {
  async signup(signupData: SignUpFormInputs) {
    const response = await axiosInstance.post<SignUpResponseData>(
      "signup",
      signupData
    );

    return response.data;
  },

  async login(loginData: LoginFormInputs) {
    const response = await axiosInstance.post<LoginResponseData>(
      "login",
      loginData
    );

    return response.data;
  },
};
