import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="about-logos">
        <a href="https://github.com/nathanblaz">
          {" "}
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/nathan-blaz-66489a8/">
          <i className="fab fa-linkedin"></i>
        </a>
        <div>
          <img
            className="user-object--avi"
            src="https://avatars.githubusercontent.com/u/24424412?v=4"
            alt="Nate"
          />
        </div>
        Built by Nathan Blaz
      </div>
    </div>
  );
};

export default Footer;
