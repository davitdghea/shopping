import React, { useState, useRef,useEffect } from "react";
import './Navbar.css';
import bg from "../Assets/123.png";
import img from '../Assets/1024.png';
import { Link,useLocation,useNavigate } from "react-router-dom"
function Navbar8() {
  const [xacnhan,  setXacnhan] = useState('');
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location.state.randomCode)
  const  randomCodeFromLocation  = location.state.randomCode
  const  emaileFromLocation  = location.state.email
  console.log(emaileFromLocation)
  useEffect(()=>{
   if(location){
    setXacnhan(randomCodeFromLocation)
   }
  },[])
console.log(xacnhan)
  const [inputValue, setInputValue] = useState(''); 
    const inputFileRef = useRef(null);
    const handleInputs = (e) =>{
      const newValue = e.target.value;
      setInputValue(newValue); }
  return (
    <div className="Navbar5">
      <div className="Navbar5-top" style={{ backgroundImage: `url(${bg})` }}>
        <img className="img2" src={img} alt="Background"></img>
        <p className="nav4-text">Password Recovery</p>
        <p className="nav4-text2">Enter 4-digits code we sent you<br /> on your phone number</p>
      </div>
      <div className='Navbar8-bot'>
       <p></p>
       <div className='Navbar8-bot-trong'>
       <form className='Navbar2-bot'>
          <div style={{marginLeft:"10px"}} >
                <input style={{
                  position: 'absolute',
                  left: '-9999px',}} 
                  type="password"
                  onClick={() => { inputFileRef.current.focus(); }} 
                  ref={inputFileRef} 
                  name="password" 
                  className='input'
                  onChange={handleInputs}
                  placeholder='password'
                  maxLength={4}/>
                  {console.log()}
                {[...Array(4)].map((_, index) => (
                <div
                onClick={() => { inputFileRef.current.click() }}
                    key={index}
                    style={{
                        borderRadius:"50px",
                        width: '30px',
                        height: '30px',
                        backgroundColor: index < inputValue.length ? 'blue' : 'white' ,
                        border: '1px solid black',
                        display: 'inline-block',
                        marginRight: '5px'
                    }} 
                />
            ))}   
          </div>
        </form>
       </div>
       <div  className="n7b">
       <button className="Text8-8 " onClick={()=>{inputValue == xacnhan ?  navigate("/NewPass", { state: { email: emaileFromLocation } }) : alert(inputValue)}}>Send Again</button>
       <p className="Text3-4">cancel</p>
       </div>
      </div>
    </div>
  )
}

export default Navbar8;