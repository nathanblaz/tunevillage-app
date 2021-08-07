import React from "react";
import "./Splash.css";
import background from "./splash-background.jpeg";

const Splash = () => {
  return (
    <div className="splash">
      <div className="splash-text">
        <h3>
          Tunevillage is an online music community built for emerging digital
          music scenes.
        </h3>
        <p>
          Upload your own songs. Connect with like-minded artists. Art for art's
          sake.
        </p>
      </div>
      <div className="image-container">
        <img src={background} className="splash-img" alt="Splash" />
      </div>
    </div>
  );
};

export default Splash;
