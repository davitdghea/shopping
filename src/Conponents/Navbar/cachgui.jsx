import React from 'react';
import './Navbar.css';
import bg from "../Assets/123.png";
import img from '../Assets/1024.png';
import { Link} from 'react-router-dom';
import { useLocation,useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
function Navbar7() {
  const [randomCode, setRandomCode] = useState('')
  const [message, setMessage] = useState('');
  const [pemail, setEmail] = useState('');
const location = useLocation()
useEffect(()=>{
 if(location){
  setEmail(location.state.email)
 }
},location)
console.log(location.state.email)
const navigate = useNavigate()
const handleSubmut = (e) => {
  e.preventDefault();
  axios.post("http://localhost:8081/GuiMail", { email: pemail })
    .then(res => {
      if (res.data.success) {
        setRandomCode(res.data.randomCode);
        console.log(randomCode);
        navigate('/CheckOTP', { state: { randomCode : res.data.randomCode, email : location.state.email  } })
      } else {
        setMessage("Failed to send password reset link.");
      }
    })
    .catch(err => {
      console.error("Error:", err);
      setMessage("An error occurred while sending password reset link.");
    });
}
  return (
    <div className="Navbar5">
      <div className="Navbar5-top" style={{ backgroundImage: `url(${bg})` }}>
        <img className="img2" src={img} alt="Background"></img>
        <p className="nav4-text">Password Recovery</p>
        <p className="nav4-text2">How you would like to restore <br /> your password?</p>
      </div>
      <div className='Navbar7bot'>
        <div className="radio-n7 n213"><p> </p><p>SMS</p> <input className="radio-n7t" type="radio" name="o"/></div>
        <div className="radio-n7 n214"><p> </p><p>Email</p> <input className="radio-n7t" type="radio" name="o"/></div>
        <form onSubmit={handleSubmut}>
        <div className="n7b">
        <button type="submit">NEXT</button>
        <Link to ='StartCard'><p className="Text3-4">cancel</p></Link>
        </div>
      </form>
      {message && <p>{message}</p>}
      </div>
    </div>
  )
}

export default Navbar7;