import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'header' | 'footer';
}

/**
 * Container Component
 * Provides consistent centered layout with responsive padding
 * Max-width: 1280px with automatic horizontal centering
 */
export default function Container({
  children,
  className = '',
  as: Component = 'div'
}: ContainerProps) {
  return (
    <Component className={`container ${className}`}>
      {children}
    </Component>
  );
}
