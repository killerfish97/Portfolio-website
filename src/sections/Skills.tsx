"use client";

import { motion } from "framer-motion";
import {
  Server,
  Layout,
  Database,
  Wrench,
  Code2,
  type LucideIcon,
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  server: Server,
  layout: Layout,
  database: Database,
  wrench: Wrench,
  api: Code2,
};

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div className="space-y-2.5">
      <div className="flex justify-between text-sm">
        <span className="text-text font-medium">{name}</span>
        <span className="text-text-muted text-xs tabular-nums">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-padding relative section-alt">
      <div className="container-custom relative">
        <SectionHeading
          subtitle="Skills"
          title="Technical Expertise"
          description="A comprehensive toolkit for building modern, scalable applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {SKILL_CATEGORIES.map((category, catIndex) => {
            const Icon = iconMap[category.icon] ?? Code2;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.08, duration: 0.6 }}
                className="premium-card rounded-3xl p-6 md:p-7 group"
              >
                <div className="flex items-center gap-4 mb-7">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-xl bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative p-3 rounded-xl bg-primary/10 text-primary-light border border-primary/15">
                      <Icon size={20} />
                    </div>
                  </div>
                  <h3 className="text-base font-semibold font-[family-name:var(--font-space-grotesk)] tracking-tight">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-5">
                  {category.skills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={catIndex * 0.08 + i * 0.05}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
