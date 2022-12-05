import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import axios from "axios";
import { RootState } from "../store/store";

let store: ToolkitStore<RootState>

export const injectStore = (_store: ToolkitStore<RootState>) => {
  store = _store
}

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token
    // const token = sessionStorage.getItem("token")

    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }

    return config;
  },
  (error) => Promise.reject(error)
);
