import { RootState } from "../store";

export const selectProfileDetails = (state: RootState) =>
  state.profile.profileDetails;

export const selectIsLoading = (state: RootState) => state.profile.isLoading;
