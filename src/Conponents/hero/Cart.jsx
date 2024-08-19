import React, { useContext } from "react";
import { useState, useEffect } from "react";
import "../hero/Hero.css"
import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, increment1 } from '../gio/call'
import { ShopContext } from "./ShopContext";

function Cart() {
    const { Anh, cartItem, removeCart } = useContext(ShopContext)
    const Carter = useSelector(state => state.cart.CartArr)
    console.log(Carter);
    const dispat = useDispatch()
    const [nutset1, SetNutset1] = useState("")
    useEffect(() => {
        if (Carter.length !== 0) {
            SetNutset1("1");
        }
        else {
            SetNutset1("")
        }
    }, [Carter]);
    const [diachi, setDiachi] = useState("26, Duong So 2, Thao Dien Ward, An Phu, District 2, Ho Chi Minh city");

    const [nutset, SetNutset] = useState("")
    const Nhapdiachi = () => {
        if (nha === "") {
            return alert("nhap")
        }
        else {
            setDiachi(nha)
        }
    }
    const [nha, SetNha] = useState("")
    const [nha1, SetNha1] = useState("")
    const tongtien = Carter.reduce((total, product) => total + parseFloat(product.gia * product.quantity), 0);
    useEffect(() => {
        if (tongtien !== 0) {
            SetNha1("1");
        }
        else {
            SetNha1("")
        }
    }, [tongtien]);
    return (
        <div className="hero">
            <div style={{ display: "flex", marginBottom: "10px" }}>
                <h2>Cart</h2>
                <div style={{ backgroundColor: "#E5EBFC", marginLeft: "5px", padding: " 5px 10px", borderRadius: "50px" }}>
                    {Carter.length}
                </div>
            </div>
            <div className="Nhapdiachi">
                <h3>Shipping Address</h3>
                <div>
                    <p>{diachi}</p>
                    <svg onClick={() => { SetNutset("1") }} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="#004BFE" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.7 18.6892V21.5016H11.5124L19.8073 13.2068L16.9948 10.3943L8.7 18.6892ZM21.9823 11.0318C22.2748 10.7393 22.2748 10.2668 21.9823 9.97434L20.2273 8.21937C19.9348 7.92688 19.4623 7.92688 19.1698 8.21937L17.7973 9.59185L20.6098 12.4043L21.9823 11.0318H21.9823Z" fill="white" />
                    </svg>
                </div>
            </div>
            <div className={`Addardess${nutset === "1" ? "hien" : ""}`}>
                <div onClick={() => SetNutset("")} style={{ backgroundColor: "rgb(0, 0, 0, 0.2)", height: "350px" }}>
                </div>
                <div style={{ backgroundColor: "#F8FAFF", padding: "15px", width: "370px", borderRadius: "10px 10px 0px 0px" }}>
                    <h3>Shipping Address</h3>
                </div>
                <div className="inputPayment" style={{ backgroundColor: "white", marginBottom: "100px" }}>
                    <div>
                        <p>Country</p>
                        <div style={{ display: "flex", justifyContent: "space-between", margin: "10px", borderRadius: "10px", backgroundColor: "rgb(248, 250, 255)" }}>
                            <p>India</p>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="#E7E8EB" />
                                <path d="M16.6716 9.29492L15.4919 10.4987L19.2476 14.146H8.08899V15.8312H19.2476L15.4919 19.4785L16.6716 20.6822L22.5458 14.9886L16.6716 9.29492Z" fill="white" />
                            </svg>
                        </div>
                        <div>
                            <p>Address</p>
                            <input value={nha} onChange={(e) => SetNha(e.target.value)}></input>
                        </div>
                        <div>
                            <p>Town / City</p>
                            <input></input>
                        </div>
                        <div>
                            <p>Postcode</p>
                            <input></input>
                        </div>
                        <div style={{ backgroundColor: "#004CFF", display: "flex", justifyContent: "center", alignContent: "center", color: "white", margin: "10px", width: "95%", borderRadius: "10px" }}>
                            <p onClick={Nhapdiachi}>Save Changes</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {Carter.map((item) => (
                    <div className="ItemWish" key={item.id}>
                        <img src={item.img} style={{ width: "100%", maxWidth: "200px" }} alt=""></img>
                        <div className="AnhSvg">
                            <svg onClick={() => { dispat(decrement(item)) }} width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2_6904)">
                                    <path d="M17.5 35C27.165 35 35 27.165 35 17.5C35 7.83502 27.165 0 17.5 0C7.83502 0 0 7.83502 0 17.5C0 27.165 7.83502 35 17.5 35Z" fill="white" />
                                    <path d="M20.118 25.068H14.884C14.2273 25.0573 13.6011 24.7894 13.1398 24.3219C12.6785 23.8545 12.419 23.2247 12.417 22.568L11.594 13H23.482L22.66 22.563C22.655 23.2322 22.3844 23.8721 21.9077 24.3418C21.431 24.8116 20.7872 25.0728 20.118 25.068V25.068Z" stroke="#FF5790" stroke-miterlimit="10" />
                                    <path d="M15.4519 16.0361V22.0321" stroke="#FF5790" stroke-miterlimit="10" stroke-linecap="round" />
                                    <path d="M19.551 16.0361V22.0321" stroke="#FF5790" stroke-miterlimit="10" stroke-linecap="round" />
                                    <path d="M12.581 13C12.5501 12.6366 12.5912 12.2707 12.7019 11.9231C12.8126 11.5756 12.9907 11.2533 13.2261 10.9747C13.4614 10.6961 13.7494 10.4666 14.0735 10.2993C14.3976 10.1321 14.7515 10.0304 15.115 10H19.96C20.6811 10.0786 21.3426 10.4368 21.8026 10.9977C22.2625 11.5586 22.4842 12.2775 22.42 13H12.581Z" stroke="#FF5790" stroke-miterlimit="10" />
                                    <path d="M10 13H25" stroke="#FF5790" stroke-miterlimit="10" stroke-linecap="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2_6904">
                                        <rect width="35" height="35" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div style={{ lineHeight: "20px", marginTop: "80px" }}  >
                            <div>
                                <p style={{ fontSize: "24px" }}>Lorem ipsum dolor sit amet consectetur.</p>
                                <p style={{ fontSize: "24px" }}>${item.gia}</p>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <div style={{ display: "flex", justifyContent: "space-around", width: "80px" }}>
                                    <p style={{ background: "#E5EBFC", textAlign: "center", borderRadius: "5px", padding: "6px 10px" }}>{item.color}</p>
                                    <p style={{ background: "#E5EBFC", textAlign: "center", marginLeft: "5px", borderRadius: "5px", padding: "6px 10px" }}>{item.size}</p>
                                </div>
                                <div className="Soluong" >
                                    <svg onClick={() => { dispat(increment1(item)) }} width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M49 25C49 38.2548 38.2548 49 25 49C11.7452 49 1 38.2548 1 25C1 11.7452 11.7452 1 25 1C38.2548 1 49 11.7452 49 25Z" stroke="#004BFE" stroke-width="2" />
                                        <path d="M20.5 25.5H29.5" stroke="#004CFF" stroke-width="2" stroke-linecap="round" />
                                    </svg>
                                    <p>{item.quantity}</p>
                                    <svg onClick={() => { dispat(increment(item)) }} width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M49 25C49 38.2548 38.2548 49 25 49C11.7452 49 1 38.2548 1 25C1 11.7452 11.7452 1 25 1C38.2548 1 49 11.7452 49 25Z" stroke="#004BFE" stroke-width="2" />
                                        <g clip-path="url(#clip0_0_8375)">
                                            <path d="M25 19.5V30.5" stroke="#004BFE" stroke-width="2" stroke-linecap="round" />
                                            <path d="M30.5 25H19.5" stroke="#004BFE" stroke-width="2" stroke-linecap="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_0_8375">
                                                <rect width="11" height="11" fill="white" transform="translate(19.5 19.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ margin: "30px" }}>
                <div className={nutset1 === "1" ? "buonghe" : ""}>
                    <div style={{ padding: "10px", backgroundColor: "white", textAlign: "center", borderRadius: "100px", margin: "auto", padding: "30px 0px", width: "134px", boxShadow: " 0px 5px 10px 0px rgba(0, 0, 0, 0.10)" }}>
                        <svg width="58" height="64" viewBox="0 0 58 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 16.0005H51C53.7614 16.0005 56 18.2391 56 21.0005L58 59.0005C58 61.7619 55.7614 64.0005 53 64.0005H5C2.23858 64.0005 0 61.7619 0 59.0005L2 21.0005C2 18.2391 4.23858 16.0005 7 16.0005Z" fill="#004CFF" />
                            <path d="M13.919 26.691V12.8111C13.919 7.3602 18.466 2.94141 24.0751 2.94141H33.3169C38.9259 2.94141 43.473 7.3602 43.473 12.8111V26.691" stroke="white" stroke-width="5" stroke-linecap="round" />
                            <path d="M13.919 14.691V12.8111C13.919 7.3602 18.466 2.94141 24.0751 2.94141H33.3169C38.9259 2.94141 43.473 7.3602 43.473 12.8111V14.691" stroke="#004CFF" stroke-width="5" stroke-linecap="round" />
                            <path d="M33.4305 33.1568C32.4739 32.8982 31.1296 32.6914 29.9404 32.6914C25.1318 32.6914 23.167 35.1474 23.167 37.7327C23.167 39.9301 24.2528 41.4813 27.6395 43.808C29.9921 45.4109 31.0262 46.3157 31.0262 47.3757C31.0262 48.4873 30.0438 49.4956 28.0531 49.4956C26.3727 49.4956 24.3045 49.0302 23.4255 48.6941L23.3738 52.0808C24.3045 52.3652 26.5278 52.6754 27.8205 52.6754C32.0344 52.6754 34.8265 50.4004 34.8265 47.2205C34.8265 44.868 33.0944 43.1875 30.2764 41.2228C27.9239 39.594 26.9156 38.7409 26.9156 37.7068C26.9156 36.5951 27.7946 35.8713 29.9404 35.8713C31.0779 35.8713 32.4739 36.1298 33.3787 36.4917L33.4305 33.1568Z" fill="white" />
                        </svg>
                    </div>
                   

                </div>
                <div className="thanhtoan">
                    <h3>Total: ${tongtien.toFixed(2)}</h3>
                    <Link to={nha1 === "1" ? "/Payment" : ""} style={{ textDecoration: "none", color: "white" }}><p className={nha1 === "1" ? "doimau" : "kodoi"} style={{ textDecoration: "none", border: "none" }}>Checkout</p></Link>
                </div>
            </div>
        </div>
    )
}
export default Cart;