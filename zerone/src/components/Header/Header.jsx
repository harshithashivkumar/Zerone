import React from "react";
import { assets } from "../../assets/assets";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <div className="h-container">
          <div className="main-head">
                <img  src={assets.sit} alt="" srcset="" />
                <h1 className="sit-head pied">SIDDAGANGA INSTITUTE OF TECHNOLOGY</h1>
                <img src={assets.sit} alt="" srcset="" />
          </div>
          <div className="text-container">
                <h1 className="dept">Department of MCA</h1>
                <h2>in associate with</h2>
                <h1 className="pied">
                  <span>P</span>ied Pipers
                </h1>
                <h2>Presents</h2>
          </div>
          <img className="zeronelogo" src={assets.logo} alt="Logo" />
        
        </div>
      </div>
    </div>
  );
};

export default Header;
