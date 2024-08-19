import React from 'react'; 
import { useState,useEffect } from "react";
import './Navbar.css';
import logo from '../Assets/q.png';
import img from '../Assets/Upload Photo (1).png';
import { IoIosEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import anh from '../Assets/asss.png'
import {  SiGoogleanalytics } from "react-icons/si";
import { IoPhoneLandscape } from "react-icons/io5";
import { IoIosWifi } from "react-icons/io";
import { Link } from 'react-router-dom';
import Validation from "./LoginValidation";
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const Navbar2 = () => {
const [values, setValues] = useState({
  email: '',
  password: "",
  phone:""
})
const [errors,setErrors] = useState({})
const handleInputs = (e) =>{
   setValues(prev =>({...prev, [e.target.name]:[e.target.value]}))}

const navigate = useNavigate()

const handleSubmut = (e) =>{
  e.preventDefault();
  setErrors(Validation(values));
  if(  errors.email === ""  && errors.password === "" && errors.phone === ""){
    axios.post("http://localhost:8081/signup",values)
    .then(res => {
      navigate('/LogIn')
    })
    .catch(err => console.log(err))
  }
}
const [passwordVisible,SetPasswordVisible]=useState(false)
function togglePasswordVisibility(){
  SetPasswordVisible(!passwordVisible)
}
    return (
        <div className='Navbar2'>
            <div className='Navbar2-top' style={{backgroundImage: `url(${logo})`,backgroundRepeat:"no-repeat"}}>
                 <p className='Text2'>Create Account</p>
                 <img className='img1' style={{bottom:"180px"}} src={img} alt=''></img>
            </div>
            <form className='Navbar2-bot' onSubmit={handleSubmut} action=''>
                <input  name='email' type="email" onChange={handleInputs} className='input' placeholder='email'/>
                {errors.email && <span className="">{errors.email} </span>}
                <div className='Navbar2-bot-trong1'>
                <input name="password" className='input' onChange={handleInputs} placeholder='password' type={passwordVisible ? 'text' : "password"}/>
                {errors.password && <span className="">{errors.password} </span>}
                <i className='eye eyeoff' onClick={togglePasswordVisibility}>
                    {passwordVisible ? <FaEye /> : <IoIosEyeOff />}
                </i>
                </div>
                <div className='Navbar2-bot-trong1'>
                <i className='select'><select style={{width:"40px"}}><option ><img style={{width:"10px"}}  src={anh} alt=""></img></option></select>|</i>
                <input onChange={handleInputs} name="phone" placeholder="your numer" className='input input3'></input>
                {errors.phone && <span className="">{errors.phone} </span>}
                </div>
                <div style={{marginLeft:"15px"}}>
                <button type="submit"  className='button2' >done</button>
                <Link to={"/Navbar"}><p>cancel</p></Link>
                </div>
            </form>

        </div>
    );
   
}
export default  Navbar2;