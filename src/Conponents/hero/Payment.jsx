import React from "react";
import {useState } from "react";
import { useSelector} from 'react-redux'
import AppPayments from "./payments"
function Payment() {
    const Carter = useSelector(state => state.cart.CartArr)
    const [diachi, setDiachi] = useState("");
    const [city, setcity] = useState('');
    const [quocgia, setquocgia] = useState('');
    const [ship, setShip] = useState(0)
    const [vocher, setVocher] = useState("vocher")
    const [addDiatri, setAddDiatri] = useState("nhap")
    const [apma, setApma] = useState("ma")
    const tongtien12 = Carter.reduce((total, product) => total + parseFloat(product.gia * product.quantity), 0);
    let sale
    let giam
    const cont = () => {
        if (apma === "apma") {
            return giam = 0.05
        }
        else if (apma === "apmat") {
            return giam = 0.15
        }
        else {
            return giam = 0
        };
    }
    cont();
    const con = () => {
        if (apma === "apma") {
            return sale = "5% Discount"
        }
        else if (apma === "apmat") {
            return sale = "15% Discount"

        }
        else {
            return sale = "Add VouCher"
        };
    }
    con();
    let salet
    const conn = () => {
        if (diachi !== "" && city !== "" && quocgia !== "") {
            return salet = "diachi"
        }
        else {
            return salet = "nhập địa chỉ nhận hàng"
        };
    }
    conn();
    const [nha, SetNha] = useState("")
    const [nha1, SetNha1] = useState("")
    const tongtien = (tongtien12) - (tongtien12) * giam
    const handoClick = () => {
        if (nha === "") {
            return alert("nhap")
        }
        else {
            SetNha1(nha)
        }
    }
    
    return (
        <div className="hero">
            <h2 style={{ marginBottom: "11px" }}>Payment</h2>
            <div className="Nhapdiachi" style={{ marginBottom: "6px" }}>
                <h3>Shipping Address</h3>
                <div >
                    <p>{nha1}</p>
                    <svg onClick={() => { setAddDiatri("nhapdi") }} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="#004BFE" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.7 18.6892V21.5016H11.5124L19.8073 13.2068L16.9948 10.3943L8.7 18.6892ZM21.9823 11.0318C22.2748 10.7393 22.2748 10.2668 21.9823 9.97434L20.2273 8.21937C19.9348 7.92688 19.4623 7.92688 19.1698 8.21937L17.7973 9.59185L20.6098 12.4043L21.9823 11.0318H21.9823Z" fill="white" />
                    </svg>
                </div>
            </div>
            <div className="Nhapdiachi">
                <h3>Contact Information</h3>
                <div>
                    <p>+84932000000<br></br>
                        amandamorgan@example.com</p>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="#004BFE" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.7 18.6892V21.5016H11.5124L19.8073 13.2068L16.9948 10.3943L8.7 18.6892ZM21.9823 11.0318C22.2748 10.7393 22.2748 10.2668 21.9823 9.97434L20.2273 8.21937C19.9348 7.92688 19.4623 7.92688 19.1698 8.21937L17.7973 9.59185L20.6098 12.4043L21.9823 11.0318H21.9823Z" fill="white" />
                    </svg>
                </div>
            </div>
            <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px", alignItems: "center" }}>
                    <h2 >Items</h2>
                    <p className={`Plast${sale === "Add VouCher" ? "" : "Sale"}`} onClick={() => setVocher("chonVocher")}> {sale} <svg onClick={() => { setApma("") }} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.1144 5.74995L11.2228 1.64155C11.5963 1.26806 11.5963 0.653609 11.2228 0.280118C10.8493 -0.0933728 10.2349 -0.0933728 9.86136 0.280118L5.75296 4.38852L1.64457 0.280118C1.27107 -0.0933719 0.656622 -0.0933719 0.283132 0.280118C0.096386 0.466864 9.53674e-07 0.71385 9.53674e-07 0.960836C9.53674e-07 1.20782 0.096386 1.45481 0.283132 1.64155L4.39153 5.74995L0.283131 9.85835C0.096385 10.0451 0 10.2921 0 10.5391C0 10.7861 0.096385 11.033 0.283131 11.2198C0.656621 11.5933 1.27107 11.5933 1.64456 11.2198L5.75296 7.11138L9.86136 11.2198C10.2349 11.5933 10.8493 11.5933 11.2228 11.2198C11.5963 10.8463 11.5963 10.2318 11.2228 9.85835L7.1144 5.74995Z" fill="white" />
                    </svg></p>
                </div>
                <div>
                    {Carter.map((item) => (
                        <div className="ItemWish" style={{ display: "flex", marginBottom: "20px", justifyContent: "space-between", alignItems: "center" }} key={item.id}>
                            <img src={item.img} style={{ maxWidth: "65px", height: "65px", borderRadius: "40px", outline: "5px solid white", boxShadow: " 0px 5px 5px 5px rgba(0.10, 0.10, 0.10, 0.10)" }} alt=""></img>
                            <p style={{ fontSize: "16px", marginLeft: "5px" }}>Lorem ipsum dolor sit amet consectetur.</p>
                            <p>{item.quantity}</p>
                            <p>${item.gia.toFixed(2)}</p>
                            <p>${(item.gia * item.quantity).toFixed(2)}</p>
                        </div>
                    ))}
                </div>
                <div style={{ marginTop: "20px" }}>
                    <h2>Shipping Options</h2>
                    <div onClick={() => setShip(0)} className={`Ship${ship === "shipCham" ? "ShipCham" : ""}`} >
                        <div style={{ alignItems: "center", display: "flex", justifyContent: "space-between", margin: "0px 10px" }}>
                            <div className={`${ship === 0 ? "" : "ShipCham"}`} >
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#0042E0" stroke="white" stroke-width="2" />
                                    <path d="M17.024 10.6089L12.2417 15.3911L10.068 13.2174" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className={`${ship === 0 ? "ShipCham" : ""}`}>
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#EFEFEF" stroke="white" stroke-width="2" />
                                </svg>
                            </div>

                            <h3 style={{ marginLeft: "10px" }}>Standard</h3>
                            <p style={{ marginLeft: "10px", backgroundColor: "#F5F8FF" }}>5-7 days</p>
                        </div>
                        <h3 style={{ marginRight: "10px" }}>FREE</h3>
                    </div>
                    <div onClick={() => setShip(12)} className={`Ship${ship === "shipNhanh" ? "ShipCham" : ""}`}>
                        <div style={{ alignItems: "center", display: "flex", justifyContent: "space-between", margin: "0px 10px" }}>
                            <div className={`${ship === 12 ? "" : "ShipCham"}`} >
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#0042E0" stroke="white" stroke-width="2" />
                                    <path d="M17.024 10.6089L12.2417 15.3911L10.068 13.2174" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className={`${ship === 12 ? "ShipCham" : ""}`}>
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#EFEFEF" stroke="white" stroke-width="2" />
                                </svg>
                            </div>
                            <h3 style={{ marginLeft: "10px" }}>Express</h3>
                            <p style={{ marginLeft: "10px", backgroundColor: "#F5F8FF" }}>1-2 days</p>
                        </div>
                        <h3 style={{ marginRight: "10px" }}>$12.00</h3>
                    </div>
                </div> 
            </div>
            <div className={`TongTien${addDiatri === "1" ? "ShipCham" : ""}${vocher === "chonVocher" ? "ShipCham" : ""}${addDiatri === "nhapdi" ? "ShipCham" : ""}`} >
                <h3>Total : <i>${(tongtien + ship).toFixed(2)}</i></h3>
                <p onClick={() => { setAddDiatri("1") }}>Pay</p>
            </div>

            <div className={`Voucher0${vocher === "chonVocher" ? "Voucher0" : ""}`} >
                <div onClick={() => setVocher("vocher")} style={{ backgroundColor: "rgb(0, 0, 0, 0.2)", height: "350px" }}>
                </div>
                <div className="Voucher">
                    <h2>Active Vouchers</h2>
                </div>
                <div style={{ background: "#f9f9f9", paddingTop: "15px" }}>
                    <div className="Voucher1">
                        <div>
                            <h3>Voucher</h3>
                            <p >Valid Until 5.16.20</p>
                        </div>
                        <div>
                            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_0_6784)">
                                    <path d="M1.65848 3.93896H12.0832C12.7375 3.93896 13.2678 4.46672 13.2678 5.11774L13.7417 14.0764C13.7417 14.7274 13.2113 15.2552 12.5571 15.2552H1.18463C0.530376 15.2552 0 14.7274 0 14.0764L0.473851 5.11774C0.473851 4.46672 1.00423 3.93896 1.65848 3.93896Z" fill="#004CFF" />
                                    <path d="M3.35803 6.51819V3.16992C3.35803 1.85501 4.4165 0.789062 5.7222 0.789063H7.87353C9.17922 0.789063 10.2377 1.85501 10.2377 3.16992V6.51819" stroke="white" stroke-width="2" stroke-linecap="round" />
                                    <path d="M3.35803 3.62343V3.16992C3.35803 1.85501 4.4165 0.789062 5.7222 0.789063H7.87353C9.17922 0.789063 10.2377 1.85501 10.2377 3.16992V3.62343" stroke="#004CFF" stroke-width="2" stroke-linecap="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_6784">
                                        <rect width="13.7417" height="14.4662" fill="white" transform="translate(0 0.789062)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <h3>First Purchase</h3>
                        </div>
                        <div>
                            <p>5% off for your next order</p>
                            <p onClick={() => setApma("apma")}>Apply</p>
                        </div>
                    </div>
                    <div className="Voucher1">
                        <div>
                            <h3>Voucher</h3>
                            <p>Valid Until 5.16.20</p>
                        </div>
                        <div>
                            <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.910145 15.8413C0.910145 16.3437 1.31599 16.7495 1.81834 16.7495H6.3593V9.09463H0.910145V15.8413ZM8.17568 16.7495H12.7166C13.219 16.7495 13.6248 16.3437 13.6248 15.8413V9.09463H8.17568V16.7495ZM13.6248 4.55367H12.43C12.606 4.21026 12.7166 3.82995 12.7166 3.41843C12.7166 2.04195 11.5956 0.920898 10.2191 0.920898C9.03846 0.920898 8.27501 1.52541 7.29587 2.85932C6.31673 1.52541 5.55328 0.920898 4.37263 0.920898C2.99615 0.920898 1.8751 2.04195 1.8751 3.41843C1.8751 3.82995 1.98295 4.21026 2.16175 4.55367H0.910145C0.407801 4.55367 0.00195312 4.95951 0.00195312 5.46186V7.73234C0.00195312 7.98209 0.206296 8.18644 0.456049 8.18644H14.0789C14.3287 8.18644 14.533 7.98209 14.533 7.73234V5.46186C14.533 4.95951 14.1272 4.55367 13.6248 4.55367ZM4.36979 4.55367C3.74257 4.55367 3.23455 4.04565 3.23455 3.41843C3.23455 2.79121 3.74257 2.28319 4.36979 2.28319C4.93457 2.28319 5.35177 2.37684 6.81339 4.55367H4.36979H4.36979ZM10.2191 4.55367H7.77551C9.23429 2.38252 9.64014 2.28319 10.2191 2.28319C10.8463 2.28319 11.3544 2.79121 11.3544 3.41843C11.3544 4.04565 10.8463 4.55367 10.2191 4.55367Z" fill="#004CFF" />
                            </svg>
                            <h3>First Purchase</h3>
                        </div>
                        <div>
                            <p>15% off your next purchase</p>
                            <p onClick={() => setApma("apmat")}>Apply</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`AddDiaChi ${addDiatri === "nhapdi" ? "diachi" : ""}`}>
                <div onClick={() => setAddDiatri("")} style={{ backgroundColor: "rgb(0, 0, 0, 0.2)", height: "350px" }}>
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
                            <p onClick={handoClick}>Save Changes</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`AddDiaChi ${addDiatri === "1" ? "diachi" : ""}`} style={{ backgroundColor: "white", width: "100%",marginBottom:"15px", position: "absolute", top: "0" }}>
                <div onClick={() => setAddDiatri("")} style={{ backgroundColor: "rgb(0, 0, 0, 0.2)", height: "550px" }}>
                </div>
                <h3 style={{ padding: "15px", backgroundColor: "#F8FAFF", borderRadius: "10px 10px 0px 0px" }}>Payment Methods</h3>
               <AppPayments tongtien={tongtien}/>
            </div>
            <div className={`DthanhToan ${addDiatri === "2" ? "load" : ""}`} onClick={() => setAddDiatri("")}>
                <div style={{ height: "250px" }}>
                    <div className="ttFalse">
                        <div style={{ boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.10)", position: "absolute", top: "-40px", backgroundColor: "white", width: "80px", borderRadius: "50%", padding: "15px 0px", display: "flex", justifyContent: "center" }}>
                            <div style={{ backgroundColor: "#FFEBEB", width: "50px", borderRadius: "50%", padding: "10px 0px", display: "flex", justifyContent: "center" }}>
                                <p style={{ backgroundColor: "#F1AEAE", color: "white", width: "30px", borderRadius: "50%", padding: "4px 0px", border: "3px solid white" }}>!</p>
                            </div>
                        </div>
                        <div style={{ textAlign: "center", paddingTop: "40px" }}>
                            <h3>We couldn't proceed <br /> your payment</h3>
                            <p style={{ fontSize: "13px", marginTop: "10px" }}>Please, change your payment method or try again</p>
                            <div style={{ display: "flex", justifyContent: "space-around", marginTop: "30px" }}>
                                <p style={{ padding: "10px 30px", backgroundColor: "#202020", borderRadius: "10px", color: "white" }}>Try Again</p>
                                <p style={{ padding: "10px 30px", backgroundColor: "#E7E8EB", borderRadius: "10px", color: "white" }}>Change</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ margin: "auto", borderRadius: "10px", height: "151px", position: "relative", backgroundColor: "white", width: "347px" }}>
                    <div style={{ borderRadius: "50%", outline: "5px solid white", position: "absolute", backgroundColor: "white", top: "-30px", right: "150px" }}>
                        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M71 36C71 18.0227 57.4463 3.21096 40 1.22607V6.26434C54.6774 8.21991 66 20.7877 66 36C66 52.5685 52.5685 66 36 66C19.4315 66 6 52.5685 6 36H1C1 55.33 16.67 71 36 71C55.33 71 71 55.33 71 36Z" fill="#004CFF" />
                            <path d="M40 1.22607L40.0565 0.729279L39.5 0.665962V1.22607H40ZM40 6.26434H39.5V6.70214L39.934 6.75996L40 6.26434ZM6 36H6.5V35.5H6V36ZM1 36V35.5H0.5V36H1ZM39.9435 1.72287C57.14 3.67934 70.5 18.2798 70.5 36H71.5C71.5 17.7655 57.7526 2.74258 40.0565 0.729279L39.9435 1.72287ZM40.5 6.26434V1.22607H39.5V6.26434H40.5ZM66.5 36C66.5 20.5338 54.9886 7.75695 40.066 5.76872L39.934 6.75996C54.3663 8.68288 65.5 21.0416 65.5 36H66.5ZM36 66.5C52.8447 66.5 66.5 52.8447 66.5 36H65.5C65.5 52.2924 52.2924 65.5 36 65.5V66.5ZM5.5 36C5.5 52.8447 19.1553 66.5 36 66.5V65.5C19.7076 65.5 6.5 52.2924 6.5 36H5.5ZM1 36.5H6V35.5H1V36.5ZM36 70.5C16.9462 70.5 1.5 55.0538 1.5 36H0.5C0.5 55.6061 16.3939 71.5 36 71.5V70.5ZM70.5 36C70.5 55.0538 55.0538 70.5 36 70.5V71.5C55.6061 71.5 71.5 55.6061 71.5 36H70.5Z" fill="#004CFF" />
                        </svg>
                    </div>
                    <h3 style={{ paddingTop: "70px" }}>Payment is in progress</h3>
                    <p style={{ paddingTop: "10px" }}>Please, wait a few moments</p>
                </div>
                <div className="ttFalse">
                    <div style={{ boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.10)", position: "absolute", top: "-40px", backgroundColor: "white", width: "80px", borderRadius: "50%", padding: "15px 0px", display: "flex", justifyContent: "center" }}>
                        <div style={{ backgroundColor: "#3873FF", width: "50px", borderRadius: "50%", padding: "10px 0px", display: "flex", justifyContent: "center" }}>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.024 8.60889L10.2417 13.3911L8.068 11.2174" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                    </div>
                    <div style={{ textAlign: "center", paddingTop: "40px" }}>
                        <h3>Done!</h3>
                        <p style={{ fontSize: "13px", marginTop: "10px" }}>You card has been successfully charged</p>
                        <div style={{ display: "flex", justifyContent: "space-around", marginTop: "30px" }}>
                            <p style={{ padding: "10px 28px", backgroundColor: "#E7E8EB", borderRadius: "10px" }}>Track My Order</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}
export default Payment;