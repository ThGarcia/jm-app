import React from "react";
import "./Intro.css";

import logo from "../../assets/img/intro-logo.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-text">
        <h1>Da imaginação à realidade:</h1>
        <h2>Seus sonhos, nossa especialidade!</h2>
        <h4>Cada projeto da JM Carpintaria reflete a nossa paixão pela carpintaria e décadas de experiência.</h4>
      </div>
      <div className="intro-logo">
        <img src={logo} alt="jm logo" />
      </div>
    </div>
  );
};

export default Intro;
