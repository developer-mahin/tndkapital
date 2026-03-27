'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: 'fade' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'zoomIn' | 'zoomOut' | 'fadeUp' | 'fadeDown';
  delay?: number;
  duration?: number;
  distance?: number;
  scale?: number;
  once?: boolean;
  staggerChildren?: number;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.8,
  distance = 40,
  scale = 0.95,
  once = true,
  staggerChildren = 0,
  className = '',
}) => {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: variant === 'slideLeft' ? -distance : variant === 'slideRight' ? distance : 0,
      y: (variant === 'slideUp' || variant === 'fadeUp') ? distance : (variant === 'slideDown' || variant === 'fadeDown') ? -distance : 0,
      scale: variant === 'zoomIn' ? scale : variant === 'zoomOut' ? 1 / scale : 1,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Custom premium easing
        staggerChildren: staggerChildren,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
