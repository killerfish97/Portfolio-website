"use client";

import { motion } from "framer-motion";
import { EDUCATION } from "@/data/education";
import { SectionBackgroundDecor } from "@/components/effects/SectionBackgroundDecor";

function EducationCard({
  institution,
  degree,
  period,
  description,
  align = "left",
}: {
  institution: string;
  degree: string;
  period: string;
  description: string;
  align?: "left" | "right";
}) {
  const isRight = align === "right";

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className={`group card hover-card p-6 md:p-7 cursor-default ${isRight ? "md:text-right" : ""}`}
    >
      <div
        className={`flex flex-col gap-3 mb-4 ${
          isRight ? "md:items-end" : "sm:flex-row sm:items-start sm:justify-between"
        }`}
      >
        <div>
          <h3 className="hover-card-title text-base font-bold text-text transition-colors duration-300">
            {institution}
          </h3>
        </div>
        <time className="shrink-0 inline-flex items-center px-3 py-1.5 rounded-full bg-background text-xs font-semibold text-text-muted">
          {period}
        </time>
      </div>

      <span className="inline-block px-4 py-1.5 bg-accent text-primary text-sm font-bold rounded mb-3">
        {degree}
      </span>

      <p className="hover-card-text text-sm text-text-muted leading-relaxed transition-colors duration-300">
        {description}
      </p>
    </motion.article>
  );
}

export function Education() {
  return (
    <section id="education" className="section-padding relative overflow-hidden">
      <SectionBackgroundDecor variant="education" />
      <div className="relative z-10">
      <h2 className="section-title">Education</h2>

      <div className="relative max-w-4xl mx-auto">
        <div
          className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 top-3 bottom-3 w-0.5 bg-border"
          aria-hidden
        />

        <div className="space-y-10 md:space-y-12">
          {EDUCATION.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={item.institution}
                initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative grid grid-cols-[2.75rem_1fr] md:grid-cols-[1fr_2.75rem_1fr] md:gap-x-6 items-start"
              >
                <div
                  className={`hidden md:block md:col-start-1 ${
                    isLeft ? "md:pr-4" : ""
                  }`}
                >
                  {isLeft && (
                    <EducationCard {...item} align="right" />
                  )}
                </div>

                <div className="relative md:col-start-2 flex justify-center md:justify-center col-start-1 row-start-1">
                  <div
                    className={`relative z-10 mt-7 flex h-6 w-6 items-center justify-center rounded-full border-[3px] border-background shadow-sm ${
                      index === 0
                        ? "bg-accent ring-4 ring-accent/20"
                        : "bg-surface ring-2 ring-accent"
                    }`}
                    aria-hidden
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        index === 0 ? "bg-primary" : "bg-accent"
                      }`}
                    />
                  </div>
                </div>

                <div
                  className={`col-start-2 row-start-1 md:col-start-3 ${
                    !isLeft ? "md:pl-4" : "md:hidden"
                  }`}
                >
                  <EducationCard {...item} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      </div>
    </section>
  );
}
