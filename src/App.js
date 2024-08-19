
import AnHienNav from "./Conponents/Navbar/AnHienNav";
import Navbar from "../src/Conponents/Navbar/Start";
import Navbar2 from "../src/Conponents/Navbar/dangky";
import Navbar3 from "../src/Conponents/Navbar/login";
import Navbar4 from "../src/Conponents/Navbar/nhanmamail";
import Navbar5 from "../src/Conponents/Navbar/logPas";
import Navbar6 from "../src/Conponents/Navbar/Card";
import Navbar7 from "./Conponents/Navbar/cachgui";
import Navbar8 from "../src/Conponents/Navbar/NewPass";
import Navbar10 from "../src/Conponents/Navbar//Navbar10";
import Shop from "./Pages/Shop";
import ShopCategory from "../src/Pages/ShopCategogi";
import Cart from "../src/Pages/Cart";
import LoginSig from "../src/Pages/LoginSignup";
import './App.css';
import Sale from "../src/Conponents/hero/sale";
import Cloth from "../src/Conponents/hero/Clothing";
import Product from "../src/Conponents/hero/product";
import Recently from "../src/Conponents/hero/Recently";
import Payment from "./Conponents/hero/Payment";
import Strack from "./Conponents/hero/strack";
import Stracknot from "./Conponents/hero/StrackNot";
import ChatBot from "./Conponents/hero/ChatBot";
import Voucher from "./Conponents/hero/Vouchers";
import Setting from "./Conponents/hero/SetTing";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Shop />} />
                    <Route path='/setting' element={<Setting category="sale" />}/>
                    <Route path='/voucher' element={<Voucher category="sale" />} />
                    <Route path='/sales' element={<Sale category="sale" />} />
                    <Route path='/Cloth' element={<Cloth category="Cloth" />} />
                    <Route path='/Wishlist' element={<ShopCategory category="men" />} />
                    <Route path='/recently' element={<Recently category="Recently" />} />
                    <Route path='/New' element={<Recently category="New" />} />
                    <Route path='/Products' element={<Recently category="Products" />} />
                    <Route path='/Most' element={<Recently category="Most" />} />
                    <Route path='/Categories' element={<Recently category="Categories" />} />
                    <Route path='/product' element={<Product />}>
                        <Route path=':productId' element={<Product />} />
                    </Route>
                    <Route path='/chat' element={<ChatBot category="women" />} />
                    <Route path='/kids' element={<LoginSig category="kid" />} />
                    <Route path='/theo' element={<Strack category="theo dõi" />} />
                    <Route path='/theonot' element={<Stracknot category="theo dõi not" />} />
                    <Route path="/chatbot" element={<ChatBot category="chat bot" />} />
                    <Route path="/Cart" element={<Cart />} />
                    <Route path="/Payment" element={<Payment category="Payment" />} />
                    <Route path="/Login1" element={<LoginSig />} />
                    <Route path="/Start" element={<Navbar />} />
                    <Route path="/signup" element={<Navbar2 />} />
                    <Route path="/LogIn" element={<Navbar3 />} />
                    <Route path="/CheckOTP" element={<Navbar4 />} />
                    <Route path="/TypePass" element={<Navbar5 />} />
                    <Route path="/StartCard" element={<Navbar6 />} />
                    <Route path="/GuiMail" element={<Navbar7 />} />
                    <Route path="/NewPass" element={<Navbar8 />} />
                    <Route path="/Navbar9" element={<Navbar10 />} />
                </Routes>
               <AnHienNav/>
            </BrowserRouter>
        </div>
    )
}
export default App;



