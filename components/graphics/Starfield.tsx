'use client';

import { useEffect, useRef } from 'react';

interface StarfieldProps {
  density?: 'low' | 'medium' | 'high';
  speed?: 'slow' | 'medium' | 'fast';
}

/**
 * Starfield Component
 * Performant CSS-based starfield for section backgrounds
 * Auto-disables under prefers-reduced-motion
 * Density controls number of stars, speed controls twinkle rate
 */
export default function Starfield({ density = 'low', speed = 'slow' }: StarfieldProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const densityMap = {
    low: 30,
    medium: 50,
    high: 80,
  };

  const speedMap = {
    slow: 4,
    medium: 3,
    fast: 2,
  };

  const starCount = densityMap[density];
  const duration = speedMap[speed];

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const container = containerRef.current;
    const stars: HTMLDivElement[] = [];

    // Generate stars
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'absolute rounded-full bg-white';

      // Random size
      const size = Math.random() < 0.6 ? 1 : Math.random() < 0.9 ? 2 : 3;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      // Random position
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;

      // Random opacity and animation
      star.style.opacity = `${Math.random() * 0.5 + 0.3}`;
      star.style.animation = `twinkle ${duration}s ease-in-out infinite`;
      star.style.animationDelay = `${Math.random() * duration}s`;

      container.appendChild(star);
      stars.push(star);
    }

    // Cleanup
    return () => {
      stars.forEach((star) => star.remove());
    };
  }, [starCount, duration]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden opacity-40"
      aria-hidden="true"
    />
  );
}
