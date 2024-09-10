import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { consumerKey, consumerSecret } from "./config";

const baseUrl = "https://goldenrod-clam-913898.hostingersite.com/wp-json/wc/v3/";
const authUrl = "https://goldenrod-clam-913898.hostingersite.com/wp-json/jwt-auth/v1/token"; // JWT auth endpoint

const api = axios.create({
    baseURL: baseUrl,
    timeout: 15000,
    auth: {
        username: consumerKey,
        password: consumerSecret
    }
});

// Create an Order
const createOrder = createAsyncThunk(
    "orders/createOrder",
    async (orderData) => {
        try {
            const response = await api.post("/orders", orderData);
            return response.data;
        } catch (error) {
            throw new Error("Error creating order: " + error.message);
        }
    }
);

//Reterieve an Order

const RetereiveOrder = createAsyncThunk(
    "orders/fetchOrder",
    async (orderId) => {
        try {
            const response = await api.get(`/orders/${orderId}`);
            return response.data;
        } catch (error) {
            throw new Error("Error fetching order: " + error.message);
        }
    }
);


// Customer Login
const customerLogin = createAsyncThunk(
    "login/customerLogin",
    async ({ username, password }) => {
        try {
            const response = await axios.post(authUrl, {
                username,
                password
            });
             return response.data; 
        } catch (error) {
            throw new Error("Error logging in: " + error.message);
        }
    }
); 
// Fetch Orders by Customer ID with Pagination
const RetereiveOrdersByCustomer = createAsyncThunk(
    "orders/fetchOrdersByCustomer",
    async ({ customerEmail, page = 1, per_page = 10 }) => {  // Default page to 1 and per_page to 10
      try {
        const response = await api.get(`/orders`, {
          params: {
            customer_email: customerEmail,
            page: page,
            per_page: per_page
          }
        });
        return response.data;
      } catch (error) {
        throw new Error("Error fetching orders: " + error.message);
      }
    }
  );
  
  export default RetereiveOrdersByCustomer;

  //Create customer

 const createCustomer = createAsyncThunk(
    "customer/createCustomer",
    async (customerData) => {
      try {
        const response = await api.post("/customers", customerData);
        return response.data;
      } catch (error) {
        throw new Error("Error creating customer: " + error.message);
      }
    }
  );
  

export { createOrder, RetereiveOrder, customerLogin, RetereiveOrdersByCustomer,createCustomer };
