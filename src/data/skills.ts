import type { SkillCategory } from "@/types";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend",
    icon: "server",
    skills: [
      { name: "Python", level: 95 },
      { name: "Django", level: 92 },
      { name: "Flask", level: 80 },
      { name: "Node.js", level: 75 },
    ],
  },
  {
    title: "Frontend",
    icon: "layout",
    skills: [
      { name: "ReactJS", level: 88 },
      { name: "Next.js", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "HTML & CSS", level: 92 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Database",
    icon: "database",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "SQLite", level: 82 },
    ],
  },
  {
    title: "Tools",
    icon: "wrench",
    skills: [
      { name: "Git", level: 92 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 88 },
    ],
  },
  {
    title: "APIs",
    icon: "api",
    skills: [
      { name: "REST APIs", level: 93 },
      { name: "Django REST Framework", level: 90 },
      { name: "Third-party Integrations", level: 85 },
    ],
  },
];
