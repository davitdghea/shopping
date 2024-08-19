import React from "react";
import img2 from "../Assets/shopdemo/A1710791-E63D-4DA7-B3F0-73FB0A2E57C1.png"
import img9 from "../Assets/shopdemo/Big Sale Banner.png"
import { useEffect, useState } from "react";
import { Newitema4 } from "./anh";
import { Outlet, Link } from "react-router-dom";
import { AnhSale } from "./anh";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Hero.css';
import { GoArrowRight } from "react-icons/go";
import Navbar13 from "../Navbar/Navbar13"
import Iteam from "./iteam";
import img1 from "../Assets/shopdemo/hdhgcw.png"
function Sale() {
    var setting4 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2.9,
        slidesToScroll: 1,
    };
    const [second, setSeconds] = useState(1800);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => {
                if (prevSeconds === 0) {
                    clearInterval(intervalId);
                }
                return prevSeconds - 1;
            });
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);
    const formatTime = time => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return { minutes, seconds };
    };
    const { minutes, seconds } = formatTime(second);
    const [menu, setMenu] = useState("mens");
    return (
        <div className="hero">
            <div style={{paddingTop:"190px"}}>
            <div style={{ width: "90%", margin: "auto", border: "2px solid gray", borderRadiu: "10px", }}>
                <img style={{ width: "100%" }} src={img2}></img>
            </div>
            </div>
            <div>
                <div style={{ display: "flex", justifyContent: "space-between", width: "90%", margin: "auto", paddingTop: "15px" }}>
                    <h2>20% Discount</h2>
                    <img src={img1}></img>
                </div>
                <div className="Salehehe1">
                {AnhSale.map((item)=>{
                    return <div className="Salehehe">
                        <Iteam id={item.id} img={item.img} name={item.name} gia={item.gia} />
                        <p style={{textDecoration:"line-through",color:"#F1AEAE"}}>${item.giaCu}</p>
                        <span>{item.sale}%</span>
                    </div>
                })}
                </div>
            </div>
            <div className="bannersale">
                <img src={img9}></img>
            </div>
            <div className="MostPopular" style={{paddingBottom:"50px"}}>
                <div className="newitem">
                    <h2 style={{margin:" 0px 15px"}}>Most Popular</h2>
                    <div>
                        <Link to="/Most" style={{ textDecoration: "none", color: "black" }}><h3>See All <button><GoArrowRight /></button></h3></Link>
                    </div>
                </div>
                <div className="MostPopular1">
                    <Slider {...setting4}>
                        {Newitema4.map((item) => (
                            <div className="MostPopular12">
                                <img className="MostPopularimg" src={item.img} />
                                <div style={{ display: "flex", justifyContent: "space-around" }}>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <p>1780 </p> <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.84042 0.832031C7.83288 0.832031 7.82283 0.832031 7.8153 0.832031C6.81793 0.832031 5.93612 1.35961 5.42864 2.13841C4.92116 1.35961 4.03936 0.832031 3.04199 0.832031C3.03445 0.832031 3.0244 0.832031 3.01687 0.832031C1.46177 0.847105 0.203125 2.11078 0.203125 3.67089C0.203125 4.60043 0.610112 5.91937 1.40399 7.00467C2.91637 9.07227 5.42864 10.8811 5.42864 10.8811C5.42864 10.8811 7.94091 9.07227 9.45329 7.00467C10.2472 5.91937 10.6542 4.60043 10.6542 3.67089C10.6542 2.11078 9.39551 0.847105 7.84042 0.832031Z" fill="#0042E0" />
                                        </svg>
                                    </div>
                                    <p>Sale</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="MenuSale">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ marginTop: "50px" }}>
                        <h2>Flash Sale</h2>
                        <p>Choose Your Discount</p>
                    </div>
                    <div className="timesale" style={{ display: "flex", marginTop: "40px" }}>
                        <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9 0.666992H6.2V2.56699H11.9V0.666992ZM8.1 13.017H10V7.31699H8.1V13.017ZM15.7285 6.73749L17.0775 5.38849C16.669 4.90399 16.2225 4.44799 15.738 4.04899L14.389 5.39799C12.9165 4.21999 11.064 3.51699 9.05 3.51699C4.3285 3.51699 0.5 7.34549 0.5 12.067C0.5 16.7885 4.319 20.617 9.05 20.617C13.781 20.617 17.6 16.7885 17.6 12.067C17.6 10.053 16.897 8.20049 15.7285 6.73749ZM9.05 18.717C5.3735 18.717 2.4 15.7435 2.4 12.067C2.4 8.3905 5.3735 5.41699 9.05 5.41699C12.7265 5.41699 15.7 8.3905 15.7 12.067C15.7 15.7435 12.7265 18.717 9.05 18.717Z" fill="white" />
                        </svg>
                        <p style={{ marginLeft: "5px" }}>00</p>
                        <p>{minutes.toString().padStart(2, '0')}</p>
                        <p style={{marginRight:"25px"}}> {seconds.toString().padStart(2, '0')}</p>
                    </div>
                </div>
                <div>
                    <div className="menusale" style={{ width: "90%",maxWidth:"300px" ,marginTop: "40px" }}>
                        <Link to="/All" style={{ textDecoration: "none" }}><p onClick={() => { setMenu("alls") }}>All{menu === "alls" ? <hr /> : <></>}</p></Link>
                        <Link to="/10" style={{ textDecoration: "none" }}><p onClick={() => { setMenu("home") }}>10%{menu === "home" ? <hr /> : <></>}</p></Link>
                        <Link to='/sales' style={{ textDecoration: "none" }}><p onClick={() => { setMenu("mens") }}>20% {menu === "mens" ? <hr /> : <></>}</p></Link>
                        <Link to='/30' style={{ textDecoration: "none" }}><p onClick={() => { setMenu("womens") }}>30%{menu === "womens" ? <hr /> : <></>}</p></Link>
                        <Link to='/40' style={{ textDecoration: "none" }}><p onClick={() => { setMenu("kids") }}>40%{menu === "kids" ? <hr /> : <></>}</p></Link>
                        <Link to='/50' style={{ textDecoration: "none" }}><p onClick={() => { setMenu("cart") }}>50%{menu === "cart" ? <hr /> : <></>}</p></Link>
                    </div>
                </div>
            </div>
            <Navbar13/>
        </div>
    )
}
export default Sale;