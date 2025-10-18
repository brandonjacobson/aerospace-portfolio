'use client';

import MagneticButton from './MagneticButton';
import Section from './layout/Section';
import Container from './layout/Container';
import { useRouter } from 'next/navigation';

/**
 * Hero Component
 * Theme: default - Clean dark background for dramatic entry
 * Graphic: orbital - Adds visual interest with corner arcs
 * Divide: bottom - Separates from next section
 * Centered: All content centered for impact
 */
export default function Hero() {
  const router = useRouter();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Section
      id="home"
      theme="default"
      graphic="orbital"
      divide="bottom"
      className="min-h-screen flex items-center"
    >
      <Container>
        <div className="text-center space-y-6 py-12">
          <h1 className="text-display font-bold bg-gradient-to-r from-accent to-white bg-clip-text text-transparent prose-balance animate-fade-in-up">
            Brandon A. Jacobson
          </h1>

          <p className="text-h3 text-accent animate-fade-in-up animation-delay-200">
            Aerospace Engineering Student | Flight Software & Control Systems
          </p>

          <p className="text-body text-text/90 max-w-measure mx-auto prose-balance animate-fade-in-up animation-delay-400">
            University of Florida student passionate about flight control, sensor fusion, and autonomous navigation.
            Building the future of spaceflight through hands-on research and engineering.
          </p>

          <div className="flex gap-4 flex-wrap justify-center pt-4 animate-fade-in-up animation-delay-600">
            <MagneticButton variant="primary" onClick={() => router.push('/projects')}>
              View Projects
            </MagneticButton>
            <MagneticButton variant="secondary" onClick={() => scrollToSection('contact')}>
              Get in Touch
            </MagneticButton>
          </div>
        </div>
      </Container>
    </Section>
  );
}
