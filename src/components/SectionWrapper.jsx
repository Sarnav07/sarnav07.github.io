import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ id, activeClass, children }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, staggerChildren: 0.1 }}
      className={`py-24 relative ${activeClass ? 'bg-surface' : 'bg-background'}`}
    >
      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
        {children}
      </div>
    </motion.section>
  );
};

export default SectionWrapper;
