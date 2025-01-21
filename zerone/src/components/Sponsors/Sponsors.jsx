import React from 'react';
import { assets } from '../../assets/assets'; // Adjust the path as needed
import './Sponsors.css'; // CSS for styling

const Sponsors = () => {
  return (
    <div className="sponsor-container">
      <div className="sponsor">
        <div className="sponsor-tag">
          <h1>SPONSORS</h1>
        </div>
        <div className="sponsors-logo">
          <div className="sponsor-logos-container">
          <img src={assets.acelucid} alt="Acelucid Logo" />
          <img src={assets.nilgiri} alt="Nilgiri Logo" />
          <img src={assets.nssilks} alt="NSS Silks Logo" />
          <img src={assets.nsglass} alt="NSS Silks Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
