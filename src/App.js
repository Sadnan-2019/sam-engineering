import logo from "./logo.svg";
import "./App.css";
import TopNav from "./components/TopNav/TopNav";

import Nav from "./components/Nav/Nav";

import { Route, Routes } from "react-router";

import AllProduct from "./components/Product/AllProduct";

import Home from "./components/Home/Home";
import MoreProductDetails from "./components/Product/MoreProductDetails";
import WhatsApp from "./components/WhatsApp/WhatsApp"
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className=" ">
      <TopNav></TopNav>

      <Nav></Nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allproduct" element={<AllProduct />} />
        <Route
          path="/product-details/:id"
          element={<MoreProductDetails />}
        ></Route>

        {/* <Route path="/sunflower" element={<Sunflower />}></Route> */}
        {/* <Route path='/review' element={<Review/>}></Route> */}
      </Routes>

      <WhatsApp></WhatsApp>
      <ToastContainer></ToastContainer>
      {/* <Contact></Contact> */}
    </div>
  );
}

export default App;
