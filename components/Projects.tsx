import { projects } from '@/data/portfolio';
import Link from 'next/link';
import Section from './layout/Section';
import Container from './layout/Container';
import SectionHeading from './layout/SectionHeading';

/**
 * Projects Component (Home page section)
 * Theme: default - Return to clean background after dark Experience section
 * Graphic: grid - Technical feel appropriate for projects
 * Divide: both - Clear separation from adjacent sections
 * Heading: centered, card content left-aligned
 */
export default function Projects() {
  return (
    <Section id="projects" theme="default" graphic="grid" divide="both">
      <Container>
        <SectionHeading
          overline="Featured Work"
          title="Projects"
          centered
        />

        {/* Grid of project cards - left-aligned text within centered grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            key={project.id}
            href="/projects"
            className="bg-card-bg rounded-xl overflow-hidden border-2 border-secondary transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/40 hover:border-accent cursor-pointer flex flex-col h-full group"
          >
            <div className="bg-gradient-to-br from-secondary to-primary p-6 relative overflow-hidden">
              <div className="absolute top-[-50%] right-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,_rgba(0,212,255,0.1),_transparent)] animate-spin-slow" />
              <h3 className="text-h3 font-bold text-white mb-2 relative z-10">
                {project.title}
              </h3>
              <p className="text-small text-accent relative z-10 font-medium">
                {project.type} | {project.period}
              </p>
            </div>

            <div className="p-6 flex-grow flex flex-col text-left">
              <p className="text-body text-text mb-4 leading-relaxed">{project.description}</p>

              {project.accomplishments && project.accomplishments.length > 0 && (
                <>
                  <p className="font-semibold text-accent mb-3 text-small">Key Accomplishments:</p>
                  <ul className="list-disc list-outside ml-5 space-y-2 mb-4 flex-grow">
                    {project.accomplishments.map((item, index) => (
                      <li key={index} className="text-body text-text leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-secondary/50">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-secondary/50 px-3 py-1.5 rounded-full text-sm border border-accent/50 text-accent font-medium"
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
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-block px-8 py-4 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/50"
          >
            View All Projects →
          </Link>
        </div>
      </Container>
    </Section>
  );
}
