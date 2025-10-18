import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionHeading from '../layout/SectionHeading';

interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  url?: string;
  doi?: string;
}

interface PublicationsSectionProps {
  overline?: string;
  title?: string;
  subtitle?: string;
  publications: Publication[];
  theme?: 'default' | 'panel' | 'dark';
  graphic?: 'grid' | 'orbital' | 'stars' | 'none';
  divide?: 'top' | 'bottom' | 'both' | 'none';
}

/**
 * Publications Section Component
 * Simple list of academic publications with links
 * Default theme: panel with grid for academic aesthetic
 */
export default function PublicationsSection({
  overline = 'Research & Publications',
  title = 'Publications',
  subtitle,
  publications,
  theme = 'panel',
  graphic = 'grid',
  divide = 'both',
}: PublicationsSectionProps) {
  return (
    <Section id="publications" theme={theme} graphic={graphic} divide={divide}>
      <Container>
        <SectionHeading
          overline={overline}
          title={title}
          subtitle={subtitle}
          centered
        />

        <div className="mt-16 max-w-4xl mx-auto space-y-6">
          {publications.map((pub) => (
            <div
              key={pub.id}
              className="bg-card-bg p-6 rounded-xl border-2 border-secondary transition-all hover:border-accent hover:shadow-xl hover:shadow-accent/20 group"
            >
              <h3 className="text-h3 text-white font-semibold mb-3 text-left group-hover:text-accent transition-colors">
                {pub.title}
              </h3>

              <p className="text-body text-text/80 mb-2 text-left">
                {pub.authors.join(', ')}
              </p>

              <p className="text-small text-accent font-medium mb-3 text-left">
                {pub.venue} ({pub.year})
              </p>

              {(pub.url || pub.doi) && (
                <div className="flex gap-3 flex-wrap text-left">
                  {pub.url && (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-small text-accent hover:text-white transition-colors underline"
                    >
                      View Publication →
                    </a>
                  )}
                  {pub.doi && (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-small text-accent/70 hover:text-accent transition-colors"
                    >
                      DOI: {pub.doi}
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}

          {publications.length === 0 && (
            <div className="text-center py-12">
              <p className="text-body text-text/60">
                No publications yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
