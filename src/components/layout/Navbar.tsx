"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace("#", ""));

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4"
    >
      <nav
        className={cn(
          "container-custom mx-auto flex items-center justify-between h-14 md:h-16 px-5 md:px-6 rounded-2xl transition-all duration-500",
          isScrolled
            ? "glass shadow-xl shadow-primary/8"
            : "bg-surface/40 backdrop-blur-sm border border-transparent"
        )}
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="relative text-lg font-bold font-[family-name:var(--font-space-grotesk)] tracking-tight"
        >
          <span className="gradient-text">NK</span>
          <span className="absolute -bottom-0.5 left-0 w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
        </a>

        <ul className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "relative px-3.5 py-2 text-[13px] font-medium transition-colors rounded-xl z-10",
                    isActive ? "text-text" : "text-text-muted hover:text-text"
                  )}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 bg-primary/5 rounded-xl border border-primary/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex shine items-center px-5 py-2.5 text-[13px] font-semibold rounded-full bg-gradient-to-r from-primary via-primary-light to-accent text-white shadow-lg shadow-primary/25 hover:shadow-primary/35 transition-shadow"
        >
          Hire Me
        </a>

        <button
          type="button"
          className="md:hidden p-2 rounded-xl text-text-muted hover:text-text hover:bg-surface-light transition-colors"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="container-custom mx-auto mt-2 glass rounded-2xl border border-border overflow-hidden md:hidden"
          >
            <ul className="flex flex-col p-3 gap-0.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-text-muted hover:text-text hover:bg-surface-light rounded-xl transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-semibold text-center rounded-full bg-gradient-to-r from-primary via-primary-light to-accent text-white shadow-md"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
