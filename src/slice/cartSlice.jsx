import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    wishlistItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity, name, price, image } = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cartItems.push({ id, quantity, name, price, image });
      }
    },
    addToWishlist: (state, action) => {
      const { id, quantity, name, price, image } = action.payload;
      const existingItem = state.wishlistItems.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.wishlistItems.push({ id, quantity, name, price, image });
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
    deleteCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeWishlistItem: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(item => item.id !== action.payload);
    },
  },
});

export const {
  addToCart,
  addToWishlist,
  updateQuantity,
  deleteCart,
  clearCart,
  removeWishlistItem,
} = cartSlice.actions;

export default cartSlice.reducer;
