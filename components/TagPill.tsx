import { ReactNode } from 'react';

interface TagPillProps {
  children: ReactNode;
  className?: string;
}

/**
 * TagPill Component
 * Enforced style: inline-flex items-center min-h-[32px] px-3 py-1 rounded-full
 * border border-white/20 bg-white/5 text-sm leading-none whitespace-nowrap gap-1
 */
export default function TagPill({ children, className = '' }: TagPillProps) {
  return (
    <span
      className={`inline-flex items-center min-h-[32px] px-3 py-1 rounded-full border border-white/20 bg-white/5 text-sm leading-none whitespace-nowrap gap-1 ${className}`}
    >
      {children}
    </span>
  );
}
