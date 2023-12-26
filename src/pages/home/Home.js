import React from "react";
import Menu from "../../components/menu/Menu";
import Intro from "../../components/intro/Intro";

const Home = () => {
  document.title = "JM Carpintaria";
  return (
    <div>
      <Menu />
      <Intro />
    </div>
  );
};

export default Home;
