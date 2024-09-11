// src/slices/customerSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { createCustomer } from "../utlis/api"; // import createCustomer action

const initialState = {
  loading: false,
  error: null,
  customer: null,
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCustomer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCustomer.fulfilled, (state, action) => {
        state.loading = false;
        state.customer = action.payload; // store created customer data
      })
      .addCase(createCustomer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default customerSlice.reducer;
