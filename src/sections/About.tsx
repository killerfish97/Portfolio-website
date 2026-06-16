"use client";

import { motion } from "framer-motion";
import { MapPin, Sparkles } from "lucide-react";
import { STATS, SITE_CONFIG } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="section-padding relative section-alt">
      <div className="container-custom">
        <SectionHeading
          subtitle="About Me"
          title="Crafting Digital Excellence"
          description="Passionate about building high-performance, secure, and user-centric applications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="premium-card gradient-border rounded-3xl p-8 md:p-10 relative overflow-hidden h-full">
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-primary/15 rounded-full blur-3xl" />
              <div className="relative">
                <div className="relative w-24 h-24 mb-8">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary via-accent to-accent-secondary opacity-40 blur-xl" />
                  <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-primary via-primary-light to-accent flex items-center justify-center shadow-lg shadow-primary/20">
                    <span className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] text-white">
                      NK
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] mb-1 tracking-tight">
                  {SITE_CONFIG.name}
                </h3>
                <p className="text-primary-light text-sm font-medium mb-5">
                  {SITE_CONFIG.title}
                </p>
                <div className="flex items-center gap-2 text-text-muted text-sm mb-8">
                  <MapPin size={15} className="text-accent shrink-0" />
                  {SITE_CONFIG.location}
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
                  <Sparkles size={13} />
                  Open for Freelancing
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="premium-card rounded-3xl p-8 md:p-10 h-full flex flex-col justify-between">
              <p className="text-text-muted text-base md:text-lg leading-[1.8] mb-10">
                Full Stack Developer / Backend Engineer with{" "}
                <span className="text-text font-medium">5+ years of experience</span>{" "}
                designing scalable web applications using Python, Django, ReactJS,
                REST APIs, and SQL. Experienced in optimizing systems handling large
                datasets and building applications supporting{" "}
                <span className="text-text font-medium">thousands of daily users</span>.
              </p>

              <div className="grid grid-cols-3 gap-3 md:gap-4">
                {STATS.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="stat-card text-center p-4 md:p-6 rounded-2xl hover:shadow-lg hover:shadow-primary/8 transition-all duration-300"
                  >
                    <div className="text-2xl md:text-4xl font-bold gradient-text font-[family-name:var(--font-space-grotesk)] tracking-tight">
                      {stat.value}
                      <span className="text-accent text-xl md:text-2xl">{stat.suffix}</span>
                    </div>
                    <p className="text-[10px] md:text-xs text-text-muted mt-2 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
