export interface NavLink {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Certification {
  title: string;
  description: string;
  icon: string;
}

export interface ContactInfo {
  label: string;
  value: string;
  href: string;
  icon: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}
