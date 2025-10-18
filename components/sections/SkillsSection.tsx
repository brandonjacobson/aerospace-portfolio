'use client';

import { useEffect, useRef, useState } from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionHeading from '../layout/SectionHeading';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

interface SkillsSectionProps {
  overline?: string;
  title?: string;
  subtitle?: string;
  skillCategories: SkillCategory[];
  theme?: 'default' | 'panel' | 'dark';
  graphic?: 'grid' | 'orbital' | 'stars' | 'none';
  divide?: 'top' | 'bottom' | 'both' | 'none';
}

/**
 * Skills Section Component
 * Animated skill bars with categories
 * Default theme: panel with grid for technical showcase
 */
export default function SkillsSection({
  overline = 'Expertise & Proficiency',
  title = 'Technical Skills',
  subtitle,
  skillCategories,
  theme = 'panel',
  graphic = 'grid',
  divide = 'both',
}: SkillsSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <Section id="skills" theme={theme} graphic={graphic} divide={divide}>
      <Container>
        <SectionHeading
          overline={overline}
          title={title}
          subtitle={subtitle}
          centered
        />

        <div
          ref={sectionRef}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto"
        >
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="bg-card-bg p-8 rounded-xl border-2 border-secondary transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/30 hover:border-accent h-full flex flex-col relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-h3 text-accent font-semibold mb-6">
                  {category.category}
                </h3>

                <div className="space-y-5 flex-grow">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2 text-left">
                        <span className="text-body text-text font-medium">
                          {skill.name}
                        </span>
                        <span className="text-body text-accent font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2.5 bg-secondary/50 rounded-full overflow-hidden border border-secondary">
                        <div
                          className="h-full bg-gradient-to-r from-accent to-cyan-400 rounded-full transition-all duration-1000 ease-out shadow-lg shadow-accent/30"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                          }}
                        />
                      </div>
                    </div>
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
