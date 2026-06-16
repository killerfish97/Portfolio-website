"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, Check } from "lucide-react";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/data/site";
import { PROFILE_INFO, SIDEBAR_SKILLS, EXTRA_SKILLS } from "@/data/profile";

const iconMap = { github: Github, linkedin: Linkedin, mail: Mail };

export function Sidebar() {
  return (
    <aside className="w-full lg:w-[280px] xl:w-[300px] shrink-0">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="card p-8 lg:sticky lg:top-6 sidebar-scroll lg:max-h-[calc(100vh-3rem)] lg:overflow-y-auto"
      >
        {/* Avatar */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="relative w-36 h-36 rounded-full border-4 border-accent/30 shadow-lg mb-5 overflow-hidden bg-background">
            <Image
              src={SITE_CONFIG.profileImage}
              alt={SITE_CONFIG.name}
              fill
              className="object-cover object-top"
              sizes="144px"
              priority
            />
          </div>
          <h2 className="text-xl font-bold text-text mb-1">{SITE_CONFIG.name}</h2>
          <p className="text-sm text-text-muted font-medium">{SITE_CONFIG.title}</p>
        </div>

        {/* Social */}
        <div className="flex justify-center gap-2 mb-8">
          {SOCIAL_LINKS.map((social) => {
            const Icon = iconMap[social.icon as keyof typeof iconMap];
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label={social.label}
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>

        {/* Info */}
        <div className="mb-8">
          {PROFILE_INFO.map((item) => (
            <div key={item.label} className="info-row last:border-0">
              <span className="info-label">{item.label}</span>
              <span
                className={`info-value ${item.highlight ? "accent-text" : ""}`}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="mb-8">
          <h3 className="text-sm font-bold text-text mb-4">Skills</h3>
          <div className="space-y-4">
            {SIDEBAR_SKILLS.map((skill, i) => (
              <div key={skill.name}>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-text-muted font-medium">{skill.name}</span>
                  <span className="text-text font-semibold">{skill.level}%</span>
                </div>
                <div className="progress-track">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.08 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extra Skills */}
        <div className="mb-8">
          <h3 className="text-sm font-bold text-text mb-3">Extra Skills</h3>
          <div className="grid grid-cols-2 gap-2">
            {EXTRA_SKILLS.map((skill) => (
              <div key={skill} className="flex items-center gap-1.5 text-xs text-text-muted">
                <Check size={14} className="text-accent shrink-0" />
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Download CV */}
        <a href={SITE_CONFIG.resumeUrl} className="btn-accent w-full text-center">
          <Download size={16} />
          Download CV
        </a>
      </motion.div>
    </aside>
  );
}
