import React,{useContext} from "react";
import { ShopContext } from "./ShopContext";
import {useParams} from "react-router-dom"
import ProducDisplay from './ProducDisplay'
function Product(){
    const { Anh } = useContext(ShopContext)
    const { productId } = useParams();
    const product = Anh.find((e) => e.id === Number(productId))
    return(
        <div>
            <ProducDisplay product={product}/>
        </div>
    )
}

export default Product;