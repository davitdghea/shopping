import { createSlice } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    CartArr:[],
  },
  reducers: {
    increment: (state,action) => {
        const product = state.CartArr.findIndex((p)=>p.id === action.payload.id)
         if(product === -1){
            state.CartArr.push({...action.payload, quantity : 1})
         } else{
            state.CartArr[product].quantity += 1;
         }    
    },
    increment1: (state,action) => {
      const product = state.CartArr.findIndex((p)=>p.id === action.payload.id)
      if(product === -1){
        state.CartArr.push({...action.payload, quantity : 1})
     } else if(state.CartArr[product].quantity !== 1){
        state.CartArr[product].quantity -= 1;
     }  else{
        state.CartArr[product].quantity = 1;
     }
  },
    decrement: (state,action) => {
      const productremu = action.payload.id
      const newCart = state.CartArr.filter((iteam) => iteam.id !== productremu)
      return {...state,CartArr:newCart}
    },
  },
  
})
export const { increment, decrement,increment1,Deleteitem,Additem  } = counterSlice.actions
export default counterSlice.reducer