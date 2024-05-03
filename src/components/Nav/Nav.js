import React, { memo } from "react";
import { Link, NavLink } from "react-router-dom/dist";

const Nav = () => {
  return (
    <div>
      <header
        id="header"
        class="fixed-top d-flex align-items-center bg-primary "
      >
        <div class="container d-flex align-items-center justify-content-between">
          <h1 class="logo">
            <a href="index.html">SAM ENGINEERING</a>
          </h1>
          {/* <!-- Uncomment below if you prefer to use an image logo --> */}
          {/* <!-- */}
          {/* <a href=index.html" class="logo">
        <img src="assets/img/logo.png" alt="" class="img-fluid"/></a> */}
          {/* --> */}

          <nav id="navbar" class="navbar">
            <ul>
              <li>
              <NavLink class=" "  to="/">
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
                <NavLink class=" "  to="/allproduct">
                  Product
                </NavLink>
              </li>
              {/* <li className="nav-item p-2">
            <NavLink onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? `${active}` : `${dropnormal}`
              }
              to="/sunflower"
            >
              Sunflower Residence
            </NavLink>
          </li> */}

              <li>
                <a class="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
          {/* <!-- .navbar --> */}
        </div>
      </header>
    </div>
  );
};

export default Nav;
