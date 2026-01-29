'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  variants?: Variants;
  delay?: number;
  className?: string;
  as?: keyof typeof motion;
}

/**
 * ScrollReveal component - Wraps content with scroll-triggered animations
 * 
 * @param children - Content to animate
 * @param variants - Framer Motion variants (defaults to fadeInUp)
 * @param delay - Delay before animation starts (in seconds)
 * @param className - Additional CSS classes
 * @param as - HTML element to render (defaults to 'div')
 */
export default function ScrollReveal({
  children,
  variants,
  delay = 0,
  className = '',
  as = 'div',
}: ScrollRevealProps) {
  const MotionComponent = motion[as] as typeof motion.div;

  // Default fadeInUp animation if no variants provided
  const defaultVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay,
      },
    },
  };

  const animationVariants = variants || defaultVariants;

  // Add delay to custom variants if provided
  if (variants && delay > 0) {
    animationVariants.visible = {
      ...animationVariants.visible,
      transition: {
        ...(animationVariants.visible as any).transition,
        delay,
      },
    };
  }

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={animationVariants}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}

