import { RootState } from "../store";

export const selectIsAuth = (state: RootState) => state.auth.isAuth;

export const selectIsLoading = (state: RootState) => state.auth.isLoading;
