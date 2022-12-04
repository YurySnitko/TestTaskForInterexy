import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import appReducer from "./reducers/appSlice";
import profileReducer from "./reducers/profileSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    profile: profileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
