import { configureStore } from '@reduxjs/toolkit'
import Product from './calls'
export const store = configureStore({
  reducer: {
    cart: Product,
  },
})