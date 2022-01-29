import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="app__box">
      <h1 class="footer-title">Blog</h1>
      <div class="container flex-center">
        <div class="row">
          <div class="column">
            <h1 class="heading">About Us</h1>
            <ul>
              <li>
                <a href="#" class="footer-link">
                  <span>One</span>
                </a>
              </li>
              <li>
                <a href="#" class="footer-link">
                  <span>Two</span>
                </a>
              </li>
              <li>
                <a href="#" class="footer-link">
                  <span>Three</span>
                </a>
              </li>
              <li>
                <a href="#" class="footer-link">
                  <span>Four</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="column">
            <h1 class="heading">Contact</h1>
            <ul>
              <li>
                <a href="#" class="footer-link">
                  <span>One</span>
                </a>
              </li>
              <li>
                <a href="#" class="footer-link">
                  <span>Two</span>
                </a>
              </li>
              <li>
                <a href="#" class="footer-link">
                  <span>Three</span>
                </a>
              </li>
              <li>
                <a href="#" class="footer-link">
                  <span>Four</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="column">
            <h1 class="heading">FAQ</h1>
            <ul>
              <li>
                <a href="#" class="footer-link">
                  <span>One</span>
                </a>
              </li>
              <li>
                <a href="#" class="footer-link">
                  <span>Two</span>
                </a>
              </li>
              <li>
                <a href="#" class="footer-link">
                  <span>Three</span>
                </a>
              </li>
              <li>
                <a href="#" class="footer-link">
                  <span>Four</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="column">
            <h1 class="heading">Social Media</h1>
            <ul>
              <li>
                <a href="#" class="footer-link">
                  <span
                    class="iconify"
                    data-icon="brandico:facebook-rect"
                  ></span>
                  <i>
                    <span>Facebook</span>
                  </i>
                </a>
              </li>
              <li>
                <a href="#" class="footer-link">
                  <span
                    class="iconify"
                    data-icon="brandico:twitter-bird"
                  ></span>
                  <i>
                    <span>Twitter</span>
                  </i>
                </a>
              </li>
              <li>
                <a href="#" class="footer-link">
                  <span class="iconify" data-icon="brandico:instagram"></span>
                  <i>
                    <span>Instagram</span>
                  </i>
                </a>
              </li>
              <li>
                <a href="#" class="footer-link">
                  <span class="iconify" data-icon="brandico:github"></span>
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
