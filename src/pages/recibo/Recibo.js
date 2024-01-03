import React from "react";
import "./Recibo.css";

import logo from "../../assets/img/logo.png";

document.title = "Novo recibo";

const Recibo = () => {
  return (
    <div className="recibo-container">
        
     <div className="container">
        <div className="recibo">
            <div className="recibo-logo">
                <img src={logo} alt="JM logo" />
                <div className=" recibo-data">
                    <p>JM Carpintaria</p>
                    <p>CNPJ: 42.440.731/0001-06</p>
                    <p>Itajaí, SC - CEP: 88318-144</p>
                    <p>Fone: (47) 99240-3449</p>
                </div>
            </div>
            <div className="recibo-value">
                <p>RECIBO</p>
                <div className="value-box">
                    <p>R$</p>
                    <input/>
                </div>
            </div>
        </div>
        <div className="fields">
            <div>
                <p>Recebemos de </p><input/>
            </div>
            <div>
                <p>Importância de </p><input/>
            </div>
            <div><input/></div>
            <div>
                <p>Referente a </p><input/>
            </div>
            <div><input/></div>
        </div>
        <div className="sign">
            <div className="sign-date">
                <p>DATA</p><input/>
                <p>de</p><input/>
                <p>de</p><input/>
            </div>
            <div className="sign-date-sign">
                <input/>
                <p>ASSINATURA</p>
            </div>
        </div>
    </div>

    </div>
  );
};

export default Recibo;
