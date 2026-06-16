"use client";

import { motion } from "framer-motion";
import { ChevronRight, Download, MapPin } from "lucide-react";
import { SectionBackgroundDecor } from "@/components/effects/SectionBackgroundDecor";
import {
  HERO_HIGHLIGHTS,
  SITE_CONFIG,
  STATS,
} from "@/data/site";

export function Hero() {
  return (
    <section id="home" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card p-8 md:p-10 lg:p-12 relative overflow-hidden"
      >
        <SectionBackgroundDecor variant="hero" />

        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/15 text-xs font-semibold text-text">
              Available for Freelance
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-text-muted">
              <MapPin size={13} className="text-accent" />
              {SITE_CONFIG.location}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-text leading-tight mb-5">
            I&apos;m {SITE_CONFIG.name.split(" ")[0]}{" "}
            <span className="accent-text">Full Stack</span>
            <br />
            Developer
          </h1>

          <p className="text-text-muted text-sm md:text-[15px] leading-relaxed mb-4 max-w-2xl">
            {SITE_CONFIG.tagline} I specialize in Python, Django, ReactJS, PHP,
            Laravel, FastAPI, REST APIs, and performance tuning for large-scale
            applications.
          </p>

          <p className="text-text-muted text-sm leading-relaxed mb-6 max-w-2xl">
            From backend systems and API design to responsive frontends, I help
            teams ship reliable products — ERP platforms, ecommerce stores,
            healthcare tools, and assessment systems.
          </p>

          <ul className="space-y-2 mb-6 max-w-2xl">
            {HERO_HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="flex gap-2 text-sm text-text-muted leading-relaxed"
              >
                <span className="text-accent shrink-0 mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-3 gap-3 mb-6 max-w-md">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-background px-3 py-3 text-center"
              >
                <p className="text-lg font-bold text-text">
                  {stat.value}
                  <span className="accent-text">{stat.suffix}</span>
                </p>
                <p className="text-[10px] text-text-muted font-medium leading-tight mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="btn-accent">
              Hire Me
              <ChevronRight size={18} />
            </a>
            <a href="#projects" className="btn-outline">
              View Projects
            </a>
            <a href={SITE_CONFIG.resumeUrl} className="btn-outline">
              <Download size={16} />
              Download CV
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
