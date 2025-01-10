import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/Home/Home";
import EventDetails from "./components/EventDetails/EventDetails";
import "./App.css";
import { assets } from "./assets/assets";

function App({ onAppMount }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Notify main.jsx to remove loader
    if (onAppMount) onAppMount();
  }, [onAppMount]);

  return (
    <Router>
      <div className="App">
        {/* Loader */}
        {isLoading && (
          <div className="loader">
            <div className="pulse"></div>
          </div>
        )}

        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          id="background-video"
          onLoadedData={() => setIsLoading(false)} // Hide loader after video loads
        >
          <source src={assets.bgvideo} type="video/mp4" />
          Your browser does not support the video.
        </video>

        {/* Overlay */}
        <div className="overlay"></div>

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
