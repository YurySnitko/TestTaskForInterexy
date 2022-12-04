import { RootState } from "../store";

export const selectIsAppInitialized = (state: RootState) =>
  state.app.isAppInitialized;
