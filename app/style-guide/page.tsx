'use client';

import Link from 'next/link';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import SectionHeading from '@/components/layout/SectionHeading';
import MagneticButton from '@/components/MagneticButton';

export default function StyleGuidePage() {
  return (
    <main className="min-h-screen">
      {/* Back to Home Link */}
      <div className="fixed top-4 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 bg-secondary/80 backdrop-blur-md text-accent border border-accent/30 rounded-lg hover:bg-accent/10 hover:border-accent transition-all"
        >
          <span>←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Page Header */}
      <Section
        id="style-guide-header"
        theme="default"
        graphic="orbital"
        divide="bottom"
        className="pt-32"
      >
        <Container>
          <SectionHeading
            overline="Design System"
            title="Style Guide"
            subtitle="A comprehensive showcase of section themes, graphics, dividers, and component styles used throughout the portfolio."
            centered
          />
        </Container>
      </Section>

      {/* Demo 1: Default Theme with Orbital Graphics */}
      <Section
        id="demo-default"
        theme="default"
        graphic="orbital"
        divide="bottom"
      >
        <Container>
          <SectionHeading
            overline="Theme Demo"
            title="Default Theme + Orbital Graphics"
            subtitle="The default dark background with subtle orbital arc accents in the corners. Best for hero sections and clean content presentation."
            centered
          />

          <div className="mt-12 max-w-measure mx-auto">
            <p className="text-body text-text leading-relaxed mb-6">
              This is the <strong className="text-accent">default theme</strong> with{' '}
              <code className="px-2 py-1 bg-secondary/50 rounded text-accent text-small">
                graphic="orbital"
              </code>{' '}
              and{' '}
              <code className="px-2 py-1 bg-secondary/50 rounded text-accent text-small">
                divide="bottom"
              </code>
              . The orbital graphics add visual interest with corner arcs at ultra-low opacity
              (10%), creating a subtle aerospace aesthetic without overwhelming the content.
            </p>

            <p className="text-body text-text/80 leading-relaxed mb-8">
              Background: <span className="text-accent">var(--section-bg-default) → #000814</span>
              <br />
              Foreground: <span className="text-accent">var(--section-fg-default) → #e0e0e0</span>
              <br />
              Divider: <span className="text-accent">1px solid var(--rule)</span>
            </p>

            {/* Sample Components */}
            <div className="space-y-6">
              <div className="bg-card-bg p-6 rounded-xl border-2 border-secondary hover:border-accent transition-all">
                <h3 className="text-h3 text-accent font-semibold mb-3">Sample Card Component</h3>
                <p className="text-body text-text mb-4">
                  Cards use <code className="px-1 py-0.5 bg-secondary/50 rounded text-accent text-small">bg-card-bg</code> (#0d1b2a)
                  with a 2px border in secondary color. Hover states transition to accent border.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <span className="px-3 py-1.5 bg-secondary/50 rounded-full text-small border border-accent/50 text-accent font-medium">
                    Tag Example
                  </span>
                  <span className="px-3 py-1.5 bg-secondary/50 rounded-full text-small border border-accent/50 text-accent font-medium">
                    Technology
                  </span>
                </div>
              </div>

              <div className="flex gap-4 flex-wrap justify-center">
                <MagneticButton variant="primary" onClick={() => alert('Primary CTA')}>
                  Primary Button
                </MagneticButton>
                <MagneticButton variant="secondary" onClick={() => alert('Secondary CTA')}>
                  Secondary Button
                </MagneticButton>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Demo 2: Panel Theme with Grid Graphics */}
      <Section
        id="demo-panel"
        theme="panel"
        graphic="grid"
        divide="both"
      >
        <Container>
          <SectionHeading
            overline="Theme Demo"
            title="Panel Theme + Blueprint Grid"
            subtitle="Elevated panel background with technical blueprint gridlines. Creates subtle visual distinction from default sections."
            centered
          />

          <div className="mt-12 max-w-measure mx-auto">
            <p className="text-body text-text leading-relaxed mb-6">
              This is the <strong className="text-accent">panel theme</strong> with{' '}
              <code className="px-2 py-1 bg-secondary/50 rounded text-accent text-small">
                graphic="grid"
              </code>{' '}
              and{' '}
              <code className="px-2 py-1 bg-secondary/50 rounded text-accent text-small">
                divide="both"
              </code>
              . The blueprint grid creates a technical, engineering aesthetic with 32px spacing
              at very low opacity (3%) to avoid visual noise.
            </p>

            <p className="text-body text-text/80 leading-relaxed mb-8">
              Background: <span className="text-accent">var(--section-bg-panel) → #0d1b2a</span>
              <br />
              Foreground: <span className="text-accent">var(--section-fg-panel) → #e0e0e0</span>
              <br />
              Grid: <span className="text-accent">32px repeating-linear-gradient</span>
              <br />
              Dividers: <span className="text-accent">Top + Bottom</span>
            </p>

            {/* Sample Components */}
            <div className="space-y-6">
              <div className="bg-card-bg p-6 rounded-xl border-2 border-secondary hover:border-accent transition-all">
                <h3 className="text-h3 text-accent font-semibold mb-3">Typography Scale</h3>
                <div className="space-y-2 text-left">
                  <p className="text-display text-white">Display (2.5rem → 4.5rem)</p>
                  <p className="text-h2 text-white">Heading 2 (1.5rem → 2.5rem)</p>
                  <p className="text-h3 text-white">Heading 3 (1.25rem → 1.875rem)</p>
                  <p className="text-body text-text">Body (1rem → 1.125rem)</p>
                  <p className="text-small text-text/80">Small (0.875rem → 1rem)</p>
                  <p className="text-overline text-accent">Overline Label</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-secondary/30 p-4 rounded-lg border border-secondary text-center">
                  <div className="text-h3 text-accent font-bold mb-2">85%</div>
                  <div className="text-small text-text">Skill Level</div>
                  <div className="h-2 bg-secondary/50 rounded-full overflow-hidden mt-3">
                    <div className="h-full bg-gradient-to-r from-accent to-cyan-400 rounded-full w-[85%]" />
                  </div>
                </div>
                <div className="bg-secondary/30 p-4 rounded-lg border border-secondary text-center">
                  <div className="text-h3 text-accent font-bold mb-2">80%</div>
                  <div className="text-small text-text">Skill Level</div>
                  <div className="h-2 bg-secondary/50 rounded-full overflow-hidden mt-3">
                    <div className="h-full bg-gradient-to-r from-accent to-cyan-400 rounded-full w-[80%]" />
                  </div>
                </div>
                <div className="bg-secondary/30 p-4 rounded-lg border border-secondary text-center">
                  <div className="text-h3 text-accent font-bold mb-2">75%</div>
                  <div className="text-small text-text">Skill Level</div>
                  <div className="h-2 bg-secondary/50 rounded-full overflow-hidden mt-3">
                    <div className="h-full bg-gradient-to-r from-accent to-cyan-400 rounded-full w-[75%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Demo 3: Dark Theme with No Graphics */}
      <Section
        id="demo-dark"
        theme="dark"
        graphic="none"
        divide="top"
      >
        <Container>
          <SectionHeading
            overline="Theme Demo"
            title="Dark Theme + No Graphics"
            subtitle="Inverted darker tone for maximum contrast. Best for contact sections and page closures where you want focus on content."
            centered
          />

          <div className="mt-12 max-w-measure mx-auto">
            <p className="text-body text-text leading-relaxed mb-6">
              This is the <strong className="text-accent">dark theme</strong> with{' '}
              <code className="px-2 py-1 bg-secondary/50 rounded text-accent text-small">
                graphic="none"
              </code>{' '}
              and{' '}
              <code className="px-2 py-1 bg-secondary/50 rounded text-accent text-small">
                divide="top"
              </code>
              . No background graphics ensures maximum readability and focus on the content itself.
              Perfect for contact forms, CTAs, or final sections.
            </p>

            <p className="text-body text-text/80 leading-relaxed mb-8">
              Background: <span className="text-accent">var(--section-bg-dark) → #0a1929</span>
              <br />
              Foreground: <span className="text-accent">var(--section-fg-dark) → #e0e0e0</span>
              <br />
              Graphics: <span className="text-accent">None</span>
              <br />
              Divider: <span className="text-accent">Top only</span>
            </p>

            {/* Sample Components */}
            <div className="space-y-6">
              <div className="bg-card-bg p-8 rounded-2xl border-2 border-secondary shadow-2xl shadow-accent/10">
                <h3 className="text-h3 text-white font-semibold mb-4 text-center">Color Palette</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <div className="h-16 rounded-lg bg-primary border border-white/20 mb-2" />
                    <p className="text-small text-text">Primary</p>
                    <p className="text-small text-accent">#0a1929</p>
                  </div>
                  <div>
                    <div className="h-16 rounded-lg bg-secondary border border-white/20 mb-2" />
                    <p className="text-small text-text">Secondary</p>
                    <p className="text-small text-accent">#1e3a5f</p>
                  </div>
                  <div>
                    <div className="h-16 rounded-lg bg-accent border border-white/20 mb-2" />
                    <p className="text-small text-text">Accent</p>
                    <p className="text-small text-accent">#00d4ff</p>
                  </div>
                  <div>
                    <div className="h-16 rounded-lg bg-text border border-white/20 mb-2" />
                    <p className="text-small text-text">Text</p>
                    <p className="text-small text-accent">#e0e0e0</p>
                  </div>
                  <div>
                    <div className="h-16 rounded-lg bg-bg border border-white/20 mb-2" />
                    <p className="text-small text-text">Background</p>
                    <p className="text-small text-accent">#000814</p>
                  </div>
                  <div>
                    <div className="h-16 rounded-lg bg-card-bg border border-white/20 mb-2" />
                    <p className="text-small text-text">Card BG</p>
                    <p className="text-small text-accent">#0d1b2a</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#"
                  className="px-8 py-4 bg-gradient-to-r from-secondary to-primary border-2 border-accent text-accent text-body font-bold rounded-lg transition-all hover:shadow-xl hover:shadow-accent/50 hover:-translate-y-1"
                >
                  Contact Link
                </a>
                <a
                  href="#"
                  className="px-8 py-4 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/50"
                >
                  Primary Link
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Summary Section */}
      <Section
        id="summary"
        theme="panel"
        graphic="grid"
        divide="both"
      >
        <Container>
          <SectionHeading
            overline="Implementation Notes"
            title="Design System Summary"
            centered
          />

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card-bg p-6 rounded-xl border-2 border-secondary">
                <h3 className="text-h3 text-accent font-semibold mb-3">Themes</h3>
                <ul className="space-y-2 text-body text-text text-left">
                  <li><code className="text-accent">default</code> - Clean dark (#000814)</li>
                  <li><code className="text-accent">panel</code> - Elevated (#0d1b2a)</li>
                  <li><code className="text-accent">dark</code> - Inverted (#0a1929)</li>
                </ul>
              </div>

              <div className="bg-card-bg p-6 rounded-xl border-2 border-secondary">
                <h3 className="text-h3 text-accent font-semibold mb-3">Graphics</h3>
                <ul className="space-y-2 text-body text-text text-left">
                  <li><code className="text-accent">orbital</code> - Corner arcs</li>
                  <li><code className="text-accent">grid</code> - Blueprint 32px</li>
                  <li><code className="text-accent">stars</code> - Starfield (optional)</li>
                  <li><code className="text-accent">none</code> - Clean focus</li>
                </ul>
              </div>

              <div className="bg-card-bg p-6 rounded-xl border-2 border-secondary">
                <h3 className="text-h3 text-accent font-semibold mb-3">Dividers</h3>
                <ul className="space-y-2 text-body text-text text-left">
                  <li><code className="text-accent">top</code> - Top hairline only</li>
                  <li><code className="text-accent">bottom</code> - Bottom only</li>
                  <li><code className="text-accent">both</code> - Top + Bottom</li>
                  <li><code className="text-accent">none</code> - No dividers</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-card-bg p-8 rounded-xl border-2 border-accent/50">
              <h3 className="text-h3 text-accent font-semibold mb-4 text-center">
                Recommended Pattern
              </h3>
              <p className="text-body text-text text-center mb-6">
                Alternate themes throughout the page for visual variety:
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-small">
                <span className="px-4 py-2 bg-[var(--section-bg-default)] border-2 border-accent/30 rounded-lg">
                  1. default + orbital
                </span>
                <span className="px-4 py-2 bg-[var(--section-bg-panel)] border-2 border-accent/30 rounded-lg">
                  2. panel + none
                </span>
                <span className="px-4 py-2 bg-[var(--section-bg-dark)] border-2 border-accent/30 rounded-lg">
                  3. dark + grid
                </span>
                <span className="px-4 py-2 bg-[var(--section-bg-default)] border-2 border-accent/30 rounded-lg">
                  4. default + grid
                </span>
                <span className="px-4 py-2 bg-[var(--section-bg-panel)] border-2 border-accent/30 rounded-lg">
                  5. panel + grid
                </span>
                <span className="px-4 py-2 bg-[var(--section-bg-dark)] border-2 border-accent/30 rounded-lg">
                  6. dark + none
                </span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <footer className="bg-primary text-center py-8 border-t border-accent relative z-10">
        <p className="text-body text-text">
          Design System Style Guide | <Link href="/" className="text-accent hover:underline">Back to Home</Link>
        </p>
      </footer>
    </main>
  );
}
