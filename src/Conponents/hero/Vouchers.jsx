import React from "react";
import img1 from "../Assets/Image.png"
import { useState } from "react";

function Vouchers() {
    const [click, setClick] = useState("");
    const time = new Date;
    const day = time.getDate();
    const dayhan = 23;
    const dayhan1 = 28;
    const dayhan2 = 30;
    console.log(day)
    let sale
    const chay = () => {
        if (dayhan - day <= 3) {
            return sale = "1"
        }
    }
    chay();

    return (
        <div className="hero">
            <div className="top-nb13">
                <img src={img1}></img>
                <h3>Vouchers</h3>
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 35C27.165 35 35 27.165 35 17.5C35 7.83502 27.165 0 17.5 0C7.83502 0 0 7.83502 0 17.5C0 27.165 7.83502 35 17.5 35Z" fill="blue" />
                    <mask id="path-2-inside-1_0_2215" fill="white">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9995 11H13.0005C11.3436 11 10.0005 12.3431 10.0005 14V16.7476C9.7263 16.53 9.37901 16.3999 9.00125 16.3999H9.00049V14C9.00049 11.7909 10.7913 10 13.0005 10H21.9995C24.2086 10 25.9995 11.7909 25.9995 14V16.3999C25.6214 16.4 25.2738 16.5303 24.9995 16.7484V14C24.9995 12.3431 23.6564 11 21.9995 11ZM24.9995 19.2514V22C24.9995 23.6569 23.6564 25 21.9995 25H13.0005C11.3436 25 10.0005 23.6569 10.0005 22V19.2522C9.7263 19.4698 9.37901 19.5999 9.00125 19.5999H9.00049V22C9.00049 24.2092 10.7913 26 13.0005 26H21.9995C24.2086 26 25.9995 24.2092 25.9995 22V19.5999C25.6214 19.5998 25.2738 19.4695 24.9995 19.2514ZM25.9995 17.3999V18.5999C25.6623 18.5998 25.3945 18.3281 25.3945 17.9999C25.3945 17.6717 25.6623 17.4001 25.9995 17.3999ZM9.00049 17.3999V18.5999H9.00125C9.33862 18.5999 9.60651 18.3282 9.60651 17.9999C9.60651 17.6716 9.33862 17.3999 9.00125 17.3999L9.00049 17.3999Z" />
                    </mask>
                    <path d="M10.0005 16.7476L9.37878 17.5309L11.0005 18.8181V16.7476H10.0005ZM9.00049 16.3999H8.00049V17.3999H9.00049V16.3999ZM25.9995 16.3999L25.9997 17.3999L26.9995 17.3997V16.3999H25.9995ZM24.9995 16.7484H23.9995V18.8211L25.6219 17.5312L24.9995 16.7484ZM24.9995 19.2514L25.6219 18.4686L23.9995 17.1787V19.2514H24.9995ZM10.0005 19.2522H11.0005V17.1817L9.37878 18.469L10.0005 19.2522ZM9.00049 19.5999V18.5999H8.00049V19.5999H9.00049ZM25.9995 19.5999H26.9995V18.6001L25.9997 18.5999L25.9995 19.5999ZM25.9995 18.5999L25.9991 19.5999L26.9995 19.6004V18.5999H25.9995ZM25.9995 17.3999H26.9995V16.3995L25.9991 16.3999L25.9995 17.3999ZM9.00049 18.5999H8.00049V19.5999H9.00049V18.5999ZM9.00049 17.3999L8.99987 16.3999L8.00049 16.4005V17.3999H9.00049ZM9.00125 17.3999V16.3999H9.00063L9.00125 17.3999ZM13.0005 12H21.9995V10H13.0005V12ZM11.0005 14C11.0005 12.8954 11.8959 12 13.0005 12V10C10.7913 10 9.00049 11.7909 9.00049 14H11.0005ZM11.0005 16.7476V14H9.00049V16.7476H11.0005ZM9.00125 17.3999C9.14556 17.3999 9.27529 17.4487 9.37878 17.5309L10.6222 15.9644C10.1773 15.6112 9.61247 15.3999 9.00125 15.3999V17.3999ZM9.00049 17.3999H9.00125V15.3999H9.00049V17.3999ZM8.00049 14V16.3999H10.0005V14H8.00049ZM13.0005 9C10.2391 9 8.00049 11.2386 8.00049 14H10.0005C10.0005 12.3431 11.3436 11 13.0005 11V9ZM21.9995 9H13.0005V11H21.9995V9ZM26.9995 14C26.9995 11.2386 24.7609 9 21.9995 9V11C23.6564 11 24.9995 12.3431 24.9995 14H26.9995ZM26.9995 16.3999V14H24.9995V16.3999H26.9995ZM25.6219 17.5312C25.7254 17.4488 25.8552 17.3999 25.9997 17.3999L25.9993 15.3999C25.3875 15.4 24.8222 15.6118 24.3771 15.9657L25.6219 17.5312ZM23.9995 14V16.7484H25.9995V14H23.9995ZM21.9995 12C23.1041 12 23.9995 12.8954 23.9995 14H25.9995C25.9995 11.7909 24.2086 10 21.9995 10V12ZM23.9995 19.2514V22H25.9995V19.2514H23.9995ZM23.9995 22C23.9995 23.1046 23.1041 24 21.9995 24V26C24.2086 26 25.9995 24.2092 25.9995 22H23.9995ZM21.9995 24H13.0005V26H21.9995V24ZM13.0005 24C11.8959 24 11.0005 23.1046 11.0005 22H9.00049C9.00049 24.2092 10.7913 26 13.0005 26V24ZM11.0005 22V19.2522H9.00049V22H11.0005ZM9.37878 18.469C9.27529 18.5511 9.14556 18.5999 9.00125 18.5999V20.5999C9.61247 20.5999 10.1773 20.3886 10.6222 20.0355L9.37878 18.469ZM9.00125 18.5999H9.00049V20.5999H9.00125V18.5999ZM8.00049 19.5999V22H10.0005V19.5999H8.00049ZM8.00049 22C8.00049 24.7614 10.2391 27 13.0005 27V25C11.3436 25 10.0005 23.6569 10.0005 22H8.00049ZM13.0005 27H21.9995V25H13.0005V27ZM21.9995 27C24.7609 27 26.9995 24.7614 26.9995 22H24.9995C24.9995 23.6569 23.6564 25 21.9995 25V27ZM26.9995 22V19.5999H24.9995V22H26.9995ZM25.9997 18.5999C25.8552 18.5999 25.7254 18.551 25.6219 18.4686L24.3771 20.0341C24.8222 20.388 25.3875 20.5998 25.9993 20.5999L25.9997 18.5999ZM26.9995 18.5999V17.3999H24.9995V18.5999H26.9995ZM24.3945 17.9999C24.3945 18.8818 25.1113 19.5995 25.9991 19.5999L26 17.5999C26.2133 17.6 26.3945 17.7744 26.3945 17.9999H24.3945ZM25.9991 16.3999C25.1113 16.4003 24.3945 17.118 24.3945 17.9999H26.3945C26.3945 18.2254 26.2133 18.3998 26 18.3999L25.9991 16.3999ZM10.0005 18.5999V17.3999H8.00049V18.5999H10.0005ZM9.00125 17.5999H9.00049V19.5999H9.00125V17.5999ZM8.60651 17.9999C8.60651 17.7744 8.78788 17.5999 9.00125 17.5999V19.5999C9.88937 19.5999 10.6065 18.882 10.6065 17.9999H8.60651ZM9.00125 18.3999C8.78788 18.3999 8.60651 18.2254 8.60651 17.9999H10.6065C10.6065 17.1178 9.88937 16.3999 9.00125 16.3999V18.3999ZM9.00111 18.3999H9.00188L9.00063 16.3999L8.99987 16.3999L9.00111 18.3999Z" fill="#f9f9f9" mask="url(#path-2-inside-1_0_2215)" />
                    <path d="M11 18H24" stroke="#f9f9f9" stroke-dasharray="1" />
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
                    <g clip-path="url(#clip0_2_6804)">
                        <path d="M19.75 17.5C19.75 17.945 19.618 18.38 19.3708 18.75C19.1236 19.12 18.7722 19.4084 18.361 19.5787C17.9499 19.749 17.4975 19.7936 17.061 19.7068C16.6246 19.6199 16.2237 19.4057 15.909 19.091C15.5943 18.7763 15.3801 18.3754 15.2932 17.939C15.2064 17.5025 15.251 17.0501 15.4213 16.639C15.5916 16.2278 15.88 15.8764 16.25 15.6292C16.62 15.382 17.055 15.25 17.5 15.25C18.0967 15.25 18.669 15.4871 19.091 15.909C19.5129 16.331 19.75 16.9033 19.75 17.5Z" stroke="#004BFE" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M22.8821 19.6819C22.7852 19.9013 22.7562 20.1448 22.799 20.3807C22.8418 20.6167 22.9543 20.8345 23.1221 21.0059L23.1661 21.0499C23.439 21.3229 23.5923 21.693 23.5923 22.0789C23.5923 22.4649 23.439 22.835 23.1661 23.1079C22.8931 23.3809 22.523 23.5342 22.1371 23.5342C21.7511 23.5342 21.381 23.3809 21.1081 23.1079L21.0641 23.0639C20.894 22.8995 20.6794 22.7885 20.447 22.7447C20.2145 22.701 19.9743 22.7263 19.756 22.8176C19.5378 22.9089 19.3511 23.0621 19.219 23.2584C19.087 23.4547 19.0154 23.6854 19.0131 23.9219V24.0459C19.0031 24.4251 18.8455 24.7854 18.5738 25.05C18.3021 25.3147 17.9378 25.4628 17.5586 25.4628C17.1793 25.4628 16.815 25.3147 16.5433 25.05C16.2716 24.7854 16.114 24.4251 16.1041 24.0459V23.9799C16.0988 23.739 16.0211 23.5051 15.8811 23.3089C15.7411 23.1127 15.5452 22.9632 15.3191 22.8799C15.0997 22.7831 14.8562 22.7541 14.6203 22.7969C14.3843 22.8397 14.1665 22.9522 13.9951 23.1199L13.9511 23.1639C13.6781 23.4369 13.308 23.5902 12.9221 23.5902C12.5361 23.5902 12.166 23.4369 11.8931 23.1639C11.6201 22.891 11.4668 22.5209 11.4668 22.1349C11.4668 21.749 11.6201 21.3789 11.8931 21.1059L11.9371 21.0619C12.1015 20.8919 12.2125 20.6773 12.2563 20.4448C12.3 20.2124 12.2747 19.9722 12.1834 19.7539C12.0921 19.5357 11.9389 19.349 11.7426 19.2169C11.5463 19.0849 11.3156 19.0133 11.0791 19.0109H10.9551C10.7608 19.016 10.5676 18.9822 10.3866 18.9114C10.2057 18.8406 10.0408 18.7342 9.90165 18.5987C9.76248 18.4631 9.65187 18.3011 9.57635 18.122C9.50082 17.943 9.46191 17.7507 9.46191 17.5564C9.46191 17.3622 9.50082 17.1698 9.57635 16.9908C9.65187 16.8118 9.76248 16.6498 9.90165 16.5142C10.0408 16.3786 10.2057 16.2723 10.3866 16.2015C10.5676 16.1307 10.7608 16.0969 10.9551 16.1019H11.0201C11.261 16.0967 11.4949 16.019 11.6911 15.879C11.8873 15.739 12.0368 15.5431 12.1201 15.3169C12.2169 15.0975 12.2459 14.8541 12.2031 14.6181C12.1603 14.3821 12.0478 14.1644 11.8801 13.9929L11.8361 13.9489C11.6934 13.8156 11.5791 13.655 11.4999 13.4765C11.4207 13.2981 11.3782 13.1056 11.3749 12.9104C11.3717 12.7152 11.4077 12.5213 11.4809 12.3404C11.5542 12.1594 11.663 11.995 11.8011 11.857C11.9392 11.719 12.1036 11.6102 12.2846 11.537C12.4656 11.4639 12.6595 11.4279 12.8547 11.4313C13.0499 11.4347 13.2424 11.4773 13.4208 11.5566C13.5992 11.6359 13.7598 11.7503 13.8931 11.8929L13.9371 11.9369C14.1085 12.1047 14.3263 12.2172 14.5623 12.26C14.7982 12.3028 15.0417 12.2738 15.2611 12.1769H15.3191C15.5344 12.0846 15.718 11.9312 15.8472 11.7357C15.9764 11.5403 16.0455 11.3113 16.0461 11.0769V10.9549C16.056 10.5758 16.2136 10.2155 16.4853 9.95085C16.757 9.68619 17.1213 9.53809 17.5006 9.53809C17.8798 9.53809 18.2441 9.68619 18.5158 9.95085C18.7875 10.2155 18.9451 10.5758 18.9551 10.9549V11.0199C18.9574 11.2565 19.029 11.4872 19.161 11.6835C19.2931 11.8797 19.4798 12.033 19.698 12.1243C19.9163 12.2156 20.1565 12.2409 20.389 12.1971C20.6214 12.1534 20.836 12.0424 21.0061 11.8779L21.0501 11.8339C21.1852 11.6988 21.3456 11.5916 21.5222 11.5185C21.6987 11.4454 21.888 11.4077 22.0791 11.4077C22.2702 11.4077 22.4594 11.4454 22.6359 11.5185C22.8125 11.5916 22.9729 11.6988 23.1081 11.8339C23.2432 11.9691 23.3504 12.1295 23.4235 12.3061C23.4966 12.4826 23.5343 12.6718 23.5343 12.8629C23.5343 13.054 23.4966 13.2433 23.4235 13.4198C23.3504 13.5964 23.2432 13.7568 23.1081 13.8919L23.0641 13.9359C22.8963 14.1074 22.7838 14.3251 22.741 14.5611C22.6982 14.7971 22.7272 15.0405 22.8241 15.2599V15.3179C22.9164 15.5333 23.0698 15.7169 23.2653 15.8461C23.4607 15.9753 23.6897 16.0444 23.9241 16.0449H24.0481C24.4272 16.0549 24.7875 16.2125 25.0522 16.4842C25.3168 16.7559 25.4649 17.1202 25.4649 17.4994C25.4649 17.8787 25.3168 18.243 25.0522 18.5147C24.7875 18.7864 24.4272 18.944 24.0481 18.9539H23.9801C23.7457 18.9545 23.5167 19.0236 23.3213 19.1528C23.1258 19.282 22.9724 19.4656 22.8801 19.6809L22.8821 19.6819Z" stroke="#004BFE" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_2_6804">
                            <rect width="17" height="17" fill="white" transform="translate(9 9)" />
                        </clipPath>
                    </defs>
                </svg>

            </div>
            <div className="Nut1">
                <div onClick={() => { setClick("") }} className={`${click === "" ? "onchien" : ""}`}>
                    <p>Active Rewards</p>
                </div>
                <div onClick={() => { setClick("1") }} className={`${click === "1" ? "onchien" : ""}`}>
                    <p>Progress</p>
                </div>
            </div>
            <div className={`${click === "1" ? "vocher" : ""}`}>
                <div className={`Voucher1 ${sale === "1" ? "han" : ""}`}>
                    <div>
                        <h3>Voucher</h3>
                        <span>
                            <h6>3 days left</h6>
                            <p>Valid Until 3.{dayhan}.24</p>
                        </span>
                    </div>
                    <div>
                        <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.910145 15.8413C0.910145 16.3437 1.31599 16.7495 1.81834 16.7495H6.3593V9.09463H0.910145V15.8413ZM8.17568 16.7495H12.7166C13.219 16.7495 13.6248 16.3437 13.6248 15.8413V9.09463H8.17568V16.7495ZM13.6248 4.55367H12.43C12.606 4.21026 12.7166 3.82995 12.7166 3.41843C12.7166 2.04195 11.5956 0.920898 10.2191 0.920898C9.03846 0.920898 8.27501 1.52541 7.29587 2.85932C6.31673 1.52541 5.55328 0.920898 4.37263 0.920898C2.99615 0.920898 1.8751 2.04195 1.8751 3.41843C1.8751 3.82995 1.98295 4.21026 2.16175 4.55367H0.910145C0.407801 4.55367 0.00195312 4.95951 0.00195312 5.46186V7.73234C0.00195312 7.98209 0.206296 8.18644 0.456049 8.18644H14.0789C14.3287 8.18644 14.533 7.98209 14.533 7.73234V5.46186C14.533 4.95951 14.1272 4.55367 13.6248 4.55367ZM4.36979 4.55367C3.74257 4.55367 3.23455 4.04565 3.23455 3.41843C3.23455 2.79121 3.74257 2.28319 4.36979 2.28319C4.93457 2.28319 5.35177 2.37684 6.81339 4.55367H4.36979H4.36979ZM10.2191 4.55367H7.77551C9.23429 2.38252 9.64014 2.28319 10.2191 2.28319C10.8463 2.28319 11.3544 2.79121 11.3544 3.41843C11.3544 4.04565 10.8463 4.55367 10.2191 4.55367Z" fill="#004CFF" />
                        </svg>
                        <h3>First Purchase</h3>
                    </div>
                    <div>
                        <p>5% off your next purchase</p>
                        <p>Collected</p>
                    </div>
                </div>
                <div className={`Voucher1 ${sale === "2" ? "han" : ""}`}>
                    <div>
                        <h3>Voucher</h3>
                        <span>
                            <h6>3 days left</h6>
                            <p >Valid Until 3.{dayhan1}.24</p>
                        </span>
                    </div>
                    <div>
                        <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.910145 15.8413C0.910145 16.3437 1.31599 16.7495 1.81834 16.7495H6.3593V9.09463H0.910145V15.8413ZM8.17568 16.7495H12.7166C13.219 16.7495 13.6248 16.3437 13.6248 15.8413V9.09463H8.17568V16.7495ZM13.6248 4.55367H12.43C12.606 4.21026 12.7166 3.82995 12.7166 3.41843C12.7166 2.04195 11.5956 0.920898 10.2191 0.920898C9.03846 0.920898 8.27501 1.52541 7.29587 2.85932C6.31673 1.52541 5.55328 0.920898 4.37263 0.920898C2.99615 0.920898 1.8751 2.04195 1.8751 3.41843C1.8751 3.82995 1.98295 4.21026 2.16175 4.55367H0.910145C0.407801 4.55367 0.00195312 4.95951 0.00195312 5.46186V7.73234C0.00195312 7.98209 0.206296 8.18644 0.456049 8.18644H14.0789C14.3287 8.18644 14.533 7.98209 14.533 7.73234V5.46186C14.533 4.95951 14.1272 4.55367 13.6248 4.55367ZM4.36979 4.55367C3.74257 4.55367 3.23455 4.04565 3.23455 3.41843C3.23455 2.79121 3.74257 2.28319 4.36979 2.28319C4.93457 2.28319 5.35177 2.37684 6.81339 4.55367H4.36979H4.36979ZM10.2191 4.55367H7.77551C9.23429 2.38252 9.64014 2.28319 10.2191 2.28319C10.8463 2.28319 11.3544 2.79121 11.3544 3.41843C11.3544 4.04565 10.8463 4.55367 10.2191 4.55367Z" fill="#004CFF" />
                        </svg>
                        <h3>First Purchase</h3>
                    </div>
                    <div>
                        <p>5% off your next purchase</p>
                        <p>Collected</p>
                    </div>
                </div>
                <div className={`Voucher1 ${sale === "3" ? "han" : ""}`}>
                    <div>
                        <h3>Voucher</h3>
                        <span>
                            <h6>3 days left</h6>
                            <p>Valid Until 3.{dayhan2}.24</p>
                        </span>
                    </div>
                    <div>
                        <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.910145 15.8413C0.910145 16.3437 1.31599 16.7495 1.81834 16.7495H6.3593V9.09463H0.910145V15.8413ZM8.17568 16.7495H12.7166C13.219 16.7495 13.6248 16.3437 13.6248 15.8413V9.09463H8.17568V16.7495ZM13.6248 4.55367H12.43C12.606 4.21026 12.7166 3.82995 12.7166 3.41843C12.7166 2.04195 11.5956 0.920898 10.2191 0.920898C9.03846 0.920898 8.27501 1.52541 7.29587 2.85932C6.31673 1.52541 5.55328 0.920898 4.37263 0.920898C2.99615 0.920898 1.8751 2.04195 1.8751 3.41843C1.8751 3.82995 1.98295 4.21026 2.16175 4.55367H0.910145C0.407801 4.55367 0.00195312 4.95951 0.00195312 5.46186V7.73234C0.00195312 7.98209 0.206296 8.18644 0.456049 8.18644H14.0789C14.3287 8.18644 14.533 7.98209 14.533 7.73234V5.46186C14.533 4.95951 14.1272 4.55367 13.6248 4.55367ZM4.36979 4.55367C3.74257 4.55367 3.23455 4.04565 3.23455 3.41843C3.23455 2.79121 3.74257 2.28319 4.36979 2.28319C4.93457 2.28319 5.35177 2.37684 6.81339 4.55367H4.36979H4.36979ZM10.2191 4.55367H7.77551C9.23429 2.38252 9.64014 2.28319 10.2191 2.28319C10.8463 2.28319 11.3544 2.79121 11.3544 3.41843C11.3544 4.04565 10.8463 4.55367 10.2191 4.55367Z" fill="#004CFF" />
                        </svg>
                        <h3>First Purchase</h3>
                    </div>
                    <div>
                        <p>5% off your next purchase</p>
                        <p>Collected</p>
                    </div>
                </div>
            </div>
            <div className={`${click === "1" ? "cacshop" : "vocher"}`}>
                <div >
                    <div style={{boxShadow:"0px 5px 5px 5px rgba(0.10, 0.10, 0.10, 0.10)",outline:"4px solid white", margin: "auto", borderRadius: "50% ", width: "60px", height: "60px", border: "1px solid #004CFF", backgroundColor: "white", position: "relative" }}>
                        <div  style={{ position: "absolute", top: "18px", right: "-43px" }}>
                            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.17241 5.12598H15.8276C16.6846 5.12598 17.3793 5.81727 17.3793 6.67003L18 18.4048C18 19.2576 17.3053 19.9489 16.4483 19.9489H1.55172C0.69473 19.9489 0 19.2576 0 18.4048L0.620689 6.67003C0.620689 5.81727 1.31542 5.12598 2.17241 5.12598Z" fill="#004CFF" />
                                <path d="M4.39795 8.50448V4.11865C4.39795 2.39627 5.78442 1 7.49472 1H10.3127C12.023 1 13.4095 2.39627 13.4095 4.11865V8.50448" stroke="white" stroke-width="2" stroke-linecap="round" />
                                <path d="M4.39795 4.71268V4.11865C4.39795 2.39627 5.78442 1 7.49472 1H10.3127C12.023 1 13.4095 2.39627 13.4095 4.11865V4.71268" stroke="#004CFF" stroke-width="2" stroke-linecap="round" />
                            </svg>

                        </div>
                        <div style={{ position: "absolute", right: "-65px" }}>
                            <svg width="22" height="22" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="#004CFF" stroke="white" stroke-width="2" />
                                <path d="M17.0238 10.6089L12.2416 15.3911L10.0679 13.2174" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                      </div>
                    </div>
                    <div style={{marginTop:"15px"}}>
                        <h4>First Purchase</h4>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
                    </div>
                </div>
                <div >
                    <div style={{boxShadow:"0px 5px 5px 5px rgba(0.10, 0.10, 0.10, 0.10)",outline:"4px solid white",margin: "auto", borderRadius: "50% ", width: "63px", height: "63px", border: "1px solid #004CFF", backgroundColor: "white", position: "relative" }}>
                        <div  style={{ position: "absolute", top: "18px", right: "-43px" }}>
                            <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.4121 22.9189C5.95978 18.5263 2.5758 14.5301 1.18798 11.1856C-2.52992 2.22264 8.08952 -2.0637 12.4121 3.22731C16.7347 -2.0637 27.3541 2.22264 23.6362 11.1856C22.2484 14.5301 18.8644 18.5263 12.4121 22.9189Z" fill="#004CFF" />
                            </svg>
                        </div>
                    
                    <div style={{ position: "absolute", top: "-6px", right: "-40px" }}>
                        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M71 36C71 18.0227 57.4463 3.21096 40 1.22607V6.26434C54.6774 8.21991 66 20.7877 66 36C66 52.5685 52.5685 66 36 66C19.4315 66 6 52.5685 6 36H1C1 55.33 16.67 71 36 71C55.33 71 71 55.33 71 36Z" fill="#004CFF" />
                            <path d="M40 1.22607L40.0565 0.729279L39.5 0.665962V1.22607H40ZM40 6.26434H39.5V6.70214L39.934 6.75996L40 6.26434ZM6 36H6.5V35.5H6V36ZM1 36V35.5H0.5V36H1ZM39.9435 1.72287C57.14 3.67934 70.5 18.2798 70.5 36H71.5C71.5 17.7655 57.7526 2.74258 40.0565 0.729279L39.9435 1.72287ZM40.5 6.26434V1.22607H39.5V6.26434H40.5ZM66.5 36C66.5 20.5338 54.9886 7.75695 40.066 5.76872L39.934 6.75996C54.3663 8.68288 65.5 21.0416 65.5 36H66.5ZM36 66.5C52.8447 66.5 66.5 52.8447 66.5 36H65.5C65.5 52.2924 52.2924 65.5 36 65.5V66.5ZM5.5 36C5.5 52.8447 19.1553 66.5 36 66.5V65.5C19.7076 65.5 6.5 52.2924 6.5 36H5.5ZM1 36.5H6V35.5H1V36.5ZM36 70.5C16.9462 70.5 1.5 55.0538 1.5 36H0.5C0.5 55.6061 16.3939 71.5 36 71.5V70.5ZM70.5 36C70.5 55.0538 55.0538 70.5 36 70.5V71.5C55.6061 71.5 71.5 55.6061 71.5 36H70.5Z" fill="#004CFF" />
                        </svg>
                    </div>
                    </div>
                    <div style={{marginTop:"15px"}}>
                        <h4>Loyal Customer</h4>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
                    </div>
                </div>
                <div > 
                    <div style={{ boxShadow:"0px 5px 5px 5px rgba(0.10, 0.10, 0.10, 0.10)",outline:"4px solid white",margin: "auto", borderRadius: "50% ", width: "60px", height: "60px", border: "1px solid #004CFF", backgroundColor: "white", position: "relative" }}>
                        <div  style={{ position: "absolute", top: "18px", right: "-43px" }}>
                            <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_0_1771)">
                                    <path d="M23.372 9.67185C23.7689 9.32842 23.5562 8.67602 23.0333 8.63086L15.4944 7.98321L23.372 9.67185ZM23.372 9.67185L17.6537 14.6261L23.372 9.67185ZM9.43162 8.37127L12.0024 2.28766L14.5733 8.3724L14.808 8.92792L15.4088 8.97954L21.9912 9.54502L16.9988 13.8703L16.5431 14.2652L16.6796 14.8526L18.1756 21.2866L12.5195 17.8755L12.0031 17.5641L11.4866 17.8755L5.83052 21.2866L7.32647 14.8526L7.46304 14.2652L7.00727 13.8703L2.01367 9.54383L8.59608 8.97835L9.1969 8.92674L9.43162 8.37127ZM22.7177 8.91564L22.7172 8.91606L22.7177 8.91564Z" fill="#004CFF" stroke="#004CFF" stroke-width="2" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_1771">
                                        <rect width="23.1506" height="22.0769" fill="white" transform="translate(0.427002 0.649902)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div style={{ position: "absolute", top: "-7px", right: "-60px" }}>
                            <svg width="33" height="72" viewBox="0 0 33 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1 6.26434C15.6774 8.21991 27 20.7877 27 36C27 51.2123 15.6774 63.7801 1 65.7357L1 70.7739C18.4463 68.789 32 53.9773 32 36C32 18.0227 18.4463 3.21096 1 1.22607L1 6.26434Z" fill="#004CFF" />
                                <path d="M1 6.26434H0.5V6.70214L0.933964 6.75996L1 6.26434ZM1 65.7357L0.933964 65.24L0.5 65.2979V65.7357H1ZM1 70.7739H0.5V71.334L1.05652 71.2707L1 70.7739ZM1 1.22607L1.05652 0.729279L0.5 0.665962V1.22607H1ZM27.5 36C27.5 20.5338 15.9886 7.75695 1.06604 5.76872L0.933964 6.75996C15.3663 8.68288 26.5 21.0416 26.5 36H27.5ZM1.06604 66.2313C15.9886 64.243 27.5 51.4662 27.5 36H26.5C26.5 50.9584 15.3663 63.3171 0.933964 65.24L1.06604 66.2313ZM1.5 70.7739L1.5 65.7357H0.5L0.5 70.7739H1.5ZM31.5 36C31.5 53.7202 18.14 68.3207 0.943478 70.2771L1.05652 71.2707C18.7526 69.2574 32.5 54.2345 32.5 36H31.5ZM0.943478 1.72287C18.14 3.67934 31.5 18.2798 31.5 36H32.5C32.5 17.7655 18.7526 2.74258 1.05652 0.729279L0.943478 1.72287ZM1.5 6.26434L1.5 1.22607H0.5L0.5 6.26434H1.5Z" fill="#004CFF" />
                            </svg>

                        </div>

                    </div>
                    <div style={{marginTop:"15px"}}>
                        <h4>Review Maker</h4>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
                    </div>
                </div>
                <div > 
                    <div style={{ boxShadow:"0px 5px 5px 5px rgba(0.10, 0.10, 0.10, 0.10)",outline:"4px solid white",margin: "auto", borderRadius: "50% ", width: "60px", height: "60px", border: "1px solid #004CFF", backgroundColor: "white", position: "relative" }}>
                        <div  style={{ position: "absolute", top: "18px", right: "-43px" }}>
                            <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.84 7.90563C22.0066 7.47094 22.1 6.99563 22.1 6.5C22.1 4.34688 20.3531 2.6 18.2 2.6C17.3997 2.6 16.6522 2.84375 16.0347 3.25813C14.9094 1.30813 12.8091 0 10.4 0C6.80875 0 3.9 2.90875 3.9 6.5C3.9 6.60969 3.90406 6.71937 3.90812 6.82906C1.63313 7.62937 0 9.79875 0 12.35C0 15.5797 2.62031 18.2 5.85 18.2H20.8C23.6722 18.2 26 15.8722 26 13C26 10.4853 24.2125 8.385 21.84 7.90563Z" fill="#004CFF" />
                            </svg>


                        </div>
                    </div>
                    <div style={{marginTop:"15px"}}>
                        <h4>Big Soul</h4>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
                    </div>
                </div>
               <div > 
                    <div style={{ boxShadow:"0px 5px 5px 5px rgba(0.10, 0.10, 0.10, 0.10)",outline:"4px solid white",margin: "auto", borderRadius: "50% ", width: "60px", height: "60px", border: "1px solid #004CFF", backgroundColor: "white", position: "relative" }}>
                        <div  style={{ position: "absolute", top: "18px", right: "-43px" }}>
                            <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="shirt" clip-path="url(#clip0_0_1751)">
                                    <g id="Group 1508" clip-path="url(#clip1_0_1751)">
                                        <path id="Path 646" d="M20.3456 19.992H5.56533C5.37421 19.992 5.21912 19.8373 5.21912 19.6458V8.21512L4.10018 9.33406C3.97033 9.46391 3.74045 9.46391 3.61065 9.33406L0.101523 5.82528C-0.0338409 5.68992 -0.0338409 5.47112 0.101523 5.33575L5.28735 0.149925C5.35036 0.0606308 5.45178 0 5.56568 0H9.08972C9.28084 0 9.43593 0.15509 9.43593 0.34621C9.43593 2.28703 11.015 3.86607 12.9558 3.86607C14.8966 3.86607 16.4757 2.28703 16.4757 0.34621C16.4757 0.15509 16.6304 0 16.8219 0H20.3459C20.4723 0 20.583 0.0678825 20.6433 0.168957L25.8098 5.33575C25.8749 5.40086 25.9112 5.48876 25.9112 5.58055C25.9112 5.67234 25.8748 5.76059 25.8098 5.82534L22.3003 9.33412C22.1649 9.46948 21.9461 9.46948 21.8108 9.33412L20.6918 8.21518V19.6458C20.6917 19.8373 20.5366 19.992 20.3456 19.992Z" fill="#004CFF" />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_1751">
                                        <rect width="25.9112" height="19.992" fill="white" />
                                    </clipPath>
                                    <clipPath id="clip1_0_1751">
                                        <rect width="25.9112" height="19.992" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>


                        </div>
                    </div>
                    <div style={{marginTop:"15px"}}>
                        <h4>T-Shirt Collector</h4>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
                    </div>
                </div>
                <div  >
                    <div style={{ boxShadow:"0px 5px 5px 5px rgba(0.10, 0.10, 0.10, 0.10)",outline:"4px solid white",margin: "auto", borderRadius: "50% ", width: "60px", height: "60px", border: "1px solid #004CFF", backgroundColor: "white", position: "relative" }}>
                        <div style={{ position: "absolute", top: "18px", right: "-43px" }}>
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13 0C5.81855 0 0 5.81855 0 13C0 20.1815 5.81855 26 13 26C20.1815 26 26 20.1815 26 13C26 5.81855 20.1815 0 13 0ZM17.1935 8.80645C18.1214 8.80645 18.871 9.55605 18.871 10.4839C18.871 11.4117 18.1214 12.1613 17.1935 12.1613C16.2657 12.1613 15.5161 11.4117 15.5161 10.4839C15.5161 9.55605 16.2657 8.80645 17.1935 8.80645ZM8.80645 8.80645C9.73427 8.80645 10.4839 9.55605 10.4839 10.4839C10.4839 11.4117 9.73427 12.1613 8.80645 12.1613C7.87863 12.1613 7.12903 11.4117 7.12903 10.4839C7.12903 9.55605 7.87863 8.80645 8.80645 8.80645ZM19.0177 17.7282C17.5238 19.521 15.3327 20.5484 13 20.5484C10.6673 20.5484 8.47621 19.521 6.98226 17.7282C6.26936 16.8738 7.55887 15.8044 8.27178 16.6536C9.44597 18.0637 11.1653 18.8657 13 18.8657C14.8347 18.8657 16.554 18.0585 17.7282 16.6536C18.4306 15.8044 19.7254 16.8738 19.0177 17.7282Z" fill="#004CFF" />
                            </svg>

                        </div>
                        <div style={{ position: "absolute", top: "-7px", right: "-62px" }}>
                            <svg width="33" height="37" viewBox="0 0 33 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1 6.26433C15.6774 8.2199 27 20.7877 27 36C27 36.1095 26.9994 36.2189 26.9982 36.3281H31.9985C31.9995 36.2189 32 36.1095 32 36C32 18.0226 18.4463 3.21095 1 1.22606L1 6.26433Z" fill="#004CFF" />
                                <path d="M1 6.26433H0.5V6.70213L0.933964 6.75995L1 6.26433ZM26.9982 36.3281L26.4983 36.3228L26.4929 36.8281H26.9982V36.3281ZM31.9985 36.3281V36.8281H32.4939L32.4985 36.3327L31.9985 36.3281ZM1 1.22606L1.05652 0.729263L0.5 0.665947V1.22606H1ZM27.5 36C27.5 20.5337 15.9886 7.75694 1.06604 5.76871L0.933964 6.75995C15.3663 8.68286 26.5 21.0416 26.5 36H27.5ZM27.4982 36.3335C27.4994 36.2225 27.5 36.1113 27.5 36H26.5C26.5 36.1077 26.4994 36.2153 26.4983 36.3228L27.4982 36.3335ZM31.9985 35.8281H26.9982V36.8281H31.9985V35.8281ZM31.5 36C31.5 36.108 31.4995 36.2158 31.4985 36.3235L32.4985 36.3327C32.4995 36.2219 32.5 36.111 32.5 36H31.5ZM0.943478 1.72285C18.14 3.67932 31.5 18.2798 31.5 36H32.5C32.5 17.7655 18.7526 2.74257 1.05652 0.729263L0.943478 1.72285ZM1.5 6.26433L1.5 1.22606H0.5L0.5 6.26433H1.5Z" fill="#004CFF" />
                            </svg>

                        </div>
                    </div>
                    <div style={{marginTop:"15px"}}>
                        <h3>10+ Orders</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Vouchers;