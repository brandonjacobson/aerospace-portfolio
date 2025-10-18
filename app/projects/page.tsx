import Link from 'next/link';
import { projects } from '@/data/portfolio';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import SectionHeading from '@/components/layout/SectionHeading';

export const metadata = {
  title: 'Projects | Brandon Jacobson',
  description: 'Detailed portfolio of aerospace engineering projects, including flight control systems, autonomous navigation, and control algorithms.',
};

export default function ProjectsPage() {
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
      <Section id="projects-header" theme="default" graphic="orbital" divide="bottom" className="pt-32">
        <Container>
          <SectionHeading
            overline="Featured Work"
            title="Projects"
            subtitle="Exploring aerospace engineering through hands-on development of flight control systems, autonomous navigation, and advanced algorithms."
            centered
          />
        </Container>
      </Section>

      {/* Projects List */}
      <Section id="projects-list" theme="panel" graphic="grid" divide="none">
        <Container>
          <div className="space-y-16">
          {projects.map((project) => (
            <div key={project.id} className="bg-card-bg p-8 md:p-12 rounded-2xl border-2 border-secondary hover:border-accent transition-all duration-300 shadow-2xl hover:shadow-accent/20">
              {/* Project Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="text-left">
                  <h2 className="text-h2 font-bold text-white mb-2">
                    {project.title}
                  </h2>
                  <p className="text-small text-accent font-medium">
                    {project.type} | {project.period}
                  </p>
                </div>

                {/* GitHub Link Placeholder */}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/50"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    View on GitHub
                  </a>
                )}
              </div>

              {/* Project Description */}
              <p className="text-body text-text mb-6 leading-relaxed text-left">
                {project.description}
              </p>

              {/* Key Accomplishments */}
              <div className="mb-6 text-left">
                <h3 className="text-h3 text-accent font-semibold mb-4">Key Accomplishments:</h3>
                <ul className="space-y-3">
                  {project.accomplishments.map((accomplishment, i) => (
                    <li key={i} className="flex items-start gap-3 text-body text-text">
                      <span className="text-accent mt-1">▹</span>
                      <span>{accomplishment}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 text-left">
                {project.technologies?.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-secondary/50 text-accent border border-accent/30 rounded-lg text-small font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Image Gallery Placeholder */}
              {project.images && project.images.length > 0 && (
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.images.map((image, i) => (
                    <div
                      key={i}
                      className="aspect-video bg-secondary/30 rounded-lg border border-secondary flex items-center justify-center text-accent/50 hover:border-accent/50 transition-all cursor-pointer group"
                    >
                      <span className="text-small group-hover:text-accent">
                        {image.alt || `Project Image ${i + 1}`}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
