import React from "react";
import { useState, useEffect } from "react";
import { useRef } from "react";
import img1 from "../Assets/shopdemo/92265483-9E7E-4FC3-A355-16CCA677C11C.png";
import { Link } from "react-router-dom";

function Setting() {
    const [country0, setCountry0] = useState("");
    const [countries, setCountries] = useState([]);
    const [countries1, setCountries1] = useState([]);
    const [country, setCountry] = useState("");
    const [country1, setCountry1] = useState("");
  fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Lọc các quốc gia có tên bắt đầu bằng chữ 'A'
    const countriesStartingWithA = data.filter(country =>
      country.name.common.toLowerCase().startsWith('a')
    );
    // In ra các quốc gia đã lọc
    setCountries(countriesStartingWithA);
    const countriesStartingWithB = data.filter(country1 =>
        country1.name.common.toLowerCase().startsWith('b')
      );
      // In ra các quốc gia đã lọc
      setCountries1(countriesStartingWithB);
  })
  .catch(error => {
    console.error('Đã xảy ra lỗi:', error);
  });

    const inputFileRef = useRef(null);
    const [lenguage, SetLenguage] = useState("")
    const [lenguage1, SetLenguage1] = useState("")
    const [giab, SetGia] = useState("")
    const [size, SetSize] = useState("")
    let ngonNgu
    const chonNgon = () => {
        if (lenguage1 === "1") {
            return ngonNgu = "English"
        }
        if (lenguage1 === "2") {
            return ngonNgu = "Français"
        }
        if (lenguage1 === "3") {
            return ngonNgu = "Русский"
        }
        if (lenguage1 === "4") {
            return ngonNgu = "Tiếng Việt"
        }
        else {
            return ngonNgu = ""
        }
    }
    chonNgon();
    const [sothe, SetSothe] = useState("")
    const [hanThe, SetHanThe] = useState("")
    let gia
    const chongia = () => {
        if (giab === "1") {
            return gia = "$ USD"
        }
        if (giab === "2") {
            return gia = "€ EURO"
        }
        if (giab === "3") {
            return gia = "₫ VND"
        }
        if (giab === "4") {
            return gia = "₽ RUB"
        }
        else {
            return gia = ""
        }
    }
    chongia();
    const [avata1, setAvatat1] = useState("")
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
    };
    const [numBerCar, SetNumBerCar] = useState("")
    const [numBerCar2, SetNumBerCar2] = useState("")
    const Addttthe = () => {
        if (sothe !== "" && hanThe !== "") {
            return SetNumBerCar(sothe), SetNumBerCar2(hanThe)
        }
        else {
            return alert("nhap đi")
        }
    }
    return (
        <div className="hero">
            <h3 style={{ margin: "auto", width: "334.92px" }} onClick={() => { SetLenguage("") }}>Settings</h3>
            <div className={`MenuSetting1 ${lenguage === "" ? "onchien" : ""}`}>

                <div>
                    <h4 style={{ padding: "15px 0px 20px 0px", margin: "auto", width: "334.92px" }}>Personal</h4>
                    <div className="MenuSetting">
                        <div>
                            <p>Profile</p> <svg onClick={() => { SetLenguage("6") }} width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_0_1499)">
                                    <path d="M1.5618 17.4135C1.44045 17.5348 1.28877 17.5955 1.12191 17.5955C0.955057 17.5955 0.803373 17.5348 0.682024 17.4135C0.439325 17.1708 0.439325 16.7764 0.682024 16.5337L8.41797 8.79774L0.682024 1.0618C0.439325 0.8191 0.439325 0.424719 0.682024 0.182022C0.924719 -0.0606741 1.3191 -0.0606741 1.5618 0.182022L9.73763 8.35786C9.98033 8.60055 9.98033 8.99494 9.73763 9.23763L1.5618 17.4135Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_1499">
                                        <rect width="9.41966" height="17.5955" fill="white" transform="translate(0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                        <div>
                            <p>Shipping Address</p>
                            <svg onClick={() => { SetLenguage("8") }} width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_0_1499)">
                                    <path d="M1.5618 17.4135C1.44045 17.5348 1.28877 17.5955 1.12191 17.5955C0.955057 17.5955 0.803373 17.5348 0.682024 17.4135C0.439325 17.1708 0.439325 16.7764 0.682024 16.5337L8.41797 8.79774L0.682024 1.0618C0.439325 0.8191 0.439325 0.424719 0.682024 0.182022C0.924719 -0.0606741 1.3191 -0.0606741 1.5618 0.182022L9.73763 8.35786C9.98033 8.60055 9.98033 8.99494 9.73763 9.23763L1.5618 17.4135Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_1499">
                                        <rect width="9.41966" height="17.5955" fill="white" transform="translate(0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div>
                            <p>Payment methods</p>
                            <svg onClick={() => { SetLenguage("7") }} width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_0_1499)">
                                    <path d="M1.5618 17.4135C1.44045 17.5348 1.28877 17.5955 1.12191 17.5955C0.955057 17.5955 0.803373 17.5348 0.682024 17.4135C0.439325 17.1708 0.439325 16.7764 0.682024 16.5337L8.41797 8.79774L0.682024 1.0618C0.439325 0.8191 0.439325 0.424719 0.682024 0.182022C0.924719 -0.0606741 1.3191 -0.0606741 1.5618 0.182022L9.73763 8.35786C9.98033 8.60055 9.98033 8.99494 9.73763 9.23763L1.5618 17.4135Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_1499">
                                        <rect width="9.41966" height="17.5955" fill="white" transform="translate(0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 style={{ padding: "15px 0px 20px 0px", margin: "auto", width: "334.92px" }}>Shop</h4>
                    <div className="MenuSetting">
                        <div>
                            <p>Country</p>
                            <p >
                                <p style={{ marginTop: "10px", float: "left" }}>{country0}</p>
                                <svg style={{ marginLeft: "5px", marginTop: "10px" }} onClick={() => { SetLenguage("9") }} width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_0_1499)">
                                        <path d="M1.5618 17.4135C1.44045 17.5348 1.28877 17.5955 1.12191 17.5955C0.955057 17.5955 0.803373 17.5348 0.682024 17.4135C0.439325 17.1708 0.439325 16.7764 0.682024 16.5337L8.41797 8.79774L0.682024 1.0618C0.439325 0.8191 0.439325 0.424719 0.682024 0.182022C0.924719 -0.0606741 1.3191 -0.0606741 1.5618 0.182022L9.73763 8.35786C9.98033 8.60055 9.98033 8.99494 9.73763 9.23763L1.5618 17.4135Z" fill="black" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_0_1499">
                                            <rect width="9.41966" height="17.5955" fill="white" transform="translate(0.5)" />
                                        </clipPath>
                                    </defs>
                                </svg></p>
                        </div>
                        <div>
                            <p>Currency</p>
                            <p >
                                <p style={{ marginTop: "10px", float: "left" }}>{gia}</p><svg style={{ marginLeft: "5px", marginTop: "10px" }} onClick={() => { SetLenguage("2") }} width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_0_1499)">
                                        <path d="M1.5618 17.4135C1.44045 17.5348 1.28877 17.5955 1.12191 17.5955C0.955057 17.5955 0.803373 17.5348 0.682024 17.4135C0.439325 17.1708 0.439325 16.7764 0.682024 16.5337L8.41797 8.79774L0.682024 1.0618C0.439325 0.8191 0.439325 0.424719 0.682024 0.182022C0.924719 -0.0606741 1.3191 -0.0606741 1.5618 0.182022L9.73763 8.35786C9.98033 8.60055 9.98033 8.99494 9.73763 9.23763L1.5618 17.4135Z" fill="black" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_0_1499">
                                            <rect width="9.41966" height="17.5955" fill="white" transform="translate(0.5)" />
                                        </clipPath>
                                    </defs>
                                </svg></p>
                        </div>
                        <div>
                            <p>Sizes</p>
                            <p >
                                <p style={{ marginTop: "10px", float: "left" }}>{size}</p><svg style={{ marginLeft: "5px", marginTop: "10px" }} onClick={() => { SetLenguage("3") }} width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_0_1499)">
                                        <path d="M1.5618 17.4135C1.44045 17.5348 1.28877 17.5955 1.12191 17.5955C0.955057 17.5955 0.803373 17.5348 0.682024 17.4135C0.439325 17.1708 0.439325 16.7764 0.682024 16.5337L8.41797 8.79774L0.682024 1.0618C0.439325 0.8191 0.439325 0.424719 0.682024 0.182022C0.924719 -0.0606741 1.3191 -0.0606741 1.5618 0.182022L9.73763 8.35786C9.98033 8.60055 9.98033 8.99494 9.73763 9.23763L1.5618 17.4135Z" fill="black" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_0_1499">
                                            <rect width="9.41966" height="17.5955" fill="white" transform="translate(0.5)" />
                                        </clipPath>
                                    </defs>
                                </svg></p>
                        </div>
                        <div>
                            <p>Terms and Conditions</p>
                            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_0_1499)">
                                    <path d="M1.5618 17.4135C1.44045 17.5348 1.28877 17.5955 1.12191 17.5955C0.955057 17.5955 0.803373 17.5348 0.682024 17.4135C0.439325 17.1708 0.439325 16.7764 0.682024 16.5337L8.41797 8.79774L0.682024 1.0618C0.439325 0.8191 0.439325 0.424719 0.682024 0.182022C0.924719 -0.0606741 1.3191 -0.0606741 1.5618 0.182022L9.73763 8.35786C9.98033 8.60055 9.98033 8.99494 9.73763 9.23763L1.5618 17.4135Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_1499">
                                        <rect width="9.41966" height="17.5955" fill="white" transform="translate(0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 style={{ padding: "15px 0px 20px 0px", margin: "auto", width: "334.92px" }}>Account</h4>
                    <div className="MenuSetting">
                        <div>
                            <p>Language</p>
                            <p >
                                <p style={{ marginTop: "10px", float: "left" }}>{ngonNgu}</p><svg style={{ marginLeft: "5px", marginTop: "10px" }} onClick={() => { SetLenguage("1") }} width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_0_1499)">
                                        <path d="M1.5618 17.4135C1.44045 17.5348 1.28877 17.5955 1.12191 17.5955C0.955057 17.5955 0.803373 17.5348 0.682024 17.4135C0.439325 17.1708 0.439325 16.7764 0.682024 16.5337L8.41797 8.79774L0.682024 1.0618C0.439325 0.8191 0.439325 0.424719 0.682024 0.182022C0.924719 -0.0606741 1.3191 -0.0606741 1.5618 0.182022L9.73763 8.35786C9.98033 8.60055 9.98033 8.99494 9.73763 9.23763L1.5618 17.4135Z" fill="black" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_0_1499">
                                            <rect width="9.41966" height="17.5955" fill="white" transform="translate(0.5)" />
                                        </clipPath>
                                    </defs>
                                </svg></p>


                        </div>
                        <div>
                            <p>About Slada</p>
                            <p></p>
                            <Link to="/Start"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_0_1499)">
                                    <path d="M1.5618 17.4135C1.44045 17.5348 1.28877 17.5955 1.12191 17.5955C0.955057 17.5955 0.803373 17.5348 0.682024 17.4135C0.439325 17.1708 0.439325 16.7764 0.682024 16.5337L8.41797 8.79774L0.682024 1.0618C0.439325 0.8191 0.439325 0.424719 0.682024 0.182022C0.924719 -0.0606741 1.3191 -0.0606741 1.5618 0.182022L9.73763 8.35786C9.98033 8.60055 9.98033 8.99494 9.73763 9.23763L1.5618 17.4135Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_1499">
                                        <rect width="9.41966" height="17.5955" fill="white" transform="translate(0.5)" />
                                    </clipPath>
                                </defs>
                            </svg></Link>
                        </div>
                    </div>


                    <div style={{ paddingBottom: "100px", margin: "auto", width: "334.92px" }}>
                        <p onClick={() => { SetLenguage("4") }} style={{ color: "#D97474", margin: "31px 0px" }}>Delete My Account</p>
                        <h4 style={{ marginBottom: "5px" }}>Slada</h4>
                        <p>Version 1.0 April, 2020</p>
                    </div>
                </div>
            </div>
            <div className={`Language ${lenguage === "1" ? "onchien" : ""}`}>
                <p style={{ margin: " 10px 20px" }}>Language</p>
                <div onClick={() => { SetLenguage1("1") }} className={`${lenguage1 === "1" ? "onchien1" : ""}`}>
                    <p>English</p>
                    <svg className={`Language ${lenguage1 === "1" ? "onchien" : ""}`} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#004CFF" stroke="white" stroke-width="2" />
                        <path d="M17.0241 10.6089L12.2419 15.3911L10.0681 13.2174" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <svg className={`Language ${lenguage1 === "1" ? "" : "onchien"}`} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#F8CECE" stroke="white" stroke-width="2" />
                    </svg>
                </div>
                <div onClick={() => { SetLenguage1("2") }} className={`${lenguage1 === "2" ? "onchien1" : ""}`}>
                    <p>Français</p>
                    <svg className={`Language ${lenguage1 === "2" ? "onchien" : ""}`} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#004CFF" stroke="white" stroke-width="2" />
                        <path d="M17.0241 10.6089L12.2419 15.3911L10.0681 13.2174" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <svg className={`Language ${lenguage1 === "2" ? "" : "onchien"}`} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#F8CECE" stroke="white" stroke-width="2" />
                    </svg>
                </div>
                <div onClick={() => { SetLenguage1("3") }} className={`${lenguage1 === "3" ? "onchien1" : ""}`}>
                    <p>Русский</p>
                    <svg className={`Language ${lenguage1 === "3" ? "onchien" : ""}`} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#004CFF" stroke="white" stroke-width="2" />
                        <path d="M17.0241 10.6089L12.2419 15.3911L10.0681 13.2174" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <svg className={`Language ${lenguage1 === "3" ? "" : "onchien"}`} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#F8CECE" stroke="white" stroke-width="2" />
                    </svg>
                </div>
                <div onClick={() => { SetLenguage1("4") }} className={`${lenguage1 === "4" ? "onchien1" : ""}`}>
                    <p>Tiếng Việt</p>
                    <svg className={`Language ${lenguage1 === "4" ? "onchien" : ""}`} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#004CFF" stroke="white" stroke-width="2" />
                        <path d="M17.0241 10.6089L12.2419 15.3911L10.0681 13.2174" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <svg className={`Language ${lenguage1 === "4" ? "" : "onchien"}`} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#F8CECE" stroke="white" stroke-width="2" />
                    </svg>
                </div>

            </div>
            <div className={`Language ${lenguage === "2" ? "onchien" : ""}`}>
                <p style={{ margin: " 10px 20px" }}>Currency</p>
                <div onClick={() => { SetGia("1") }} className={`${giab === "1" ? "onchien1" : ""}`}>
                    <p>$ USD</p>
                    <svg className={`Language ${giab === "1" ? "onchien" : ""}`} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#004CFF" stroke="white" stroke-width="2" />
                        <path d="M17.0241 10.6089L12.2419 15.3911L10.0681 13.2174" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <svg className={`Language ${giab === "1" ? "" : "onchien"}`} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#F8CECE" stroke="white" stroke-width="2" />
                    </svg>
                </div>
                <div onClick={() => { SetGia("2") }} className={`${giab === "2" ? "onchien1" : ""}`}>
                    <p>€ EURO</p>
                    <svg className={`Language ${giab === "2" ? "onchien" : ""}`} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#004CFF" stroke="white" stroke-width="2" />
                        <path d="M17.0241 10.6089L12.2419 15.3911L10.0681 13.2174" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <svg className={`Language ${giab === "2" ? "" : "onchien"}`} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#F8CECE" stroke="white" stroke-width="2" />
                    </svg>
                </div>
                <div onClick={() => { SetGia("3") }} className={`${giab === "3" ? "onchien1" : ""}`}>
                    <p>₫ VND</p>
                    <svg className={`Language ${giab === "3" ? "onchien" : ""}`} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#004CFF" stroke="white" stroke-width="2" />
                        <path d="M17.0241 10.6089L12.2419 15.3911L10.0681 13.2174" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <svg className={`Language ${giab === "3" ? "" : "onchien"}`} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#F8CECE" stroke="white" stroke-width="2" />
                    </svg>
                </div>
                <div onClick={() => { SetGia("4") }} className={`${giab === "4" ? "onchien1" : ""}`}>
                    <p>₽ RUB</p>
                    <svg className={`Language ${giab === "4" ? "onchien" : ""}`} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#004CFF" stroke="white" stroke-width="2" />
                        <path d="M17.0241 10.6089L12.2419 15.3911L10.0681 13.2174" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <svg className={`Language ${giab === "4" ? "" : "onchien"}`} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#F8CECE" stroke="white" stroke-width="2" />
                    </svg>
                </div>

            </div>
            <div className={`Language ${lenguage === "3" ? "onchien" : ""}`}>
                <p style={{ margin: " 10px 20px" }}>Currency</p>
                <div onClick={() => { SetSize("US") }} className={`${size === "US" ? "onchien1" : ""}`}>
                    <p>US</p>
                    <svg className={`Language ${size === "US" ? "onchien" : ""}`} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#004CFF" stroke="white" stroke-width="2" />
                        <path d="M17.0241 10.6089L12.2419 15.3911L10.0681 13.2174" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <svg className={`Language ${size === "US" ? "" : "onchien"}`} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#F8CECE" stroke="white" stroke-width="2" />
                    </svg>
                </div>
                <div onClick={() => { SetSize("EU") }} className={`${size === "EU" ? "onchien1" : ""}`}>
                    <p>EU</p>
                    <svg className={`Language ${size === "EU" ? "onchien" : ""}`} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#004CFF" stroke="white" stroke-width="2" />
                        <path d="M17.0241 10.6089L12.2419 15.3911L10.0681 13.2174" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <svg className={`Language ${size === "EU" ? "" : "onchien"}`} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#F8CECE" stroke="white" stroke-width="2" />
                    </svg>
                </div>
                <div onClick={() => { SetSize("UK") }} className={`${size === "UK" ? "onchien1" : ""}`}>
                    <p>UK</p>
                    <svg className={`Language ${size === "UK" ? "onchien" : ""}`} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#004CFF" stroke="white" stroke-width="2" />
                        <path d="M17.0241 10.6089L12.2419 15.3911L10.0681 13.2174" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <svg className={`Language ${size === "UK" ? "" : "onchien"}`} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#F8CECE" stroke="white" stroke-width="2" />
                    </svg>
                </div>
            </div>

            <div className={`xoaiclub ${lenguage === "4" ? "onchien" : ""}`} style={{ position: "absolute", top: "0px", left: "8px", padding: "10px", backgroundColor: "rgb(233, 233, 233, 0.9)", height: "800px" }}>
                <div style={{ height: "400px" }}></div>
                <div style={{ position: "relative", borderRadius: "10px", textAlign: "center", width: "347px", margin: "auto", backgroundColor: "#ffffff" }}>
                    <div style={{ position: "absolute", top: "-40px", left: "130px", backgroundColor: "#ffffff", borderRadius: "50%", width: "80px", height: "80px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <div style={{ backgroundColor: "#F9f9f9", borderRadius: "50%", width: "50px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <p style={{ backgroundColor: "#F8CECE", borderRadius: "50%", width: "22px", height: "22px", display: "flex", justifyContent: "center", alignItems: "center", color: "white" }}>
                                <span>!</span>
                            </p>
                        </div>
                    </div>

                    <h2 style={{ paddingTop: "40px" }}>You are going to delete<br /> your account</h2>
                    <p style={{ fontSize: "13px", margin: "10px" }}>You won't be able to restore your data</p>

                    <div style={{ display: "flex", justifyContent: "space-around", paddingBottom: "20px" }}>
                        <p onClick={() => { SetLenguage("") }} style={{ lineHeight: "40px", borderRadius: "10px", backgroundColor: "#202020", color: "white", width: "128px", height: "40px" }}>Cancel</p>
                        <p onClick={() => { SetLenguage("5") }} style={{ lineHeight: "40px", borderRadius: "10px", backgroundColor: "#D97474", color: "white", width: "128px", height: "40px" }}>Delete</p>
                    </div>

                </div>
            </div>
            <div className={`xoaiclub ${lenguage === "5" ? "onchien" : ""}`}>
                <div style={{ width: "82px", margin: "auto", padding: "60px 0px" }}>
                    <svg width="82" height="92" viewBox="0 0 82 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M74.4857 88.231L0 89.0688L13.1998 16.1275L65.6855 19.1261L74.4857 88.231Z" fill="#8BC6FF" />
                        <path d="M81.3998 92H11.8379L12.2287 88.9313L74.4857 88.2308L65.9912 21.5261L74.4857 20.6151L81.3998 92Z" fill="#0051FF" fill-opacity="0.6" />
                        <path d="M12.229 88.9316L20.1874 26.4361L65.9915 21.5264L74.486 88.2311L12.229 88.9316Z" fill="#0051FF" fill-opacity="0.6" />
                        <path d="M57.3532 14.1611H52.9025C52.9025 8.80543 48.544 4.44892 43.1853 4.44892C37.8276 4.44892 33.4681 8.80543 33.4681 14.1611H29.0173C29.0173 6.35308 35.3732 0.000199318 43.1853 0.000199318C50.9973 0.000199318 57.3532 6.35308 57.3532 14.1611Z" fill="#5982DA" />
                    </svg>
                </div>
                <div style={{ marginBottom: "100px" }}>
                    <h3 style={{ margin: "10px" }}>About Shoppe</h3>
                    <p style={{ margin: "10px", fontSize: "16px", lineHeight: "20px" }}>Shoppe - Shopping UI kit" is likely a user interface (UI) kit designed to facilitate the development of e-commerce or shopping-related applications. UI kits are collections of pre-designed elements, components, and templates that developers and designers can use to create consistent and visually appealing user interfaces.</p>
                    <p style={{ margin: "10px", fontSize: "16px" }}>If you need help or you have any questions, feel free to contact me by email.</p>
                    <h4 style={{ margin: "10px" }}>hello@mydomain.com</h4>
                </div>
            </div>
            <div className={`xoaiclub ${lenguage === "6" ? "onchien" : ""}`} style={{ marginLeft: "20px" }}>
                <p style={{ marginTop: "10px" }}>Your Profile</p>
                <div style={{ position: "relative", width: "80px", height: "100px" }}>
                    <img className={`${avata1 === "1" ? "onchien2" : ""}`} style={{ border: "4px solid white", borderRadius: "50px", marginTop: "25px", boxShadow: "0px 5px 5px 5px rgba(0.10, 0.10, 0.10, 0.10)" }} alt="Avatar Preview" width="70px" height="70px" src={img1} />
                    {avata && <img src={avata.preview} className={`${avata1 === "1" ? "" : "onchien2"}`} style={{ border: "4px solid white", borderRadius: "50px", marginTop: "25px", boxShadow: "0px 5px 5px 5px rgba(0.10, 0.10, 0.10, 0.10)" }} alt="Avatar Preview" width="70px" height="70px" />}
                    <div onClick={() => { inputFileRef.current.click() }} style={{ position: "absolute", top: "20px", right: "0px" }}>
                        <svg onClick={() => { setAvatat1("1") }} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_0_1288)">
                                <path d="M29 15C29 22.732 22.732 29 15 29C7.26801 29 1 22.732 1 15C1 7.26801 7.26801 1 15 1C22.732 1 29 7.26801 29 15Z" fill="#004BFE" stroke="white" stroke-width="2" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.69995 18.6892V21.5016H11.5124L19.8073 13.2068L16.9948 10.3943L8.69995 18.6892ZM21.9822 11.0318C22.2747 10.7393 22.2747 10.2668 21.9822 9.97434L20.2272 8.21937C19.9347 7.92688 19.4623 7.92688 19.1698 8.21937L17.7973 9.59185L20.6097 12.4043L21.9822 11.0318H21.9822Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_0_1288">
                                    <rect width="30" height="30" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <input ref={inputFileRef} onChange={onFileChange} hidden type="file" accept="image/*" ></input>
                    </div>

                </div>
                <div className="inputSetting">
                    <input type="text" placeholder="names"></input>
                    <input type="email" placeholder="email"></input>
                    <input type="password" placeholder="password"></input>
                    <div style={{ width: "95%", backgroundColor: "#004CFF", padding: "15px 0px", textAlign: "center", marginTop: "100px", borderRadius: "10px" }}>
                        <p>Save Changes</p>
                    </div>
                </div>
            </div>
            <div className={`xoaiclub ${lenguage === "7" ? "onchien" : ""}`}>

                <p>Payment Methods</p>
                <div style={{ display: "flex" }}>
                    <div className="CarBank">
                        <div>
                            <svg width="57" height="35" viewBox="0 0 57 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_9_5987)">
                                    <rect x="20.5797" y="3.89307" width="15.1614" height="27.3167" fill="#FF5F00" />
                                    <path d="M21.4947 17.6168C21.4947 12.2581 23.978 7.29135 28.1604 3.89313C20.5798 -1.98846 9.73162 -0.681425 3.71917 6.7685C-2.16243 14.3492 -0.855359 25.1975 6.59459 31.2098C12.8683 36.1765 21.756 36.1765 28.0297 31.2098C23.978 27.9423 21.4947 22.9756 21.4947 17.6168Z" fill="#EB001B" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M56.2609 17.6167C56.2609 27.1579 48.5496 35 38.8776 35C34.9566 35 31.1662 33.693 28.16 31.3404C35.7407 25.4588 37.0478 14.4798 31.0355 7.02983C30.1205 5.98423 29.2056 4.93858 28.16 4.15434C35.7407 -1.72722 46.5889 -0.420217 52.4705 7.02983C54.9539 9.90525 56.2609 13.6956 56.2609 17.6167ZM54.5619 28.3342V27.8114H54.8232V27.6808H54.3004V27.8114H54.5619V28.3342ZM55.7381 28.3342V27.6808H55.6074L55.346 28.2035L55.0846 27.6808H54.9539V28.3342H55.0846V27.8114L55.346 28.2035H55.4766L55.6073 27.8114V28.3342H55.7381Z" fill="#F79E1B" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_9_5987">
                                        <rect width="56.2259" height="34.7908" fill="white" transform="translate(0.0350342 0.208984)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg onClick={() => { SetSize("2") }} width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_9_5999)">
                                    <path d="M17.5 35C27.165 35 35 27.165 35 17.5C35 7.83502 27.165 0 17.5 0C7.83502 0 0 7.83502 0 17.5C0 27.165 7.83502 35 17.5 35Z" fill="#E5EBFC" />
                                </g>
                                <g clip-path="url(#clip1_9_5999)">
                                    <path d="M19.5982 17.9646C19.5982 19.0032 18.7562 19.8451 17.7176 19.8451C16.679 19.8451 15.837 19.0032 15.837 17.9646C15.837 16.9259 16.679 16.084 17.7176 16.084C18.7562 16.084 19.5982 16.9259 19.5982 17.9646Z" stroke="#004BFE" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M22.2158 19.788C22.0503 20.1631 22.1297 20.6012 22.4164 20.8943L22.4529 20.9308C22.6812 21.1588 22.8094 21.4683 22.8094 21.7909C22.8094 22.1136 22.6812 22.423 22.4529 22.6511C22.2248 22.8794 21.9154 23.0076 21.5927 23.0076C21.2701 23.0076 20.9606 22.8794 20.7326 22.6511L20.6961 22.6146C20.403 22.3279 19.9649 22.2485 19.5898 22.414C19.2224 22.5715 18.9835 22.9321 18.9819 23.3319V23.4352C18.9819 24.1067 18.4376 24.651 17.7662 24.651C17.0948 24.651 16.5505 24.1067 16.5505 23.4352V23.3805C16.5408 22.9688 16.2805 22.6048 15.894 22.4626C15.5189 22.2971 15.0807 22.3765 14.7876 22.6632L14.7512 22.6997C14.5231 22.928 14.2137 23.0563 13.891 23.0563C13.5684 23.0563 13.2589 22.928 13.0309 22.6997C12.8026 22.4717 12.6743 22.1622 12.6743 21.8396C12.6743 21.5169 12.8026 21.2075 13.0309 20.9794L13.0674 20.943C13.3541 20.6499 13.4335 20.2118 13.268 19.8366C13.1105 19.4692 12.7498 19.2304 12.3501 19.2288L12.2467 19.2288C11.5753 19.2288 11.031 18.6845 11.031 18.013C11.031 17.3416 11.5753 16.7973 12.2467 16.7973H12.3015C12.7132 16.7877 13.0772 16.5273 13.2193 16.1408C13.3849 15.7657 13.3055 15.3276 13.0187 15.0345L12.9823 14.998C12.754 14.77 12.6257 14.4605 12.6257 14.1379C12.6257 13.8152 12.754 13.5058 12.9823 13.2777C13.2103 13.0494 13.5197 12.9212 13.8424 12.9212C14.1651 12.9212 14.4745 13.0494 14.7025 13.2777L14.739 13.3142C15.0321 13.6009 15.4702 13.6803 15.8453 13.5148H15.894C16.2614 13.3573 16.5002 12.9967 16.5018 12.5969V12.4936C16.5018 11.8221 17.0461 11.2778 17.7176 11.2778C18.389 11.2778 18.9333 11.8221 18.9333 12.4936V12.5483C18.9349 12.948 19.1737 13.3087 19.5412 13.4662C19.9163 13.6317 20.3544 13.5523 20.6475 13.2656L20.684 13.2291C20.912 13.0008 21.2214 12.8725 21.5441 12.8725C21.8668 12.8725 22.1762 13.0008 22.4042 13.2291C22.6325 13.4571 22.7608 13.7666 22.7608 14.0892C22.7608 14.4119 22.6325 14.7213 22.4042 14.9494L22.3678 14.9858C22.0811 15.2789 22.0016 15.7171 22.1672 16.0922L22.1672 16.1408C22.3247 16.5082 22.6853 16.7471 23.0851 16.7487H23.1884C23.8598 16.7487 24.4041 17.293 24.4041 17.9644C24.4041 18.6358 23.8598 19.1801 23.1884 19.1801H23.1337C22.7339 19.1817 22.3733 19.4206 22.2158 19.788L22.2158 19.788Z" stroke="#004BFE" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_9_5999">
                                        <rect width="35" height="35" fill="white" />
                                    </clipPath>
                                    <clipPath id="clip1_9_5999">
                                        <rect width="13.3731" height="13.3731" fill="white" transform="translate(11.031 11.2778)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>

                        <p style={{ height: "30px", marginLeft: "10px", lineHeight: "30px" }}>{numBerCar} </p>
                        <div style={{ display: "flex", margin: "20px 10px", justifyContent: "space-between" }}>
                            <p>Amanda Morgan</p>
                            <p>{numBerCar2}</p>
                        </div>


                    </div>
                    <div onClick={() => { SetSize("1") }} className="AddCarBank">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2637_1009)">
                                <path d="M6 0.5V11.5" stroke="white" stroke-width="2" stroke-linecap="round" />
                                <path d="M11.5 6H0.5" stroke="white" stroke-width="2" stroke-linecap="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2637_1009">
                                    <rect width="11" height="11" fill="white" transform="translate(0.5 0.5)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div>
                    <div style={{ backgroundColor: "#F1F4FE", borderRadius: "10px", alignItems: "center", padding: "5px 0px", margin: "10px 0px", display: "flex", justifyContent: "space-around" }}>
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.17241 5.12598H15.8276C16.6846 5.12598 17.3793 5.81727 17.3793 6.67003L18 18.4048C18 19.2576 17.3053 19.9489 16.4483 19.9489H1.55172C0.69473 19.9489 0 19.2576 0 18.4048L0.620689 6.67003C0.620689 5.81727 1.31542 5.12598 2.17241 5.12598Z" fill="#004CFF" />
                            <path d="M4.39801 8.50448V4.11865C4.39801 2.39627 5.78448 1 7.49478 1H10.3128C12.0231 1 13.4095 2.39627 13.4095 4.11865V8.50448" stroke="white" stroke-width="2" stroke-linecap="round" />
                            <path d="M4.39801 4.71268V4.11865C4.39801 2.39627 5.78448 1 7.49478 1H10.3128C12.0231 1 13.4095 2.39627 13.4095 4.11865V4.71268" stroke="#004CFF" stroke-width="2" stroke-linecap="round" />
                        </svg>
                        <div>
                            <p>April,19 2020 12:31</p>
                            <h5>Order #92287157</h5>
                        </div>
                        <h3>-$14,00</h3>
                    </div>
                    <div style={{ backgroundColor: "#F1F4FE", borderRadius: "10px", alignItems: "center", padding: "5px 0px", margin: "10px 0px", display: "flex", justifyContent: "space-around" }}>
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.17241 5.12598H15.8276C16.6846 5.12598 17.3793 5.81727 17.3793 6.67003L18 18.4048C18 19.2576 17.3053 19.9489 16.4483 19.9489H1.55172C0.69473 19.9489 0 19.2576 0 18.4048L0.620689 6.67003C0.620689 5.81727 1.31542 5.12598 2.17241 5.12598Z" fill="#004CFF" />
                            <path d="M4.39801 8.50448V4.11865C4.39801 2.39627 5.78448 1 7.49478 1H10.3128C12.0231 1 13.4095 2.39627 13.4095 4.11865V8.50448" stroke="white" stroke-width="2" stroke-linecap="round" />
                            <path d="M4.39801 4.71268V4.11865C4.39801 2.39627 5.78448 1 7.49478 1H10.3128C12.0231 1 13.4095 2.39627 13.4095 4.11865V4.71268" stroke="#004CFF" stroke-width="2" stroke-linecap="round" />
                        </svg>
                        <div>
                            <p>April,19 2020 12:31</p>
                            <h5>Order #92287157</h5>
                        </div>
                        <h3>-$14,00</h3>
                    </div>
                    <div style={{ backgroundColor: "#F1F4FE", borderRadius: "10px", alignItems: "center", padding: "5px 0px", margin: "10px 0px", display: "flex", justifyContent: "space-around" }}>
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.17241 5.12598H15.8276C16.6846 5.12598 17.3793 5.81727 17.3793 6.67003L18 18.4048C18 19.2576 17.3053 19.9489 16.4483 19.9489H1.55172C0.69473 19.9489 0 19.2576 0 18.4048L0.620689 6.67003C0.620689 5.81727 1.31542 5.12598 2.17241 5.12598Z" fill="#004CFF" />
                            <path d="M4.39801 8.50448V4.11865C4.39801 2.39627 5.78448 1 7.49478 1H10.3128C12.0231 1 13.4095 2.39627 13.4095 4.11865V8.50448" stroke="white" stroke-width="2" stroke-linecap="round" />
                            <path d="M4.39801 4.71268V4.11865C4.39801 2.39627 5.78448 1 7.49478 1H10.3128C12.0231 1 13.4095 2.39627 13.4095 4.11865V4.71268" stroke="#004CFF" stroke-width="2" stroke-linecap="round" />
                        </svg>
                        <div>
                            <p>April,19 2020 12:31</p>
                            <h5>Order #92287157</h5>
                        </div>
                        <h3>-$14,00</h3>
                    </div>
                    <div style={{ backgroundColor: "#F1F4FE", borderRadius: "10px", alignItems: "center", padding: "5px 0px", margin: "10px 0px", display: "flex", justifyContent: "space-around" }}>
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.17241 5.12598H15.8276C16.6846 5.12598 17.3793 5.81727 17.3793 6.67003L18 18.4048C18 19.2576 17.3053 19.9489 16.4483 19.9489H1.55172C0.69473 19.9489 0 19.2576 0 18.4048L0.620689 6.67003C0.620689 5.81727 1.31542 5.12598 2.17241 5.12598Z" fill="#004CFF" />
                            <path d="M4.39801 8.50448V4.11865C4.39801 2.39627 5.78448 1 7.49478 1H10.3128C12.0231 1 13.4095 2.39627 13.4095 4.11865V8.50448" stroke="white" stroke-width="2" stroke-linecap="round" />
                            <path d="M4.39801 4.71268V4.11865C4.39801 2.39627 5.78448 1 7.49478 1H10.3128C12.0231 1 13.4095 2.39627 13.4095 4.11865V4.71268" stroke="#004CFF" stroke-width="2" stroke-linecap="round" />
                        </svg>
                        <div>
                            <p>April,19 2020 12:31</p>
                            <h5>Order #92287157</h5>
                        </div>
                        <h3>-$14,00</h3>
                    </div>
                    <div style={{ backgroundColor: "#F1F4FE", borderRadius: "10px", alignItems: "center", padding: "5px 0px", margin: "10px 0px", display: "flex", justifyContent: "space-around" }}>
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.17241 5.12598H15.8276C16.6846 5.12598 17.3793 5.81727 17.3793 6.67003L18 18.4048C18 19.2576 17.3053 19.9489 16.4483 19.9489H1.55172C0.69473 19.9489 0 19.2576 0 18.4048L0.620689 6.67003C0.620689 5.81727 1.31542 5.12598 2.17241 5.12598Z" fill="#004CFF" />
                            <path d="M4.39801 8.50448V4.11865C4.39801 2.39627 5.78448 1 7.49478 1H10.3128C12.0231 1 13.4095 2.39627 13.4095 4.11865V8.50448" stroke="white" stroke-width="2" stroke-linecap="round" />
                            <path d="M4.39801 4.71268V4.11865C4.39801 2.39627 5.78448 1 7.49478 1H10.3128C12.0231 1 13.4095 2.39627 13.4095 4.11865V4.71268" stroke="#004CFF" stroke-width="2" stroke-linecap="round" />
                        </svg>
                        <div>
                            <p>April,19 2020 12:31</p>
                            <h5>Order #92287157</h5>
                        </div>
                        <h3>-$14,00</h3>
                    </div>
                    <div style={{ backgroundColor: "#F1F4FE", borderRadius: "10px", alignItems: "center", padding: "5px 0px", margin: "10px 0px", display: "flex", justifyContent: "space-around" }}>
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.17241 5.12598H15.8276C16.6846 5.12598 17.3793 5.81727 17.3793 6.67003L18 18.4048C18 19.2576 17.3053 19.9489 16.4483 19.9489H1.55172C0.69473 19.9489 0 19.2576 0 18.4048L0.620689 6.67003C0.620689 5.81727 1.31542 5.12598 2.17241 5.12598Z" fill="#004CFF" />
                            <path d="M4.39801 8.50448V4.11865C4.39801 2.39627 5.78448 1 7.49478 1H10.3128C12.0231 1 13.4095 2.39627 13.4095 4.11865V8.50448" stroke="white" stroke-width="2" stroke-linecap="round" />
                            <path d="M4.39801 4.71268V4.11865C4.39801 2.39627 5.78448 1 7.49478 1H10.3128C12.0231 1 13.4095 2.39627 13.4095 4.11865V4.71268" stroke="#004CFF" stroke-width="2" stroke-linecap="round" />
                        </svg>
                        <div>
                            <p>April,19 2020 12:31</p>
                            <h5>Order #92287157</h5>
                        </div>
                        <h3>-$14,00</h3>
                    </div>
                    <div style={{ backgroundColor: "#F1F4FE", borderRadius: "10px", alignItems: "center", padding: "5px 0px", margin: "10px 0px", display: "flex", justifyContent: "space-around" }}>
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.17241 5.12598H15.8276C16.6846 5.12598 17.3793 5.81727 17.3793 6.67003L18 18.4048C18 19.2576 17.3053 19.9489 16.4483 19.9489H1.55172C0.69473 19.9489 0 19.2576 0 18.4048L0.620689 6.67003C0.620689 5.81727 1.31542 5.12598 2.17241 5.12598Z" fill="#D97474" />
                            <path d="M4.39801 8.50448V4.11865C4.39801 2.39627 5.78448 1 7.49478 1H10.3128C12.0231 1 13.4095 2.39627 13.4095 4.11865V8.50448" stroke="white" stroke-width="2" stroke-linecap="round" />
                            <path d="M4.39801 4.71268V4.11865C4.39801 2.39627 5.78448 1 7.49478 1H10.3128C12.0231 1 13.4095 2.39627 13.4095 4.11865V4.71268" stroke="#D97474" stroke-width="2" stroke-linecap="round" />
                        </svg>
                        <div>
                            <p>April,19 2020 12:31</p>
                            <h5>Order #92287157</h5>
                        </div>
                        <h3 style={{ color: "#D97474" }}>-$14,00</h3>
                    </div>
                    <div style={{ backgroundColor: "#F1F4FE", borderRadius: "10px", alignItems: "center", padding: "5px 0px", margin: "10px 0px", display: "flex", justifyContent: "space-around" }}>
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.17241 5.12598H15.8276C16.6846 5.12598 17.3793 5.81727 17.3793 6.67003L18 18.4048C18 19.2576 17.3053 19.9489 16.4483 19.9489H1.55172C0.69473 19.9489 0 19.2576 0 18.4048L0.620689 6.67003C0.620689 5.81727 1.31542 5.12598 2.17241 5.12598Z" fill="#004CFF" />
                            <path d="M4.39801 8.50448V4.11865C4.39801 2.39627 5.78448 1 7.49478 1H10.3128C12.0231 1 13.4095 2.39627 13.4095 4.11865V8.50448" stroke="white" stroke-width="2" stroke-linecap="round" />
                            <path d="M4.39801 4.71268V4.11865C4.39801 2.39627 5.78448 1 7.49478 1H10.3128C12.0231 1 13.4095 2.39627 13.4095 4.11865V4.71268" stroke="#004CFF" stroke-width="2" stroke-linecap="round" />
                        </svg>
                        <div>
                            <p>April,19 2020 12:31</p>
                            <h5>Order #92287157</h5>
                        </div>
                        <h3>-$14,00</h3>
                    </div>
                    <div style={{ backgroundColor: "#F1F4FE", borderRadius: "10px", alignItems: "center", padding: "5px 0px", margin: "10px 0px", display: "flex", justifyContent: "space-around" }}>
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.17241 5.12598H15.8276C16.6846 5.12598 17.3793 5.81727 17.3793 6.67003L18 18.4048C18 19.2576 17.3053 19.9489 16.4483 19.9489H1.55172C0.69473 19.9489 0 19.2576 0 18.4048L0.620689 6.67003C0.620689 5.81727 1.31542 5.12598 2.17241 5.12598Z" fill="#004CFF" />
                            <path d="M4.39801 8.50448V4.11865C4.39801 2.39627 5.78448 1 7.49478 1H10.3128C12.0231 1 13.4095 2.39627 13.4095 4.11865V8.50448" stroke="white" stroke-width="2" stroke-linecap="round" />
                            <path d="M4.39801 4.71268V4.11865C4.39801 2.39627 5.78448 1 7.49478 1H10.3128C12.0231 1 13.4095 2.39627 13.4095 4.11865V4.71268" stroke="#004CFF" stroke-width="2" stroke-linecap="round" />
                        </svg>
                        <div>
                            <p>April,19 2020 12:31</p>
                            <h5>Order #92287157</h5>
                        </div>
                        <h3>-$14,00</h3>
                    </div>
                </div>
            </div>
            <div className={`AddCard ${size === "1" ? "onchien" : ""}`}>
                <div style={{ background: "#E9E9E9B8", height: "450px" }}>
                    <div style={{ height: "380px" }} onClick={() => { SetSize("") }}></div>
                    <h3 style={{ padding: "20px 10px", backgroundColor: "#F8FAFF", borderRadius: "10px 10px 0px 0px" }}>Add Card</h3>
                </div>
                <div style={{backgroundColor:"white"}}>
                    <div>
                        <p>Card Holder</p>
                        <input placeholder="Required"></input>
                    </div>

                    <div>
                        <p>Card Number</p>
                        <input placeholder="Required"></input>
                    </div>
                    <div>
                        <div>
                            <p>Valid</p>
                            <input placeholder="Required"></input>
                        </div>
                        <div>
                            <p>CVV</p>
                            <input placeholder="Required"></input>
                        </div>
                    </div>
                    <div style={{ margin: "15px ", backgroundColor: "#004CFF", padding: " 10px", textAlign: "center", borderRadius: "10px", color: "white", width: "95%" }}>
                        <p>Save Changes</p>
                    </div>
                </div>
            </div>
            <div className={`AddCard ${size === "2" ? "onchien" : ""}`}>
                <div style={{ background: "#E9E9E9B8", height: "450px" }}>
                    <div style={{ height: "390px" }} onClick={() => { SetSize("") }}></div>
                    <div style={{ alignItems: "center", padding: "10px", display: "flex", justifyContent: "space-between", backgroundColor: "#F8FAFF", borderRadius: "10px 10px 0px 0px" }}>
                        <h3>Edit Card</h3>
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2_7141)">
                                <path d="M17.5 35C27.165 35 35 27.165 35 17.5C35 7.83502 27.165 0 17.5 0C7.83502 0 0 7.83502 0 17.5C0 27.165 7.83502 35 17.5 35Z" fill="#F9F9F9" />
                                <path d="M20.118 25.068H14.884C14.2273 25.0573 13.6011 24.7894 13.1398 24.3219C12.6785 23.8545 12.419 23.2247 12.417 22.568L11.594 13H23.482L22.66 22.563C22.655 23.2322 22.3844 23.8721 21.9077 24.3418C21.431 24.8116 20.7872 25.0728 20.118 25.068V25.068Z" stroke="#D97474" stroke-miterlimit="10" />
                                <path d="M15.452 16.0359V22.0319" stroke="#D97474" stroke-miterlimit="10" stroke-linecap="round" />
                                <path d="M19.551 16.0359V22.0319" stroke="#D97474" stroke-miterlimit="10" stroke-linecap="round" />
                                <path d="M12.581 13C12.5502 12.6366 12.5913 12.2707 12.702 11.9231C12.8126 11.5756 12.9908 11.2533 13.2261 10.9747C13.4615 10.6961 13.7494 10.4666 14.0735 10.2993C14.3976 10.1321 14.7515 10.0304 15.115 10H19.96C20.6811 10.0786 21.3427 10.4368 21.8026 10.9977C22.2625 11.5586 22.4842 12.2775 22.42 13H12.581Z" stroke="#D97474" stroke-miterlimit="10" />
                                <path d="M10 13H25" stroke="#D97474" stroke-miterlimit="10" stroke-linecap="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2_7141">
                                    <rect width="35" height="35" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div style={{backgroundColor:"white"}}>
                    <div>
                        <p>Card Holder</p>
                        <input placeholder="Required"></input>
                    </div>

                    <div>
                        <p>Card Number</p>
                        <input type="password" value={sothe} onChange={(e) => SetSothe(e.target.value)} placeholder="Required"></input>
                    </div>
                    <div>
                        <div>
                            <p>Valid</p>
                            <input value={hanThe} onChange={(e) => SetHanThe(e.target.value)} placeholder="Required"></input>
                        </div>
                        <div>
                            <p>CVV</p>
                            <input placeholder="Required"></input>
                        </div>
                    </div>
                    <div onClick={Addttthe} style={{ margin: "15px ", backgroundColor: "#004CFF", padding: " 10px", textAlign: "center", borderRadius: "10px", color: "white", width: "95%" }}>
                        <p>Save Changes</p>
                    </div>
                </div>
            </div>
            <div className={`xoaiclub ${lenguage === "8" ? "onchien" : ""}`}>
                <div>
                    <p style={{ margin: "15px 0px 0px 15px ", }}>Country</p>
                    <div style={{ margin: "0px 15px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <h4 className={`${country !== "" ? "country" : ""}`}>{country !== "" ? country : "Choose your country"}</h4>
                        <svg onClick={() => SetLenguage("9")} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="#004CFF" />
                            <path d="M16.6716 9.29492L15.4919 10.4987L19.2476 14.146H8.08899V15.8312H19.2476L15.4919 19.4785L16.6716 20.6822L22.5458 14.9886L16.6716 9.29492Z" fill="white" />
                        </svg>
                    </div>
                </div>
                <div className="AddShip" >
                    <div>
                        <p>Address</p>
                        <input placeholder="Required"></input>
                    </div>

                    <div>
                        <p>Town / City</p>
                        <input type="password" value={sothe} onChange={(e) => SetSothe(e.target.value)} placeholder="Required"></input>
                    </div>
                    <div>
                        <p>Postcode</p>
                        <input value={hanThe} onChange={(e) => SetHanThe(e.target.value)} placeholder="Required"></input>
                    </div>
                    <div>
                        <p>CVV</p>
                        <input placeholder="Required"></input>
                    </div>

                    <div onClick={Addttthe} style={{ margin: "15px ", backgroundColor: "#004CFF", padding: " 10px", textAlign: "center", borderRadius: "10px", color: "white", width: "95%" }}>
                        <p>Save Changes</p>
                    </div>
                </div>
            </div>
            <div className={`xoaiclub ${lenguage === "9" ? "onchien" : ""}`}>
                <div>
                    <div style={{ margin: "5px 20px ", paddingBottom: "100px",position:"relative"}}>
                        <div style={{top:"0",width:"347px",position:"fixed"}}>
                           <h3 style={{ paddingLeft:"0px", width: "334.92px",backgroundColor:"white" }} onClick={() => { SetLenguage("") }}>Settings</h3>
                            <div style={{color:"blue",alignItem:"center",borderRadius:"8px",padding:"5px",display:"flex",justifyContent:"space-between",backgroundColor:"#E5EBFC"}}>
                            <p style={{marginTop:"8px"}}>{country0}</p>
                            <svg style={{marginTop:"3px"}} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#004CFF" stroke="white" stroke-width="2" />
                                <path d="M17.024 10.6089L12.2417 15.3911L10.068 13.2174" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            </div>
                        </div>
                        <h2 style={{marginTop:"40px"}}>A</h2>
                        {countries.map(country => (
                            <div style={{marginTop:"10px"}} onClick={() => setCountry0(country.name.common)} key={country.name.common}>{country.name.common}</div>
                        ))}
                        <h2 style={{marginTop:"40px"}}>B</h2>
                        {countries1.map(country1 => (
                            <div style={{marginTop:"10px"}} onClick={() => setCountry0(country1.name.common)} key={country1.name.common}>{country1.name.common}</div>
                        ))}
                    </div>
                </div>
            </div>
            
        </div>

    )
}
export default Setting;

