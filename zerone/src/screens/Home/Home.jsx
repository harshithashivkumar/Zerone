import React from "react";
import Header from "../../components/Header/Header";
import Theme from "../../components/Theme/Theme";
import Autotype from "../../components/Autotype/Autotype";
import Events from "../../components/Events/Events";
import Profiles from "../../components/Profiles/Profiles";
import Maps from "../../components/Maps/Maps";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Theme />
      <Autotype />
      <Events />
      <Profiles/>
      <Maps/>
      <Footer/>
    </>
  );
};

export default Home;
