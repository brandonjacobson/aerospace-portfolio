'use client';

import MagneticButton from '../MagneticButton';
import OrbitalAccent from '../graphics/OrbitalAccent';
import Divider from '../layout/Divider';
import { useRouter } from 'next/navigation';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  primaryCTA?: {
    label: string;
    action: () => void;
  };
  secondaryCTA?: {
    label: string;
    action: () => void;
  };
}

/**
 * Hero Section Component
 * Reusable hero with title, subtitle, description, and CTAs
 * Uses container + grid for perfect centering without layout shift
 */
export default function HeroSection({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
}: HeroSectionProps) {
  const router = useRouter();

  const defaultPrimaryCTA = {
    label: 'View Projects',
    action: () => router.push('/projects'),
  };

  const defaultSecondaryCTA = {
    label: 'Get in Touch',
    action: () => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
  };

  const primary = primaryCTA || defaultPrimaryCTA;
  const secondary = secondaryCTA || defaultSecondaryCTA;

  return (
    <section id="home" className="relative bg-[var(--section-bg-default)] text-[var(--section-fg-default)] overflow-hidden">
      {/* Decorative layers - absolutely positioned, non-layout-affecting */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <OrbitalAccent position="top-left" size="large" />
        <OrbitalAccent position="bottom-right" size="large" />
      </div>

      {/* Content container with grid centering - using design tokens */}
      <div className="container mx-auto">
        <div className="grid min-h-[100vh] place-items-center py-16 md:py-24">
          <div className="w-full max-w-[72ch] text-center mx-auto space-y-6 px-4">
            <h1 className="font-display text-display-1 font-bold bg-gradient-to-r from-accent to-white bg-clip-text text-transparent prose-balance animate-fade-in-up">
              {title}
            </h1>

            <p className="font-display text-display-2 text-accent prose-balance animate-fade-in-up animation-delay-200">
              {subtitle}
            </p>

            <p className="text-body text-text/90 max-w-[65ch] mx-auto prose-balance animate-fade-in-up animation-delay-400">
              {description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4 animate-fade-in-up animation-delay-600">
              <MagneticButton variant="primary" onClick={primary.action}>
                {primary.label}
              </MagneticButton>
              <MagneticButton variant="secondary" onClick={secondary.action}>
                {secondary.label}
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <Divider variant="solid" />
      </div>
    </section>
  );
}
