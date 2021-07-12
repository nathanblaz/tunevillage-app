import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="about-logos">
        <div className="footer-items">
          <a href="https://github.com/nathanblaz">
            {" "}
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div className="footer-items">
          <a href="https://www.linkedin.com/in/nathan-blaz-66489a8/">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="credit">
          <img
            className="user-object--avi"
            src="https://avatars.githubusercontent.com/u/24424412?v=4"
            alt="Nate"
          />
          <div className="footer-text">Built by Nathan Blaz</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;