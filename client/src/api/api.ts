import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");

    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }

    return config;
  },
  (error) => Promise.reject(error)
);
