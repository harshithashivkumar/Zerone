import React from "react";
import { assets } from "../../assets/assets";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <div className="h-container">
          <div className="main-head">
            <img src={assets.sit} alt="SIT Logo" />
            <h1 className="sit-head pied">SIDDAGANGA INSTITUTE OF TECHNOLOGY</h1>
            <img src={assets.sit} alt="SIT Logo" />
          </div>
          <div className="text-container">
            <h1 className="dept">Department of MCA</h1>
            <h2>in association with</h2>
            <h1 className="pied">
              <span>P</span>ied-Pipers
            </h1>
            <h2>Presents</h2>
          </div>
          <img className="zeronelogo" src={assets.logo} alt="ZERONE Logo" />
          <h2 className="alumni">
            MCA <span>Alumni</span> Sponsored Fest
          </h2>

          {/* Download Button */}
          <button
            className="Download-button"
            onClick={() => window.location.href = assets.brouchere}
          >
            <svg
              viewBox="0 0 640 512"
              width="20"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="white"
                d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"
              ></path>
            </svg>
            <span>Brochure</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
