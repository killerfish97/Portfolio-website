"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Code,
  Database,
  Trophy,
  Award,
  type LucideIcon,
} from "lucide-react";
import { CERTIFICATIONS } from "@/data/certifications";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  brain: Brain,
  code: Code,
  database: Database,
  trophy: Trophy,
  award: Award,
};

export function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          subtitle="Achievements"
          title="Certifications & Awards"
          description="Continuous learning and recognition throughout my journey."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {CERTIFICATIONS.map((cert, index) => {
            const Icon = iconMap[cert.icon] ?? Award;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07, duration: 0.5 }}
                className="premium-card rounded-3xl p-6 md:p-7 group"
              >
                <div className="relative mb-5">
                  <div className="absolute inset-0 rounded-xl bg-accent/15 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-3 rounded-xl bg-accent/10 text-accent border border-accent/15 w-fit">
                    <Icon size={22} />
                  </div>
                </div>
                <h3 className="text-base font-semibold font-[family-name:var(--font-space-grotesk)] mb-2 tracking-tight">
                  {cert.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {cert.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
