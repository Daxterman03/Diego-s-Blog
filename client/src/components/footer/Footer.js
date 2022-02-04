import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__copyright">
        <small>Copyright © 2022 Diego & Diego</small>
      </div>
      <div className="footer__links">
        <ul>
          <li>
            <span className="iconify" data-icon="brandico:facebook"></span>
            <a href="#" className="footer__list-link">
              Facebook
            </a>
          </li>
          <li>
            <span className="iconify" data-icon="brandico:github"></span>
            <a href="#" className="footer__list-link">
              GitHub
            </a>
          </li>
          <li>
            <span className="iconify" data-icon="brandico:linkedin"></span>
            <a href="#" className="footer__list-link">
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
