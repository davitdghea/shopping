import React, { useState } from 'react';
import './Navbar.css';
import bg from "../Assets/123.png";
import img from '../Assets/1024.png';
import axios from 'axios';
import {useLocation,useNavigate} from "react-router-dom"
import Validation from "./password";
import { Link } from 'react-router-dom';
function Navbar9() {
  const [errors,setErrors] = useState({})
  const location = useLocation();
  const navigate = useNavigate();
  const emailFromLocation = location.state.email
  const [checkpass,SetCheckpass] = useState("")
  const handleInputs1 = (e) =>{
    SetCheckpass(e.target.value)
 }   
  const [nhapbasss,setNhapbasss] = useState(
    {email : "",
    password : ""}
  )  
  const [message, setMessage] = useState('');
  const [message1, setMessage1] = useState(false);
  const handleInputs = (e) =>{
    setErrors(Validation(nhapbasss));
    setNhapbasss(prev =>({...prev, [e.target.name]:e.target.value, email: emailFromLocation }))
 }   
  const handleSubmit =  (e)=>{
    e.preventDefault()
   if(errors.password === "" && checkpass == nhapbasss.password){
    axios.post("http://localhost:8081/NewPass", nhapbasss)
    .then(res =>{
      if(res.data.result === "Success"){ 
        setMessage("Success") 
      }
      else{
        setMessage("password trùng password cũ")}
    })
    .catch(err => console.log(err))
   }
   else{setMessage("password không trùng khớp")}
  }
  return (
    <div className="Navbar5">
      <div className="Navbar5-top" style={{ backgroundImage: `url(${bg})` }}>
        <img className="img2" src={img} alt="Background"></img>
        <p className="nav4-text">Password Recovery</p>
        <p className="nav4-text2">Please, setup a new password for<br/> your account</p>
      </div>
      <div className='Navbar9-bot'>
        <form  onSubmit={handleSubmit}>
              <input  className='input9' onClick={()=>{setMessage1(false)}} maxLength={8} onChange={handleInputs} type='password' name='password' value={nhapbasss.password} placeholder='new password'></input>
              <input className='input9' maxLength={8} onChange={handleInputs1} type='password' value={checkpass} placeholder='Repeat password'></input>
        {message1 && <p style={{color:"red"}}>{message}</p>}
        <div className="n7b">
          { message === "Success" ? <Link to="/LogIn"><button className="Text3-3 " type="submit" >Next</button></Link>: <button className="Text3-3 " type="submit" onClick={()=>{setMessage1(true)}}>Submit</button> }
        <p className="Text3-4">cancel</p>
        </div>
        </form>
      </div>
    </div>
  )
}
export default Navbar9;