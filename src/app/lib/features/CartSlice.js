"use client"

import { createSlice } from "@reduxjs/toolkit";

const items = localStorage.getItem("cartItems") !== null ?
JSON.parse(localStorage.getItem("cartItems")) : []

const initialState = {
  cart: items,
};

export const CartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
    
      if (existingItemIndex === -1) {
        state.cart.push(action.payload);
    
        // Update localStorage with updated cart items
        localStorage.setItem("cartItems", JSON.stringify(state.cart));
      }
    }, 
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
       // Update localStorage with updated cart items after removal
       localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  removeFromCart,
} = CartSlice.actions;

export default CartSlice.reducer;
