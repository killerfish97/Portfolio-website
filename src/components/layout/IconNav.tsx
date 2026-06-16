"use client";

import {
  Home,
  Briefcase,
  FolderOpen,
  History,
  GraduationCap,
  Mail,
  type LucideIcon,
} from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { ICON_NAV } from "@/data/navigation";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  home: Home,
  briefcase: Briefcase,
  folder: FolderOpen,
  history: History,
  graduation: GraduationCap,
  mail: Mail,
};

const SECTION_IDS = ICON_NAV.map((item) => item.id);

export function IconNav() {
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <>
      <nav
        className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-3 card p-3"
        aria-label="Section navigation"
      >
        {ICON_NAV.map((item) => {
          const Icon = iconMap[item.icon] ?? Home;
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                "w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300",
                isActive
                  ? "bg-accent text-primary shadow-md shadow-accent/30"
                  : "text-text-muted hover:text-text hover:bg-background"
              )}
              aria-label={item.label}
              title={item.label}
            >
              <Icon size={18} />
            </a>
          );
        })}
      </nav>

      <nav
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-surface border-t border-border px-2 py-2 flex justify-around"
        aria-label="Section navigation"
      >
        {ICON_NAV.map((item) => {
          const Icon = iconMap[item.icon] ?? Home;
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg transition-colors",
                isActive ? "text-accent" : "text-text-muted"
              )}
              aria-label={item.label}
            >
              <Icon size={18} />
              <span className="text-[9px] font-medium">{item.label}</span>
            </a>
          );
        })}
      </nav>
    </>
  );
}
