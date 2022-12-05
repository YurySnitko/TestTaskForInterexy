import { AxiosError } from "axios";
import { LoginData } from "../components/LoginPage/LoginPage.types";
import { SignUpData } from "../components/SignUpPage/SignUpPage.types";
import { axiosInstance } from "./api";

type SignUpResponseData = {
  token: string;
};
type LoginResponseData = {
  token: string;
};

export const authAPI = {
  async signup(signupData: SignUpData) {
    const response = await axiosInstance.post<SignUpResponseData>(
      "signup",
      signupData
    );

    return response.data;
  },

  async login(loginData: LoginData) {
    try {
      const response = await axiosInstance.post<LoginResponseData>(
        "login",
        loginData
      );
  
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.response?.data?.message)
      }
    }
  },
};
