'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * MagneticButton Component
 * Implements Superdesign Effect #1: Magnetic CTA button with liquid ripple
 * Features:
 * - Mouse-tracking magnetic pull (15% strength)
 * - Liquid ripple effect on hover
 * - GPU-accelerated transforms
 * - Aerospace-inspired cubic-bezier easing
 * - Respects prefers-reduced-motion for accessibility
 */

interface MagneticButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function MagneticButton({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Apply 15% magnetic pull strength
    setPosition({ x: x * 0.15, y: y * 0.15 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const baseClasses =
    'relative overflow-hidden px-8 py-4 rounded-lg font-medium transition-all duration-300 will-change-transform';

  const variantClasses =
    variant === 'primary'
      ? 'bg-accent text-primary hover:bg-accent/90 shadow-[0_0_20px_rgba(0,212,255,0.5)] font-bold'
      : 'bg-secondary/60 text-text backdrop-blur-2xl border border-white/10 hover:border-accent/50';

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  const MotionComponent = href ? motion.a : motion.button;

  return (
    <MotionComponent
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={buttonRef as any}
      href={href}
      onClick={onClick}
      className={combinedClasses}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      animate={{
        x: position.x,
        y: position.y,
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
    >
      {/* Liquid Ripple Effect */}
      <motion.span
        className="absolute inset-0 rounded-lg"
        style={{
          background:
            variant === 'primary'
              ? 'radial-gradient(circle at center, rgba(255,255,255,0.2), transparent 70%)'
              : 'radial-gradient(circle at center, rgba(0,212,255,0.15), transparent 70%)',
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 2 : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{
          duration: 0.6,
          ease: [0.23, 1, 0.32, 1], // Aerospace cubic-bezier
        }}
      />

      {/* Button Content */}
      <span className="relative z-10">{children}</span>

      {/* Reduced Motion Fallback */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </MotionComponent>
  );
}
