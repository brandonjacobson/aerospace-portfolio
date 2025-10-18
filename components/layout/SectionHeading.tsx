import { ReactNode } from 'react';

interface SectionHeadingProps {
  overline?: string;
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  centered?: boolean;
  className?: string;
}

/**
 * SectionHeading Component
 * Consistent section header with overline, title, and subtitle
 * Overline: uppercase accent label
 * Title: main heading (responsive sizing)
 * Subtitle: descriptive text (constrained by .measure)
 */
export default function SectionHeading({
  overline,
  title,
  subtitle,
  centered = true,
  className = '',
}: SectionHeadingProps) {
  const alignment = centered ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`space-y-4 ${centered ? 'flex flex-col items-center' : ''} ${className}`}>
      {/* Overline */}
      {overline && (
        <div className={`text-overline text-accent font-semibold tracking-widest ${alignment}`}>
          {overline}
        </div>
      )}

      {/* Title */}
      <h2
        className={`font-display text-display-2 font-bold text-white ${alignment} ${
          typeof title === 'string' ? 'prose-balance' : ''
        }`}
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <div
          className={`text-body text-text/80 max-w-measure ${alignment} ${
            typeof subtitle === 'string' ? 'prose-balance' : ''
          }`}
        >
          {subtitle}
        </div>
      )}
    </div>
  );
}
