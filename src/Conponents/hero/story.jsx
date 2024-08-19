import React from "react";
import img from "../Assets/shopdemo/bcjhbas.png"
import img1 from "../Assets/shopdemo/jhfhdg.png"
import img2 from "../Assets/shopdemo/nvhveh.png"
import img3 from "../Assets/shopdemo/Big Sale Banner.png"
import img4 from "../Assets/shopdemo/02643ACC-CFE9-415B-B36C-04316EC68CF0.png"
import img5 from "../Assets/shopdemo/576DF158-9ECF-4384-884B-242FE88B109D.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Hero.css"
import img6 from "../Assets/shopdemo/C176C1EA-7057-4C4E-8493-40509CDF79B4.png"
export default function Live() {
    var setting1 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="hero">
          
            <Slider {...setting1}>
                <div className="banner1">
                    <img style={{ margin: "auto" }} src={img}></img>
                    <div className="shopbanner1">
                        <img style={{borderRadius:"5px",}} src={img6}></img>
                        <p style={{borderRadius:"5px",marginTop:"8px",backgroundColor:"#004CFF",width: "133px",height: "40px",textAlign:"center",lineHeight:"40px",color:"white"}}>Shop</p>
                    </div>
                    <div className="nut1">
                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.5 25C19.8513 25 25 19.8513 25 13.5C25 7.14873 19.8513 2 13.5 2C7.14873 2 2 7.14873 2 13.5C2 19.8513 7.14873 25 13.5 25Z" fill="white" stroke="#004CFF" stroke-width="3" />
                        </svg>
                    </div>
                </div>
                <div>
                    <img src={img1} style={{ margin: "auto" }}></img>
                    <div className="bannerShop">
                        <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
                        <p style={{width: "120px",height: "40px",backgroundColor:"#004CFF",textAlign:"center",lineHeight:"40px",borderRadius:"5px",color:"white"}}>Shop</p>
                    </div>
                </div>
                <div className="banner4">
                    <img style={{ margin: "auto",height:"433px" }} src={img2}></img>
                    <img style={{ margin: "auto", }} src={img3}></img>
                    <div className="bannerShop1">
                        <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
                        <p style={{width: "120px",height: "40px",backgroundColor:"#004CFF",textAlign:"center",lineHeight:"40px",borderRadius:"5px",color:"white"}}>Shop</p>
                    </div>
                </div>
                <div className="bannecuoi">
                    <img className="y1r" src={img4}></img>
                    <div className="storyShop">
                        <img className="yu2" src={img5}></img>
                        <div>
                            <p style={{marginTop:"5px"}}>Lorem ipsum dolor sit amet consectetur.</p>
                            <p style={{marginTop:"37px",width: "175px",height: "40px",backgroundColor:"#004CFF",textAlign:"center",lineHeight:"40px",borderRadius:"5px",color:"white"}}>Shop</p>
                        </div>
                    </div>
                </div>
            </Slider>
            <div style={{ padding: "35px" }}>
                <h1>e</h1>
            </div>
            </div>
    
    )

}