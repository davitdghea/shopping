import React from "react";
import './Hero.css';
import { useEffect, useState } from "react";
import { Outlet, Link, useLocation, json, useNavigate } from "react-router-dom";
import Dau from '../thanhphanhero/dau';
import Than from '../thanhphanhero/than';
import img55 from '../Assets/clock.png'
import { anhJust, anhclo } from './anh'
import Item from './iteam'
import { AnhSale } from './anh'
import Iteam from "./iteam";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Hero() {
    var setting1 = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 5,
        slidesToScroll: 5,
    };
    const navigate = useNavigate()
    const store = JSON.parse(localStorage.getItem("item"))
    const location = useLocation()
    const useproduc = location.state?.email
    const [wishs,setWishs] = useState(store ?? [])
    const handclickWishlis = () => {
        if(location.state){
            const newWish = [useproduc, ...wishs.filter(email => email.id !== useproduc.id)];
            setWishs(newWish);
           localStorage.setItem("item",JSON.stringify(newWish))
        }
       
    }
    useEffect(()=>{
        handclickWishlis()
    },[useproduc])
    const useWindowWide = (size) => {
        const [width, setWidth] = useState(0)
        useEffect(() => {
            function handleResize() {
                setWidth(window.innerWidth)
            }
            window.addEventListener("resize", handleResize)
            handleResize()
            return () => {
                window.removeEventListener("resize", handleResize)
            }
        }, [setWidth])
        return width > size
    }
    let lele
    const Greeting = () => {
        const wide = useWindowWide(600)
        return lele = wide ? "h1" : "h2"
    }
    Greeting()
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
    const [an, setAn] = useState("")
    return (
        <div className="hero">
            
            <div className={lele}><Dau /></div>
            <div className="rtop-nb13">
                <h1 className="rtop-nb13h1">Hello, Romina!</h1>
                <div className={`rtop-nb13d ${an === "" ? "hien" : ""}`}>
                    <h2>Announcement</h2>
                    <div className="diplaye">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Maecenas hendrerit luctus libero ac vulputate.</p>
                        <svg onClick={() => { setAn("1") }} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="#004CFF" />
                            <path d="M16.6715 9.29492L15.4918 10.4987L19.2475 14.146H8.08887V15.8312H19.2475L15.4918 19.4785L16.6715 20.6822L22.5457 14.9886L16.6715 9.29492Z" fill="white" />
                        </svg>
                    </div>
                </div>
                <div className={`rtop-nb13d2 ${an === "1" ? "hien" : ""}`}>
                    <div style={{ marginRight: "5px", borderRadius: "50% ", width: "60px", height: "60px", border: "1px solid #004CFF", backgroundColor: "white", position: "relative" }}>
                        <div style={{ position: "absolute", top: "18px", right: "16px" }}>
                            <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.4121 22.9189C5.95978 18.5263 2.5758 14.5301 1.18798 11.1856C-2.52992 2.22264 8.08952 -2.0637 12.4121 3.22731C16.7347 -2.0637 27.3541 2.22264 23.6362 11.1856C22.2484 14.5301 18.8644 18.5263 12.4121 22.9189Z" fill="#004CFF" />
                            </svg>
                        </div>
                        <div style={{ position: "absolute", right: "0px" }}>
                            <svg width="22" height="22" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#004CFF" stroke="white" stroke-width="2" />
                                <path d="M17.0238 10.6089L12.2416 15.3911L10.0679 13.2174" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <h3>You just got a reward</h3>
                        <p style={{ fontSize: "11px", paddingBottom: "10px" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,<br /> sed diam nonumy eirmod tempor invidunt</p>
                    </div>
                </div>
            <h2 onClick={()=>{navigate("/recently", {state:{ email: wishs }})}} >Recently viewed</h2>
                <div className="giuadau-nb131">
                {
                    wishs.length < 5 ?
                <div style={{display:"flex"}}>{wishs.map((e)=>(
                     <div style={{marginLeft:"15px"}}>
                       <img src={e.img}/>
                     </div>     
               ))}   </div>
                        :<Slider {...setting1} >
                        {wishs.map((e)=>(
                             <div>
                               <img src={e.img}/>
                             </div>     
                        )  
                         )}
                         </Slider>
                    }
                
                </div>
                
                <Than />
                <div className="FlashSaleItem">
                    <div className="FlashSale">
                        <div className="newitem">
                            <Link to='/sales' style={{ textDecoration: "none", color: "black" }}>
                                <h2>Flash Sale</h2>
                            </Link>
                            <div className="Time">
                                <img src={img55}></img>
                                <p style={{ marginLeft: "5px" }}>00</p>
                                <p>{minutes.toString().padStart(2, '0')}</p>
                                <p> {seconds.toString().padStart(2, '0')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="FlashSale-Item1">
                        {AnhSale.map((item) => (
                           <div className="Salehehe" >
                           <Iteam id={item.id} img={item.img} name={item.name} gia={item.gia} />
                           <p  style={{textDecoration:"line-through",color:"#F1AEAE"}}>${item.giaCu.toFixed(2)}</p>
                           <span>{item.sale}%</span>
                       </div>
                        )
                        )}
                    </div>
                </div>
                <div>
                    <div className="TopProducts">
                        <div className="TopProductsText">
                            <Link to='/Products' style={{ textDecoration: "none", color: "black" }}>
                                <h2>Top Products</h2>
                            </Link>
                        </div>
                        <div className="TopProductsImage">
                            {anhclo.map((item) => (
                                <Link to='Cloth' style={{ textDecoration: "none" }}>
                                    <img src={item.img} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="JustForYou">
                <div className="JustForYouText">
                    <h2>Just For You</h2>
                </div>
                <div className="JustForYouTextItem" >
                    {anhJust.map((item) => {
                        return <div className="JustForYou1">
                            <Item id={item.id} img={item.img} gia={item.gia} name={item.name} />
                        </div>
                    }
                    )}
                </div>
            </div>
        </div>
    )
}