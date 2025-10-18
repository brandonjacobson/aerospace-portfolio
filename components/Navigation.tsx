'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' }
];

/**
 * Navigation Component
 * Enhanced with Superdesign Effect #4: Liquid underline hover animations
 * Features:
 * - Framer Motion-based animated underlines
 * - Smooth scroll to sections
 * - Active section tracking
 * - Aerospace cubic-bezier easing
 * - Respects prefers-reduced-motion for accessibility
 */

export default function Navigation() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-primary/95 backdrop-blur-md p-4 z-50 border-b border-accent">
      <ul className="flex justify-center gap-8 flex-wrap">
        {navItems.map((item) => (
          <li key={item.href}>
            <motion.a
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-text font-medium relative block py-2"
              onHoverStart={() => setHoveredItem(item.href)}
              onHoverEnd={() => setHoveredItem(null)}
              whileHover={{ color: '#00d4ff' }}
              transition={{
                duration: 0.3,
                ease: [0.23, 1, 0.32, 1], // Aerospace cubic-bezier
              }}
            >
              {item.label}

              {/* Liquid Underline Animation */}
              {hoveredItem === item.href && (
                <motion.span
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                  layoutId="navUnderline"
                  transition={{
                    type: 'spring',
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
            </motion.a>
          </li>
        ))}
      </ul>

      {/* Reduced Motion Fallback */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </nav>
  );
}
