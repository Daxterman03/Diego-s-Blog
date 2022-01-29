import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="app__box">
      <h1 className="footer-title">Blog</h1>
      <div className="container flex-center">
        <div className="row">
          <div className="column">
            <h1 className="heading">About Us</h1>
            <ul>
              <li>
                <a href="#" className="footer-link">
                  <span>One</span>
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  <span>Two</span>
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  <span>Three</span>
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  <span>Four</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="column">
            <h1 className="heading">Contact</h1>
            <ul>
              <li>
                <a href="#" className="footer-link">
                  <span>One</span>
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  <span>Two</span>
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  <span>Three</span>
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  <span>Four</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="column">
            <h1 className="heading">FAQ</h1>
            <ul>
              <li>
                <a href="#" className="footer-link">
                  <span>One</span>
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  <span>Two</span>
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  <span>Three</span>
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  <span>Four</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="column">
            <h1 className="heading">Social Media</h1>
            <ul>
              <li>
                <a href="#" className="footer-link">
                  <span
                    className="iconify"
                    data-icon="brandico:facebook-rect"
                  ></span>
                  <i>
                    <span>Facebook</span>
                  </i>
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  <span
                    className="iconify"
                    data-icon="brandico:twitter-bird"
                  ></span>
                  <i>
                    <span>Twitter</span>
                  </i>
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  <span
                    className="iconify"
                    data-icon="brandico:instagram"
                  ></span>
                  <i>
                    <span>Instagram</span>
                  </i>
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  <span className="iconify" data-icon="brandico:github"></span>
                  <i>
                    <span>Github</span>
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
