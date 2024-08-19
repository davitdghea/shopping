import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom';
const Iteam = (props) =>{
    return (
        <div className='Item' onClick={props.onClick}  >
          <Link to={ `/product/${props.id}`}>
            <img src={props.img} alt="" onClick={()=>{window.scrollTo(0,0)}}/>
          </Link>  
          <div>{props.name}</div>
          <p>${props.gia.toFixed(2)}</p>
        </div>
    )
}
export default Iteam;