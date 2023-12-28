import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-left">
            <a href="https://maps.app.goo.gl/mBePsZebnHUJJobRA" target="_blank" rel="noreferrer">
                <div className="footer-local"></div>
            </a>
        </div>
        <div className="footer-right">
            <a href="mailto:contato@jmcarpintaria.com.br" target="_blank" rel="noreferrer">
                <div className="footer-email"></div>
            </a>
            <a href="https://www.facebook.com/JmCarpintaria" target="_blank" rel="noreferrer">
                <div className="footer-facebook"></div>
            </a>
            <a href="https://www.instagram.com/jmcarpintaria" target="_blank" rel="noreferrer">
                <div className="footer-instagram"></div>
            </a>
            <a href="https://wa.me/5547992403449" target="_blank" rel="noreferrer">
                <div className="footer-whatsapp"></div>
            </a>
        </div>
    </div>
  );
};

export default Footer;
