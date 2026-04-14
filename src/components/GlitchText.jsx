import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// A smoother tech decode effect instead of the chaotic glitch
const GlitchText = ({ text, className }) => {
  const [displayText, setDisplayText] = useState(text.split('').map(() => ''));
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";

  useEffect(() => {
    let iteration = 0;
    
    const interval = setInterval(() => {
      setDisplayText(prev => 
        prev.map((_, index) => {
          if (index < iteration) {
            return text[index];
          }
          return letters[Math.floor(Math.random() * letters.length)];
        })
      );
      
      if (iteration >= text.length) {
        clearInterval(interval);
      }
      
      iteration += 1 / 2; // the speed of the decode
    }, 40);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className={`relative inline-block ${className}`}>
      {displayText.map((char, index) => (
        <span 
          key={index} 
          className={char === text[index] ? "text-textPrimary" : "text-accent border-b-2 border-accent border-opacity-50"}
          style={{ textShadow: char === text[index] ? '0 0 20px rgba(240,240,240,0.5)' : 'none' }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default GlitchText;
