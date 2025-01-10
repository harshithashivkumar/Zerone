import React from 'react';
import './Maps.css';

const Maps = () => {
  const handleRegisterClick = () => {
    window.open('https://linktr.ee/Zerone.sit', '_blank'); // Opens the link in a new tab
  };

  return (
    <div className="maps-container">
      <h1>ROUTE TO SIT</h1>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000.5213513246512!2d77.12619690247205!3d13.327219061512507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb02e826fb691ef%3A0xe78608813c36f380!2sSiddaganga%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1735488258469!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: '0' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <input
        type="button"
        value="Click Here For Register"
        onClick={handleRegisterClick}
      />
    </div>
  );
};

export default Maps;
