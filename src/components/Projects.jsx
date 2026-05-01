import React from 'react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa6';

const projectsData = [
  {
    title: 'PRISM',
    badge: 'Ongoing',
    badgeColor: 'text-accent',
    event: 'ETHGlobal OpenAgents',
    description: [
      'Multi-agent DeFi orchestration on Uniswap V4 with 5 specialized Python brains (predictive LP, fee curator, frag healer, backrunner, guardian)',
      'Rust orchestrator running SP1 ZK proofs (solver, execution, Shapley, aggregator) for trustless on-chain settlement via custom V4 hook'
    ],
    tags: ['Rust', 'Python', 'Solidity', 'SP1', 'Uniswap V4', 'ZK'],
    github: 'https://github.com/pranav7002/Prism'
  },
  {
    title: 'NEXUS.AI',
    badge: 'Participated',
    badgeColor: 'text-textMuted',
    event: 'X Layer Hackathon',
    description: [
      'Trustless multi-agent platform using AI to manage liquidity and execute trades on X Layer testnet',
      'Three-agent architecture (Orchestrator, Specialist, Risk Guardian) with Onchain OS Wallet API + Uniswap V3 AI skills'
    ],
    tags: ['Solidity', 'Multi-Agent', 'Uniswap V3', 'AI', 'DeFi'],
    github: 'https://github.com/Sarnav07/Nexus.AI'
  },
  {
    title: 'SENTINEL VAULT',
    badge: '2nd Place 🏆',
    badgeColor: 'text-amber',
    event: 'Stack2Deep Hackathon · IITR',
    description: [
      'Secure automated asset management protocol in Solidity/Foundry, optimizing yields with capital preservation',
      'Next.js/Wagmi frontend + Risk Guardian modules, tested on forked Sepolia with live Chainlink feeds'
    ],
    tags: ['Solidity', 'Foundry', 'Next.js', 'Wagmi', 'Chainlink'],
    github: 'https://github.com/Sarnav07/Sentinel-Vault-'
  },
  {
    title: 'TRAFFIC NETWORK OPTIMIZATION',
    badge: '2nd Place 🏆',
    badgeColor: 'text-amber',
    event: 'Syntax Error Hackathon · IITR',
    description: [
      'Python city traffic simulation using CMA-ES to optimize intersection priorities',
      'Real-time optimization visualized via custom Pygame + Customtkinter GUI'
    ],
    tags: ['Python', 'CMA-ES', 'Simpy', 'Pygame', 'Optimization'],
    github: 'https://github.com/Sarnav07/Traffic-Network-Optimisation'
  }
];

const Projects = () => {
  return (
    <SectionWrapper id="projects" activeClass={true}>

      <motion.div className="mb-12">
        <span className="font-mono text-xs text-accent tracking-widest uppercase mb-2 block">
          // PROJECTS & HACKATHONS
        </span>
        <h2 className="font-mono text-3xl md:text-4xl font-bold text-textPrimary">
          What I've Built
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project, idx) => (
          <motion.div
            key={project.title}
            className="bg-surface border border-border rounded-xl p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_30px_rgba(0,255,209,0.1)] relative group flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-mono font-bold text-xl text-textPrimary tracking-tight">
                {project.title}
              </h3>
              <span className={`font-mono text-xs font-bold px-2 py-1 bg-background border border-border rounded-md ${project.badgeColor}`}>
                {project.badge}
              </span>
            </div>

            <div className="font-sans text-xs text-textMuted uppercase tracking-widest mb-4">
              {project.event}
            </div>

            <ul className="flex-1 flex flex-col gap-2 mb-6">
              {project.description.map((bullet, i) => (
                <li key={i} className="font-sans text-textMuted text-sm leading-relaxed flex items-start">
                  <span className="text-accent mr-2 mt-1 drop-shadow-[0_0_5px_#00FFD1]">▹</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex justify-between items-center pt-4 border-t border-border/50">
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="font-mono text-[10px] uppercase bg-accent/10 text-accent px-2 py-1 rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-accent transition-colors ml-4 z-10 block">
                  <FaGithub size={20} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div className="mt-16 flex justify-center">
        <a 
          href="https://github.com/Sarnav07" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-6 py-3 rounded-full border border-border bg-surface hover:border-accent hover:shadow-[0_0_15px_rgba(0,255,209,0.2)] transition-all duration-300"
        >
          <span className="font-mono text-sm text-textMuted group-hover:text-accent transition-colors">
            View more projects on GitHub
          </span>
          <FaGithub className="text-textMuted group-hover:text-accent transition-colors w-5 h-5" />
        </a>
      </motion.div>
    </SectionWrapper>
  );
};

export default Projects;
