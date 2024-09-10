import { createSlice } from "@reduxjs/toolkit";
import { createOrder, RetereiveOrder, RetereiveOrdersByCustomer, customerLogin } from "../utlis/api";

const initialState = {
  loading: false,
  error: null,
  order: null,
  orders: [], // Add an array to store multiple orders
  user_email: null,
  token: null
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.order = null;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.order = action.payload;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.order = null;
      })
      // Handle RetereiveOrder
      .addCase(RetereiveOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.order = null;
      })
      .addCase(RetereiveOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.order = action.payload;
      })
      .addCase(RetereiveOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.order = null;
      })
      // Handle RetereiveOrdersByCustomer
      .addCase(RetereiveOrdersByCustomer.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.orders = []; // Reset orders array
      })
      .addCase(RetereiveOrdersByCustomer.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.orders = action.payload; // Store the array of orders
      })
      .addCase(RetereiveOrdersByCustomer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.orders = [];
      })
      // Handle customerLogin action
      .addCase(customerLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(customerLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.user_email = action.payload.user_email; // Set user information
        state.token = action.payload.token; // Store JWT token
      })
      .addCase(customerLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default orderSlice.reducer;
export { RetereiveOrder, RetereiveOrdersByCustomer };
