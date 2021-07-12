import React from "react";
import "./Splash.css";
import background from "./splash-background.jpeg";

const Splash = () => {
  return (
    <div className="splash">
      <div className="splash-text">
        Tunevillage is an online music community built for the emergence and
        proliferation of digital music scenes.
      </div>
      <div className="image-container">
        <img src={background} className="splash-img" />
      </div>
    </div>
  );
};

export default Splash;
