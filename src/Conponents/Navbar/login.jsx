import React from "react"
import img from '../Assets/Bubbles.png'
import './Navbar.css';
import { useState } from "react";
import Validation from "./SignupValidation";
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const Navbar3 = () =>{
  const [values, setValues] = useState({
    email: '',
    password: "",
    phone:""
  })
  const navigate = useNavigate()
  const [errors,setErrors] = useState({})
  const handleInputs = (e) =>{
     setValues(prev =>({...prev, [e.target.name]:[e.target.value]}))}
  const handleSubmut = (e) =>{
    e.preventDefault();
    setErrors(Validation(values));
    if(  errors.email === ""){
      axios.post("http://localhost:8081/LogIn",values)
      .then(res => {
        if(res.data === "Success"){
        navigate("/TypePass", { state: { email: values.email } });
        } else {
          alert("no record existed")
        }
      })
      .catch(err => console.log(err))
    }  
  }
    return(
        <div className="Navbar3" style={{backgroundImage:`url(${img})`}}>
            <form onSubmit={handleSubmut} action=''>
            <div className="Navbar3-top">
              <p className="Text3">Login</p>
              <p className="Text3-1">Good to see you back!</p>
              <input  name='email' type="email" onChange={handleInputs} className='input' placeholder='email'/>
                {errors.email && <span className="">{errors.email} </span>}
              <button className="Text3-3" type="submit">NEXT</button>
              <p className="Text3-4">cancel</p>
            </div>
            </form>  
            
        </div>
        
    )
}
export default Navbar3;

                