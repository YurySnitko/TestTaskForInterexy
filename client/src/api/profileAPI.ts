import { axiosInstance } from "./api";

type MeResponseData = {
  firstname: string;
  lastname: string;
  email: string;
  id: string;
};

export const profileAPI = {
  async me() {
    const response = await axiosInstance.get<MeResponseData>("/me");
    const { firstname, lastname, email } = response.data;
    return { firstname, lastname, email };
  },
};
