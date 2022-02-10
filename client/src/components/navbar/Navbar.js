import React from "react";
import "./navbar.css";
import logo from './logoNav.png';


const Navbar = () => {
  return (
    <nav className="nav__box">
      <div className="container-logo">
        <img id="logo-nav" src={logo} width="120px" height="120px" alt="Logo Diego & Diego Blog"/>
      </div>
      <div className="container-nav">
        <ul>
          <li>
            <a href="#" className="nav-link">
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              <span>Articles</span>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
