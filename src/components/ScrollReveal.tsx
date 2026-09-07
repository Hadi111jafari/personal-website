'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode, useMemo } from 'react';

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

  const animationVariants = useMemo<Variants>(() => {
    if (variants) {
      if (delay <= 0) return variants;
      const visible = variants.visible as Record<string, unknown> | undefined;
      const existingTransition =
        (visible?.transition as Record<string, unknown> | undefined) ?? {};
      return {
        ...variants,
        visible: {
          ...(variants.visible as object),
          transition: { ...existingTransition, delay },
        },
      } as Variants;
    }
    return {
      hidden: { opacity: 0, y: 60 },
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
  }, [variants, delay]);

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
