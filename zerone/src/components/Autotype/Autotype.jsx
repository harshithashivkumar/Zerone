import React, { useState, useEffect, useRef } from 'react';
import './Autotype.css';

const Autotype = () => {
  const [text, setText] = useState('');
  const [isVisible, setIsVisible] = useState(false); // Track visibility
  const autotypeRef = useRef(null); // Reference for the component
  const content = [
    'DATE   : 30-Jan-2025 & 31-Jan-2025\n',
    'TIME   : 8 AM TO 8 PM\n',
    'THEME  : Transforming ZERO TO ONE\n',
    'PLACE  : Siddaganga Institute \n         Of Technology, Tumkur....',
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (autotypeRef.current) {
      observer.observe(autotypeRef.current);
    }

    return () => {
      if (autotypeRef.current) {
        observer.unobserve(autotypeRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let typingTimeout;
    if (isVisible) {
      let index = 0;
      let charIndex = 0;
      let currentText = '';

      const typingEffect = () => {
        if (charIndex < content[index].length) {
          currentText += content[index][charIndex];
          setText(currentText); // Update the state with the current text
          charIndex++;
          typingTimeout = setTimeout(typingEffect, 100); // Continue typing after a delay
        } else {
          charIndex = 0;
          index++;
          if (index < content.length) {
            typingTimeout = setTimeout(typingEffect, 500); // Delay before starting next line
          }
        }
      };

      typingEffect(); // Start the typing effect
    } else {
      setText(''); // Clear the text when not visible
    }

    return () => {
      clearTimeout(typingTimeout); // Clear timeout to avoid glitches
    };
  }, [isVisible]); // Rerun effect if visibility changes

  return (
    <div className="auto-cont">
    <h1 className='head' >DETAILS OF <span>ZERONE</span></h1>
    <div className="autotype-container" ref={autotypeRef}>
      <div className="autotype-head">
          ZERONE 2K25
        <div className="autotype-dots">
          <span className="autotype-dot autotype-red"></span>
          <span className="autotype-dot autotype-yellow"></span>
          <span className="autotype-dot autotype-green"></span>
        </div>
      </div>
      
      <div className="autotype-content">
        <pre>{text}</pre>
        {isVisible && <div className="blinking-cursor"></div>} {/* Blinking cursor */}
      </div>
    </div>
    </div>
  );
};

export default Autotype;
