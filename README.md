# Nithin K R — Portfolio Website

A modern, premium, and fully responsive personal portfolio website for **Nithin K R**, a Full Stack & Backend Developer with 5+ years of experience.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![React](https://img.shields.io/badge/React-19-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38BDF8)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055)

## Features

- **Modern UI** — Glassmorphism, gradient accents, premium dark theme
- **Animations** — Scroll reveals, hover effects, typing animation, particle background
- **Interactive** — Animated cursor glow, scroll progress indicator, floating tech icons
- **Sections** — Hero, About, Skills, Experience Timeline, Projects, Freelance, Certifications, Contact
- **Responsive** — Mobile-first design for all screen sizes
- **SEO Optimized** — Metadata, Open Graph tags, semantic HTML
- **Accessible** — ARIA labels, reduced motion support, keyboard navigation
- **Performance** — Lazy-loaded images, optimized animations, clean component architecture

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 15 | React framework with App Router |
| TypeScript | Type-safe development |
| Tailwind CSS 4 | Utility-first styling |
| Framer Motion | Animations & transitions |
| Lucide React | Icon library |

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone or navigate to the project
cd Project

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                  # Next.js App Router (layout, page, globals)
├── components/
│   ├── effects/          # Cursor glow, particles, scroll progress, etc.
│   ├── layout/           # Navbar, Footer
│   └── ui/               # Reusable UI components (Button, SectionHeading)
├── data/                 # Static content (skills, experience, projects)
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── sections/             # Page sections (Hero, About, Skills, etc.)
└── types/                # TypeScript type definitions
```

## Customization

### Personal Information

Edit `src/data/site.ts` to update contact details, social links, and site configuration.

### Skills

Modify `src/data/skills.ts` to add or update skill categories and proficiency levels.

### Experience & Projects

Update `src/data/experience.ts` and `src/data/projects.ts` with your work history and portfolio projects.

### Resume

Place your resume PDF at `public/resume.pdf` for the Download Resume button.

## Deployment

Deploy easily on [Vercel](https://vercel.com):

```bash
npm run build
```

Or use any static hosting platform that supports Next.js.

## License

This project is private and intended for personal portfolio use.

---

Built with **Next.js** & **Tailwind CSS** by Nithin K R
