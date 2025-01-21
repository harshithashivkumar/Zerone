import React from "react";
import Header from "../../components/Header/Header";
import Theme from "../../components/Theme/Theme";
import Autotype from "../../components/Autotype/Autotype";
import Events from "../../components/Events/Events";
import Profiles from "../../components/Profiles/Profiles";
import Maps from "../../components/Maps/Maps";
import Footer from "../../components/Footer/Footer";
import Sponsors from "../../components/Sponsors/Sponsors";

const Home = () => {
  return (
    <>
      <Header />
      <Theme />
      <Autotype />
      <Events />
      <Profiles/>
      <Maps/>
      <Sponsors/>
      <Footer/> 
    </>
  );
};

export default Home;
