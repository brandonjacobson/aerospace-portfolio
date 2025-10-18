import { contactLinks } from '@/data/portfolio';
import Section from './layout/Section';
import Container from './layout/Container';
import SectionHeading from './layout/SectionHeading';

/**
 * Contact Component
 * Theme: dark - Inverted finish for page closure
 * Graphic: none - Keep focus on contact information
 * Divide: top - Clear separation from previous section
 * Heading: centered, content centered
 */
export default function Contact() {
  return (
    <Section id="contact" theme="dark" graphic="none" divide="top">
      <Container>
        <SectionHeading
          overline="Let's Connect"
          title="Get In Touch"
          centered
        />

        <div className="mt-16 text-center bg-card-bg p-10 rounded-2xl border-2 border-secondary shadow-2xl shadow-accent/10 max-w-3xl mx-auto">
          <p className="text-body text-text mb-10 leading-relaxed">
          Interested in collaborating on aerospace projects, discussing flight control systems,
          or exploring opportunities in the space industry? Let&apos;s connect!
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
