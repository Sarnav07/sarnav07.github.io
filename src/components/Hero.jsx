import React from 'react';
import ParticleNetwork from './ParticleNetwork';
import GlitchText from './GlitchText';
import { Download } from 'lucide-react';
import { FaXTwitter, FaGithub } from 'react-icons/fa6';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <ParticleNetwork />

      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full flex flex-col md:flex-row items-center gap-12">

        {/* Left / Top Text Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">

          <div className="font-mono text-accent text-sm md:text-base mb-4 tracking-wider">
            {'< WEB3 & DEFI DEVELOPER />'}<span className="inline-block animate-blink ml-1">|</span>
          </div>

          <h1 className="font-sans font-bold text-5xl sm:text-6xl md:text-8xl tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-textPrimary via-accent to-textPrimary animate-text-gradient drop-shadow-[0_0_15px_rgba(0,255,209,0.2)]">
            SARNAV KANSAL
          </h1>

          <p className="font-sans text-textMuted text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Engineering Physics @ IIT Roorkee · Building the decentralized future
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
            <a href="#projects" className="bg-accent text-background font-mono font-bold px-8 py-3 rounded-md hover:bg-accent/90 transition-all shadow-[0_0_15px_rgba(0,255,209,0.4)] hover:shadow-[0_0_25px_rgba(0,255,209,0.6)]">
              View Projects
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="border border-accent text-accent font-mono font-bold px-8 py-3 rounded-md hover:bg-accent/10 transition-all flex items-center gap-2">
              Download Resume <Download size={18} />
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/Sarnav07" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-accent transition-colors hover:drop-shadow-[0_0_8px_rgba(0,255,209,0.8)]">
              <FaGithub size={24} />
            </a>
            <a href="https://twitter.com/Chainer_Rio" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-accent transition-colors hover:drop-shadow-[0_0_8px_rgba(0,255,209,0.8)]">
              <FaXTwitter size={24} />
            </a>
          </div>

        </div>

        {/* Right / Bottom Avatar */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0 flex items-center justify-center">
          {/* Animated border rotating slowly behind */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/50 to-amber/30 animate-rotate-slow rounded-full opacity-50 blur-xl"></div>

          {/* Hexagon shape masking the image */}
          <div
            className="w-full h-full bg-surface border border-border relative z-10 animate-glow-pulse overflow-hidden bg-cover bg-center"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              backgroundImage: 'url(/me.jpeg)'
            }}
          >
            {/* Dark overlay for blending */}
            <div className="absolute inset-0 bg-background/20 mix-blend-overlay"></div>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-50">
        <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
