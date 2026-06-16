"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/data/projects";
import { SectionBackgroundDecor } from "@/components/effects/SectionBackgroundDecor";

function ProjectMedia({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);
  const isSvg = src.endsWith(".svg");

  if (error) {
    return (
      <div className="absolute inset-0 bg-accent/10 flex items-center justify-center">
        <span className="text-2xl font-bold text-accent">NK</span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={`max-h-[110px] max-w-[85%] object-contain project-icon ${isSvg ? "" : "project-icon-pixel"}`}
      loading="lazy"
      onError={() => setError(true)}
    />
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <SectionBackgroundDecor variant="projects" />
      <div className="relative z-10">
      <h2 className="section-title">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
        {PROJECTS.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.3 }}
            className="group card hover-card overflow-hidden cursor-default h-auto self-start w-full"
          >
            <div className="hover-card-media relative h-44 bg-surface overflow-hidden flex items-center justify-center p-4">
              <ProjectMedia
                src={project.image}
                alt={`${project.title} — ${project.techStack.join(", ")}`}
              />
            </div>
            <div className="p-6">
              <h3 className="hover-card-title text-base font-bold text-text mb-2 transition-colors duration-300">
                {project.title}
              </h3>
              <div className="mb-4 min-h-[2.75rem]">
                <p className="hover-card-text text-sm text-text-muted leading-relaxed line-clamp-2 group-hover:hidden">
                  {project.shortDescription}
                </p>
                <p className="hover-card-text hidden text-sm text-text-muted leading-relaxed group-hover:block">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-[10px] font-medium rounded-full bg-background text-text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      </div>
    </section>
  );
}
