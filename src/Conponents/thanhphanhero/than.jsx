import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Newitema, Newitema1, Newitema2, Newitema4, anhclo1, anhclo2, anhclo3, anhclo4 } from '../hero/anh'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GoArrowRight } from "react-icons/go";
import Item from '../hero/iteam'
function Than() {

    
    var setting2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2.9,
        slidesToScroll: 1,
    };
    var setting3 = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 1.9,
        slidesToScroll: 1,
    };
    var setting4 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2.9,
        slidesToScroll: 1,
    };
    return (
        <div className="giuadau-nb13">
            
            <div className="giuadau-nb">
                <h2>My Orders</h2>
                <div className="giuadau-nb132">
                    <Link to="/kids"><button className="giuadau-nb132-b1" style={{ cursor: "pointer" }}>To Pay</button></Link>
                    <Link to="/kids"><button className="giuadau-nb132-b2" style={{ cursor: "pointer" }}>To Recieve</button></Link>
                    <Link to="/kids"><button className="giuadau-nb132-b3" style={{ cursor: "pointer" }}>To Review</button></Link>
                </div>
            </div>
            <h2>Stories</h2>
            <div className="giuadau-nb133">
                <Slider {...setting2}>
                    {Newitema2.map((item) => (
                        <div className="Stories1">
                            <img src={item.img}></img>
                            <svg className="Stories1Svg" width="29" height="31" viewBox="0 0 29 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.5" d="M0 14.5C0 6.49187 6.49187 0 14.5 0C22.5081 0 29 6.49187 29 14.5C29 22.5081 22.5081 29 14.5 29C6.49187 29 0 22.5081 0 14.5Z" fill="#D9D9D9" />
                                <g opacity="0.56" filter="url(#filter0_d_2773_430)">
                                    <path d="M20.6959 12.868C21.8212 13.665 21.8212 15.335 20.6959 16.132L14.156 20.7645C12.8315 21.7027 11 20.7556 11 19.1324V9.86757C11 8.24444 12.8315 7.29733 14.156 8.23552L20.6959 12.868Z" fill="white" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_2773_430" x="5" y="4.86426" width="22.54" height="25.2715" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="3" />
                                        <feGaussianBlur stdDeviation="3" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.160784 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2773_430" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2773_430" result="shape" />
                                    </filter>
                                </defs>
                            </svg>

                            <p className="Stories1p">{item.live}</p>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="Newitem">
                <div className="newitem">
                    <h2>New Items</h2>
                    <div>
                        <Link to="/New" style={{ textDecoration: "none", color: "black" }}> <h3>See All <button><GoArrowRight /></button></h3></Link>
                    </div>
                </div>
                <Slider {...setting3}>
                    {Newitema.map((item, i) => {
                        return <div class="item"><Item Key={i} id={item.id} img={item.img} gia={item.gia} /><p></p></div>
                    })}
                </Slider>
            </div>
            <div className="MostPopular">
                <div className="newitem">
                    <h2>Most Popular</h2>
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
            <div className="Categories">
                <div className="newitem">
                    <h2>Categories</h2>
                    <div>
                        <Link to="/Categories" style={{ textDecoration: "none", color: "black" }}>  <h3>See All <button><GoArrowRight /></button></h3></Link>
                    </div>
                </div>
                <div className="Categories-item">
                    <div className="Categories-item1 col-sm-4">
                        {anhclo1.map((item) => (
                            <div><img src={item.img} /></div>
                        ))}
                        <div className="Categories-item-text">
                            <h2>Clothing</h2>
                            <h2>109</h2>
                        </div>
                    </div>
                    <div className="Categories-item1">
                        {anhclo2.map((item) => (
                            <div><img src={item.img} /></div>
                        ))}
                        <div className="Categories-item-text">
                            <h2>Clothing</h2>
                            <h2>109</h2>
                        </div>
                    </div>
                    <div className="Categories-item1">
                        {anhclo3.map((item) => (
                            <div><img src={item.img} /></div>
                        ))}
                        <div className="Categories-item-text">
                            <h2>Clothing</h2>
                            <h2>109</h2>
                        </div>
                    </div>
                    <div className="Categories-item1">
                        {anhclo4.map((item) => (
                            <div><img src={item.img} /></div>
                        ))}
                        <div className="Categories-item-text">
                            <h2>Clothing</h2>
                            <h2>109</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Than;
/**<Link to="/recently" style={{ textDecoration: "none", color: "black" }}><h2 >Recently viewed</h2></Link>
            <div className="giuadau-nb131">
                <Slider {...setting1} >
                    {Newitema1.map((item) => (
                        <div>
                            <img src={item.img}></img>
                        </div>
                    ))}
                </Slider>
            </div> */