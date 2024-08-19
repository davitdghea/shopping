import React, { createContext, useState } from "react";
import Anh from "./data"
import { useDispatch } from 'react-redux'
import { increment1 } from '../gio/call'
export const ShopContext = createContext(null);

const getDefault = ()=>{
    let cart ={};
    for(let index = 0; index < Anh.length+1; index ++){
        cart[index] = 0;
    }
    return cart;
}
    const ShopConTextProvider = (props) =>{
    const dispat = useDispatch()
    const newArray =()=>{
        Anh.map((e) =>{if(cartItem1[e.id] > 0){
            dispat(increment1(e)) 
        }} )
    } 
    const  [cartItem,SetCartItem] = useState(getDefault())
    const [cartItem1,SetCartItem1] = useState(getDefault())
    const addToCart = (itemId) =>{
    SetCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}));
}
    
newArray();
const addToCart1 = (itemId) =>{
    SetCartItem1((prev)=>({...prev,[itemId]:prev[itemId]+1,}));
    console.log(cartItem1)
}
 const removeCart = (itemId) =>{
    SetCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}));
 }
 const removeCart1 = (itemId) =>{
    SetCartItem1((prev)=>({...prev,[itemId]:prev[itemId]-1}));
 }

 const contextValue = { Anh,cartItem1,cartItem,addToCart,removeCart,addToCart1,removeCart1 };
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopConTextProvider;