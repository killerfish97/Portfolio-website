import type { NavLink, SocialLink } from "@/types";

export const SITE_CONFIG = {
  name: "Nithin K R",
  title: "Full Stack Developer",
  tagline:
    "Building scalable, high-performance web applications with modern technologies.",
  email: "krnithingowda97@gmail.com",
  phone: "+91 9066366315",
  location: "Bangalore, India",
  github: "https://github.com/killerfish97",
  linkedin: "https://www.linkedin.com/in/nithin-k-r-7256a8145",
  resumeUrl: "/resume.pdf",
  profileImage: "/profile.png",
  whatsappMessage:
    "Hi Nithin, I came across your portfolio and would like to discuss a project opportunity.",
};

export const ROTATING_TITLES = [
  "Full Stack Developer",
  "Backend Developer",
  "Python Developer",
  "Django Developer",
];

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Freelance", href: "#freelance" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: SITE_CONFIG.github, icon: "github" },
  { label: "LinkedIn", href: SITE_CONFIG.linkedin, icon: "linkedin" },
  { label: "Email", href: `mailto:${SITE_CONFIG.email}`, icon: "mail" },
];

export const STATS = [
  { label: "Years Experience", value: "5", suffix: "+" },
  { label: "Projects Delivered", value: "15", suffix: "+" },
  { label: "Technologies", value: "14", suffix: "+" },
];

export const HERO_HIGHLIGHTS = [
  "5+ years building scalable web applications for startups and enterprises",
  "Delivered School ERP & ecommerce platforms serving 50,000+ daily users",
  "Strong in backend architecture, REST APIs, and database performance tuning",
];

export const FLOATING_TECH = [
  "Python",
  "Django",
  "React",
  "PostgreSQL",
  "REST",
  "Node.js",
  "Tailwind",
  "Git",
];
