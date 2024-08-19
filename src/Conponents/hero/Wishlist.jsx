import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from './ShopContext';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../gio/call'

function Wishlist() {
    const { Anh, cartItem, removeCart } = useContext(ShopContext)
    const lele = Anh.filter(e=>cartItem[e.id] > 0)
    console.log(lele)
    const [thongbao,setThongBao]=useState(false)
    const handlclick = () =>{
        setThongBao(true)
        setTimeout(() => {
            setThongBao(false)
        }, 500);
    }
    const [coWish,setCoWish]=useState("")
    useEffect(()=>{
        if(lele.length !== 0 ){
            setCoWish("1")
        }
        else{
            setCoWish("")
        }
    },[lele.length])
    const dispat = useDispatch()
    return (
        <div className="hero">
            <h2>Wishlist</h2>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "15px 0px" }}>
                <p>Recently viewed</p>
                <Link to='/recently'>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="#004CFF" />
                        <path d="M16.6716 9.29492L15.4919 10.4987L19.2476 14.146H8.08899V15.8312H19.2476L15.4919 19.4785L16.6716 20.6822L22.5458 14.9886L16.6716 9.29492Z" fill="white" />
                    </svg>
                </Link>
            </div>
            <div className="chuaco">
                <svg className={coWish ==="1"?"coWish":""} width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2_7075)">
                        <path d="M75 139C112.003 139 142 109.003 142 72C142 34.9969 112.003 5 75 5C37.9969 5 8 34.9969 8 72C8 109.003 37.9969 139 75 139Z" fill="white" />
                    </g>
                    <g clip-path="url(#clip0_2_7075)">
                        <g clip-path="url(#clip1_2_7075)">
                            <path d="M75.0047 89.4793L72.6451 87.1029C63.9457 79.3608 58.1937 74.1378 58.1937 67.7224C58.1641 65.2637 59.1277 62.897 60.8664 61.1583C62.6051 59.4196 64.9718 58.4559 67.4305 58.4855C70.3434 58.5188 73.0994 59.811 74.9879 62.0291C76.8764 59.811 79.6324 58.5188 82.5453 58.4855C85.004 58.4559 87.3707 59.4196 89.1094 61.1583C90.8481 62.897 91.8118 65.2637 91.7822 67.7224C91.7822 74.1378 86.0721 79.3608 77.3307 87.1197L75.0047 89.4793Z" stroke="#004CFF" stroke-width="3" stroke-linecap="round" />
                            <path d="M74.863 37.165V45.5622" stroke="#004CFF" stroke-width="3" stroke-linecap="round" />
                            <path d="M57.3607 41.9849L61.5593 49.2568" stroke="#004CFF" stroke-width="3" stroke-linecap="round" />
                            <path d="M44.6688 54.7744L51.9407 58.973" stroke="#004CFF" stroke-width="3" stroke-linecap="round" />
                            <path d="M40 72.3105H48.3971" stroke="#004CFF" stroke-width="3" stroke-linecap="round" />
                            <path d="M44.8199 89.8045L52.0919 85.606" stroke="#004CFF" stroke-width="3" stroke-linecap="round" />
                            <path d="M57.6095 102.496L61.8081 95.2241" stroke="#004CFF" stroke-width="3" stroke-linecap="round" />
                            <path d="M75.1453 107.165V98.7681" stroke="#004CFF" stroke-width="3" stroke-linecap="round" />
                            <path d="M92.6394 102.353L88.4408 95.0815" stroke="#004CFF" stroke-width="3" stroke-linecap="round" />
                            <path d="M105.331 89.5555L98.0593 85.3569" stroke="#004CFF" stroke-width="3" stroke-linecap="round" />
                            <path d="M110 72.0283H101.603" stroke="#004CFF" stroke-width="3" stroke-linecap="round" />
                            <path d="M105.188 54.5259L97.9165 58.7244" stroke="#004CFF" stroke-width="3" stroke-linecap="round" />
                            <path d="M92.3905 41.834L88.1919 49.1059" stroke="#004CFF" stroke-width="3" stroke-linecap="round" />
                        </g>
                    </g>
                    <defs>
                        <filter id="filter0_d_2_7075" x="0" y="0" width="150" height="150" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="3" />
                            <feGaussianBlur stdDeviation="4" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.160784 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_7075" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_7075" result="shape" />
                        </filter>
                        <clipPath id="clip0_2_7075">
                            <rect width="70" height="70" fill="white" transform="translate(40 37.165)" />
                        </clipPath>
                        <clipPath id="clip1_2_7075">
                            <rect width="70" height="70" fill="white" transform="translate(40 37.165)" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div style={{ marginBottom: "100px" }}>
                {lele.map((e) => {
                    
                        return <div className="ItemWish" key={e.id}>
                            <img src={e.img} style={{ width: "100%", maxWidth: "200px" }} alt="" />
                            <div className="AnhSvg">
                                <svg onClick={() => { removeCart(e.id) }} width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                            <div style={{ paddingTop: "80px", lineHeight: "20px" }}  >
                                <div>
                                    <p style={{ fontSize: "24px" }}>Lorem ipsum dolor sit amet consectetur.</p>
                                    <p style={{ fontSize: "24px" }}>${e.gia}</p>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <div style={{ display: "flex", justifyContent: "space-around", width: "80px" }}>
                                        <p style={{ background: "#E5EBFC", textAlign: "center", borderRadius: "5px", padding: "6px 10px" }}>{e.color}</p>
                                        <p style={{ background: "#E5EBFC", textAlign: "center", marginLeft: "5px", borderRadius: "5px", padding: "6px 10px" }}>{e.size}</p>
                                    </div>
                                   <p onClick={handlclick}> <svg onClick={()=>{ dispat(increment(e)) }} width="29" height="25" viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_0_8096)">
                                            <path d="M8.01697 21.9834V5.21853L11.1809 1H24.8365L28.0004 5.21853V21.9834C28.0004 22.7801 27.3545 23.426 26.5578 23.426H9.45957C8.66284 23.426 8.01697 22.7801 8.01697 21.9834Z" stroke="#004CFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M9.01697 4.88477H27.0004" stroke="#004CFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M22.8933 9.77002C22.8933 12.468 20.7061 14.6552 18.0081 14.6552C15.3101 14.6552 13.1229 12.468 13.1229 9.77002" stroke="#004CFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                        <g clip-path="url(#clip1_0_8096)">
                                            <path d="M17 16C17 20.4183 13.4183 24 9 24C4.58172 24 1 20.4183 1 16C1 11.5817 4.58172 8 9 8C13.4183 8 17 11.5817 17 16Z" fill="white" stroke="#004BFE" stroke-width="2" />
                                            <g clip-path="url(#clip2_0_8096)">
                                                <path d="M9.08191 12.752V19.4119" stroke="#004BFE" stroke-width="2" stroke-linecap="round" />
                                                <path d="M12.4119 16.082H5.75195" stroke="#004BFE" stroke-width="2" stroke-linecap="round" />
                                            </g>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_0_8096">
                                                <rect width="21.9834" height="24.426" fill="white" transform="translate(7.01697)" />
                                            </clipPath>
                                            <clipPath id="clip1_0_8096">
                                                <rect width="18" height="18" fill="white" transform="translate(0 7)" />
                                            </clipPath>
                                            <clipPath id="clip2_0_8096">
                                                <rect width="6.65998" height="6.65998" fill="white" transform="translate(5.75195 12.752)" />
                                            </clipPath>
                                        </defs>
                                    </svg></p>
                                </div>
                            </div>
                        </div>
                    }
                )}
            </div>
            {thongbao && <div className="thongbao">
                <p>thêm vào giỏ hàng thành công</p>
            </div>
            }
        </div>
    )
}
export default Wishlist;

