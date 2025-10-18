import { experiences } from '@/data/portfolio';
import Section from './layout/Section';
import Container from './layout/Container';
import SectionHeading from './layout/SectionHeading';

/**
 * Experience Component
 * Theme: dark - Inverted darker tone for visual variety
 * Graphic: grid - Technical blueprint feel for professional experience
 * Divide: both - Clear boundaries with adjacent sections
 * Heading: centered, card content left-aligned
 */
export default function Experience() {
  return (
    <Section id="experience" theme="dark" graphic="grid" divide="both">
      <Container>
        <SectionHeading
          overline="Professional Journey"
          title="Experience"
          centered
        />

        {/* Grid of experience cards - left-aligned text within centered grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="bg-card-bg rounded-xl overflow-hidden border-2 border-secondary transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/40 hover:border-accent cursor-pointer flex flex-col h-full group"
          >
            <div className="bg-gradient-to-br from-secondary to-primary p-6 relative overflow-hidden">
              <div className="absolute top-[-50%] right-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,_rgba(0,212,255,0.1),_transparent)] animate-spin-slow" />
              <h3 className="text-h3 font-bold text-white mb-2 relative z-10">
                {exp.title}
              </h3>
              <p className="text-small text-accent relative z-10 font-medium">
                {exp.organization} | {exp.period}
              </p>
            </div>

            <div className="p-6 flex-grow flex flex-col">
              <ul className="list-disc list-outside ml-5 space-y-3 mb-4 flex-grow text-left">
                {exp.description.map((item, index) => (
                  <li key={index} className="text-body text-text leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>

              {exp.technologies && exp.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-secondary/50">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-secondary/50 px-3 py-1.5 rounded-full text-sm border border-accent/50 text-accent font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        </div>
      </Container>
    </Section>
  );
}
