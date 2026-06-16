"use client";

import { motion } from "framer-motion";
import { Briefcase, MessageCircle, Mail, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { formatWhatsAppUrl } from "@/lib/utils";

export function Freelance() {
  const whatsappUrl = formatWhatsAppUrl(
    SITE_CONFIG.phone,
    SITE_CONFIG.whatsappMessage
  );

  return (
    <section id="freelance" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative premium-card gradient-border rounded-[2rem] p-10 md:p-14 lg:p-20 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/15 via-accent/5 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-secondary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,124,247,0.04),transparent_70%)] pointer-events-none" />

          <div className="relative max-w-2xl mx-auto text-center">
            <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary-light border border-primary/15 mb-8">
              <Briefcase size={28} />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6 tracking-tight leading-tight">
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Amazing</span>
            </h2>

            <p className="text-base md:text-lg text-text-muted leading-relaxed mb-12 text-balance">
              I&apos;m currently available for freelance projects, backend
              development, API integrations, dashboard systems, and full-stack web
              applications.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button href="#contact" variant="primary" size="lg">
                Hire Me
                <ArrowRight size={17} />
              </Button>
              <Button href={whatsappUrl} variant="secondary" size="lg" external>
                <MessageCircle size={17} />
                WhatsApp
              </Button>
              <Button
                href={`mailto:${SITE_CONFIG.email}`}
                variant="outline"
                size="lg"
              >
                <Mail size={17} />
                Email Me
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
