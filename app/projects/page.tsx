import Link from 'next/link';
import { projects } from '@/data/portfolio';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import SectionHeading from '@/components/layout/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import githubData from '@/data/github.json';

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

      {/* Projects List - Responsive Grid MVP */}
      <Section id="projects-list" theme="panel" graphic="grid" divide="none">
        <Container>
          {/* 12-col grid on desktop (≥1024px), 6-col on tablet (≥640px), single col mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project) => {
              // Find matching GitHub data if available
              const ghRepo = githubData.find(repo =>
                repo.name.toLowerCase().includes(project.title.toLowerCase().replace(/\s+/g, '-'))
              );

              return (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  type={project.type}
                  period={project.period}
                  description={project.description}
                  accomplishments={project.accomplishments}
                  technologies={project.technologies}
                  githubUrl={project.githubUrl || ghRepo?.url}
                  stars={ghRepo?.stars}
                  featured={ghRepo?.featured}
                  images={project.images}
                />
              );
            })}
          </div>
        </Container>
      </Section>
    </main>
  );
}
