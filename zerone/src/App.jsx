import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./screens/Home/Home";
import EventDetails from "./components/EventDetails/EventDetails";
import "./App.css";
import { assets } from "./assets/assets";

function App({ onAppMount }) {
  useEffect(() => {
    // Notify main.jsx to remove loader
    if (onAppMount) onAppMount();
  }, [onAppMount]);

  return (
    <Router>
      <div className="App">
        {/* Background Video */}
        <video autoPlay muted loop id="background-video">
          <source src={assets.bgvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="overlay"></div>

        {/* Navbar 
        <Navbar />*/}

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event/:id" element={<EventDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
