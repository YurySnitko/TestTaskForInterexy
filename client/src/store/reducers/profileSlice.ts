import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { profileAPI } from "../../api/profileAPI";

type ProfileState = {
  profileDetails: ProfileDetails;
  isLoading: boolean;
};

type ProfileDetails = {
  firstname: string;
  lastname: string;
  email: string;
};

const initialState: ProfileState = {
  profileDetails: {
    firstname: "",
    lastname: "",
    email: "",
  },
  isLoading: false,
};

export const me = createAsyncThunk("profile/me", async () => {
  const profileDetails = await profileAPI.me();
  return profileDetails 
});

export const profileSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetProfileDetails: (state) => {
      state.profileDetails.email = "";
      state.profileDetails.firstname = "";
      state.profileDetails.lastname = "";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(me.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(me.fulfilled, (state, action: PayloadAction<ProfileDetails | undefined>) => {
        state.profileDetails = action.payload ?? initialState.profileDetails;
        state.isLoading = false;
      });
  },
});

export default profileSlice.reducer;
export const { resetProfileDetails } = profileSlice.actions;
