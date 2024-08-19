import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img from "../Assets/shopdemo/45D808E0-5E00-4D2A-9BDC-5ED6F427010E.png";
import img1 from "../Assets/shopdemo/92265483-9E7E-4FC3-A355-16CCA677C11C.png";
import img2 from "../Assets/shopdemo/fgdh.jpg";
import { IoMdSend } from "react-icons/io";
import { useRef } from "react";
import img14 from "../Assets/gdfdd.jpg";
import "./Hero.css";
import img15 from "../Assets/shopdemo/ssadddaa.png"
import img16 from "../Assets/shopdemo/star.png"
import Navbar13 from "../Navbar/Navbar13";
import { hehe,setHehe } from "./thu"

function ChatBot() {
    const [rating, setRating] = useState(null)
    const [rateColor, setRateColor] = useState(null)
    const [hatt, setHatt] = useState("")
    const [hat, setHat] = useState("")
    const [chat2, setChat2] = useState("")
    const [chat, setChat] = useState("")
    const [chats, setChats] = useState("")
    const [chatp, setChatp] = useState("")
    const [cauchat, setCauchat] = useState("1")
    const [chon, setChon] = useState("")
    const [selectedOption, setSelectedOption] = useState("");
    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };
    const [selectedOptions, setSelectedOptions] = useState("");

    const handleOptionClicks = (option) => {
        setSelectedOptions(option);
    };
    const storage = JSON.parse(localStorage.getItem("jobs"))
    const [job, setJob] = useState('');
    const [jobs, setJobs] = useState(storage ?? []);

    const hand = () => {
        if (!job.trim()) {
            return false;
        } else {
            const jobt = { id: job, Checked: false };
            const newJobs = [...jobs, jobt];
            setJobs(newJobs);
            setJob("");

            localStorage.setItem("jobs", JSON.stringify(newJobs));
        }
    };
    const toggleChecked = (id) => {
        setJobs((prev) =>
            prev.map((job) =>
                job.id === id ? { ...job, Checked: !job.Checked } : job
            )
        );
    };
    useEffect(() => {
        localStorage.setItem("jobs", JSON.stringify(jobs));
    }, [jobs]);
    const inputFileRef = useRef(null);
    const [avata, setAvatat] = useState("")
    useEffect(() => { }, [avata])
    const onFileChange = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            if (!newFile.type.match("image.*")) {
            } else {
                (inputFileRef.current.value = null);
                newFile.preview = URL.createObjectURL(newFile)
                setAvatat(newFile);
            }
        }
    }
    const bai = () => {
        return (
            <div className="day">
                <div className={`TextChat ${cauchat === "1" ? "hien" : ""}`}>
                    <div style={{ backgroundColor: "#F5FAFF", paddingLeft: "15px", height: "50px" }}>
                        <h2 style={{paddingTop:"15px"}}>What's your issue?</h2>
                    </div>
                    <div style={{ marginLeft: "15px" }}>
                        <div onClick={() => { handleOptionClick("Other Issues ") }}>
                            <p style={{ width: "150px", textAlign: "center" }} onClick={() => { setChat2("1") }} className={`Chat ${chat2 === "1" ? "hien" : ""}`}>{chat2 === "1" ? <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#004CFF" stroke="white" stroke-width="2" />
                                <path d="M17.0238 10.6089L12.2416 15.3911L10.0679 13.2174" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg> : ""} Order Issues</p>
                        </div>
                        <div onClick={() => { handleOptionClick("Item Quality") }}>
                            <p style={{ width: "140px", textAlign: "center" }} onClick={() => { setChat2("2") }} className={`Chat ${chat2 === "2" ? "hien" : ""}`}>{chat2 === "2" ? <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#004CFF" stroke="white" stroke-width="2" />
                                <path d="M17.0238 10.6089L12.2416 15.3911L10.0679 13.2174" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg> : ""}
                                Item Quality</p>
                        </div>
                        <div onClick={() => { handleOptionClick("Payment Issues") }}><p style={{ width: "170px", textAlign: "center" }} onClick={() => { setChat2("3") }} className={`Chat ${chat2 === "3" ? "hien" : ""}`}>{chat2 === "3" ? <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#004CFF" stroke="white" stroke-width="2" />
                            <path d="M17.0238 10.6089L12.2416 15.3911L10.0679 13.2174" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        </svg> : ""}
                            Payment Issues</p>
                        </div>
                        <div onClick={() => { handleOptionClick("Technical Assistance") }}>
                            <p style={{ width: "200px", textAlign: "center" }} onClick={() => { setChat2("4") }} className={`Chat ${chat2 === "4" ? "hien" : ""}`}>{chat2 === "4" ? <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#004CFF" stroke="white" stroke-width="2" />
                                <path d="M17.0238 10.6089L12.2416 15.3911L10.0679 13.2174" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg> : ""}
                                Technical Assistance</p>
                        </div>
                        <div onClick={() => { handleOptionClick("Other") }}>
                            <p style={{ width: "100px", textAlign: "center" }} onClick={() => { setChat("5") }} className={`Chat ${chat === "5" ? "hien" : ""}`}>{chat === "5" ? <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#004CFF" stroke="white" stroke-width="2" />
                                <path d="M17.0238 10.6089L12.2416 15.3911L10.0679 13.2174" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg> : ""}
                                Other</p>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <p onClick={() => {

                                if (selectedOption === "") {
                                    alert("vui lòng chọn vẫn đề cần hỗ trợ.");
                                } else {
                                    setCauchat("2")
                                    setChats("2")
                                }
                            }} style={{ width: "90%", backgroundColor: "#004CFF", display: "flex", alignItems: "center", justifyContent: "center", color: "white", borderRadius: "10px", margin: "5px 10px 0px 0px", padding: " 10px" }}>Next</p>
                            <Link to={"/theo"}><svg style={{ marginTop: "7px" }} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="1" width="26" height="26" rx="7" fill="#004BFE" stroke="#004BFE" stroke-width="2" />
                                <path d="M19.5 19.5002L8.5 8.50732" stroke="white" stroke-width="2" stroke-linecap="round" />
                                <path d="M19.5 8.5L8.5 19.5071" stroke="white" stroke-width="2" stroke-linecap="round" />
                            </svg></Link>
                        </div>
                    </div>
                </div>
                <div className={`TextChat ${cauchat === "2" ? "hien" : ""}`}>
                    <div style={{ backgroundColor: "#F5FAFF", paddingLeft: "15px", height: "50px" }}>
                        <h2>Order Issues</h2>
                    </div>
                    <div style={{ marginLeft: "15px" }}>
                        <div onClick={() => { handleOptionClicks("I didn't recieve my parcel") }}>
                            <p style={{ width: "220px", textAlign: "center" }} onClick={() => { setChat("1") }} className={`Chat ${chat === "1" ? "hien" : ""}`}>{chat === "1" ? <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#004CFF" stroke="white" stroke-width="2" />
                                <path d="M17.0238 10.6089L12.2416 15.3911L10.0679 13.2174" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg> : ""} I didn't recieve my parcel</p>
                        </div>
                        <div onClick={() => { handleOptionClicks("I want to cancel my order") }}>
                            <p style={{ width: "230px", textAlign: "center" }} onClick={() => { setChat("2") }} className={`Chat ${chat === "2" ? "hien" : ""}`}>{chat === "2" ? <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#004CFF" stroke="white" stroke-width="2" />
                                <path d="M17.0238 10.6089L12.2416 15.3911L10.0679 13.2174" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg> : ""} I want to cancel my order</p>
                        </div>
                        <div onClick={() => { handleOptionClicks("I want to return my order") }}>
                            <p style={{ width: "230px", textAlign: "center" }} onClick={() => { setChat("3") }} className={`Chat ${chat === "3" ? "hien" : ""}`}>{chat === "3" ? <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#004CFF" stroke="white" stroke-width="2" />
                                <path d="M17.0238 10.6089L12.2416 15.3911L10.0679 13.2174" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg> : ""} I want to return my order</p>
                        </div>
                        <div onClick={() => { handleOptionClicks("Package was damaged") }}>
                            <p style={{ width: "230px", textAlign: "center" }} onClick={() => { setChat("4") }} className={`Chat ${chat === "4" ? "hien" : ""}`}>{chat === "4" ? <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#004CFF" stroke="white" stroke-width="2" />
                                <path d="M17.0238 10.6089L12.2416 15.3911L10.0679 13.2174" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg> : ""} Package was damaged</p>
                        </div>
                        <div onClick={() => { handleOptionClicks("Other") }}>
                            <p style={{ width: "100px", textAlign: "center" }} onClick={() => { setChat("5") }} className={`Chat ${chat === "5" ? "hien" : ""}`}>{chat === "5" ? <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#004CFF" stroke="white" stroke-width="2" />
                                <path d="M17.0238 10.6089L12.2416 15.3911L10.0679 13.2174" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg> : ""}Other </p>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <p onClick={() => {
                                if (selectedOptions === "") {
                                    alert("vui lòng chọn vẫn đề cần hỗ trợ.");
                                } else {
                                    setCauchat("3")
                                    setChatp("3")
                                }
                            }} style={{ width: "85%", backgroundColor: "#004CFF", display: "flex", alignItems: "center", justifyContent: "center", color: "white", borderRadius: "10px", margin: "5px 10px 0px 0px", padding: " 10px" }}>Next</p>
                            <Link to="/theo"><svg style={{ marginTop: "5px" }} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="1" width="26" height="26" rx="7" fill="#004BFE" stroke="#004BFE" stroke-width="2" />
                                <path d="M19.5 19.5002L8.5 8.50732" stroke="white" stroke-width="2" stroke-linecap="round" />
                                <path d="M19.5 8.5L8.5 19.5071" stroke="white" stroke-width="2" stroke-linecap="round" />
                            </svg></Link>
                        </div>
                    </div>
                </div>
                <div className={`TextChat ${cauchat === "3" ? "hien" : ""}`}>
                    <div style={{ backgroundColor: "#F5FAFF", paddingLeft: "15px", height: "50px" }}>
                        <h2>Select one of your orders</h2>
                    </div>
                    <div style={{ marginLeft: "15px" }}>
                        <div onClick={() => { setHat("1") }}>
                            <div onClick={() => { setChon("") }} className={`ToRecieve ${chon === "" ? "hien" : ""}`}>
                                <div className="Recieve2">
                                    <img style={{ width: "39.17px", height: "39.17px" }} src={img} alt=""></img>
                                    <img style={{ width: "39.17px", height: "39.17px" }} src={img1} alt=""></img>
                                    <img style={{ width: "80.17px", height: "39.17px" }} src={img2} alt=""></img>
                                </div>
                                <div style={{ width: "250px" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <h6>Order #92287157</h6>
                                        <p>3 items</p>
                                    </div>
                                    <p style={{ marginTop: "5px" }}>Standard Delivery</p>
                                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "25px" }}>
                                        <h4 style={{ lineHeight: "26px" }}>Packed</h4>
                                        <Link to={"/theonot"} style={{ textDecoration: "none" }}><p style={{ backgroundColor: "#004CFF", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px 23px", borderRadius: "10px", color: "white" }}>Selected</p></Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div onClick={() => { setHat("2") }}>
                            <div onClick={() => { setChon("2") }} className={`ToRecieve ${chon === "2" ? "hien" : ""}`}>
                                <div className="Recieve2">
                                    <img style={{ width: "39.17px", height: "39.17px" }} src={img} alt=""></img>
                                    <img style={{ width: "39.17px", height: "39.17px" }} src={img1} alt=""></img>
                                    <img style={{ width: "80.17px", height: "39.17px" }} src={img2} alt=""></img>
                                </div>
                                <div style={{ width: "250px" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <h6>Order #92287157</h6>
                                        <p>3 items</p>
                                    </div>
                                    <p style={{ marginTop: "5px" }}>Standard Delivery</p>
                                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "25px" }}>
                                        <h4 style={{ lineHeight: "26px" }}>Packed</h4>
                                        <Link to={"/theonot"} style={{ textDecoration: "none" }}><p style={{ border: "solid 2px #004CFF", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px 23px", borderRadius: "10px", marginRight: "15px" }}>Select</p></Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <p onClick={() => {
                                if (hat === "") {
                                    alert("vui lòng chọn sản phẩm cần hỗ trợ.");
                                } else {
                                    setCauchat("4")
                                    setHatt("1")
                                }
                            }}
                                style={{ width: "80%", backgroundColor: "#004CFF", display: "flex", alignItems: "center", justifyContent: "center", color: "white", borderRadius: "10px", margin: "5px 10px 0px 0px", padding: " 10px" }}>Next</p>
                            <Link to="/theo"><svg style={{ marginTop: "5px" }} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="1" width="26" height="26" rx="7" fill="#004BFE" stroke="#004BFE" stroke-width="2" />
                                <path d="M19.5 19.5002L8.5 8.50732" stroke="white" stroke-width="2" stroke-linecap="round" />
                                <path d="M19.5 8.5L8.5 19.5071" stroke="white" stroke-width="2" stroke-linecap="round" />
                            </svg></Link>

                        </div>
                    </div>
                </div>
                <div className={`nhantin ${cauchat === "4" ? "hien" : ""}`}>
                    <div>
                        <div style={{ alignItems: "center", display: "flex", justifyContent: "space-around", width: "85%" }}>
                            <input ref={inputFileRef} onChange={onFileChange} hidden type="file" accept="image/*" ></input>
                            <div style={{}} className="Add" onClick={hand}>
                                <textarea value={job} onChange={(e) => setJob(e.target.value)} placeholder="Message"></textarea>
                                <p style={{ marginTop: "5px" }}><IoMdSend /></p>
                            </div>

                        </div>
                        <svg onClick={() => { inputFileRef.current.click() }} style={{ marginRight: "5px" }} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="26" height="26" rx="7" stroke="#004BFE" stroke-width="2" />
                            <path d="M10.3433 8.9445C10.3433 10.1411 9.37329 11.1112 8.17668 11.1112C6.98006 11.1112 6.01001 10.1411 6.01001 8.9445C6.01001 7.74788 6.98006 6.77783 8.17668 6.77783C9.37329 6.77783 10.3433 7.74788 10.3433 8.9445Z" stroke="#004BFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M27.0004 16.4198L19.8506 9.27002L4.12109 24.9995" stroke="#004BFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <svg onClick={() => { setChon("3") }} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="26" height="26" rx="7" stroke="#004BFE" stroke-width="2" />
                            <path d="M19.5 10.5073H8.5" stroke="#004BFE" stroke-width="2" stroke-linecap="round" />
                            <path d="M19.5 17.5073H8.5" stroke="#004BFE" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="hero" style={{ backgroundColor: "#F8FAFF",height:"100%" }}>
            <div style={{height:"auto"}}>
                <div style={{ display: "flex", padding: "50px 0px 0px 15px", backgroundColor: "#FFFFFF" }}>
                    <div style={{ background: "#E5EBFC", borderRadius: "50px", outline: "5px", width: "40px", height: "40px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.17241 5.12598H15.8276C16.6846 5.12598 17.3793 5.81727 17.3793 6.67003L18 18.4048C18 19.2576 17.3053 19.9489 16.4483 19.9489H1.55172C0.69473 19.9489 0 19.2576 0 18.4048L0.620689 6.67003C0.620689 5.81727 1.31542 5.12598 2.17241 5.12598Z" fill="#004CFF" />
                            <path d="M4.39795 8.50448V4.11865C4.39795 2.39627 5.78442 1 7.49472 1H10.3127C12.023 1 13.4095 2.39627 13.4095 4.11865V8.50448" stroke="white" stroke-width="2" stroke-linecap="round" />
                            <path d="M4.39795 4.71268V4.11865C4.39795 2.39627 5.78442 1 7.49472 1H10.3127C12.023 1 13.4095 2.39627 13.4095 4.11865V4.71268" stroke="#004CFF" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </div>
                    <div style={{ margin: "5px 0px 10px 10px" }}>
                       <Link to="/"><h4 onClick={()=>{setHehe("mới1")}} style={{ color: "#004BFE" }}>Chat Bot</h4></Link> 
                        <p>Customer Care Service</p>
                    </div>
                </div>
                <div style={{ margin: "15px 0px 15px 15px", padding: "15px", height: "500px" }}>
                    <div style={{ width: "194px", background: "#E5EBFC", borderRadius: "10px" }}>
                        <p style={{ fontSize: "12px", padding: "10px" }}>Hello, Amanda! Welcome to Customer Care Service. We will be happy to help you. Please, provide us more details about your issue before we can start.</p>

                    </div>
                    <div className={`TextBot ${chats === "2" ? "hien" : ""}`} >
                        <p style={{ padding: "10px", borderRadius: "10px", display: "flex", alignItems: "center", backgroundColor: "#0042E0", color: "white" }}>
                            <svg style={{ marginRight: "5px" }} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#004CFF" stroke="white" stroke-width="2" />
                                <path d="M17.0238 10.6089L12.2416 15.3911L10.0679 13.2174" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg> {selectedOption}
                        </p>
                    </div>
                    <div className={`TextBot ${chatp === "3" ? "hien" : ""}`}>
                        <p style={{ padding: "10px", borderRadius: "10px", display: "flex", alignItems: "center", backgroundColor: "#0042E0", color: "white" }}>
                            <svg style={{ marginRight: "5px" }} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#004CFF" stroke="white" stroke-width="2" />
                                <path d="M17.0238 10.6089L12.2416 15.3911L10.0679 13.2174" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg> {selectedOptions}
                        </p>
                    </div>
                    <div className={`ananh ${hatt === "1" ? "hien" : ""}`}>
                        <div className={`ananh ${hat === "1" ? "hien" : ""}`}>
                            <div className="Recieve2">
                                <img style={{ width: "39.17px", height: "39.17px" }} src={img} alt=""></img>
                                <img style={{ width: "39.17px", height: "39.17px" }} src={img1} alt=""></img>
                                <img style={{ width: "80.17px", height: "39.17px" }} src={img2} alt=""></img>
                            </div>
                            <div style={{ width: "250px", marginLeft: "10px" }}>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <h6>Order #92287157</h6>
                                    <p style={{ marginRight: "15px" }}>3 items</p>
                                </div>
                                <p style={{ marginTop: "5px" }}>Standard Delivery</p>
                                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "25px" }}>
                                    <h4 style={{ lineHeight: "26px" }}>Packed</h4>
                                </div>

                            </div>
                        </div>
                        <div className={`ananh ${hat === "2" ? "hien" : ""}`}>
                            <div className="Recieve2">
                                <img style={{ width: "39.17px", height: "39.17px" }} src={img} alt=""></img>
                                <img style={{ width: "39.17px", height: "39.17px" }} src={img1} alt=""></img>
                                <img style={{ width: "80.17px", height: "39.17px" }} src={img2} alt=""></img>
                            </div>
                            <div style={{ width: "250px", marginLeft: "10px" }}>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <h6>Order #92287157</h6>
                                    <p style={{ marginRight: "15px" }}>3 items</p>
                                </div>
                                <p style={{ marginTop: "5px" }}>Standard Delivery</p>
                                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "25px" }}>
                                    <h4 style={{ lineHeight: "26px" }}>Packed</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{background:"#F8FAFF"}}>
                        {jobs.map((job) => (
                            <div
                                key={job.id}
                                onClick={() => toggleChecked(job.id)}
                                className="TextBot hien"
                            >
                                <p style={{ padding: "10px", borderRadius: "10px", display: "flex", alignItems: "center", backgroundColor: "#0042E0", color: "white" }}>
                                    <svg style={{ marginRight: "5px" }} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#004CFF" stroke="white" stroke-width="2" />
                                        <path d="M17.0238 10.6089L12.2416 15.3911L10.0679 13.2174" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>    {job.id}
                                </p>
                            </div>
                        ))}
                        <div style={{ display: "flex", justifyContent: "right", marginTop: "25px", paddingBottom: "100px" }}>
                            {avata && <img src={avata.preview} style={{ width: "90px" }} />}
                        </div>

                    </div>

                </div>
            </div>
              {bai()}
            <div className={`danhgia ${chon === "3" ? "hien" : ""}`} style={{ backgroundColor: "white" }}>
                <div style={{ padding: "15px 10px", backgroundColor: "#F8FAFF" }}>
                    <h3>Rate Our Service</h3>
                </div>
                <div style={{ marginLeft: "15px", paddingBottom: "180px" }}>
                    <div style={{ display: "flex" }}>
                        <img className="Avatar" style={{ margin: "5px 0px 10px 5px " }} src={img14}></img>
                        <div style={{ marginLeft: "10px" }}>
                            <h3 style={{ padding: "5px 0px", color: "blue" }}>Maggy Lee</h3>
                            <h4 style={{ padding: "5px 0px" }}>Customer Care Service</h4>
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
                                    <div>

                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <textarea style={{ resize: "none", border: "0px", backgroundColor: "#F1F4FE", borderRadius: "10px", padding: "10px 0px 0px 10px", margin: "10px 0px 10px 0px" }} placeholder="Your comment!"></textarea>
                    <div onClick={() => { }} style={{ textAlign: "center", backgroundColor: "#004CFF", borderRadius: "10px", padding: "10px 0px", color: "white", width: "350px" }}>Say it!</div>
                </div>
            </div>
        </div>
    )
}


export default ChatBot

/*import React, { useEffect, useState } from "react";
import io from 'socket.io-client'
const socket =io("http://localhost:8081");
function Chatbot() {
    const [message,setMessage]= useState("")
    const [messages,setMessages] = useState([]);
    useEffect(()=>{
        socket.on('chat message',(msg)=>{
            setMessages(prev =>[...prev,msg]);
        })
        return () =>{
            socket.off('chat message')
        }
    },[messages])
    const sendMessage =()=>{
        const newMessage = {
            id: Math.random().toString(36).substring(7), // Unique ID for each message
            text: message,
            sender: "user", // Or any identifier for the sender
            timestamp: Date.now() // Current timestamp
        };
        socket.emit('chat message', message);
        setMessage('')
    }
    return (
        <div>
            <div>
                {messages.map((msg)=>(
                    <div key={msg.id}>{msg.text}</div>
                ))}
            </div>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    )
}
export default Chatbot;*/
