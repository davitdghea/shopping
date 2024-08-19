import React, { useContext } from "react";
import './Navbar.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
const Navbar13 = ( ) => {
    const [menu, setMenu] = useState("home") 
    const [tBao, setTbao] = useState("home")
    const [tBao1, setTbao1] = useState("home")
    const Carter = useSelector(state => state.cart.CartArr)
    
    useEffect(() => {
        if (Carter.length !== 0) {
            setTbao("1");
        }
        else{
            setTbao("")
        }
    }, [Carter]);
    
    return (
        <div className={`Navbar13 ${tBao1 === "1" ? "none":""}`}>
            <div>
                 <div className="Menu-nav13">
                    <Link to="/"><p onClick={() => { setMenu("home") }} ><svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.01" width="24" height="24" fill="white" />
                        <g clip-path="url(#clip0_2_3761)">
                            <g clip-path="url(#clip1_2_3761)">
                                <path d="M2.20901 20.7021V9.23072L12.0581 2.30362L21.9073 9.23072V20.7021C21.9073 21.2616 21.3726 21.8823 20.4963 21.8823H3.61993C2.74365 21.8823 2.20901 21.2616 2.20901 20.7021Z" stroke={`${menu === "home" ? "#000000" : "#004CFF"}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.85703 20.925V10.917H15.2588V20.925" stroke={`${menu === "home" ? "#000000" : "#004CFF"}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_2_3761">
                                <rect width="21.6982" height="21.8012" fill="white" transform="translate(1.20901 1.08105)" />
                            </clipPath>
                            <clipPath id="clip1_2_3761">
                                <rect width="21.6982" height="21.8012" fill="white" transform="translate(1.20901 1.08105)" />
                            </clipPath>
                        </defs>
                    </svg>
                        {menu === "home" ? <hr style={{color:"#000000"}} /> : <></>}</p></Link>
                    <Link to='/Wishlist'><p onClick={() => { setMenu("mens") }}>
                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.0112 18.6365C15.8566 15.3147 18.3978 12.2928 19.44 9.76366C21.3969 5.01291 18.0649 2 14.7786 2C13.3764 2 11.982 2.54898 11.0112 3.74559C10.0402 2.54873 8.6463 2 7.24381 2C3.95779 2 0.62561 5.01333 2.58241 9.76366C3.62459 12.2928 6.1658 15.3147 11.0112 18.6365ZM11.0112 20.6365C10.6161 20.6365 10.2211 20.5197 9.88032 20.2861C5.1406 17.0367 2.06308 13.7529 0.733249 10.5256C-0.372551 7.84119 -0.223561 5.23099 1.15268 3.17563C2.46428 1.21683 4.79826 0 7.24381 0C8.61396 0 9.91588 0.385814 11.0112 1.09276C12.1065 0.385817 13.4084 0 14.7786 0C17.2243 0 19.5583 1.21678 20.8699 3.17549C22.2461 5.23077 22.395 7.84102 21.2892 10.5254C19.9593 13.7529 16.8818 17.0367 12.1421 20.2861C11.8013 20.5197 11.4062 20.6365 11.0112 20.6365Z" fill={`${menu === "mens" ? "#000000" : "#004CFF"}`} />
                    </svg>
                        {menu === "mens" ? <hr style={{color:"#000000"}} /> : <></>}</p></Link>
                    <Link to='/chat'><p onClick={() => { setMenu("womens") }}>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 1H4C2.34315 1 1 2.34315 1 4V18C1 19.6569 2.34315 21 4 21H18C19.6569 21 21 19.6569 21 18V4C21 2.34315 19.6569 1 18 1Z" stroke={`${menu === "womens" ? "#000000" : "#004CFF"}`} stroke-width="2" />
                        <path d="M5.23999 11H16.778" stroke={`${menu === "womens" ? "#000000" : "#004CFF"}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5.23999 6.18945H12.891" stroke={`${menu === "womens" ? "#000000" : "#004CFF"}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5.23999 15.8115H12.891" stroke={`${menu === "womens" ? "#000000" : "#004CFF"}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                        {menu === "womens" ? <hr style={{color:"#000000"}} /> : <></>}</p></Link>
                    <Link to='/Cart'><p onClick={() => { setMenu("kids") }} style={{position:"relative"}}>
                    <p className={`${tBao === "1" ? "coStyle" : ""}`}></p>
                        <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.01" width="24" height="24" fill="white" />
                        <g clip-path="url(#clip0_2_5464)">
                            <g clip-path="url(#clip1_2_5464)">
                                <path d="M1.97595 20.7999V5.76396L5.13424 2H18.9695L22.1278 5.76395V20.7999C22.1278 21.3601 21.5821 21.9999 20.6665 21.9999H3.43727C2.5217 21.9999 1.97595 21.3601 1.97595 20.7999Z" stroke={`${menu === "kids" ? "#000000" : "#004CFF"}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M2.57092 5.40039H21.6365" stroke={`${menu === "kids" ? "#000000" : "#004CFF"}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M16.3664 9.7998C16.3664 12.2299 14.4346 14.1998 12.0517 14.1998C9.66871 14.1998 7.73694 12.2299 7.73694 9.7998" stroke={`${menu === "kids" ? "#000000" : "#004CFF"}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_2_5464">
                                <rect width="22.1519" height="21.9999" fill="white" transform="translate(0.975952 1)" />
                            </clipPath>
                            <clipPath id="clip1_2_5464">
                                <rect width="22.1519" height="21.9999" fill="white" transform="translate(0.975952 1)" />
                            </clipPath>
                        </defs>
                    </svg>
                        {menu === "kids" ? <hr style={{color:"#000000"}} /> : <></>}</p>
                    </Link>
                    <Link to='/kids' ><p onClick={() => { setMenu("cart") }}>
                        <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.3457 4.67287C14.3457 6.70133 12.7013 8.34573 10.6729 8.34573C8.6444 8.34573 7 6.70133 7 4.67287C7 2.6444 8.6444 1 10.6729 1C12.7013 1 14.3457 2.6444 14.3457 4.67287Z" stroke={`${menu === "cart" ? "#000000" : "#004CFF"}`} stroke-width="2" />
                            <g clip-path="url(#clip0_2_5491)">
                                <path d="M20.921 23.0643V18.6733C20.879 17.3937 20.331 16.183 19.3974 15.307C18.4637 14.4309 17.2207 13.961 15.941 14.0003H5.98C4.7003 13.961 3.45725 14.4309 2.52362 15.307C1.58999 16.183 1.04204 17.3937 1 18.6733V23.0643" stroke={`${menu === "cart" ? "#000000" : "#004CFF"}`} stroke-width="2" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2_5491">
                                    <rect width="21.921" height="10.064" fill="white" transform="translate(0 13)" />
                                </clipPath>
                            </defs>
                        </svg>
                        {menu === "cart" ? <hr style={{color:"#000000"}} /> : <></>}</p></Link>
                </div>
            </div>

           
        </div>
    );
}

export default Navbar13;
/** */