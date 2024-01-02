import React from "react";
import Menu from "../../components/menu/Menu";
import Intro from "../../components/intro/Intro";
import Cards from "../../components/cards/Cards";
import About from "../../components/about/About";

import Footer from "../../components/footer/Footer";

const Home = () => {
  document.title = "JM Carpintaria";
  return (
    <div>
      <Menu />
      <Intro />
      <Cards />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
