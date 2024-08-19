import React, { useState, useRef } from "react";
import './Navbar.css';
import bg from "../Assets/123.png";
import img from '../Assets/1024.png';
import Validation from "./password";
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function Navbar5(){
  const [values, setValues] = useState({
    email: '',
    password: "",
    phone:""
  })
  const location = useLocation();
  const  emailFromLocation  = location.state.email
  console.log(emailFromLocation)
  const [inputValue, setInputValue] = useState(''); 
  const navigate = useNavigate()
  const [errors,setErrors] = useState({})
  const [error,setError] = useState()
  const inputFileRef = useRef(null);
    const handleInputs = (e) =>{
       setValues(prev =>({...prev, [e.target.name]:[e.target.value],email: emailFromLocation }))
       const newValue = e.target.value;
       setInputValue(newValue); }
  const handleSubmut = (e) =>{
    e.preventDefault();
    setErrors(Validation(values));
    if(errors.password === ""){
      axios.post("http://localhost:8081/TypePass",values)
      .then(res => {
        if(res.data === "Success"){
          navigate("/StartCard");
        } else {
          setError("tài khoàn và mật khẩu không khớp")
        }
      })
      .catch(err => console.log(err))
    }
    else{
      console.log(values)
     
    }
  } 
return (
  <div className={`Navbar5`}>
    <div  style={{ backgroundImage: `url(${bg})`,backgroundRepeat:"no-repeat" }}>
      <div style={{margin:"auto",width:"90px"}}>
          <img className="img2" src={img} alt="Background"></img>
      </div>
      <div style={{margin:"auto",width:"220px"}}>
      <p className="nav4-text">Hello, Romina!!</p>
      <p className="nav4-text2">Type your password</p>
      </div>
      <form className='Navbar2-bot' onSubmit={handleSubmut} action=''>
          <div style={{marginLeft:"10px"}} >
                {errors.password && <span className="">{errors.password} </span>}
                <input 
                  maxLength={8}
                  type="password"
                  onClick={() => { inputFileRef.current.focus(); }} 
                  ref={inputFileRef} 
                  name="password" 
                  className='input'
                  onChange={handleInputs}
                  placeholder='password'
                  />
                  <p  style={{color:"red"}}>{error}</p>
          </div>
          <button class="nutDangNhap" type="submit">
               <p>Đăng nhập</p>
              </button>
        </form>
        <div className="QuenMatKhau">
         <p onClick={()=>{navigate("/GuiMail", { state: { email: emailFromLocation } } )} }>Forgot your password?</p>
        </div>
  </div>
  </div>)
  }
export default Navbar5



