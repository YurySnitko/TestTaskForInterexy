import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authAPI } from "../../api/authAPI";
import { LoginFormInputs } from "../../components/LoginPage/LoginPage.types";
import { SignUpFormInputs } from "../../components/SignUpPage/SignUpPage.types";

export const login = createAsyncThunk(
  "auth/login",
  async (loginData: LoginFormInputs) => {
    const { token } = await authAPI.login(loginData);
    sessionStorage.setItem("token", token);
    return token;
  }
);

export const signup = createAsyncThunk(
  "auth/signup",
  async (signUpData: SignUpFormInputs) => {
    const { token } = await authAPI.signup(signUpData);
    sessionStorage.setItem("token", token);
    return token;
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
      });

    builder
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signup.fulfilled, (state, action: PayloadAction<string>) => {
        state.token = action.payload;
        state.isAuth = true;
        state.isLoading = false;
      });
  },
});

export default authSlice.reducer;
export const { setAuthData } = authSlice.actions;
