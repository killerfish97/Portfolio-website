"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Layers,
  Server,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/data/services";
import { SectionBackgroundDecor } from "@/components/effects/SectionBackgroundDecor";

const iconMap: Record<string, LucideIcon> = {
  server: Server,
  code: Code2,
  layers: Layers,
  database: Database,
  globe: Globe,
  cart: ShoppingCart,
};

export function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <SectionBackgroundDecor variant="services" />
      <div className="relative z-10">
      <h2 className="section-title">My Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SERVICES.map((service, index) => {
          const Icon = iconMap[service.icon] ?? Server;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.3 }}
              className="group card hover-card p-8 cursor-default"
            >
              <div className="hover-card-icon w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <Icon size={24} className="text-accent transition-colors duration-300" />
              </div>
              <h3 className="hover-card-title text-base font-bold text-text mb-3 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="hover-card-text text-sm text-text-muted leading-relaxed transition-colors duration-300">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
      </div>
    </section>
  );
}
