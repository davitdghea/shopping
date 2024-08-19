import React from 'react' 
import './Navbar.css'
import logo from '../Assets/ic_launcher.png'
import { VscArrowRight } from "react-icons/vsc";
import { Link } from 'react-router-dom';
const Navbar = () =>{
    return (
        <div className='Navbar'>   
           <div>
            <img src={logo} alt=""></img>
            <p className='H1'>Shoppe</p>
            <p className='Textone'>Beautiful eCommerce UI Kit<br /> for your online store</p>
            <div className='Navbar-bot'>
           <Link to="/signup"><button className='Button'> let's get started</button></Link>
                <div className='Navbar-bot-trong'>
                    <Link to="/LogIn" style={{textDecoration:"none",color:"black"}}>  
                       <p className='Text21'>I already have an account</p>
                    </Link>
                    <Link to="/LogIn"> 
                       <div className='Button2'>
                         <VscArrowRight />
                       </div>
                    </Link>
                    
                </div>
           </div>             
           </div>
           
        </div>   
    )
}
export default Navbar