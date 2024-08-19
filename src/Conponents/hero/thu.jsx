import img1 from "../Assets/32EB245A-E30D-4D15-B57A-23A577C43459.png"
import img5 from '../Assets/098576F0-C6F3-4E05-8E3F-2D9CD12D2573.png'
import img6 from '../Assets/50C51A0F-BC20-497B-AC11-9B4129753C92.png'
import img7 from '../Assets/Placeholder_01.jpg'
import img8 from '../Assets/60B2AF02-80CD-4A91-9561-2DB2738F4644.png'
import img9 from '../Assets/02643ACC-CFE9-415B-B36C-04316EC68CF0.png'
import img10 from "../Assets/A883E49C-A542-4E97-9215-A8E6817A4A74.png"
import img11 from "../Assets/dvfdfv.png"
import img12 from "../Assets/jdkjafhk.jpg"
import img13 from "../Assets/fdfffve.png"
import img14 from "../Assets/1234e.png";
import img18 from '../Assets/333CBBCA-9390-4C5A-A60A-21E776BF77D2.png'
import img15 from "../Assets/A883E49C-A542-4E97-9215-A8E6817A4A74.png"
import img16 from "../Assets/60B2AF02-80CD-4A91-9561-2DB2738F4644.png"
import img17 from "../Assets/6C0DCE14-799F-4E68-855B-563025AA327F.png"
import img21 from "../Assets/B35CFC93-A1B9-4A92-B4F2-EFCE760C5BDD.png"
import img22 from '../Assets/wwefd12.png'
import img23 from '../Assets/ẻdr1.png'
import img24 from '../Assets/3wes.png'
import img25 from '../Assets/32es.png'
import img26 from '../Assets/A70864C8-1B1F-4014-84A4-450CD75C9CEF.png'
import img27 from '../Assets/jdkjafhk.jpg'
import img28 from '../Assets/ưedddd21.jpg'
import img29 from '../Assets/hdgsfqu.jpg'
import img30 from '../Assets/1F888CAB-A065-4AED-85C1-14DAA9B89010.png'
import img31 from '../Assets/hềyuwe2.jpg'
import img32 from '../Assets/ghdyuw2.jpg'
import img33 from '../Assets/gcwt26.jpg'
import img34 from '../Assets/F2E8E4C3-E5F7-45BC-9DFD-34A479B8D2B7.png'
import img35 from '../Assets/18E41C34-1DA0-43BC-9EA8-C7A71E0811DE.png'
import img36 from '../Assets/F8382341-AF5B-48F9-B401-87FE74FEBC69.png'
import img37 from '../Assets/B35CFC93-A1B9-4A92-B4F2-EFCE760C5BDD.png'
import img44 from '../Assets/Dresses.png'
import img45 from '../Assets/T-Shirts.png'
let hehe = "saota";
const anhWishlist = [
    {id:1,name:"sp1",img:img5,gia:17},
    {id:2,name:"sp2",img:img6,gia:18},
    {id:3,name:"sp3",img:img7,gia:19},
    {id:4,name:"sp4",img:img8,gia:20},
    {id:5,name:"sp5",img:img9,gia:22},
]
const saleanh = [
    { id:1,name:"sp1",img:img21,gia:17},
    { id:2,name:"sp2",img:img22,gia:18},
    { id:3,name:"sp3",img:img23,gia:19},
    { id:4,name:"sp4",img:img24,gia:17},
    { id:5,name:"sp4",img:img25,gia:17},
    { id:6,name:"sp4",img:img26,gia:17},
]
const Anhproduct = [
    { id:5,name:"sp5",img:img8,loai:"New",gia:17},  
    { id:6,name:"sp6",img:img9,loai:"New",gia:17},  
    { id:7,name:"sp7",img:img10,loai:"New",gia:19}, 
    { id:8,name:"sp10",img:img11,loai:"Recently",gia:20},
]
const fullimg = [
    { id:1,name:"sp1",img:img10,gia:17},
    { id:2,name:"sp2",img:img11,gia:18},
    { id:3,name:"sp3",img:img12,gia:19},
    { id:4,name:"sp4",img:img13,gia:17},
]
const sanpham1 = [
    {id:1,name:"sp1",img:img27,gia:17},
    {id:2,name:"sp3",img:img28,gia:17},
    {id:3,name:"sp2",img:img29,gia:17}
   ]
   const sanpham2 = [
    {id:1,name:"sp1",img:img30,gia:17},
    {id:2,name:"sp2",img:img31,gia:17},
    {id:3,name:"sp3",img:img32,gia:17},
    {id:4,name:"sp4",img:img33,gia:17}
   ]
   const sanpham3 = [
    {id:1,name:"sp1",img:img34,gia:17},
    {id:2,name:"sp2",img:img35,gia:17},
   ]
   const sanpham4 = [
    {id:1,name:"sp1",img:img36,gia:17},
    {id:2,name:"sp2",img:img37,gia:17},
    {id:3,name:"sp3",img:img44,gia:17},
    {id:4,name:"sp4",img:img45,gia:17}
   ]
   const chonSize  = [
    {id:1,Size:"S"},
    {id:2,Size:"M"},
    {id:3,Size:"L"},
    {id:4,Size:"XL"},
    {id:5,Size:"XXL"},
    {id:6,Size:"XXXL"},
   ]
   const  chonmau= [
    {id:1,color:"pick",img:img15},
    {id:2,color:"red",img:img16},
    {id:3,color:"yellow",img:img17},
    {id:4,color:"violet",img:img18},
   ]
export {chonmau,chonSize,anhWishlist, saleanh, Anhproduct, hehe, fullimg,sanpham1,sanpham2,sanpham3,sanpham4};
export function setHehe(newValue) {
    hehe = newValue;
}