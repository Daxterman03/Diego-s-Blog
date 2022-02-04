import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="nav__box">
      <div className="container-logo">
        <image src="../../../public/img/logoNav.png" alt="logo blog diego & diego web developers"/>
      </div>
      <div className="container">
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
