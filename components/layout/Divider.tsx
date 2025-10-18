interface DividerProps {
  variant?: 'solid' | 'dotted' | 'blueprint';
  className?: string;
}

/**
 * Divider Component
 * Thin horizontal rule for section separation
 * Variants:
 * - solid: Clean 1px line
 * - dotted: Subtle dotted line
 * - blueprint: Technical blueprint-style dashed line
 */
export default function Divider({ variant = 'solid', className = '' }: DividerProps) {
  const baseStyles = 'w-full border-0 border-t';

  const variantStyles = {
    solid: 'border-solid border-rule',
    dotted: 'border-dotted border-rule opacity-60',
    blueprint: 'border-dashed border-rule opacity-40',
  };

  return <hr className={`${baseStyles} ${variantStyles[variant]} ${className}`} />;
}
