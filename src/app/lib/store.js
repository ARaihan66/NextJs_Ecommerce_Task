import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './features/CartSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
        cart : CartSlice
    },
  })
}