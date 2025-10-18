'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

/**
 * PageTransition Component
 * Implements Superdesign Effect: Page route transitions
 * Features:
 * - Fade and slide transitions on route changes
 * - 300ms duration for smooth but snappy feel
 * - Aerospace cubic-bezier easing
 * - Respects prefers-reduced-motion for accessibility
 */

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: 0.3,
          ease: [0.23, 1, 0.32, 1], // Aerospace cubic-bezier
        }}
      >
        {children}

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
    </AnimatePresence>
  );
}
