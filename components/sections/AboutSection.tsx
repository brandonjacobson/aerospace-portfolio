import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionHeading from '../layout/SectionHeading';

interface AboutCard {
  id: string;
  title: string;
  content: string[];
}

interface AboutSectionProps {
  overline?: string;
  title?: string;
  subtitle?: string;
  cards: AboutCard[];
  theme?: 'default' | 'panel' | 'dark';
  graphic?: 'grid' | 'orbital' | 'stars' | 'none';
  divide?: 'top' | 'bottom' | 'both' | 'none';
}

/**
 * About Section Component
 * Displays education, research focus, and interests in card format
 * Default theme: panel for subtle elevation
 */
export default function AboutSection({
  overline = 'Who I Am',
  title = 'About Me',
  subtitle,
  cards,
  theme = 'panel',
  graphic = 'none',
  divide = 'none',
}: AboutSectionProps) {
  return (
    <Section id="about" theme={theme} graphic={graphic} divide={divide}>
      <Container>
        <SectionHeading
          overline={overline}
          title={title}
          subtitle={subtitle}
          centered
        />

        {/* Grid of about cards - left-aligned text within centered grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-card-bg p-8 rounded-xl border-2 border-secondary transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/30 hover:border-accent h-full flex flex-col relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-h3 text-accent font-semibold mb-4">{card.title}</h3>
                <div className="flex-grow space-y-3">
                  {card.content.map((text, index) => (
                    <p key={index} className="text-body text-text leading-relaxed text-left">
                      {index === 0 && card.id === 'education' ? (
                        <strong className="text-accent">{text}</strong>
                      ) : (
                        text
                      )}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
