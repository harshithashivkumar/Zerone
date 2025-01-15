import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="footer">
            <h3>Innovation starts with you. Join us at Zerone 2025!</h3>
            <div className="footer-icons">
                <a href="https://www.instagram.com/zerone.techfest/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://youtube.com/@sit.zerone" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faYoutube} />
                </a>
                
            </div>
            <p>made by <span className='foo'>
                <a href="https://www.instagram.com/dineshgowdavlogs" target="_blank" rel="noopener noreferrer">DINESH</a>
            </span></p>
        </div>
    </div>
  );
};

export default Footer;
