import { ReactNode } from 'react';
import Divider from './Divider';
import BlueprintGrid from '../graphics/BlueprintGrid';
import OrbitalAccent from '../graphics/OrbitalAccent';
import Starfield from '../graphics/Starfield';

type SectionTheme = 'default' | 'panel' | 'dark';
type DividerPosition = 'top' | 'bottom' | 'both' | 'none';
type GraphicType = 'none' | 'grid' | 'orbital' | 'stars';

interface SectionProps {
  children: ReactNode;
  theme?: SectionTheme;
  divide?: DividerPosition;
  graphic?: GraphicType;
  centeredHeading?: boolean;
  className?: string;
  id?: string;
}

/**
 * Section Component
 * Flexible section wrapper with theming, dividers, and graphics
 *
 * Themes:
 * - default: Clean dark background
 * - panel: Subtle elevated surface
 * - dark: Inverted darker background
 *
 * Dividers:
 * - top: Divider above section
 * - bottom: Divider below section
 * - both: Dividers on top and bottom
 * - none: No dividers
 *
 * Graphics:
 * - grid: Blueprint-style technical grid
 * - orbital: Corner orbital arcs
 * - stars: Subtle starfield background
 * - none: No graphics
 */
export default function Section({
  children,
  theme = 'default',
  divide = 'none',
  graphic = 'none',
  centeredHeading = true,
  className = '',
  id,
}: SectionProps) {
  // Theme background colors
  const themeStyles = {
    default: 'bg-[var(--section-bg-default)] text-[var(--section-fg-default)]',
    panel: 'bg-[var(--section-bg-panel)] text-[var(--section-fg-panel)]',
    dark: 'bg-[var(--section-bg-dark)] text-[var(--section-fg-dark)]',
  };

  // Render graphic layer
  const renderGraphic = () => {
    switch (graphic) {
      case 'grid':
        return (
          <BlueprintGrid intensity="subtle">
            {children}
          </BlueprintGrid>
        );

      case 'orbital':
        return (
          <div className="relative">
            <OrbitalAccent position="top-right" size="medium" />
            <OrbitalAccent position="bottom-left" size="small" />
            {children}
          </div>
        );

      case 'stars':
        return (
          <div className="relative">
            <Starfield density="low" speed="slow" />
            {children}
          </div>
        );

      default:
        return children;
    }
  };

  return (
    <>
      {/* Top divider */}
      {(divide === 'top' || divide === 'both') && <Divider variant="solid" />}

      {/* Section */}
      <section
        id={id}
        className={`section ${themeStyles[theme]} ${className} relative overflow-hidden`}
      >
        {renderGraphic()}
      </section>

      {/* Bottom divider */}
      {(divide === 'bottom' || divide === 'both') && <Divider variant="solid" />}
    </>
  );
}
