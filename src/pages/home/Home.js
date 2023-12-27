import React from "react";
import Menu from "../../components/menu/Menu";
import Intro from "../../components/intro/Intro";
import Cards from "../../components/cards/Cards";

const Home = () => {
  document.title = "JM Carpintaria";
  return (
    <div>
      <Menu />
      <Intro />
      <Cards />
    </div>
  );
};

export default Home;
