import React from "react";
import Card from "./Card";
import "./Cards.css";

import brise from "../../assets/img/brise.png";
import caramanchao from "../../assets/img/caramanchao.png";
import deck from "../../assets/img/deck.png";
import sauna from "../../assets/img/sauna.png";

const Cards = () => {
  return (
    <div className="cards">
      <Card img={brise} title="Brise" text="Estrutura de madeira ou concreto que serve para proteger do sol e do vento. Pode ser colocado na fachada de uma casa ou em uma área externa, como uma piscina. " />
      <Card img={caramanchao} title="Caramanchão" text="Estrutura de madeira ou metal que serve de apoio para plantas trepadeiras. Pode ser colocado em uma área externa, como um jardim ou uma varanda. " />
      <Card img={deck} title="Deck" text="Estrutura de madeira ou outro material que fica ao nível do solo, geralmente em uma área externa. Usado como área de lazer, espaço para relaxar ou fazer refeições. " />
      <Card img={sauna} title="Sauna" text="Ambiente fechado que é aquecido a altas temperaturas. É usado para fins terapêuticos ou recreativos. Pode ser instalado em uma casa ou em um espaço comercial. " />
    </div>
  );
};

export default Cards;
