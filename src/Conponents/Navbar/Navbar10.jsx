import React, { useState, useRef } from "react";
import './Navbar.css';
import bg from "../Assets/123.png";
import img from '../Assets/1024.png';

function Navbar10() {
  
    const [inputValues, setInputValues] = useState(Array(4).fill(''));
    const [inputBackgrounds, setInputBackgrounds] = useState(Array(4).fill(''));
    const inputRefs = useRef(Array(4).fill(null).map(() => React.createRef()));
    const handleInputChange = (index, value) => {
      if (value.length <= 1) {
        const updatedInputValues = [...inputValues];
        updatedInputValues[index] = value;
        setInputValues(updatedInputValues);
        const updatedInputBackgrounds = [...inputBackgrounds];
        updatedInputBackgrounds[index] = value.length === 1 ? 'rgb(37, 37, 234)' : '';
        setInputBackgrounds(updatedInputBackgrounds);
        if (index < inputRefs.current.length - 1) {
          setTimeout(() => {
            inputRefs.current[index + 1].current.focus();
          }, 3);
        }
      }
    };


  return (
    <>
    <div className="Navbar5">
      <div className="Navbar5-top" style={{ backgroundImage: `url(${bg})` }}>
        <img className="img2" src={img} alt="Background"></img>
        <p className="nav4-text">Password Recovery</p>
        <p className="nav4-text2">Enter 4-digits code we sent you<br /> on your phone number</p>
      </div>
      <div className='Navbar8-bot'>
       <p>+98*******00</p>
       <div className='Navbar8-bot-trong'>
       {Array(4).fill(null).map((_, index) => (
          <input
            key={index}
            className='input-bot'
            maxLength={1}
            value={inputValues[index]}
            style={{ backgroundColor: inputBackgrounds[index] }}
            onChange={(e) => handleInputChange(index, e.target.value)}
            ref={inputRefs.current[index]}
          />
        ))}
       </div>
       <div  className="n7b">
       <button className="Text8-8 ">Send Again</button>
        <p className="Text3-4">cancel</p>
       </div>
       <div className="Navbar10-top">
            <img className="img-nav10"></img>
            <div className="Navbar10-bot">
                <p className="text-nav10">You reached out maximum <br />amount of attempts.<br /> Please, try later.</p>
                <button className="butnav10">Okay</button>
            </div>
        </div>
      </div>
    </div>   
    </>
  )
}
export default Navbar10;