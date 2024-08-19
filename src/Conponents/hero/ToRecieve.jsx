import React, { Component } from "react"
import "./Hero.css";
import img13 from "../Assets/shopdemo/333CBBCA-9390-4C5A-A60A-21E776BF77D2.png";
import img14 from "../Assets/gdfdd.jpg";
import img15 from "../Assets/shopdemo/ssadddaa.png"
import img16 from "../Assets/shopdemo/star.png"
import { useState } from "react";
import { Link } from "react-router-dom";
import { sanpham1,sanpham2,sanpham3,sanpham4 } from "./thu";
import Navbar13 from "../Navbar/Navbar13";
function ToRecieve() {
    const [rating, setRating] = useState(null)
    const [rateColor, setRateColor] = useState(null)
    const [review, setReview] = useState("")
    return (
        <div className="hero">
            <div style={{ display: "flex", justifyContent: "space-between", margin: "10px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <img className="Avatar" src={img14}></img>
                    <div style={{ marginLeft: "15px" }}>
                        <h2>To Recieve</h2>
                        <p>My Orders</p>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around", width: "140px" }}>
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 35C27.165 35 35 27.165 35 17.5C35 7.83502 27.165 0 17.5 0C7.83502 0 0 7.83502 0 17.5C0 27.165 7.83502 35 17.5 35Z" fill="#E5EBFC" />
                        <mask id="path-2-inside-1_0_5399" fill="white">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9995 11H13.0005C11.3436 11 10.0005 12.3431 10.0005 14V16.7476C9.7263 16.53 9.37901 16.3999 9.00125 16.3999H9.00049V14C9.00049 11.7909 10.7913 10 13.0005 10H21.9995C24.2086 10 25.9995 11.7909 25.9995 14V16.3999C25.6214 16.4 25.2738 16.5303 24.9995 16.7484V14C24.9995 12.3431 23.6564 11 21.9995 11ZM24.9995 19.2514V22C24.9995 23.6569 23.6564 25 21.9995 25H13.0005C11.3436 25 10.0005 23.6569 10.0005 22V19.2522C9.7263 19.4698 9.37901 19.5999 9.00125 19.5999H9.00049V22C9.00049 24.2092 10.7913 26 13.0005 26H21.9995C24.2086 26 25.9995 24.2092 25.9995 22V19.5999C25.6214 19.5998 25.2738 19.4695 24.9995 19.2514ZM25.9995 17.3999V18.5999C25.6623 18.5998 25.3945 18.3281 25.3945 17.9999C25.3945 17.6717 25.6623 17.4001 25.9995 17.3999ZM9.00049 17.3999V18.5999H9.00125C9.33862 18.5999 9.60651 18.3282 9.60651 17.9999C9.60651 17.6716 9.33862 17.3999 9.00125 17.3999L9.00049 17.3999Z" />
                        </mask>
                        <path d="M10.0005 16.7476L9.37878 17.5309L11.0005 18.8181V16.7476H10.0005ZM9.00049 16.3999H8.00049V17.3999H9.00049V16.3999ZM25.9995 16.3999L25.9997 17.3999L26.9995 17.3997V16.3999H25.9995ZM24.9995 16.7484H23.9995V18.8211L25.6219 17.5312L24.9995 16.7484ZM24.9995 19.2514L25.6219 18.4686L23.9995 17.1787V19.2514H24.9995ZM10.0005 19.2522H11.0005V17.1817L9.37878 18.469L10.0005 19.2522ZM9.00049 19.5999V18.5999H8.00049V19.5999H9.00049ZM25.9995 19.5999H26.9995V18.6001L25.9997 18.5999L25.9995 19.5999ZM25.9995 18.5999L25.9991 19.5999L26.9995 19.6004V18.5999H25.9995ZM25.9995 17.3999H26.9995V16.3995L25.9991 16.3999L25.9995 17.3999ZM9.00049 18.5999H8.00049V19.5999H9.00049V18.5999ZM9.00049 17.3999L8.99987 16.3999L8.00049 16.4005V17.3999H9.00049ZM9.00125 17.3999V16.3999H9.00063L9.00125 17.3999ZM13.0005 12H21.9995V10H13.0005V12ZM11.0005 14C11.0005 12.8954 11.8959 12 13.0005 12V10C10.7913 10 9.00049 11.7909 9.00049 14H11.0005ZM11.0005 16.7476V14H9.00049V16.7476H11.0005ZM9.00125 17.3999C9.14556 17.3999 9.27529 17.4487 9.37878 17.5309L10.6222 15.9644C10.1773 15.6112 9.61247 15.3999 9.00125 15.3999V17.3999ZM9.00049 17.3999H9.00125V15.3999H9.00049V17.3999ZM8.00049 14V16.3999H10.0005V14H8.00049ZM13.0005 9C10.2391 9 8.00049 11.2386 8.00049 14H10.0005C10.0005 12.3431 11.3436 11 13.0005 11V9ZM21.9995 9H13.0005V11H21.9995V9ZM26.9995 14C26.9995 11.2386 24.7609 9 21.9995 9V11C23.6564 11 24.9995 12.3431 24.9995 14H26.9995ZM26.9995 16.3999V14H24.9995V16.3999H26.9995ZM25.6219 17.5312C25.7254 17.4488 25.8552 17.3999 25.9997 17.3999L25.9993 15.3999C25.3875 15.4 24.8222 15.6118 24.3771 15.9657L25.6219 17.5312ZM23.9995 14V16.7484H25.9995V14H23.9995ZM21.9995 12C23.1041 12 23.9995 12.8954 23.9995 14H25.9995C25.9995 11.7909 24.2086 10 21.9995 10V12ZM23.9995 19.2514V22H25.9995V19.2514H23.9995ZM23.9995 22C23.9995 23.1046 23.1041 24 21.9995 24V26C24.2086 26 25.9995 24.2092 25.9995 22H23.9995ZM21.9995 24H13.0005V26H21.9995V24ZM13.0005 24C11.8959 24 11.0005 23.1046 11.0005 22H9.00049C9.00049 24.2092 10.7913 26 13.0005 26V24ZM11.0005 22V19.2522H9.00049V22H11.0005ZM9.37878 18.469C9.27529 18.5511 9.14556 18.5999 9.00125 18.5999V20.5999C9.61247 20.5999 10.1773 20.3886 10.6222 20.0355L9.37878 18.469ZM9.00125 18.5999H9.00049V20.5999H9.00125V18.5999ZM8.00049 19.5999V22H10.0005V19.5999H8.00049ZM8.00049 22C8.00049 24.7614 10.2391 27 13.0005 27V25C11.3436 25 10.0005 23.6569 10.0005 22H8.00049ZM13.0005 27H21.9995V25H13.0005V27ZM21.9995 27C24.7609 27 26.9995 24.7614 26.9995 22H24.9995C24.9995 23.6569 23.6564 25 21.9995 25V27ZM26.9995 22V19.5999H24.9995V22H26.9995ZM25.9997 18.5999C25.8552 18.5999 25.7254 18.551 25.6219 18.4686L24.3771 20.0341C24.8222 20.388 25.3875 20.5998 25.9993 20.5999L25.9997 18.5999ZM26.9995 18.5999V17.3999H24.9995V18.5999H26.9995ZM24.3945 17.9999C24.3945 18.8818 25.1113 19.5995 25.9991 19.5999L26 17.5999C26.2133 17.6 26.3945 17.7744 26.3945 17.9999H24.3945ZM25.9991 16.3999C25.1113 16.4003 24.3945 17.118 24.3945 17.9999H26.3945C26.3945 18.2254 26.2133 18.3998 26 18.3999L25.9991 16.3999ZM10.0005 18.5999V17.3999H8.00049V18.5999H10.0005ZM9.00125 17.5999H9.00049V19.5999H9.00125V17.5999ZM8.60651 17.9999C8.60651 17.7744 8.78788 17.5999 9.00125 17.5999V19.5999C9.88937 19.5999 10.6065 18.882 10.6065 17.9999H8.60651ZM9.00125 18.3999C8.78788 18.3999 8.60651 18.2254 8.60651 17.9999H10.6065C10.6065 17.1178 9.88937 16.3999 9.00125 16.3999V18.3999ZM9.00111 18.3999H9.00188L9.00063 16.3999L8.99987 16.3999L9.00111 18.3999Z" fill="#004CFF" mask="url(#path-2-inside-1_0_5399)" />
                        <path d="M11 18H24" stroke="#004CFF" stroke-dasharray="1" />
                    </svg>
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 35C27.165 35 35 27.165 35 17.5C35 7.83502 27.165 0 17.5 0C7.83502 0 0 7.83502 0 17.5C0 27.165 7.83502 35 17.5 35Z" fill="#E5EBFC" />
                        <path d="M17.9678 14H22.9678" stroke="#004CFF" stroke-linecap="round" />
                        <path d="M12 17H23" stroke="#004CFF" stroke-linecap="round" />
                        <path d="M12 20H23" stroke="#004CFF" stroke-linecap="round" />
                        <path d="M30 9.5C32.4853 9.5 34.5 7.48528 34.5 5C34.5 2.51472 32.4853 0.5 30 0.5C27.5147 0.5 25.5 2.51472 25.5 5C25.5 7.48528 27.5147 9.5 30 9.5Z" fill="#004CFF" stroke="white" />
                    </svg>
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 35C27.165 35 35 27.165 35 17.5C35 7.83502 27.165 0 17.5 0C7.83502 0 0 7.83502 0 17.5C0 27.165 7.83502 35 17.5 35Z" fill="#E5EBFC" />
                        <g clip-path="url(#clip0_2_6588)">
                            <path d="M19.75 17.5C19.75 17.945 19.618 18.38 19.3708 18.75C19.1236 19.12 18.7722 19.4084 18.361 19.5787C17.9499 19.749 17.4975 19.7936 17.061 19.7068C16.6246 19.6199 16.2237 19.4057 15.909 19.091C15.5943 18.7763 15.3801 18.3754 15.2932 17.939C15.2064 17.5025 15.251 17.0501 15.4213 16.639C15.5916 16.2278 15.88 15.8764 16.25 15.6292C16.62 15.382 17.055 15.25 17.5 15.25C18.0967 15.25 18.669 15.4871 19.091 15.909C19.5129 16.331 19.75 16.9033 19.75 17.5Z" stroke="#004BFE" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M22.8821 19.6819C22.7852 19.9013 22.7562 20.1448 22.799 20.3807C22.8418 20.6167 22.9543 20.8345 23.1221 21.0059L23.1661 21.0499C23.439 21.3229 23.5923 21.693 23.5923 22.0789C23.5923 22.4649 23.439 22.835 23.1661 23.1079C22.8931 23.3809 22.523 23.5342 22.1371 23.5342C21.7511 23.5342 21.381 23.3809 21.1081 23.1079L21.0641 23.0639C20.894 22.8995 20.6794 22.7885 20.447 22.7447C20.2145 22.701 19.9743 22.7263 19.756 22.8176C19.5378 22.9089 19.3511 23.0621 19.219 23.2584C19.087 23.4547 19.0154 23.6854 19.0131 23.9219V24.0459C19.0031 24.4251 18.8455 24.7854 18.5738 25.05C18.3021 25.3147 17.9378 25.4628 17.5586 25.4628C17.1793 25.4628 16.815 25.3147 16.5433 25.05C16.2716 24.7854 16.114 24.4251 16.1041 24.0459V23.9799C16.0988 23.739 16.0211 23.5051 15.8811 23.3089C15.7411 23.1127 15.5452 22.9632 15.3191 22.8799C15.0997 22.7831 14.8562 22.7541 14.6203 22.7969C14.3843 22.8397 14.1665 22.9522 13.9951 23.1199L13.9511 23.1639C13.6781 23.4369 13.308 23.5902 12.9221 23.5902C12.5361 23.5902 12.166 23.4369 11.8931 23.1639C11.6201 22.891 11.4668 22.5209 11.4668 22.1349C11.4668 21.749 11.6201 21.3789 11.8931 21.1059L11.9371 21.0619C12.1015 20.8919 12.2125 20.6773 12.2563 20.4448C12.3 20.2124 12.2747 19.9722 12.1834 19.7539C12.0921 19.5357 11.9389 19.349 11.7426 19.2169C11.5463 19.0849 11.3156 19.0133 11.0791 19.0109H10.9551C10.7608 19.016 10.5676 18.9822 10.3866 18.9114C10.2057 18.8406 10.0408 18.7342 9.90165 18.5987C9.76248 18.4631 9.65187 18.3011 9.57635 18.122C9.50082 17.943 9.46191 17.7507 9.46191 17.5564C9.46191 17.3622 9.50082 17.1698 9.57635 16.9908C9.65187 16.8118 9.76248 16.6498 9.90165 16.5142C10.0408 16.3786 10.2057 16.2723 10.3866 16.2015C10.5676 16.1307 10.7608 16.0969 10.9551 16.1019H11.0201C11.261 16.0967 11.4949 16.019 11.6911 15.879C11.8873 15.739 12.0368 15.5431 12.1201 15.3169C12.2169 15.0975 12.2459 14.8541 12.2031 14.6181C12.1603 14.3821 12.0478 14.1644 11.8801 13.9929L11.8361 13.9489C11.6934 13.8156 11.5791 13.655 11.4999 13.4765C11.4207 13.2981 11.3782 13.1056 11.3749 12.9104C11.3717 12.7152 11.4077 12.5213 11.4809 12.3404C11.5542 12.1594 11.663 11.995 11.8011 11.857C11.9392 11.719 12.1036 11.6102 12.2846 11.537C12.4656 11.4639 12.6595 11.4279 12.8547 11.4313C13.0499 11.4347 13.2424 11.4773 13.4208 11.5566C13.5992 11.6359 13.7598 11.7503 13.8931 11.8929L13.9371 11.9369C14.1085 12.1047 14.3263 12.2172 14.5623 12.26C14.7982 12.3028 15.0417 12.2738 15.2611 12.1769H15.3191C15.5344 12.0846 15.718 11.9312 15.8472 11.7357C15.9764 11.5403 16.0455 11.3113 16.0461 11.0769V10.9549C16.056 10.5758 16.2136 10.2155 16.4853 9.95085C16.757 9.68619 17.1213 9.53809 17.5006 9.53809C17.8798 9.53809 18.2441 9.68619 18.5158 9.95085C18.7875 10.2155 18.9451 10.5758 18.9551 10.9549V11.0199C18.9574 11.2565 19.029 11.4872 19.161 11.6835C19.2931 11.8797 19.4798 12.033 19.698 12.1243C19.9163 12.2156 20.1565 12.2409 20.389 12.1971C20.6214 12.1534 20.836 12.0424 21.0061 11.8779L21.0501 11.8339C21.1852 11.6988 21.3456 11.5916 21.5222 11.5185C21.6987 11.4454 21.888 11.4077 22.0791 11.4077C22.2702 11.4077 22.4594 11.4454 22.6359 11.5185C22.8125 11.5916 22.9729 11.6988 23.1081 11.8339C23.2432 11.9691 23.3504 12.1295 23.4235 12.3061C23.4966 12.4826 23.5343 12.6718 23.5343 12.8629C23.5343 13.054 23.4966 13.2433 23.4235 13.4198C23.3504 13.5964 23.2432 13.7568 23.1081 13.8919L23.0641 13.9359C22.8963 14.1074 22.7838 14.3251 22.741 14.5611C22.6982 14.7971 22.7272 15.0405 22.8241 15.2599V15.3179C22.9164 15.5333 23.0698 15.7169 23.2653 15.8461C23.4607 15.9753 23.6897 16.0444 23.9241 16.0449H24.0481C24.4272 16.0549 24.7875 16.2125 25.0522 16.4842C25.3168 16.7559 25.4649 17.1202 25.4649 17.4994C25.4649 17.8787 25.3168 18.243 25.0522 18.5147C24.7875 18.7864 24.4272 18.944 24.0481 18.9539H23.9801C23.7457 18.9545 23.5167 19.0236 23.3213 19.1528C23.1258 19.282 22.9724 19.4656 22.8801 19.6809L22.8821 19.6819Z" stroke="#004BFE" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_2_6588">
                                <rect width="17" height="17" fill="white" transform="translate(9 9)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
            <div style={{ margin: "20px 0px 100px 0px" }}>
                <div className="ToRecieve">
                    <div className="Recieve">
                        {sanpham1.map((item)=>(
                             <img src={item.img} style={{ width: "80px", height: "80px" }} alt=""></img>
                        )   
                        )}
                    </div>
                    <div style={{ width: "300px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <h6 style={{fontSize:"24px"}}>Order #92287157</h6>
                            <p style={{fontSize:"24px"}}>3 items</p>
                        </div>
                        <p style={{ marginTop: "5px",fontSize:"24px" }}>Standard Delivery</p>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "60px" }}>
                            <h4 style={{ lineHeight: "26px",fontSize:"24px" }}>Packed</h4>
                            <Link to={"/theonot"} style={{ textDecoration: "none" }}><p style={{ fontSize:"24px",backgroundColor: "#004CFF", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px 23px", borderRadius: "10px", color: "white" }}>Track</p></Link>
                        </div>

                    </div>
                </div>

                <div className="ToRecieve">
                    <div className="Recieve">
                    {sanpham2.map((item)=>(
                             <img src={item.img} style={{ width: "80px", height: "80px" }} alt=""></img>
                        )   
                        )}
                    </div>
                    <div style={{ width: "300px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <h6 style={{fontSize:"24px"}}>Order #92287157</h6>
                            <p style={{fontSize:"24px"}}>4 items</p>
                        </div>
                        <p style={{ marginTop: "5px",fontSize:"24px" }}>Standard Delivery</p>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "60px" }}>
                            <h4 style={{ lineHeight: "26px",fontSize:"24px" }}>Packed</h4>
                            <Link to={"/theo"} style={{ textDecoration: "none" }}> <p style={{ fontSize:"24px",backgroundColor: "#004CFF", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px 23px", borderRadius: "10px", color: "white" }}>Track</p></Link>
                        </div>
                    </div>
                </div>
                <div className="ToRecieve">
                    <div className="Recieve">
                    {sanpham3.map((item)=>(
                             <img src={item.img} style={{ width: "80px", height: "100%" }} alt=""></img>
                        )   
                        )}
                    </div>
                    <div style={{ width: "300px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <h6 style={{fontSize:"24px"}}>Order #92287157</h6>
                            <p style={{fontSize:"24px"}}>2 items</p>
                        </div>
                        <p style={{ marginTop: "5px",fontSize:"24px" }}>Standard Delivery</p>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "60px" }}>
                            <h4 style={{ lineHeight: "26px",fontSize:"24px" }}>Packed</h4>
                            <p onClick={() => { setReview("hien") }} style={{ border: "2px solid #004CFF",fontSize:"24px", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px 15px", borderRadius: "10px", color: "#004CFF" }}>Review</p>
                        </div>
                        <div className={`Review ${review === "hien" ? "hien" : ""}`}>
                <div onClick={() => setReview("")} style={{ backgroundColor: "rgb(0, 0, 0, 0.2)", height: "350px" }}>
                </div>
                <div style={{ height: "80px",margin:"0px", textAlign: "center", lineHeight: "80px", background: "#F8FAFF", borderRadius: "10px 10px 0px 0px" }}>
                    <h2>Which item you want to review?</h2>
                </div>
                {sanpham3.map((item)=>(
                <div style={{ paddingTop: "20px", backgroundColor: "white" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>
                       
                             <img src={item.img} style={{ height: "120.17px" }} alt=""></img>
                        
                        </div>
                        <div style={{ marginLeft: "10px" }}>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <h6 style={{ margin: "10px 0px" }}>Order #92287157</h6>
                            <div style={{ display: "flex", justifyContent: "space-between", margin: "20px 10px" }}>
                                <p style={{ background: "#F9F9F9", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px 15px", borderRadius: "10px", width: "103px" }}>April,06</p>
                                <p onClick={() => { setReview("di") }} style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "5px 15px", borderRadius: "10px", color: "#004CFF", border: "2px solid #004CFF", width: "103px" }}>Review</p>
                            </div>
                        </div>
                    </div>
                </div>
                )   
            )}
            </div>
                    </div>
                </div>
                <div className="ToRecieve">
                    <div className="Recieve">
                    {sanpham4.map((item)=>(
                             <img src={item.img} style={{ maxWidth:"80px",width:"100%", height: "100%",maxHeight:"80px" }} alt=""></img>
                        )   
                        )}
                    </div>
                    <div style={{width:"100%", maxWidth: "300px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <h6 style={{fontSize:"24px"}}>Order #92287157</h6>
                            <p  style={{fontSize:"24px"}}>5 items</p>
                        </div>
                        <p style={{ marginTop: "10px",fontSize:"24px" }}>Standard Delivery</p>
                        <div style={{ display: "flex",fontSize:"24px", justifyContent: "space-between", marginTop: "65px" }}>
                            <h4 style={{ lineHeight: "26px",fontSize:"24px" }}>Packed</h4>
                            <p onClick={() => { setReview("hien1") }} style={{ border: "2px solid #004CFF", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px 15px", borderRadius: "10px", color: "#004CFF" }}>Review</p>
                        </div>
                        <div className={`Review ${review === "hien1" ? "hien" : ""}`}>
                <div onClick={() => setReview("")} style={{ backgroundColor: "rgb(0, 0, 0, 0.2)", height: "350px" }}>
                </div>
                <div style={{ height: "80px",margin:"0px", textAlign: "center", lineHeight: "80px", background: "#F8FAFF", borderRadius: "10px 10px 0px 0px" }}>
                    <h2>Which item you want to review?</h2>
                </div>
                {sanpham4.map((item)=>(
                <div style={{ paddingTop: "20px", backgroundColor: "white" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>
                       
                             <img src={item.img} style={{ height: "120.17px" }} alt=""></img>
                        
                        </div>
                        <div style={{ marginLeft: "10px" }}>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <h6 style={{ margin: "10px 0px" }}>Order #92287157</h6>
                            <div style={{ display: "flex", justifyContent: "space-between", margin: "20px 10px" }}>
                                <p style={{ background: "#F9F9F9", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px 15px", borderRadius: "10px", width: "103px" }}>April,06</p>
                                <p onClick={() => { setReview("di") }} style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "5px 15px", borderRadius: "10px", color: "#004CFF", border: "2px solid #004CFF", width: "103px" }}>Review</p>
                            </div>
                        </div>
                    </div>
                </div>
                )   
            )}
            </div>
                    </div>
                </div>
                <div className="ToRecieve">
                    <div className="Recieve">
                        <img src={img13} style={{width:"100%",height:"100%"}}></img>
                    </div>
                    <div style={{ width: "300px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <h6 style={{fontSize:"24px"}}>Order #92287157</h6>
                            <p  style={{fontSize:"24px"}}>1 items</p>
                        </div>
                        <p style={{ marginTop: "10px",fontSize:"24px" }}>Standard Delivery</p>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "60px" }}>
                            <h4 style={{ lineHeight: "26px",fontSize:"24px" }}>Packed</h4>
                            <p onClick={() => { setReview("hien2") }} style={{ border: "2px solid #004CFF",fontSize:"24px", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px 15px", borderRadius: "10px", color: "#004CFF" }}>Review</p>
                        </div>
                    </div>
                    <div className={`Review ${review === "hien2" ? "hien" : ""}`}>
                <div onClick={() => setReview("")} style={{ backgroundColor: "rgb(0, 0, 0, 0.2)", height: "350px" }}>
                </div>
                <div style={{ height: "80px",margin:"0px", textAlign: "center", lineHeight: "80px", background: "#F8FAFF", borderRadius: "10px 10px 0px 0px" }}>
                    <h2 style={{paddingLeft:"10px"}}>Which item you want to review?</h2>
                </div>
                <div style={{ paddingTop: "20px", backgroundColor: "white" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>
                       
                             <img src={img13} style={{ height: "120.17px" }} alt=""></img>
                        
                        </div>
                        <div style={{ marginLeft: "10px" }}>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <h6 style={{ margin: "10px 0px" }}>Order #92287157</h6>
                            <div style={{ display: "flex", justifyContent: "space-between", margin: "20px 10px" }}>
                                <p style={{ background: "#F9F9F9", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px 15px", borderRadius: "10px", width: "103px" }}>April,06</p>
                                <p onClick={() => { setReview("di") }} style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "5px 15px", borderRadius: "10px", color: "#004CFF", border: "2px solid #004CFF", width: "103px" }}>Review</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </div>
            </div>
            <div className={`Review ${review === "di" ? "hien" : ""}`}>
                <div onClick={() => setReview("")} style={{ backgroundColor: "rgb(0, 0, 0, 0.2)", height: "350px" }}>
                </div>
                <div style={{ height: "80px", lineHeight: "80px", background: "#F8FAFF", borderRadius: "10px 10px 0px 0px" }}>
                    <h3 style={{ marginLeft: "15px" }}>Review</h3>
                </div>
                <div style={{ backgroundColor: "white" }}>
                    <div style={{ marginLeft: "15px" }}>
                        <div style={{ display: "flex" }}>
                            <img className="Avatar" style={{ margin: "5px 0px 10px 5px " }} src={img14}></img>
                            <div style={{ marginLeft: "10px" }}>
                                <p style={{ padding: "5px 0px" }}>Lorem ipsum dolor sit amet consectetur.</p>
                                <h4 style={{ padding: "5px 0px" }}>Order #92287157</h4>
                            </div>
                        </div>
                        <div style={{ display: "flex" }}>
                            {[...Array(5)].map((star, index) => {
                                const curren = index + 1
                                return (
                                    <div >
                                        <label>
                                            <input style={{ display: "none" }} type="radio" name="rate"
                                                value={curren}
                                                onClick={() => setRating(curren)}></input>
                                            {curren <= (rateColor || rating) ? <img src={img16} /> : <img src={img15} />}
                                        </label>
                                    </div>
                                )
                            })}
                        </div>
                        <textarea style={{ resize: "none", width: "350px", height: "100px", border: "0px", backgroundColor: "#F1F4FE", borderRadius: "10px", padding: "10px 0px 0px 10px", margin: "10px 0px 10px 0px" }} placeholder="Your comment!"></textarea>
                        <div onClick={() => { setReview("chien") }} style={{ textAlign: "center", backgroundColor: "#004CFF", borderRadius: "10px", padding: "10px 0px", color: "white", width: "350px" }}>Say it!</div>
                    </div>
                </div>


            </div>
            <div onClick={() => { setReview("") }} className={`Review ${review === "chien" ? "chien" : ""}`}>
                <div style={{ position: "absolute", top: "230px", left: "15px" }}>
                    <svg style={{ position: "absolute", left: "150px", top: "-25px", outline: "5px solid  white", borderRadius: "50px" }} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z" fill="#E5EBFC" />
                        <g clip-path="url(#clip0_0_3800)">
                            <path d="M25 37C31.6274 37 37 31.6274 37 25C37 18.3726 31.6274 13 25 13C18.3726 13 13 18.3726 13 25C13 31.6274 18.3726 37 25 37Z" fill="#004CFF" stroke="white" stroke-width="2" />
                            <path d="M29.024 22.6089L24.2417 27.3911L22.068 25.2174" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_0_3800">
                                <rect width="22" height="22" fill="white" transform="translate(14 14)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <div style={{ backgroundColor: "#ffffff", borderRadius: "10px", width: "347px", height: "194px", textAlign: "center" }}>
                        <h3 style={{ paddingTop: "40px" }}>Done!</h3>
                        <p style={{ paddingTop: "20px" }}>Thank you for your review</p>
                        <div style={{ paddingTop: "20px" }}>
                            <div style={{ display: "flex",justifyContent:"center" }}>
                                {[...Array(5)].map((star, index) => {
                                    const curren = index + 1
                                    return (
                                        <div >
                                            <label>
                                                <input style={{ display: "none" }} type="radio" name="rate"
                                                    value={curren}
                                                    onClick={() => setRating(curren)}></input>
                                                {curren <= (rateColor || rating) ? <img src={img16} /> : <img src={img15} />}
                                            </label>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar13/>
        </div>
    )
}
export default ToRecieve;
