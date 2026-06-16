"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { IconNav } from "@/components/layout/IconNav";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { PartyBackgroundIcons } from "@/components/effects/PartyBackgroundIcons";
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Education } from "@/sections/Education";
import { Contact } from "@/sections/Contact";

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-background">
      <PartyBackgroundIcons />
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 py-6 lg:py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <Sidebar />
          <main className="flex-1 min-w-0 pb-20 lg:pb-0">
            <Hero />
            <Services />
            <Projects />
            <Experience />
            <Education />
            <Contact />
          </main>
        </div>
      </div>
      <IconNav />
      <FloatingWhatsApp />
    </div>
  );
}
