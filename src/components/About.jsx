import React from 'react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <SectionWrapper id="about" activeClass={true}>

      <motion.div className="mb-12">
        <span className="font-mono text-xs text-accent tracking-widest uppercase mb-2 block">
          // ABOUT
        </span>
        <h2 className="font-mono text-3xl md:text-4xl font-bold text-textPrimary">
          Who I Am
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

        {/* Left Column - Small Avatar Hex */}
        <motion.div className="md:col-span-4 flex justify-center md:justify-start">
          <div className="w-48 h-48 relative">
            <div
              className="w-full h-full bg-surface border border-border relative z-10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,209,0.15)] overflow-hidden bg-cover bg-center"
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                backgroundImage: 'url(/me.jpeg)'
              }}
            >
              <div className="absolute inset-0 bg-background/20 mix-blend-overlay"></div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Bio & Stats */}
        <motion.div className="md:col-span-8 flex flex-col gap-6">
          <div className="prose prose-invert max-w-none">
            <p className="font-sans text-textMuted text-lg leading-relaxed">
              I'm a first-year Engineering Physics student at IIT Roorkee, building at the intersection of Web3, DeFi, and applied mathematics. I design secure smart contracts, architect multi-agent AI systems, and ship full-stack decentralized applications — from locally-forked testnets to live hackathon deployments.
            </p>
            <p className="font-sans text-textMuted text-lg leading-relaxed mt-4">
              When I'm not writing Solidity or Rust, I'm thinking about how theoretical physics and quantitative methods can make on-chain systems more robust.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="bg-background border border-border p-4 rounded-xl flex flex-col justify-center transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_20px_rgba(0,255,209,0.1)]">
              <span className="font-mono font-bold text-amber text-lg mb-1">2nd Place</span>
              <span className="font-sans text-xs text-textMuted uppercase tracking-wider">Stack2Deep Hackathon</span>
            </div>

            <div className="bg-background border border-border p-4 rounded-xl flex flex-col justify-center transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_20px_rgba(0,255,209,0.1)]">
              <span className="font-mono font-bold text-amber text-lg mb-1">2nd Place</span>
              <span className="font-sans text-xs text-textMuted uppercase tracking-wider">Syntax Error Hackathon</span>
            </div>

            <div className="bg-background border border-border p-4 rounded-xl flex flex-col justify-center transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_20px_rgba(0,255,209,0.1)]">
              <span className="font-mono font-bold text-accent text-lg mb-1">IIT Roorkee</span>
              <span className="font-sans text-xs text-textMuted uppercase tracking-wider">Eng. Physics '29</span>
            </div>
          </div>
        </motion.div>

      </div>
    </SectionWrapper>
  );
};

export default About;
