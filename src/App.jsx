import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import './index.css';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  // Disable custom cursor on mobile to avoid weird touch behavior
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="bg-background min-h-screen text-textPrimary selection:bg-accent selection:text-background">
      {!isMobile && <CustomCursor />}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;
