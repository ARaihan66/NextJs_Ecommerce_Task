"use client"

import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  cart: [],
};

export const CartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        state.cart = state.cart.map((item) => {
          return item.id === action.payload.id
            ? { ...item }
            : item;
        });
      } else {
        state.cart.push(action.payload);
      }

      // Update localStorage with updated cart items
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
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
