import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authAPI } from "../../api/authAPI";
import { LoginFormInputs } from "../../components/LoginPage/LoginPage.types";
import { SignUpFormInputs } from "../../components/SignUpPage/SignUpPage.types";

export const login = createAsyncThunk(
  "auth/login",
  async ({email, password, rememberMe}: LoginFormInputs) => {
    const data = await authAPI.login({email, password});
    data && rememberMe && sessionStorage.setItem("token", data.token);
    return data ? data.token : "";
  }
);

export const signup = createAsyncThunk(
  "auth/signup",
  async ({firstname, lastname, email, password, rememberMe}: SignUpFormInputs) => {
    const data = await authAPI.signup({firstname, lastname, email, password});
    data && rememberMe && sessionStorage.setItem("token", data.token);
    return data ? data.token : "";
  }
);

type AuthState = {
  isLoading: boolean;
  isAuth: boolean;
  token: string;
};

type AuthData = {
  isAuth: boolean;
  token: string;
};

const initialState: AuthState = {
  isLoading: false,
  isAuth: false,
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<AuthData>) => {
      state.isAuth = action.payload.isAuth;
      state.token = action.payload.token;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<string>) => {
        state.token = action.payload;
        state.isAuth = true;
        state.isLoading = false;
      })
      .addCase(login.rejected, (state) => {
        state.isAuth = false;
        state.isLoading = false;
      })
      

    builder
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signup.fulfilled, (state, action: PayloadAction<string>) => {
        state.token = action.payload;
        state.isAuth = true;
        state.isLoading = false;
      })
      .addCase(signup.rejected, (state) => {
        state.isAuth = false;
        state.isLoading = false;
      })
  },
});

export default authSlice.reducer;
export const { setAuthData } = authSlice.actions;
