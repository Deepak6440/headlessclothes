// src/slices/userSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { customerLogin } from "../utlis/api";

const initialState = {
  loading: false,
  error: null,
  user: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(customerLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(customerLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user_nicename;
        state.token = action.payload.token;
      })
      .addCase(customerLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
