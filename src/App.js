import logo from "./logo.svg";
import "./App.css";
import TopNav from "./components/TopNav/TopNav";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Product from "./components/Product/Product";
import Contact from "./components/Contact/Contact";
import Nav from "./components/Nav/Nav";
import Partner from "./components/Partner/Partner";
import { Route, Routes } from "react-router";
import ProductDetails from "./components/Product/ProductDetails";
import AllProduct from "./components/Product/AllProduct";
import AllProductDetails from "./components/Product/AllProductDetails";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className=" ">

      
      <TopNav></TopNav>

      <Nav></Nav>

     

     
    
        <Routes>
        <Route path="/" element={<Home/>} />
 <Route path="/allproduct" element={<AllProduct/>} />
 {/* <Route path='/more-service/:id' element={<AllProductDetails/>}></Route> */}
 
 {/* <Route path="/sunflower" element={<Sunflower />}></Route> */}
 {/* <Route path='/review' element={<Review/>}></Route> */}
        </Routes>
       

        {/* <Contact></Contact> */}
     
    </div>
  );
}

export default App;
