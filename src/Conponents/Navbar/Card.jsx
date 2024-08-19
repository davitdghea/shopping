import React from "react";
import './Navbar.css';
import {Link} from "react-router-dom"
import img1 from "../Assets/Image@2x.png"
import img2 from "../Assets/Placeholder_01@2x.png"
import Slider from "react-slick";
function Navbar5() {
  var setting1 = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
};
  return (
    <div className={`nav11 hen`}>
      <Slider {...setting1}>
            <div className='nav11-connet'>
              <div>
              <img className='imgnav11' src={img1}></img>
              </div>
              <div className='nav11-bot'>  
                <p className=' text-nav11-1'>Hello</p>
                <p className=' text-nav11-2'>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.<br /> Sed non consectetur turpis.<br /> Morbi eu eleifend lacus.</p>
            </div>
            </div>
            <div className='nav11-connet'>
            <div>
              <img className='imgnav11' src={img2}></img>
            </div>
            <div className='nav11-bot'>  
                <p className=' text-nav11-1'>Ready?</p>
                <p className=' text-nav11-2'>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
              <Link to="/"><button className=' buttonnav12'>Let's Start</button></Link>  
            </div>
            </div>  
          </Slider>  
        </div>
  )
  
}

export default Navbar5;