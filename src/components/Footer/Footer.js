import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-outer-container">
      <div className="footer-upper-container">
        <div className="footer-made-with-care">
          <p>
            Made with <span className="care">care</span> in 2023
          </p>
        </div>
        <div className="footer-times">
          Monday - Friday: 07:30 - 22:30 Sat & Sun: 09:00 - 21:00
        </div>
        <div className="footer-outer-links">
          <a href="https://www.linkedin.com/in/aron-berhane-0485b820b/">
            <div className="footer-links linkedin-link"></div>
          </a>
          <a href="https://github.com/wildheat">
            <div className="footer-links git-link"></div>
          </a>
        </div>
      </div>
      <hr />
      <h5 className="copyright">© AB Bouldering 2023</h5>
    </div>
  );
};

export default Footer;
