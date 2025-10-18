import Link from 'next/link';
import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionHeading from '../layout/SectionHeading';

interface Highlight {
  id: string;
  title: string;
  type: string;
  period: string;
  description: string;
  accomplishments?: string[];
  technologies: string[];
}

interface HighlightsSectionProps {
  overline?: string;
  title: string;
  subtitle?: string;
  highlights: Highlight[];
  showViewAll?: boolean;
  theme?: 'default' | 'panel' | 'dark';
  graphic?: 'grid' | 'orbital' | 'stars' | 'none';
  divide?: 'top' | 'bottom' | 'both' | 'none';
}

/**
 * Highlights Section Component
 * Displays featured projects or work in a grid layout
 * Default theme: default with grid graphics for technical feel
 */
export default function HighlightsSection({
  overline = 'Featured Work',
  title = 'Projects',
  subtitle,
  highlights,
  showViewAll = true,
  theme = 'default',
  graphic = 'grid',
  divide = 'both',
}: HighlightsSectionProps) {
  return (
    <Section id="projects" theme={theme} graphic={graphic} divide={divide}>
      <Container>
        <SectionHeading
          overline={overline}
          title={title}
          subtitle={subtitle}
          centered
        />

        {/* Grid of highlight cards - left-aligned text within centered grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          {highlights.map((highlight) => (
            <Link
              key={highlight.id}
              href="/projects"
              className="bg-card-bg rounded-xl overflow-hidden border-2 border-secondary transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/40 hover:border-accent cursor-pointer flex flex-col h-full group"
            >
              <div className="bg-gradient-to-br from-secondary to-primary p-6 relative overflow-hidden">
                <div className="hidden md:block absolute top-[-50%] right-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,_rgba(0,212,255,0.1),_transparent)] animate-spin-slow" />
                <h3 className="text-h3 font-bold text-white mb-2 relative z-10">
                  {highlight.title}
                </h3>
                <p className="text-small text-accent relative z-10 font-medium">
                  {highlight.type} | {highlight.period}
                </p>
              </div>

              <div className="p-6 flex-grow flex flex-col text-left">
                <p className="text-body text-text mb-4 leading-relaxed">
                  {highlight.description}
                </p>

                {highlight.accomplishments && highlight.accomplishments.length > 0 && (
                  <>
                    <p className="font-semibold text-accent mb-3 text-small">
                      Key Accomplishments:
                    </p>
                    <ul className="list-disc list-outside ml-5 space-y-2 mb-4 flex-grow">
                      {highlight.accomplishments.map((item, index) => (
                        <li key={index} className="text-body text-text leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-secondary/50">
                  {highlight.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-secondary/50 px-3 py-1.5 rounded-full text-sm border border-accent/50 text-accent font-medium min-h-8 whitespace-nowrap flex items-center justify-center"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Projects Link */}
        {showViewAll && (
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-block px-8 py-4 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/50"
            >
              View All Projects →
            </Link>
          </div>
        )}
      </Container>
    </Section>
  );
}
