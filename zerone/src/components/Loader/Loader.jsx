// Loader.jsx
import React, { useEffect, useState } from "react";
import "./Loader.css";

function Loader({ onLoadComplete }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timeout of 5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
      if (onLoadComplete) onLoadComplete(); // Notify that the loader has completed
    }, 5000);

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <div className={`loader ${loading ? "active" : ""}`}>
      <div className="loader-text">ZERONE</div>
    </div>
  );
}

export default Loader;
