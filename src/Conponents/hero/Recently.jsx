
import { Calendar } from "react-date-range";
import { format } from "date-fns"
import { useState, useEffect } from "react";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 
import './Hero.css'
import Item from "./iteam"
import React, { useContext } from "react";
import { ShopContext } from "./ShopContext";
import { useLocation } from "react-router-dom";
function Recently( props ) {
    const location = useLocation()
    const mang = location.state?.email  
    const timeNow = new Date();
    const dateOnly = new Date(timeNow.getFullYear(), timeNow.getMonth(), timeNow.getDate());
    const [hienday, setHienday] = useState("yday")
    const [day, setDay] = useState("day")
    const [day1, setDay1] = useState("")
    const [time,setTime] = useState("")
    const [timestamp,setTimestamp] = useState(dateOnly.getTime())
    const handleSeleact = (date) => {
        setTime(format(date, "MM,dd"))
        setTimestamp(date.getTime())
    }
    const { Anh } = useContext(ShopContext)
    const newArray = Array.isArray(mang) ? mang.filter(item => item.time === timestamp) : [];
    useEffect(()=>{
        if(props.category === "Recently"){
            return setDay1("1")
      }
      else if(props.category === "New"){
          return setDay1("2")
      }
      else if(props.category === "Most"){
          return  setDay1("3")
      }
      else if(props.category === "Categories"){
          return setDay1("4")
      }
    },[])
    console.log(props)
    const handClick = ()=>{
        setDay("day")
        setTimestamp(dateOnly.getTime())

    }
    return (
        <div className="hero">
            <div className={`chuyenlist ${day1 === "1" ? "hien" : ""}`}>
            <h2>Recently viewed</h2>
            <div className={`chuyenDay ${hienday === "anday" ? "chuyen" : ""}`} style={{ display: "flex", justifyContent: "space-between", margin: "10px 0px", }}>
                <div onClick={handClick} className={ `${day === "day" ? "anhienSvg" : ""}`} style={{ background: "#E5EBFC", borderRadius: "10px", width: "146px", height: "24px", marginLeft: "10px" }}>
                    <p style={{ float: "left", marginLeft: "50px", lineHeight: "24px" }}>Today</p>
                    <svg style={{ float: "right" }} width="22" height="22" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#004CFF" stroke="white" stroke-width="2" />
                        <path d="M17.024 10.6089L12.2417 15.3911L10.068 13.2174" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div onClick={() => { setDay("Yesterday") }}>
                    <div onClick={()=>{setHienday("anday")}} className={`${day === "Yesterday" ? "anhienSvg" : ""}`} style={{ background: "#E5EBFC", borderRadius: "10px", width: "146px", height: "24px" }}>
                        <p style={{ float: "left", marginLeft: "50px", lineHeight: "24px" }}>{hienday === "day" ? `${time}` : "Yesterday"}</p>
                        <svg style={{ float: "right" }} width="22" height="22" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#004CFF" stroke="white" stroke-width="2" />
                            <path d="M17.024 10.6089L12.2417 15.3911L10.068 13.2174" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_0_7813)">
                        <path d="M29.5 15C29.5 23.0081 23.0081 29.5 15 29.5C6.99187 29.5 0.5 23.0081 0.5 15C0.5 6.99187 6.99187 0.5 15 0.5C23.0081 0.5 29.5 6.99187 29.5 15Z" fill="#004BFE" stroke="#004BFE" />
                        <path d="M14.8649 17.2391L20.5366 11.5629C20.9564 11.1431 21.6352 11.1431 22.0506 11.5629C22.4659 11.9827 22.4659 12.6615 22.0506 13.0813L15.6241 19.5123C15.2177 19.9187 14.5656 19.9276 14.1458 19.5435L7.67468 13.0858C7.46478 12.8759 7.36206 12.599 7.36206 12.3266C7.36206 12.0542 7.46478 11.7773 7.67468 11.5674C8.09448 11.1476 8.7733 11.1476 9.18863 11.5674L14.8649 17.2391Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_0_7813">
                            <rect width="30" height="30" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div className={`DateTime ${hienday === "anday" ? "anday" : ""}`}  onClick={()=>{setHienday("day")}}>
                <Calendar date={new Date()} onChange={handleSeleact}/>
                <div>
                <svg onClick={()=>{setHienday("day")}} width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_0_7543)">
                        <path d="M20.9998 3.00049C12.7155 3.00049 5.99976 9.71622 5.99976 18.0005C5.99976 26.2848 12.7155 33.0005 20.9998 33.0005C29.284 33.0005 35.9998 26.2848 35.9998 18.0005C35.9998 9.71622 29.284 3.00049 20.9998 3.00049Z" fill="white" />
                    </g>
                    <defs>
                        <filter id="filter0_d_0_7543" x="-0.000244141" y="0.000488281" width="42" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="3" />
                            <feGaussianBlur stdDeviation="3" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.160784 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_7543" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_7543" result="shape" />
                        </filter>
                    </defs>
                </svg>
                </div>
                <svg onClick={()=>{setHienday("day")}} width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2_6503)">
                        <path d="M8.28396 2.85739L2.01696 9.12939C1.90738 9.23971 1.77705 9.32727 1.63349 9.38703C1.48992 9.44678 1.33596 9.47754 1.18046 9.47754C1.02496 9.47754 0.870992 9.44678 0.727428 9.38703C0.583865 9.32727 0.453541 9.23971 0.343958 9.12939C0.123255 8.90591 -0.000503464 8.60447 -0.000503436 8.29039C-0.000503409 7.9763 0.123255 7.67486 0.343958 7.45139L7.44396 0.345387C7.65934 0.130516 7.94928 0.00696775 8.25344 0.000448455C8.5576 -0.00607084 8.85257 0.104942 9.07696 0.310387L16.227 7.44539C16.438 7.66943 16.5536 7.96679 16.5493 8.27454C16.5449 8.5823 16.421 8.8763 16.2038 9.09432C15.9866 9.31235 15.693 9.43729 15.3853 9.44272C15.0775 9.44814 14.7798 9.33362 14.555 9.12339L8.28396 2.85739Z" fill="#004BFE" />
                    </g>
                    <defs>
                        <clipPath id="clip0_2_6503">
                            <rect width="16.574" height="9.476" fill="white" transform="translate(16.574 9.47607) rotate(-180)" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            </div>
            <div>
            <div className={`chuyenlist ${day1 === "2" ? "hien" : ""}`}>
            <h2>New Items</h2>
            </div>
            <div className={`chuyenlist ${day1 === "3" ? "hien" : ""}`}>
            <h2>Most Popular</h2>
            </div>
            <div className={`chuyenlist ${day1 === "4" ? "hien" : ""}`}>
            <h2>Categories</h2>
            </div>
            <div className={`chuyenlist ${day1 === "5" ? "hien" : ""}`}>
            <h2>Top Products</h2>
            </div>
                <div className="JustForYouTextItem">
                    {day1 === "1" ?
                newArray.map((item) =>(
                    <Item id={item.id} img={item.img} gia={item.gia} name={item.name}/>
              )
              ):
              Anh.map((item) =>(
                <Item id={item.id} img={item.img} gia={item.gia} name={item.name}/>
          )
          )
                }
                    
                </div>
            </div>
        </div>
    )
}
export default Recently;
