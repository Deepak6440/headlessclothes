import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slice/cartSlice";
import orderReducer from "../slice/orderSlice";
import userSlice from "../slice/userSlice";
import customerSlice from "../slice/customerSlice";


export default configureStore({
    reducer:{
        cart: cartReducer,
        order:orderReducer,
        user:userSlice,
        customer:customerSlice
    }
})