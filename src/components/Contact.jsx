import React from 'react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { FaXTwitter, FaGithub } from 'react-icons/fa6';

const Contact = () => {
  return (
    <SectionWrapper id="contact" activeClass={false}>

      <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
        <motion.div className="mb-8">
          <span className="font-mono text-xs text-accent tracking-widest uppercase mb-2 block">
            // CONTACT
          </span>
          <h2 className="font-mono text-4xl md:text-5xl font-bold text-textPrimary mb-4">
            Let's Build Together
          </h2>
          <p className="font-sans text-textMuted text-lg max-w-xl mx-auto">
            Open to internships, collaborations, and interesting Web3 problems.
          </p>
        </motion.div>

        <motion.a
          href="mailto:sarnav_k@ph.iitr.ac.in"
          className="w-full relative group block mb-12"
        >
          {/* Animated glow behind */}
          <div className="absolute inset-0 bg-accent/20 blur-md rounded-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>

          <div className="relative w-full bg-surface border border-border rounded-xl p-8 flex items-center justify-center gap-4 transition-all duration-300 group-hover:border-accent">
            <Mail className="text-accent" size={28} />
            <span className="font-mono text-xl md:text-2xl text-textPrimary group-hover:text-accent transition-colors">
              sarnav_k@ph.iitr.ac.in
            </span>
          </div>
        </motion.a>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-24">
          <a href="https://github.com/Sarnav07" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-textMuted hover:text-accent transition-colors group">
            <div className="p-3 bg-surface border border-border rounded-full group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(0,255,209,0.2)] transition-all">
              <FaGithub size={20} />
            </div>
            <span className="font-mono text-sm hidden sm:inline-block">github.com/Sarnav07</span>
          </a>

          <a href="https://twitter.com/Chainer_Rio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-textMuted hover:text-accent transition-colors group">
            <div className="p-3 bg-surface border border-border rounded-full group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(0,255,209,0.2)] transition-all">
              <FaXTwitter size={20} />
            </div>
            <span className="font-mono text-sm hidden sm:inline-block">twitter.com/Chainer_Rio</span>
          </a>

          <a href="tel:+919921800786" className="flex items-center gap-3 text-textMuted hover:text-accent transition-colors group">
            <div className="p-3 bg-surface border border-border rounded-full group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(0,255,209,0.2)] transition-all">
              <Phone size={20} />
            </div>
            <span className="font-mono text-sm hidden sm:inline-block">+91 9921800786</span>
          </a>
        </div>
      </div>

      <footer className="text-center pb-8 pt-4 border-t border-border/30">
        <p className="font-mono text-xs text-textMuted">
          © {new Date().getFullYear()} Sarnav Kansal · Forged in Web3
        </p>
      </footer>

    </SectionWrapper>
  );
};

export default Contact;
