"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/data/experience";
import { SectionBackgroundDecor } from "@/components/effects/SectionBackgroundDecor";

export function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <SectionBackgroundDecor variant="experience" />
      <div className="relative z-10">
      <h2 className="section-title">Work History</h2>

      <div className="relative max-w-3xl mx-auto">
        <div
          className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-border"
          aria-hidden
        />

        <div className="space-y-8">
          {EXPERIENCE.map((item, index) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-10"
            >
              <div
                className={`absolute left-0 top-7 z-10 flex h-6 w-6 items-center justify-center rounded-full border-[3px] border-background shadow-sm ${
                  index === 0 ? "bg-accent ring-4 ring-accent/20" : "bg-surface ring-2 ring-accent"
                }`}
                aria-hidden
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    index === 0 ? "bg-primary" : "bg-accent"
                  }`}
                />
              </div>

              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group card hover-card p-6 md:p-7 cursor-default"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h3 className="hover-card-title text-base font-bold text-text transition-colors duration-300">
                      {item.company}
                    </h3>
                    {item.location && (
                      <p className="text-xs text-text-light mt-0.5">{item.location}</p>
                    )}
                  </div>
                  <time className="shrink-0 inline-flex items-center px-3 py-1.5 rounded-full bg-background text-xs font-semibold text-text-muted">
                    {item.period}
                  </time>
                </div>

                <span className="inline-block px-4 py-1.5 bg-accent text-primary text-sm font-bold rounded mb-4">
                  {item.role}
                </span>

                <ul className="space-y-2">
                  {item.highlights.map((h) => (
                    <li
                      key={h}
                      className="hover-card-text text-sm text-text-muted leading-relaxed flex gap-2 transition-colors duration-300"
                    >
                      <span className="text-accent shrink-0 mt-1">•</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
