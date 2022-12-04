import { createSlice } from "@reduxjs/toolkit";

type AppState = {
  isAppInitialized: boolean;
};

const initialState: AppState = {
  isAppInitialized: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    initializeFulfilled: (state) => {
      state.isAppInitialized = true;
    },
  },
});

export default appSlice.reducer;
export const { initializeFulfilled } = appSlice.actions;
