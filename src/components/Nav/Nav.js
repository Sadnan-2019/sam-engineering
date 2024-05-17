import React, { memo, useState } from "react";
import { Link, NavLink } from "react-router-dom/dist";
 

const Nav = () => {


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <header
        id="header"
        class="fixed-top d-flex align-items-center bg-primary "
      >
        <div class="container d-flex align-items-center justify-content-between">
          <h1 class="logo">
            <a href="/">SAM ENGINEERING</a>
          </h1>

          <nav id="navbar" class="navbar">
            <ul>
              <li>
                <NavLink class=" " to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <a class="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#services">
                  Services
                </a>
              </li>

              <li>
                <NavLink class=" " to="/allproduct">
                  Product
                </NavLink>
              </li>

              <li>
                <a class="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle" onClick={toggleMenu}></i>
          </nav>
          
        </div>
      </header>
 
 {/* <header id="header" className="fixed-top d-flex align-items-center bg-primary">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo">
          <a href="/" className="text-white">SAM ENGINEERING</a>
        </h1>

        <nav id="navbar" className="navbar">
          <ul className={`navbar-nav ${isOpen ? 'd-flex' : 'd-none d-lg-flex'}`}>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white scrollto" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white scrollto" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/allproduct">
                Product
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white scrollto" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle text-white" onClick={toggleMenu}></i>
        </nav>
      </div>
    </header> */}
    </div>
  );
};

export default Nav;
