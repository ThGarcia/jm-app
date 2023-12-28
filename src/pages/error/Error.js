import React from "react";
import Menu from "../../components/menu/Menu";
import Footer from "../../components/footer/Footer";
import "./Error.css";

import img from "../../assets/img/error.png";
import logo from "../../assets/img/jmlogo.png";

const Error = () => {
  document.title = "Erro 404";
  return (
    <div>
      <Menu />
      <div className="error">
        <img className="error-logo" src={logo} alt="logo" />
        <img className="error-img" src={img} alt="error" />
        <div  className="error-text">
            <p>Erro 404! Você está certo disso?</p>
            <p>Não encontramos a página que você está procurando...</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
