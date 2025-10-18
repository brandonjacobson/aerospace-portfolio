export interface Experience {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string[];
  technologies?: string[];
}

export interface Project {
  id: string;
  title: string;
  type: string;
  period: string;
  description: string;
  accomplishments: string[];
  technologies: string[];
  githubUrl?: string;
  images?: { src?: string; alt: string }[];
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface ContactLink {
  label: string;
  href: string;
  icon?: string;
}
