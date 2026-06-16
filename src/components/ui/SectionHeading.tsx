"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  description?: string;
}

export function SectionHeading({ subtitle, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="text-center mb-20"
    >
      <span className="badge-pill mb-7">
        <span className="w-2 h-2 rounded-full bg-gradient-to-br from-primary-light to-gold-light" />
        {subtitle}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-[2.85rem] font-bold font-[family-name:var(--font-space-grotesk)] mb-6 tracking-[-0.02em] leading-[1.1]">
        <span className="gradient-text">{title}</span>
      </h2>
      <div className="section-divider max-w-sm mx-auto mb-7" />
      {description && (
        <p className="text-text-muted max-w-lg mx-auto text-base md:text-lg leading-[1.75] text-balance">
          {description}
        </p>
      )}
    </motion.div>
  );
}
