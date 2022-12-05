import { AxiosError } from "axios";
import { LoginFormInputs } from "../components/LoginPage/LoginPage.types";
import { SignUpFormInputs } from "../components/SignUpPage/SignUpPage.types";
import { axiosInstance } from "./api";

type SignUpResponseData = {
  token: string;
};
type LoginResponseData = {
  token: string;
};
type ResponseErrorData = {
  message: string
}

export const authAPI = {
  async signup(signupData: SignUpFormInputs) {
    const response = await axiosInstance.post<SignUpResponseData>(
      "signup",
      signupData
    );

    return response.data;
  },

  async login(loginData: LoginFormInputs) {
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
