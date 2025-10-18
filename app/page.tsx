import {
  HeroSection,
  AboutSection,
  ExperienceSection,
  HighlightsSection,
  SkillsSection,
  ContactSection,
} from '@/components/sections';
import { experiences, projects, skillCategories, contactLinks, aboutCards } from '@/data/portfolio';

/**
 * Home Page
 * Enforced alternating theme pattern:
 * 1. Hero: default + orbital
 * 2. About: panel + none
 * 3. Experience: dark + grid
 * 4. Projects: default + grid
 * 5. Skills: panel + grid
 * 6. Contact: dark + none
 */
export default function Home() {
  return (
    <main className="min-h-screen">

      {/* 1. Hero - default theme with orbital graphics */}
      <HeroSection
        title="Brandon A. Jacobson"
        subtitle="Aerospace Engineering Student | Flight Software & Control Systems"
        description="University of Florida student passionate about flight control, sensor fusion, and autonomous navigation. Building the future of spaceflight through hands-on research and engineering."
      />

      {/* 2. About - panel theme for subtle elevation */}
      <AboutSection
        cards={aboutCards}
        theme="panel"
        graphic="none"
        divide="bottom"
      />

      {/* 3. Experience - dark theme with grid for contrast */}
      <ExperienceSection
        experiences={experiences}
        theme="dark"
        graphic="grid"
        divide="both"
      />

      {/* 4. Projects - default theme returning from dark */}
      <HighlightsSection
        highlights={projects}
        theme="default"
        graphic="grid"
        divide="both"
      />

      {/* 5. Skills - panel theme for elevation */}
      <SkillsSection
        skillCategories={skillCategories}
        theme="panel"
        graphic="grid"
        divide="both"
      />

      {/* 6. Contact - dark theme for inverted finish */}
      <ContactSection
        contactLinks={contactLinks}
        theme="dark"
        graphic="none"
        divide="top"
      />

      <footer className="bg-primary text-center py-8 border-t border-accent relative z-10">
        <p className="text-body text-text">
          &copy; 2025 Brandon Jacobson | Building the future of spaceflight, one line of code at a time
        </p>
      </footer>
    </main>
  );
}
