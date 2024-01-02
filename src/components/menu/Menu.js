import React, { useState, useEffect } from "react";
import "./Menu.css";

const Menu = () => {
  const [isMenuVisible, setMenuVisible] = useState(true);

  useEffect(() => {
    let isScrolling;
    let isMouseOverMenu = false;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const shouldShowMenu = currentScrollPos <= 50 || currentScrollPos < lastScrollPos;

      if (!isMouseOverMenu) {
        setMenuVisible(shouldShowMenu);
      }

      clearTimeout(isScrolling);

      isScrolling = setTimeout(() => {
        setMenuVisible(false);
      }, 3000);

      lastScrollPos = currentScrollPos;
    };

    let lastScrollPos = window.scrollY;

    const handleMouseEnter = () => {
      isMouseOverMenu = true;
    };

    const handleMouseLeave = () => {
      isMouseOverMenu = false;
    };

    window.addEventListener("scroll", handleScroll);
    document.querySelector(".menu").addEventListener("mouseenter", handleMouseEnter);
    document.querySelector(".menu").addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.querySelector(".menu").removeEventListener("mouseenter", handleMouseEnter);
      document.querySelector(".menu").removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className={`menu ${isMenuVisible ? "visible" : "hidden"}`}>
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
        <div className="menu-options">
          <a href="/"><p>Intro</p></a>
          <a href="/"><p>Works</p></a>
          <a href="/"><p>About</p></a>
          <a href="/"><p>Contact</p></a>
          </div>
      </div>
    </div>
 );
};

export default Menu;
