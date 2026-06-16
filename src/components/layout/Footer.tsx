import { Github, Linkedin, Mail } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG, SOCIAL_LINKS } from "@/data/site";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-surface/80">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/3 to-transparent pointer-events-none" />
      <div className="container-custom section-padding !py-14 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-bold font-[family-name:var(--font-space-grotesk)] gradient-text mb-4 tracking-tight">
              {SITE_CONFIG.name}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              Full Stack Developer crafting scalable, high-performance
              web applications.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-text-muted mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted hover:text-text transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-text-muted mb-5">
              Connect
            </h4>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl premium-card text-text-muted hover:text-accent transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="section-divider mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>&copy; {year} {SITE_CONFIG.name}. All rights reserved.</p>
          <p>
            Built with{" "}
            <span className="text-accent">Next.js</span>
            {" "}&{" "}
            <span className="text-primary-light">Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
