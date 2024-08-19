import { configureStore } from '@reduxjs/toolkit'
import Product from './call'
export const store = configureStore({
  reducer: {
    cart: Product,
  },
})