import React from 'react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';

const educationData = [
  {
    institution: 'IIT Roorkee',
    degree: 'B.Tech Engineering Physics',
    period: '2025 – 2029',
    subtext: 'Focus: Web3, DeFi | CGPA: 8.69',
  },
  {
    institution: 'SSD Krishna Vatika School',
    degree: 'Class 12',
    period: '2025',
    subtext: 'Percentage: 94%',
  },
  {
    institution: 'Silver Oaks School',
    degree: 'Class 10',
    period: '2023',
    subtext: 'Percentage: 93.6%',
  },
];

const Education = () => {
  return (
    <SectionWrapper id="education" activeClass={false}>
      <motion.div className="mb-12">
        <span className="font-mono text-xs text-accent tracking-widest uppercase mb-2 block">
          // EDUCATION
        </span>
        <h2 className="font-mono text-3xl md:text-4xl font-bold text-textPrimary">
          Academic Timeline
        </h2>
      </motion.div>

      <div className="relative max-w-3xl mx-auto">
        {/* Center Vertical Line */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2"></div>

        {educationData.map((item, idx) => (
          <motion.div key={item.institution} className="relative mb-12 last:mb-0 w-full flex flex-col md:flex-row items-start md:items-center justify-between">

            {/* Dot */}
            <div className="absolute left-[20px] md:left-1/2 w-3 h-3 rounded-full bg-accent shadow-[0_0_8px_#00FFD1] -translate-x-1/2 mt-6 md:mt-0 z-10 ring-4 ring-background"></div>

            {/* Content Left Desktop (Empty for odd/even alternation, but here we stack on right Mobile, alternate on Desktop) */}
            <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-last md:pl-12'} pt-4 md:pt-0`}>
              <div className="bg-surface border border-border p-5 rounded-xl transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(0,255,209,0.05)]">
                <h3 className="font-mono font-bold text-xl text-textPrimary">{item.institution}</h3>
                <div className="font-sans text-amber text-sm font-medium mb-2">{item.degree}</div>
                <div className="font-mono text-xs text-textMuted mb-2">{item.period}</div>
                {item.subtext && <p className="font-sans text-xs text-textMuted mt-3 border-t border-border/50 pt-2">{item.subtext}</p>}
              </div>
            </div>

            {/* Empty space for alternative side on desktop */}
            <div className={`hidden md:block w-[45%]`}></div>

          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Education;
