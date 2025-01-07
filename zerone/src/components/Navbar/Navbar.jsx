import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets.js';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar bgblack">
      <div className="navbar-logo">
        <img className="left1 img" src={assets.sit} alt="/" />
        <img className="left2" src={assets.logo} alt="Vite Logo" />
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
      </div>

      {/* Navbar Links */}
      <ul className={`navbar-items ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
