import React from "react";
import "./Cards.css";

const Card = ({ img, title, text }) => {
  return (
    <div className="card">
      <img className="card-img" src={img} alt={title} />
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{text}</p>
    </div>
  );
};

export default Card;
