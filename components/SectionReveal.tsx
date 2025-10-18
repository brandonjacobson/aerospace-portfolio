'use client';

import { motion } from 'framer-motion';

/**
 * SectionReveal Component
 * Implements Superdesign Effect #2: Section reveal on scroll
 * Features:
 * - Intersection Observer-based viewport detection via Framer Motion
 * - Fade-up animation (translateY + opacity)
 * - Stagger children animations for sequential reveals
 * - Aerospace cubic-bezier easing
 * - Respects prefers-reduced-motion for accessibility
 */

interface SectionRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  staggerChildren?: boolean;
}

export default function SectionReveal({
  children,
  delay = 0,
  className = '',
  staggerChildren = false,
}: SectionRevealProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerChildren ? 0.1 : 0,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1] as const, // Aerospace cubic-bezier
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true, // Only animate once
        margin: '0px 0px -100px 0px', // Trigger 100px before entering viewport
        amount: 0.1, // Trigger when 10% visible
      }}
      variants={staggerChildren ? containerVariants : itemVariants}
    >
      {staggerChildren ? (
        <>
          {Array.isArray(children)
            ? children.map((child, index) => (
                <motion.div key={index} variants={itemVariants}>
                  {child}
                </motion.div>
              ))
            : children}
        </>
      ) : (
        children
      )}

      {/* Reduced Motion Fallback */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </motion.div>
  );
}
