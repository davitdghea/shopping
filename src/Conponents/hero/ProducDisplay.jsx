import React, { useContext, useState } from "react";
import "./Hero.css"
import { Anhproduct } from "./thu"
import img49 from '../Assets/45D808E0-5E00-4D2A-9BDC-5ED6F427010E.png'
import Item from "./iteam";
import img55 from '../Assets/gdfdd.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShopContext } from "./ShopContext";
import { useDispatch } from 'react-redux'
import { chonSize,chonmau } from "./thu";
import AppFake from "./Comments/appfake";
import { IoReturnUpBack } from "react-icons/io5";
import { useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
function ProducDisplay(props) {
    const navigate = useNavigate()
    const { product } = props
    
    const now = new Date();
    const dateOnly = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    product.time = dateOnly.getTime()
    const [themCart,setThemCart] = useState(false)
    const HanDlClick = () =>{
        setThemCart(true)
        addToCart1(product.id)
        setTimeout(() => {
            setThemCart(setThemCart(false))
        }, 500);
    }
    const [like,setLike] = useState(true)
    const handlClick = () =>{
        setLike(!like)
    }
    const [count, setCount] = useState(1);
    const increment = () => {
        setCount((c) => c + 1);
    };
    const incrementt = () => {
        setCount((c) => { if (c >= 2) { return c - 1 } else { return c } })
    };
    const [isOpen, setIsOpen] = useState(false)
    const tagger = () => {
        setIsOpen((open) => !open);
    };
    const [color,setLayColor] = useState("pick")
    const [size,setSize] = useState("L")
    product.color = color;
    product.size = size;
    const [reviews, setReviews] = useState("off")
    var setting4 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3.1,
        slidesToScroll: 1,
    };
    var setting1 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const dispat = useDispatch()
    
    const {Anh,removeCart,addToCart,addToCart1,lindo} = useContext(ShopContext)
    console.log(Anh)
    console.log(product)
    return (
        <div className="hero">
            <p onClick={()=>{navigate("/", { state: { email: product } } )} }><IoReturnUpBack /></p>
            <div className="producDisplay-left">
                <Slider {...setting1}>
                    <img src={product.img} alt=""></img>
                    <img src={product.img} alt=""></img>
                    <img src={product.img} alt=""></img>
                    <img src={product.img} alt=""></img>
                </Slider>
            </div>
            <div className="matop">
                <h2>${product.gia.toFixed(2)}</h2>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="#FFEBEB" />
                    <path d="M24.0778 13.5634L17.601 8.19172C17.523 8.12661 17.4495 8.08999 17.344 8.09406C17.142 8.1022 16.8849 8.22835 16.8849 8.41962V11.1136C16.8849 11.195 16.8115 11.2683 16.7197 11.2805C10.2796 12.1554 7.5668 16.4284 6.60745 20.8641C6.57073 21.0391 6.83696 21.2019 6.9609 21.0635C9.31109 18.4387 12.1708 16.7254 16.6922 16.6929C16.7931 16.6929 16.8849 16.7987 16.8849 16.8882V19.5334C16.8849 19.8182 17.3118 19.9444 17.5505 19.7491L24.0732 14.2837C24.1926 14.1861 24.2293 14.0721 24.2339 13.9419C24.2293 13.8117 24.1926 13.6611 24.0778 13.5634Z" fill="#B5A2A2" />
                </svg>
                <p>Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing elit. Etiam arcu mauris, scelerisque eu <br />mauris id, pretium pulvinar sapien.</p>
            </div>
            <div className={`producthien ${isOpen ? "an" : ""} `}>
                <div className="siveProduc">
                    <div style={{ display: "flex" }}>
                        <h2>Variations</h2>
                        <p>{color}</p>
                        <p>{size}</p>
                    </div>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="#004CFF" />
                        <path d="M16.6716 9.29492L15.4919 10.4987L19.2476 14.146H8.08899V15.8312H19.2476L15.4919 19.4785L16.6716 20.6822L22.5458 14.9886L16.6716 9.29492Z" fill="white" />
                    </svg>
                </div>
                <div className="colorProduc">
                {chonmau.map((e)=>(
                            <div>
                                <img src={e.img}/>
                            </div>
                        ))}
                </div>
                <div className={` producthien ${reviews === "on" ? "an" : ""}`}>
                    <div style={{ width: "50%", margin: "10px" }}>
                        <h2 style={{ marginBottom: "10px" }}>Specifications</h2>
                        <h3 style={{ marginBottom: "10px" }}>Material</h3>
                        <div className="ChatLieu">
                            <p>Cotton 95%</p>
                            <p>Nylon 5%</p>
                        </div>
                    </div>
                    <div className="cuoi">
                        <h3 style={{ marginBottom: "10px" }}>Origin</h3>
                        <p style={{ background: "#E5EBFC", padding: "4px", width: "40px", textAlign: "center" }}>EU</p>
                        <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "40px" }}>
                            <p>Size guide</p>

                            <div onClick={tagger}>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="#004CFF" />
                                    <path d="M16.6716 9.29492L15.4919 10.4987L19.2476 14.146H8.08899V15.8312H19.2476L15.4919 19.4785L16.6716 20.6822L22.5458 14.9886L16.6716 9.29492Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h3 style={{ marginBottom: "10px" }}>Delivery</h3>
                            <div style={{ marginBottom: "10px", display: "flex", justifyContent: "space-between", border: "2px #004CFF solid", padding: "4px", borderRadius: "5px" }}>
                                <div style={{ display: "flex" }}>
                                    <p>Standart</p>
                                    <p style={{ marginLeft: "15px" }}>5-7 days</p>
                                </div>
                                <h4>$3,00</h4>
                            </div>
                            <div style={{ marginBottom: "10px", display: "flex", justifyContent: "space-between", border: "2px #004CFF solid", padding: "4px", borderRadius: "5px" }}>
                                <div style={{ display: "flex" }}>
                                    <p>Express</p>
                                    <p style={{ marginLeft: "15px" }}>1-2 days</p>
                                </div>
                                <h4>$12,00</h4>
                            </div>
                        </div>
                    </div>
                    <div className="cuoi">
                        <h2 onClick={() => { setReviews("on") }}>Rating & Reviews</h2>
                       
                        {<div style={{ display: "flex" }}>
                            <div>
                                <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.8549 0.822592L13.4917 7.13661L20.2422 7.72334C20.7104 7.76425 20.9009 8.35528 20.5455 8.6664L15.4252 13.1546L16.9596 19.8314C17.066 20.2954 16.569 20.6604 16.1668 20.4138L10.3655 16.8741L4.56412 20.4138C4.16084 20.6593 3.66498 20.2943 3.77139 19.8314L5.30578 13.1546L0.184385 8.66533C-0.171017 8.3542 0.0183891 7.76317 0.487647 7.72226L7.23815 7.13554L9.87493 0.822591C10.058 0.383355 10.6719 0.383355 10.8549 0.822591L10.8549 0.822592Z" fill="#ECA61B" />
                                </svg>
                                <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.8549 0.822592L13.4917 7.13661L20.2422 7.72334C20.7104 7.76425 20.9009 8.35528 20.5455 8.6664L15.4252 13.1546L16.9596 19.8314C17.066 20.2954 16.569 20.6604 16.1668 20.4138L10.3655 16.8741L4.56412 20.4138C4.16084 20.6593 3.66498 20.2943 3.77139 19.8314L5.30578 13.1546L0.184385 8.66533C-0.171017 8.3542 0.0183891 7.76317 0.487647 7.72226L7.23815 7.13554L9.87493 0.822591C10.058 0.383355 10.6719 0.383355 10.8549 0.822591L10.8549 0.822592Z" fill="#ECA61B" />
                                </svg>
                                <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.8549 0.822592L13.4917 7.13661L20.2422 7.72334C20.7104 7.76425 20.9009 8.35528 20.5455 8.6664L15.4252 13.1546L16.9596 19.8314C17.066 20.2954 16.569 20.6604 16.1668 20.4138L10.3655 16.8741L4.56412 20.4138C4.16084 20.6593 3.66498 20.2943 3.77139 19.8314L5.30578 13.1546L0.184385 8.66533C-0.171017 8.3542 0.0183891 7.76317 0.487647 7.72226L7.23815 7.13554L9.87493 0.822591C10.058 0.383355 10.6719 0.383355 10.8549 0.822591L10.8549 0.822592Z" fill="#ECA61B" />
                                </svg>
                                <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.8549 0.822592L13.4917 7.13661L20.2422 7.72334C20.7104 7.76425 20.9009 8.35528 20.5455 8.6664L15.4252 13.1546L16.9596 19.8314C17.066 20.2954 16.569 20.6604 16.1668 20.4138L10.3655 16.8741L4.56412 20.4138C4.16084 20.6593 3.66498 20.2943 3.77139 19.8314L5.30578 13.1546L0.184385 8.66533C-0.171017 8.3542 0.0183891 7.76317 0.487647 7.72226L7.23815 7.13554L9.87493 0.822591C10.058 0.383355 10.6719 0.383355 10.8549 0.822591L10.8549 0.822592Z" fill="#ECA61B" />
                                </svg>
                                <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.7601 7.52197L12.9933 8.08045L13.5963 8.13286L19.2661 8.62565L14.9572 12.4026L14.5079 12.7963L14.6417 13.3786L15.9292 18.9807L11.0775 16.0204L10.5566 15.7026L10.0358 16.0204L5.18411 18.9807L6.47154 13.3786L6.60534 12.7964L6.15612 12.4026L1.84611 8.62457L7.5159 8.13178L8.11881 8.07938L8.35205 7.52095L10.5561 2.24414L12.7601 7.52197ZM20.078 7.91398L20.0775 7.9144L20.078 7.91398ZM4.93713 20.0554L4.93714 20.0554L4.93713 20.0554Z" stroke="#ECA61B" stroke-width="2" />
                                </svg>
                            </div>
                            <p style={{ marginLeft: "15px", lineHeight: "25px", background: "#DFE9FF", borderRadius: "5px" }}>4/5</p>
                    </div>}

                        <div >

                            <div style={{ display: "flex" }}>
                                <img style={{ borderRadius: "50%", outline: "4px solid white", width: "40px", height: "40px", boxShadow: "0px 5px 5px 5px rgba(0.10, 0.10, 0.10, 0.10)" }} src={img55}></img>

                                <div style={{ marginLeft: "5px" }}>
                                    <h2 style={{ marginBottom: "5px" }}>Veronika</h2>
                                    <div style={{ height: "16px" }}>
                                        <svg width="16" height="15" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.8549 0.822592L13.4917 7.13661L20.2422 7.72334C20.7104 7.76425 20.9009 8.35528 20.5455 8.6664L15.4252 13.1546L16.9596 19.8314C17.066 20.2954 16.569 20.6604 16.1668 20.4138L10.3655 16.8741L4.56412 20.4138C4.16084 20.6593 3.66498 20.2943 3.77139 19.8314L5.30578 13.1546L0.184385 8.66533C-0.171017 8.3542 0.0183891 7.76317 0.487647 7.72226L7.23815 7.13554L9.87493 0.822591C10.058 0.383355 10.6719 0.383355 10.8549 0.822591L10.8549 0.822592Z" fill="#ECA61B" />
                                        </svg>
                                        <svg width="16" height="15" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.8549 0.822592L13.4917 7.13661L20.2422 7.72334C20.7104 7.76425 20.9009 8.35528 20.5455 8.6664L15.4252 13.1546L16.9596 19.8314C17.066 20.2954 16.569 20.6604 16.1668 20.4138L10.3655 16.8741L4.56412 20.4138C4.16084 20.6593 3.66498 20.2943 3.77139 19.8314L5.30578 13.1546L0.184385 8.66533C-0.171017 8.3542 0.0183891 7.76317 0.487647 7.72226L7.23815 7.13554L9.87493 0.822591C10.058 0.383355 10.6719 0.383355 10.8549 0.822591L10.8549 0.822592Z" fill="#ECA61B" />
                                        </svg>
                                        <svg width="16" height="15" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.8549 0.822592L13.4917 7.13661L20.2422 7.72334C20.7104 7.76425 20.9009 8.35528 20.5455 8.6664L15.4252 13.1546L16.9596 19.8314C17.066 20.2954 16.569 20.6604 16.1668 20.4138L10.3655 16.8741L4.56412 20.4138C4.16084 20.6593 3.66498 20.2943 3.77139 19.8314L5.30578 13.1546L0.184385 8.66533C-0.171017 8.3542 0.0183891 7.76317 0.487647 7.72226L7.23815 7.13554L9.87493 0.822591C10.058 0.383355 10.6719 0.383355 10.8549 0.822591L10.8549 0.822592Z" fill="#ECA61B" />
                                        </svg>
                                        <svg width="16" height="15" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.8549 0.822592L13.4917 7.13661L20.2422 7.72334C20.7104 7.76425 20.9009 8.35528 20.5455 8.6664L15.4252 13.1546L16.9596 19.8314C17.066 20.2954 16.569 20.6604 16.1668 20.4138L10.3655 16.8741L4.56412 20.4138C4.16084 20.6593 3.66498 20.2943 3.77139 19.8314L5.30578 13.1546L0.184385 8.66533C-0.171017 8.3542 0.0183891 7.76317 0.487647 7.72226L7.23815 7.13554L9.87493 0.822591C10.058 0.383355 10.6719 0.383355 10.8549 0.822591L10.8549 0.822592Z" fill="#ECA61B" />
                                        </svg>
                                        <svg width="16" height="15" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.7601 7.52197L12.9933 8.08045L13.5963 8.13286L19.2661 8.62565L14.9572 12.4026L14.5079 12.7963L14.6417 13.3786L15.9292 18.9807L11.0775 16.0204L10.5566 15.7026L10.0358 16.0204L5.18411 18.9807L6.47154 13.3786L6.60534 12.7964L6.15612 12.4026L1.84611 8.62457L7.5159 8.13178L8.11881 8.07938L8.35205 7.52095L10.5561 2.24414L12.7601 7.52197ZM20.078 7.91398L20.0775 7.9144L20.078 7.91398ZM4.93713 20.0554L4.93714 20.0554L4.93713 20.0554Z" stroke="#ECA61B" stroke-width="2" />
                                        </svg>
                                    </div>
                                    <p style={{ marginTop: "10px" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed ...</p>
                                    <React.StrictMode>
                                      <AppFake/>
                                    </React.StrictMode>
                                </div>
                            </div>
                        </div>  
                    </div>
                    <div className="MostPopular">
                        <div className="MostPopular1">
                            <Slider {...setting4}>
                                {Anhproduct.map((item) => {
                                    <div>
                                        <img className="MostPopularimg" src={item.img} />
                                        <div style={{ display: "flex" }}><p>1780 </p> <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.84042 0.832031C7.83288 0.832031 7.82283 0.832031 7.8153 0.832031C6.81793 0.832031 5.93612 1.35961 5.42864 2.13841C4.92116 1.35961 4.03936 0.832031 3.04199 0.832031C3.03445 0.832031 3.0244 0.832031 3.01687 0.832031C1.46177 0.847105 0.203125 2.11078 0.203125 3.67089C0.203125 4.60043 0.610112 5.91937 1.40399 7.00467C2.91637 9.07227 5.42864 10.8811 5.42864 10.8811C5.42864 10.8811 7.94091 9.07227 9.45329 7.00467C10.2472 5.91937 10.6542 4.60043 10.6542 3.67089C10.6542 2.11078 9.39551 0.847105 7.84042 0.832031Z" fill="#0042E0" />
                                        </svg>
                                        </div>
                                        <p>Sale</p>
                                        <div>
                                        <p style={{backgroundColor:"black"}} onClick={()=>{dispat(increment(item))}} >Add to cart</p>
                                    </div>
                                    </div>   
                                })}
                            </Slider>
                        </div>
                    </div>
                    <div className="JustForYou">
                        <div className="JustForYouText">
                            <h2>Just For You</h2>
                        </div>
                        <div className="JustForYouTextItem">
                            {Anhproduct.map((item) => {
                                return <Item id={item.id} img={item.img} gia={item.gia} name={item.name} />
                            }
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`menuCate ${isOpen ? "ChonSive" : ""}`}>
                <div className="SizeChon" onClick={tagger}>
                </div>
                <div style={{ display: "flex", backgroundColor: "#F8FAFF", paddingTop: "15px", borderRadius: "10px 10px 0px 0px" }}>
                    <img style={{ with: "75px", height: "75px", marginLeft: "10px", borderRadius: "5px" }} src={img49}></img>
                    <div >
                        <h3 style={{ margin: "20px 0px 10px 10px" }}>$17,00</h3>
                        <div style={{ margin: "0px 0px 10px 10px", display: "flex" }}>
                            <p style={{ backgroundColor: "#E5EBFC", padding: "5px 0px", borderRadius: "5px", width: "50px", textAlign: "center" }}>{color}</p>
                            <p style={{ backgroundColor: "#E5EBFC", marginLeft: "5px", padding: "5px 0px", borderRadius: "5px", width: "50px", textAlign: "center" }}>{size}</p>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: "#FFFFFF" }}>
                    <h3>Color Options</h3>
                    <div className="imgsive">
                        {chonmau.map((e)=>(
                           <div  className="">
                           <img src={e.img} onClick={()=>{setLayColor(e.color)}}  style={{cursor:"pointer"}}></img>
                         {color === e.color && <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#004CFF" stroke="white" stroke-width="2" />
                               <path d="M17.0241 10.6094L12.2419 15.3916L10.0681 13.2179" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                           </svg>}  
                       </div>
                        ))}
                    </div>
                    <div>
                        <h3>Sive</h3>
                        <div className="ChonSize" style={{cursor:"pointer"}}>
                        {chonSize.map((e)=>(
                            <div onClick={()=>{setSize(e.Size)}} >
                                <p>{e.Size}</p>
                            </div>
                        ))}
                        </div> 
                    </div>
                    <div className="Soluong">
                        <h3>Quantity</h3>
                        <div>
                            <svg onClick={incrementt} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M49 25C49 38.2548 38.2548 49 25 49C11.7452 49 1 38.2548 1 25C1 11.7452 11.7452 1 25 1C38.2548 1 49 11.7452 49 25Z" stroke="#004BFE" stroke-width="2" />
                                <path d="M20.5 25.5H29.5" stroke="#004CFF" stroke-width="2" stroke-linecap="round" />
                            </svg>
                            <p>{count}</p>
                            <svg onClick={increment} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <div className={`menuCate ${reviews === "on" ? "hien" : ""}`}>
                <h2 onClick={() => { setReviews("off") }}>Reviews</h2>
                <div style={{ display: "flex" }}>
                    <img style={{ borderRadius: "50%", outline: "4px solid white", width: "40px", height: "40px", boxShadow: "0px 5px 5px 5px rgba(0.10, 0.10, 0.10, 0.10)" }} src={img55}></img>
                    <div style={{ marginLeft: "5px" }}>
                        <h2 style={{ marginBottom: "5px" }}>Veronika</h2>
                        <div style={{ height: "16px" }}>
                            <svg width="16" height="15" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8549 0.822592L13.4917 7.13661L20.2422 7.72334C20.7104 7.76425 20.9009 8.35528 20.5455 8.6664L15.4252 13.1546L16.9596 19.8314C17.066 20.2954 16.569 20.6604 16.1668 20.4138L10.3655 16.8741L4.56412 20.4138C4.16084 20.6593 3.66498 20.2943 3.77139 19.8314L5.30578 13.1546L0.184385 8.66533C-0.171017 8.3542 0.0183891 7.76317 0.487647 7.72226L7.23815 7.13554L9.87493 0.822591C10.058 0.383355 10.6719 0.383355 10.8549 0.822591L10.8549 0.822592Z" fill="#ECA61B" />
                            </svg>
                            <svg width="16" height="15" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8549 0.822592L13.4917 7.13661L20.2422 7.72334C20.7104 7.76425 20.9009 8.35528 20.5455 8.6664L15.4252 13.1546L16.9596 19.8314C17.066 20.2954 16.569 20.6604 16.1668 20.4138L10.3655 16.8741L4.56412 20.4138C4.16084 20.6593 3.66498 20.2943 3.77139 19.8314L5.30578 13.1546L0.184385 8.66533C-0.171017 8.3542 0.0183891 7.76317 0.487647 7.72226L7.23815 7.13554L9.87493 0.822591C10.058 0.383355 10.6719 0.383355 10.8549 0.822591L10.8549 0.822592Z" fill="#ECA61B" />
                            </svg>
                            <svg width="16" height="15" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8549 0.822592L13.4917 7.13661L20.2422 7.72334C20.7104 7.76425 20.9009 8.35528 20.5455 8.6664L15.4252 13.1546L16.9596 19.8314C17.066 20.2954 16.569 20.6604 16.1668 20.4138L10.3655 16.8741L4.56412 20.4138C4.16084 20.6593 3.66498 20.2943 3.77139 19.8314L5.30578 13.1546L0.184385 8.66533C-0.171017 8.3542 0.0183891 7.76317 0.487647 7.72226L7.23815 7.13554L9.87493 0.822591C10.058 0.383355 10.6719 0.383355 10.8549 0.822591L10.8549 0.822592Z" fill="#ECA61B" />
                            </svg>
                            <svg width="16" height="15" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8549 0.822592L13.4917 7.13661L20.2422 7.72334C20.7104 7.76425 20.9009 8.35528 20.5455 8.6664L15.4252 13.1546L16.9596 19.8314C17.066 20.2954 16.569 20.6604 16.1668 20.4138L10.3655 16.8741L4.56412 20.4138C4.16084 20.6593 3.66498 20.2943 3.77139 19.8314L5.30578 13.1546L0.184385 8.66533C-0.171017 8.3542 0.0183891 7.76317 0.487647 7.72226L7.23815 7.13554L9.87493 0.822591C10.058 0.383355 10.6719 0.383355 10.8549 0.822591L10.8549 0.822592Z" fill="#ECA61B" />
                            </svg>
                            <svg width="16" height="15" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.7601 7.52197L12.9933 8.08045L13.5963 8.13286L19.2661 8.62565L14.9572 12.4026L14.5079 12.7963L14.6417 13.3786L15.9292 18.9807L11.0775 16.0204L10.5566 15.7026L10.0358 16.0204L5.18411 18.9807L6.47154 13.3786L6.60534 12.7964L6.15612 12.4026L1.84611 8.62457L7.5159 8.13178L8.11881 8.07938L8.35205 7.52095L10.5561 2.24414L12.7601 7.52197ZM20.078 7.91398L20.0775 7.9144L20.078 7.91398ZM4.93713 20.0554L4.93714 20.0554L4.93713 20.0554Z" stroke="#ECA61B" stroke-width="2" />
                            </svg>
                        </div>
                        <p style={{ marginTop: "10px" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed ...</p>
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <img style={{ borderRadius: "50%", outline: "4px solid white", width: "40px", height: "40px", boxShadow: "0px 5px 5px 5px rgba(0.10, 0.10, 0.10, 0.10)" }} src={img55}></img>
                    <div style={{ marginLeft: "5px" }}>
                        <h2 style={{ marginBottom: "5px" }}>Veronika</h2>
                        <div style={{ height: "16px" }}>
                            <svg width="16" height="15" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8549 0.822592L13.4917 7.13661L20.2422 7.72334C20.7104 7.76425 20.9009 8.35528 20.5455 8.6664L15.4252 13.1546L16.9596 19.8314C17.066 20.2954 16.569 20.6604 16.1668 20.4138L10.3655 16.8741L4.56412 20.4138C4.16084 20.6593 3.66498 20.2943 3.77139 19.8314L5.30578 13.1546L0.184385 8.66533C-0.171017 8.3542 0.0183891 7.76317 0.487647 7.72226L7.23815 7.13554L9.87493 0.822591C10.058 0.383355 10.6719 0.383355 10.8549 0.822591L10.8549 0.822592Z" fill="#ECA61B" />
                            </svg>
                            <svg width="16" height="15" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8549 0.822592L13.4917 7.13661L20.2422 7.72334C20.7104 7.76425 20.9009 8.35528 20.5455 8.6664L15.4252 13.1546L16.9596 19.8314C17.066 20.2954 16.569 20.6604 16.1668 20.4138L10.3655 16.8741L4.56412 20.4138C4.16084 20.6593 3.66498 20.2943 3.77139 19.8314L5.30578 13.1546L0.184385 8.66533C-0.171017 8.3542 0.0183891 7.76317 0.487647 7.72226L7.23815 7.13554L9.87493 0.822591C10.058 0.383355 10.6719 0.383355 10.8549 0.822591L10.8549 0.822592Z" fill="#ECA61B" />
                            </svg>
                            <svg width="16" height="15" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8549 0.822592L13.4917 7.13661L20.2422 7.72334C20.7104 7.76425 20.9009 8.35528 20.5455 8.6664L15.4252 13.1546L16.9596 19.8314C17.066 20.2954 16.569 20.6604 16.1668 20.4138L10.3655 16.8741L4.56412 20.4138C4.16084 20.6593 3.66498 20.2943 3.77139 19.8314L5.30578 13.1546L0.184385 8.66533C-0.171017 8.3542 0.0183891 7.76317 0.487647 7.72226L7.23815 7.13554L9.87493 0.822591C10.058 0.383355 10.6719 0.383355 10.8549 0.822591L10.8549 0.822592Z" fill="#ECA61B" />
                            </svg>
                            <svg width="16" height="15" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8549 0.822592L13.4917 7.13661L20.2422 7.72334C20.7104 7.76425 20.9009 8.35528 20.5455 8.6664L15.4252 13.1546L16.9596 19.8314C17.066 20.2954 16.569 20.6604 16.1668 20.4138L10.3655 16.8741L4.56412 20.4138C4.16084 20.6593 3.66498 20.2943 3.77139 19.8314L5.30578 13.1546L0.184385 8.66533C-0.171017 8.3542 0.0183891 7.76317 0.487647 7.72226L7.23815 7.13554L9.87493 0.822591C10.058 0.383355 10.6719 0.383355 10.8549 0.822591L10.8549 0.822592Z" fill="#ECA61B" />
                            </svg>
                            <svg width="16" height="15" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.7601 7.52197L12.9933 8.08045L13.5963 8.13286L19.2661 8.62565L14.9572 12.4026L14.5079 12.7963L14.6417 13.3786L15.9292 18.9807L11.0775 16.0204L10.5566 15.7026L10.0358 16.0204L5.18411 18.9807L6.47154 13.3786L6.60534 12.7964L6.15612 12.4026L1.84611 8.62457L7.5159 8.13178L8.11881 8.07938L8.35205 7.52095L10.5561 2.24414L12.7601 7.52197ZM20.078 7.91398L20.0775 7.9144L20.078 7.91398ZM4.93713 20.0554L4.93714 20.0554L4.93713 20.0554Z" stroke="#ECA61B" stroke-width="2" />
                            </svg>
                        </div>
                        <p style={{ marginTop: "10px" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed ...</p>
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <img style={{ borderRadius: "50%", outline: "4px solid white", width: "40px", height: "40px", boxShadow: "0px 5px 5px 5px rgba(0.10, 0.10, 0.10, 0.10)" }} src={img55}></img>
                    <div style={{ marginLeft: "5px" }}>
                        <h2 style={{ marginBottom: "5px" }}>Veronika</h2>
                        <div style={{ height: "16px" }}>
                            <svg width="16" height="15" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8549 0.822592L13.4917 7.13661L20.2422 7.72334C20.7104 7.76425 20.9009 8.35528 20.5455 8.6664L15.4252 13.1546L16.9596 19.8314C17.066 20.2954 16.569 20.6604 16.1668 20.4138L10.3655 16.8741L4.56412 20.4138C4.16084 20.6593 3.66498 20.2943 3.77139 19.8314L5.30578 13.1546L0.184385 8.66533C-0.171017 8.3542 0.0183891 7.76317 0.487647 7.72226L7.23815 7.13554L9.87493 0.822591C10.058 0.383355 10.6719 0.383355 10.8549 0.822591L10.8549 0.822592Z" fill="#ECA61B" />
                            </svg>
                            <svg width="16" height="15" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8549 0.822592L13.4917 7.13661L20.2422 7.72334C20.7104 7.76425 20.9009 8.35528 20.5455 8.6664L15.4252 13.1546L16.9596 19.8314C17.066 20.2954 16.569 20.6604 16.1668 20.4138L10.3655 16.8741L4.56412 20.4138C4.16084 20.6593 3.66498 20.2943 3.77139 19.8314L5.30578 13.1546L0.184385 8.66533C-0.171017 8.3542 0.0183891 7.76317 0.487647 7.72226L7.23815 7.13554L9.87493 0.822591C10.058 0.383355 10.6719 0.383355 10.8549 0.822591L10.8549 0.822592Z" fill="#ECA61B" />
                            </svg>
                            <svg width="16" height="15" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8549 0.822592L13.4917 7.13661L20.2422 7.72334C20.7104 7.76425 20.9009 8.35528 20.5455 8.6664L15.4252 13.1546L16.9596 19.8314C17.066 20.2954 16.569 20.6604 16.1668 20.4138L10.3655 16.8741L4.56412 20.4138C4.16084 20.6593 3.66498 20.2943 3.77139 19.8314L5.30578 13.1546L0.184385 8.66533C-0.171017 8.3542 0.0183891 7.76317 0.487647 7.72226L7.23815 7.13554L9.87493 0.822591C10.058 0.383355 10.6719 0.383355 10.8549 0.822591L10.8549 0.822592Z" fill="#ECA61B" />
                            </svg>
                            <svg width="16" height="15" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8549 0.822592L13.4917 7.13661L20.2422 7.72334C20.7104 7.76425 20.9009 8.35528 20.5455 8.6664L15.4252 13.1546L16.9596 19.8314C17.066 20.2954 16.569 20.6604 16.1668 20.4138L10.3655 16.8741L4.56412 20.4138C4.16084 20.6593 3.66498 20.2943 3.77139 19.8314L5.30578 13.1546L0.184385 8.66533C-0.171017 8.3542 0.0183891 7.76317 0.487647 7.72226L7.23815 7.13554L9.87493 0.822591C10.058 0.383355 10.6719 0.383355 10.8549 0.822591L10.8549 0.822592Z" fill="#ECA61B" />
                            </svg>
                            <svg width="16" height="15" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.7601 7.52197L12.9933 8.08045L13.5963 8.13286L19.2661 8.62565L14.9572 12.4026L14.5079 12.7963L14.6417 13.3786L15.9292 18.9807L11.0775 16.0204L10.5566 15.7026L10.0358 16.0204L5.18411 18.9807L6.47154 13.3786L6.60534 12.7964L6.15612 12.4026L1.84611 8.62457L7.5159 8.13178L8.11881 8.07938L8.35205 7.52095L10.5561 2.24414L12.7601 7.52197ZM20.078 7.91398L20.0775 7.9144L20.078 7.91398ZM4.93713 20.0554L4.93714 20.0554L4.93713 20.0554Z" stroke="#ECA61B" stroke-width="2" />
                            </svg>
                        </div>
                        <p style={{ marginTop: "10px" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed ...</p>
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <img style={{ borderRadius: "50%", outline: "4px solid white", width: "40px", height: "40px", boxShadow: "0px 5px 5px 5px rgba(0.10, 0.10, 0.10, 0.10)" }} src={img55}></img>
                    <div style={{ marginLeft: "5px" }}>
                        <h2 style={{ marginBottom: "5px" }}>Veronika</h2>
                        <div style={{ height: "16px" }}>
                            <svg width="16" height="15" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8549 0.822592L13.4917 7.13661L20.2422 7.72334C20.7104 7.76425 20.9009 8.35528 20.5455 8.6664L15.4252 13.1546L16.9596 19.8314C17.066 20.2954 16.569 20.6604 16.1668 20.4138L10.3655 16.8741L4.56412 20.4138C4.16084 20.6593 3.66498 20.2943 3.77139 19.8314L5.30578 13.1546L0.184385 8.66533C-0.171017 8.3542 0.0183891 7.76317 0.487647 7.72226L7.23815 7.13554L9.87493 0.822591C10.058 0.383355 10.6719 0.383355 10.8549 0.822591L10.8549 0.822592Z" fill="#ECA61B" />
                            </svg>
                            <svg width="16" height="15" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8549 0.822592L13.4917 7.13661L20.2422 7.72334C20.7104 7.76425 20.9009 8.35528 20.5455 8.6664L15.4252 13.1546L16.9596 19.8314C17.066 20.2954 16.569 20.6604 16.1668 20.4138L10.3655 16.8741L4.56412 20.4138C4.16084 20.6593 3.66498 20.2943 3.77139 19.8314L5.30578 13.1546L0.184385 8.66533C-0.171017 8.3542 0.0183891 7.76317 0.487647 7.72226L7.23815 7.13554L9.87493 0.822591C10.058 0.383355 10.6719 0.383355 10.8549 0.822591L10.8549 0.822592Z" fill="#ECA61B" />
                            </svg>
                            <svg width="16" height="15" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8549 0.822592L13.4917 7.13661L20.2422 7.72334C20.7104 7.76425 20.9009 8.35528 20.5455 8.6664L15.4252 13.1546L16.9596 19.8314C17.066 20.2954 16.569 20.6604 16.1668 20.4138L10.3655 16.8741L4.56412 20.4138C4.16084 20.6593 3.66498 20.2943 3.77139 19.8314L5.30578 13.1546L0.184385 8.66533C-0.171017 8.3542 0.0183891 7.76317 0.487647 7.72226L7.23815 7.13554L9.87493 0.822591C10.058 0.383355 10.6719 0.383355 10.8549 0.822591L10.8549 0.822592Z" fill="#ECA61B" />
                            </svg>
                            <svg width="16" height="15" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8549 0.822592L13.4917 7.13661L20.2422 7.72334C20.7104 7.76425 20.9009 8.35528 20.5455 8.6664L15.4252 13.1546L16.9596 19.8314C17.066 20.2954 16.569 20.6604 16.1668 20.4138L10.3655 16.8741L4.56412 20.4138C4.16084 20.6593 3.66498 20.2943 3.77139 19.8314L5.30578 13.1546L0.184385 8.66533C-0.171017 8.3542 0.0183891 7.76317 0.487647 7.72226L7.23815 7.13554L9.87493 0.822591C10.058 0.383355 10.6719 0.383355 10.8549 0.822591L10.8549 0.822592Z" fill="#ECA61B" />
                            </svg>
                            <svg width="16" height="15" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.7601 7.52197L12.9933 8.08045L13.5963 8.13286L19.2661 8.62565L14.9572 12.4026L14.5079 12.7963L14.6417 13.3786L15.9292 18.9807L11.0775 16.0204L10.5566 15.7026L10.0358 16.0204L5.18411 18.9807L6.47154 13.3786L6.60534 12.7964L6.15612 12.4026L1.84611 8.62457L7.5159 8.13178L8.11881 8.07938L8.35205 7.52095L10.5561 2.24414L12.7601 7.52197ZM20.078 7.91398L20.0775 7.9144L20.078 7.91398ZM4.93713 20.0554L4.93714 20.0554L4.93713 20.0554Z" stroke="#ECA61B" stroke-width="2" />
                            </svg>
                        </div>
                        <p style={{ marginTop: "10px" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed ...</p>
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <img style={{ borderRadius: "50%", outline: "4px solid white", width: "40px", height: "40px", boxShadow: "0px 5px 5px 5px rgba(0.10, 0.10, 0.10, 0.10)" }} src={img55}></img>
                    <div style={{ marginLeft: "5px" }}>
                        <h2 style={{ marginBottom: "5px" }}>Veronika</h2>
                        <div style={{ height: "16px" }}>
                            <svg width="16" height="15" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8549 0.822592L13.4917 7.13661L20.2422 7.72334C20.7104 7.76425 20.9009 8.35528 20.5455 8.6664L15.4252 13.1546L16.9596 19.8314C17.066 20.2954 16.569 20.6604 16.1668 20.4138L10.3655 16.8741L4.56412 20.4138C4.16084 20.6593 3.66498 20.2943 3.77139 19.8314L5.30578 13.1546L0.184385 8.66533C-0.171017 8.3542 0.0183891 7.76317 0.487647 7.72226L7.23815 7.13554L9.87493 0.822591C10.058 0.383355 10.6719 0.383355 10.8549 0.822591L10.8549 0.822592Z" fill="#ECA61B" />
                            </svg>
                            <svg width="16" height="15" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8549 0.822592L13.4917 7.13661L20.2422 7.72334C20.7104 7.76425 20.9009 8.35528 20.5455 8.6664L15.4252 13.1546L16.9596 19.8314C17.066 20.2954 16.569 20.6604 16.1668 20.4138L10.3655 16.8741L4.56412 20.4138C4.16084 20.6593 3.66498 20.2943 3.77139 19.8314L5.30578 13.1546L0.184385 8.66533C-0.171017 8.3542 0.0183891 7.76317 0.487647 7.72226L7.23815 7.13554L9.87493 0.822591C10.058 0.383355 10.6719 0.383355 10.8549 0.822591L10.8549 0.822592Z" fill="#ECA61B" />
                            </svg>
                            <svg width="16" height="15" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8549 0.822592L13.4917 7.13661L20.2422 7.72334C20.7104 7.76425 20.9009 8.35528 20.5455 8.6664L15.4252 13.1546L16.9596 19.8314C17.066 20.2954 16.569 20.6604 16.1668 20.4138L10.3655 16.8741L4.56412 20.4138C4.16084 20.6593 3.66498 20.2943 3.77139 19.8314L5.30578 13.1546L0.184385 8.66533C-0.171017 8.3542 0.0183891 7.76317 0.487647 7.72226L7.23815 7.13554L9.87493 0.822591C10.058 0.383355 10.6719 0.383355 10.8549 0.822591L10.8549 0.822592Z" fill="#ECA61B" />
                            </svg>
                            <svg width="16" height="15" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8549 0.822592L13.4917 7.13661L20.2422 7.72334C20.7104 7.76425 20.9009 8.35528 20.5455 8.6664L15.4252 13.1546L16.9596 19.8314C17.066 20.2954 16.569 20.6604 16.1668 20.4138L10.3655 16.8741L4.56412 20.4138C4.16084 20.6593 3.66498 20.2943 3.77139 19.8314L5.30578 13.1546L0.184385 8.66533C-0.171017 8.3542 0.0183891 7.76317 0.487647 7.72226L7.23815 7.13554L9.87493 0.822591C10.058 0.383355 10.6719 0.383355 10.8549 0.822591L10.8549 0.822592Z" fill="#ECA61B" />
                            </svg>
                            <svg width="16" height="15" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.7601 7.52197L12.9933 8.08045L13.5963 8.13286L19.2661 8.62565L14.9572 12.4026L14.5079 12.7963L14.6417 13.3786L15.9292 18.9807L11.0775 16.0204L10.5566 15.7026L10.0358 16.0204L5.18411 18.9807L6.47154 13.3786L6.60534 12.7964L6.15612 12.4026L1.84611 8.62457L7.5159 8.13178L8.11881 8.07938L8.35205 7.52095L10.5561 2.24414L12.7601 7.52197ZM20.078 7.91398L20.0775 7.9144L20.078 7.91398ZM4.93713 20.0554L4.93714 20.0554L4.93713 20.0554Z" stroke="#ECA61B" stroke-width="2" />
                            </svg>
                        </div>
                        <p style={{ marginTop: "10px" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed ...</p>
                    </div>
                </div>
                <div style={{ display: "flex"}}>
                    <img style={{ borderRadius: "50%", outline: "4px solid white", width: "40px", height: "40px", boxShadow: "0px 5px 5px 5px rgba(0.10, 0.10, 0.10, 0.10)" }} src={img55}></img>
                    <div style={{ marginLeft: "5px" }}>
                        <h2 style={{ marginBottom: "5px" }}>Veronika</h2>
                        <div style={{ height: "16px" }}>
                            <svg width="16" height="15" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8549 0.822592L13.4917 7.13661L20.2422 7.72334C20.7104 7.76425 20.9009 8.35528 20.5455 8.6664L15.4252 13.1546L16.9596 19.8314C17.066 20.2954 16.569 20.6604 16.1668 20.4138L10.3655 16.8741L4.56412 20.4138C4.16084 20.6593 3.66498 20.2943 3.77139 19.8314L5.30578 13.1546L0.184385 8.66533C-0.171017 8.3542 0.0183891 7.76317 0.487647 7.72226L7.23815 7.13554L9.87493 0.822591C10.058 0.383355 10.6719 0.383355 10.8549 0.822591L10.8549 0.822592Z" fill="#ECA61B" />
                            </svg>
                            <svg width="16" height="15" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8549 0.822592L13.4917 7.13661L20.2422 7.72334C20.7104 7.76425 20.9009 8.35528 20.5455 8.6664L15.4252 13.1546L16.9596 19.8314C17.066 20.2954 16.569 20.6604 16.1668 20.4138L10.3655 16.8741L4.56412 20.4138C4.16084 20.6593 3.66498 20.2943 3.77139 19.8314L5.30578 13.1546L0.184385 8.66533C-0.171017 8.3542 0.0183891 7.76317 0.487647 7.72226L7.23815 7.13554L9.87493 0.822591C10.058 0.383355 10.6719 0.383355 10.8549 0.822591L10.8549 0.822592Z" fill="#ECA61B" />
                            </svg>
                            <svg width="16" height="15" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8549 0.822592L13.4917 7.13661L20.2422 7.72334C20.7104 7.76425 20.9009 8.35528 20.5455 8.6664L15.4252 13.1546L16.9596 19.8314C17.066 20.2954 16.569 20.6604 16.1668 20.4138L10.3655 16.8741L4.56412 20.4138C4.16084 20.6593 3.66498 20.2943 3.77139 19.8314L5.30578 13.1546L0.184385 8.66533C-0.171017 8.3542 0.0183891 7.76317 0.487647 7.72226L7.23815 7.13554L9.87493 0.822591C10.058 0.383355 10.6719 0.383355 10.8549 0.822591L10.8549 0.822592Z" fill="#ECA61B" />
                            </svg>
                            <svg width="16" height="15" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8549 0.822592L13.4917 7.13661L20.2422 7.72334C20.7104 7.76425 20.9009 8.35528 20.5455 8.6664L15.4252 13.1546L16.9596 19.8314C17.066 20.2954 16.569 20.6604 16.1668 20.4138L10.3655 16.8741L4.56412 20.4138C4.16084 20.6593 3.66498 20.2943 3.77139 19.8314L5.30578 13.1546L0.184385 8.66533C-0.171017 8.3542 0.0183891 7.76317 0.487647 7.72226L7.23815 7.13554L9.87493 0.822591C10.058 0.383355 10.6719 0.383355 10.8549 0.822591L10.8549 0.822592Z" fill="#ECA61B" />
                            </svg>
                            <svg width="16" height="15" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.7601 7.52197L12.9933 8.08045L13.5963 8.13286L19.2661 8.62565L14.9572 12.4026L14.5079 12.7963L14.6417 13.3786L15.9292 18.9807L11.0775 16.0204L10.5566 15.7026L10.0358 16.0204L5.18411 18.9807L6.47154 13.3786L6.60534 12.7964L6.15612 12.4026L1.84611 8.62457L7.5159 8.13178L8.11881 8.07938L8.35205 7.52095L10.5561 2.24414L12.7601 7.52197ZM20.078 7.91398L20.0775 7.9144L20.078 7.91398ZM4.93713 20.0554L4.93714 20.0554L4.93713 20.0554Z" stroke="#ECA61B" stroke-width="2" />
                            </svg>
                        </div>
                        <p style={{ marginTop: "10px" }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed ...</p>
                    </div>
                </div>
            </div>
            { themCart && <div className="thongbaothemhang">
                <p>thêm vào giỏ hàng thành công.</p>
            </div>}
            <div className="BuyProduct">
                <div onClick={handlClick} style={{cursor:"pointer"}}>
                    { like ? 
                      <svg onClick={()=>{addToCart(product.id)}} stroke="currentColor" fill="currentColor" stroke-width="0" version="1" viewBox="0 0 48 48" enable-background="new 0 0 48 48" height="38" width="47" xmlns="http://www.w3.org/2000/svg">
                        <path fill="black" d="M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z"></path>
                      </svg> 
                      : 
                      <svg onClick={()=>{removeCart(product.id)}} stroke="currentColor" fill="currentColor" stroke-width="0" version="1" viewBox="0 0 48 48" enable-background="new 0 0 48 48" height="38" width="47" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FFCDD2" d="M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z"></path>
                      </svg>
                    }
                </div>
                <div style={{display:"flex",marginLeft:"15px"}}>
                    <p style={{backgroundColor:"black",cursor:"pointer"}} onClick={HanDlClick} >Add to cart</p>
                    <Link to='/payments'><p style={{backgroundColor:"blue",marginLeft:"15px",cursor:"pointer"}}>Buy now</p></Link>
                </div>
                
            </div>
        </div>
    )
}

export default ProducDisplay;
