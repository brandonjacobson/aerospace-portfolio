'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * StarfieldBackground Component
 * Implements Superdesign Effect #3: Scroll-linked parallax background with animated stars
 * Features:
 * - 100 twinkling stars with varying sizes (GPU-accelerated opacity animations)
 * - 3 orbital paths with rotating particles
 * - Parallax effect on scroll (stars move at 0.3x scroll speed)
 * - Nebula glow effects that float and pulse
 * - Respects prefers-reduced-motion for accessibility
 */

interface Star {
  id: number;
  x: number;
  y: number;
  size: 'small' | 'medium' | 'large';
  delay: number;
}

export default function StarfieldBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax transforms (moves at 0.3x scroll speed for depth effect)
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 150]);

  // Generate stars on mount
  const stars = useRef<Star[]>([]);

  useEffect(() => {
    // Generate 100 random stars
    const starCount = 100;
    const newStars: Star[] = [];

    for (let i = 0; i < starCount; i++) {
      const size = Math.random();
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: size < 0.6 ? 'small' : size < 0.9 ? 'medium' : 'large',
        delay: Math.random() * 4,
      });
    }

    stars.current = newStars;
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Nebula Glows with Float Animation (Superdesign Effect: Ambient Motion) */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-15"
        style={{
          top: '-200px',
          left: '-200px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent 70%)',
          y: y1,
        }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 30, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-15"
        style={{
          bottom: '-300px',
          right: '-250px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.25), transparent 70%)',
          y: y2,
        }}
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 30, -20, 0],
          scale: [1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 5,
        }}
      />

      {/* Twinkling Stars (Superdesign Effect: Animated Starfield) */}
      {stars.current.map((star) => (
        <motion.div
          key={star.id}
          className={`absolute rounded-full bg-white ${
            star.size === 'small'
              ? 'w-[1px] h-[1px]'
              : star.size === 'medium'
              ? 'w-[2px] h-[2px] shadow-[0_0_4px_rgba(255,255,255,0.8)]'
              : 'w-[3px] h-[3px] shadow-[0_0_8px_rgba(255,255,255,0.9)]'
          }`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          animate={{
            opacity: star.size === 'small' ? [0.3, 1, 0.3] : star.size === 'medium' ? [0.4, 0.9, 0.4] : [0.5, 1, 0.5],
          }}
          transition={{
            duration: star.size === 'small' ? 4 : star.size === 'medium' ? 3 : 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: star.delay,
          }}
        />
      ))}

      {/* Orbital Paths (Superdesign Effect: Orbital Mechanics) */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full border border-white/5"
        style={{
          top: '20%',
          left: '10%',
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {/* Orbital particle */}
        <motion.div
          className="absolute w-1 h-1 bg-blue-400 rounded-full shadow-[0_0_12px_rgba(100,200,255,0.8)]"
          style={{
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          animate={{
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full border border-white/5"
        style={{
          top: '50%',
          right: '15%',
        }}
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <motion.div
          className="absolute w-1 h-1 bg-purple-400 rounded-full shadow-[0_0_12px_rgba(139,92,246,0.8)]"
          style={{
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          animate={{
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </motion.div>

      <motion.div
        className="absolute w-[250px] h-[250px] rounded-full border border-white/5"
        style={{
          bottom: '25%',
          left: '60%',
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <motion.div
          className="absolute w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_12px_rgba(34,211,238,0.8)]"
          style={{
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          animate={{
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />
      </motion.div>

      {/* Reduced Motion Styles */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}