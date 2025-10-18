import { ReactNode } from 'react';

interface BlueprintGridProps {
  children: ReactNode;
  intensity?: 'subtle' | 'medium' | 'strong';
}

/**
 * BlueprintGrid Component
 * Adds technical blueprint-style grid background using CSS gradients
 * Ultra-lightweight, no images required
 * Intensity controls opacity for different section themes
 */
export default function BlueprintGrid({ children, intensity = 'subtle' }: BlueprintGridProps) {
  const opacityMap = {
    subtle: 'opacity-30',
    medium: 'opacity-50',
    strong: 'opacity-70',
  };

  return (
    <div className="relative">
      {/* Grid background */}
      <div
        className={`absolute inset-0 pointer-events-none ${opacityMap[intensity]}`}
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              var(--gridline) 0px,
              transparent 1px,
              transparent 32px,
              var(--gridline) 33px
            ),
            repeating-linear-gradient(
              90deg,
              var(--gridline) 0px,
              transparent 1px,
              transparent 32px,
              var(--gridline) 33px
            )
          `,
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
