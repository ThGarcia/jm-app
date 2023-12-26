import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-left">
        <a href="/*"><div className="menu-logo"></div></a>
      </div>
      <div className="menu-right">
        <div className="menu-landscape">
          <a className="menu-button" href="/"><p>Intro</p></a>
          <a className="menu-button" href="/"><p>Works</p></a>
          <a className="menu-button" href="/"><p>About</p></a>
          <a className="menu-button" href="/"><p>Contact</p></a>
        </div>
        <a href="/"><div className="menu-portrait"></div></a>
      </div>
    </div>
  );
};

export default Menu;
