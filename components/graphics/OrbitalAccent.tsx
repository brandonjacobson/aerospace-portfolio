interface OrbitalAccentProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  size?: 'small' | 'medium' | 'large';
}

/**
 * OrbitalAccent Component
 * Lightweight SVG orbital arcs for aerospace aesthetic
 * Positioned absolutely in section corners
 * Ultra-low opacity for subtle technical flavor
 */
export default function OrbitalAccent({
  position = 'top-right',
  size = 'medium',
}: OrbitalAccentProps) {
  const sizeMap = {
    small: 200,
    medium: 300,
    large: 400,
  };

  const dimension = sizeMap[size];

  const positionStyles = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
  };

  const rotation = {
    'top-left': 'rotate(180deg)',
    'top-right': 'rotate(-90deg)',
    'bottom-left': 'rotate(90deg)',
    'bottom-right': 'rotate(0deg)',
  };

  return (
    <div
      className={`absolute ${positionStyles[position]} pointer-events-none opacity-10`}
      style={{
        width: `${dimension}px`,
        height: `${dimension}px`,
        transform: rotation[position],
      }}
      aria-hidden="true"
    >
      <svg
        width={dimension}
        height={dimension}
        viewBox={`0 0 ${dimension} ${dimension}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer orbital arc */}
        <path
          d={`M 0 ${dimension} Q 0 0 ${dimension} 0`}
          stroke="var(--accent)"
          strokeWidth="1"
          fill="none"
          opacity="0.4"
        />

        {/* Middle orbital arc */}
        <path
          d={`M ${dimension * 0.15} ${dimension} Q ${dimension * 0.15} ${
            dimension * 0.15
          } ${dimension} ${dimension * 0.15}`}
          stroke="var(--accent)"
          strokeWidth="0.5"
          fill="none"
          opacity="0.3"
        />

        {/* Inner orbital arc */}
        <path
          d={`M ${dimension * 0.3} ${dimension} Q ${dimension * 0.3} ${
            dimension * 0.3
          } ${dimension} ${dimension * 0.3}`}
          stroke="var(--accent)"
          strokeWidth="0.5"
          fill="none"
          opacity="0.2"
        />

        {/* Radial lines */}
        <line
          x1="0"
          y1={dimension}
          x2={dimension * 0.7}
          y2={dimension * 0.3}
          stroke="var(--accent)"
          strokeWidth="0.5"
          opacity="0.15"
        />
        <line
          x1={dimension * 0.3}
          y1={dimension}
          x2={dimension}
          y2={dimension * 0.3}
          stroke="var(--accent)"
          strokeWidth="0.5"
          opacity="0.15"
        />
      </svg>
    </div>
  );
}
