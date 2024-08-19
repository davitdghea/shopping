import React from "react";
import Navbar13 from "./Navbar13"
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
function AnHienNav(){
    const [Nav13,SetNavbar13] = useState(true)
    const location = useLocation()
    const khongHienthi = ["/Start","/signup","/LogIn","/CheckOTP","/TypePass","/StartCard","/GuiMail","/NewPass","/chat","/product"]
    useEffect(() => {
        if (khongHienthi.some(path => location.pathname.includes(path))) {
            SetNavbar13(false);
        }
        else {
            SetNavbar13(true);
        }
    }, [location.pathname]); 
   console.log(Nav13)
   console.log(location.pathname)
return(
    <>
     {Nav13 && <Navbar13 />}
    </>
)
}
export default AnHienNav;