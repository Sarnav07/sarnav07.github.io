import React from 'react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';

const achievementsData = [
  {
    icon: '🏆',
    title: '2nd Place',
    highlight: true,
    description: 'Stack2Deep Hackathon (Open Track), IIT Roorkee',
  },
  {
    icon: '🏆',
    title: '2nd Place',
    highlight: true,
    description: 'Syntax Error Hackathon (Freshman Track), IIT Roorkee',
  },
  {
    icon: '⚡',
    title: 'Ongoing',
    highlight: false,
    description: 'ETHGlobal OpenAgents with PRISM',
  },
  {
    icon: '🎯',
    title: 'Participated',
    highlight: false,
    description: 'X Layer Hackathon with Nexus.AI',
  },
  {
    icon: '🎓',
    title: 'IIT Roorkee',
    highlight: false,
    description: 'Admitted via JEE Advanced, B.Tech Engineering Physics',
  },
];

const Achievements = () => {
  return (
    <SectionWrapper id="achievements" activeClass={true}>
      <motion.div className="mb-12">
        <span className="font-mono text-xs text-accent tracking-widest uppercase mb-2 block">
          // ACHIEVEMENTS
        </span>
        <h2 className="font-mono text-3xl md:text-4xl font-bold text-textPrimary">
          Milestones
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievementsData.map((item, idx) => (
          <motion.div
            key={idx}
            className="flex items-center gap-6 bg-surface border border-border rounded-xl p-5 hover:border-amber/50 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(255,149,0,0.1)]"
          >
            <div className={`flex-shrink-0 w-16 h-16 flex items-center justify-center bg-background border border-border rounded-lg text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:border-amber/50 group-hover:shadow-[0_0_15px_rgba(255,149,0,0.2)]`}>
              {item.icon}
            </div>
            <div>
              <h3 className={`font-mono text-xl font-bold mb-1 ${item.highlight ? 'text-amber' : 'text-textPrimary'}`}>
                {item.title}
              </h3>
              <p className="font-sans text-textMuted text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Achievements;
