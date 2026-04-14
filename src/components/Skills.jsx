import React from 'react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'Solidity', 'JavaScript', 'Rust'],
  },
  {
    title: 'Web3 & Blockchain',
    skills: ['Foundry', 'Wagmi', 'Ethers.js'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Tailwind CSS'],
  },
  {
    title: 'AI & Data',
    skills: ['CMA-ES', 'Multi-Agent Systems', 'Simpy'],
  },
];

const Skills = () => {
  return (
    <SectionWrapper id="skills" activeClass={false}>
      
      <motion.div className="mb-12">
        <span className="font-mono text-xs text-accent tracking-widest uppercase mb-2 block">
          // SKILLS & TECHNOLOGIES
        </span>
        <h2 className="font-mono text-3xl md:text-4xl font-bold text-textPrimary">
          What I Use
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {skillCategories.map((category, idx) => (
          <motion.div key={category.title} className="flex flex-col gap-4">
            <h3 className="font-mono text-textPrimary text-lg border-b border-border pb-2">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-border hover:border-accent text-textMuted hover:text-accent font-mono text-sm px-4 py-1.5 rounded-full transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,255,209,0.1)] cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </SectionWrapper>
  );
};

export default Skills;
