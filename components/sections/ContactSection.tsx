import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionHeading from '../layout/SectionHeading';

interface ContactLink {
  label: string;
  href: string;
}

interface ContactSectionProps {
  overline?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  contactLinks: ContactLink[];
  theme?: 'default' | 'panel' | 'dark';
  graphic?: 'grid' | 'orbital' | 'stars' | 'none';
  divide?: 'top' | 'bottom' | 'both' | 'none';
}

/**
 * Contact Section Component
 * Email and social links panel
 * Default theme: dark for inverted finish
 */
export default function ContactSection({
  overline = "Let's Connect",
  title = 'Get In Touch',
  subtitle,
  description = "Interested in collaborating on aerospace projects, discussing flight control systems, or exploring opportunities in the space industry? Let's connect!",
  contactLinks,
  theme = 'dark',
  graphic = 'none',
  divide = 'top',
}: ContactSectionProps) {
  return (
    <Section id="contact" theme={theme} graphic={graphic} divide={divide}>
      <Container>
        <SectionHeading
          overline={overline}
          title={title}
          subtitle={subtitle}
          centered
        />

        <div className="mt-16 text-center bg-card-bg p-10 rounded-2xl border-2 border-secondary shadow-2xl shadow-accent/10 max-w-3xl mx-auto">
          <p className="text-body text-text mb-10 leading-relaxed max-w-measure mx-auto">
            {description}
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="px-8 py-4 bg-gradient-to-r from-secondary to-primary border-2 border-accent text-accent text-body font-bold rounded-lg transition-all hover:shadow-xl hover:shadow-accent/50 hover:-translate-y-1 hover:scale-105"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
