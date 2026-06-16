"use client";

import { motion } from "framer-motion";
import { FLOATING_TECH } from "@/data/site";

const positions = [
  { top: "15%", left: "8%", delay: 0 },
  { top: "25%", right: "10%", delay: 0.5 },
  { top: "60%", left: "5%", delay: 1 },
  { top: "70%", right: "8%", delay: 1.5 },
  { top: "40%", left: "15%", delay: 2 },
  { top: "50%", right: "15%", delay: 2.5 },
  { top: "80%", left: "12%", delay: 3 },
  { top: "20%", right: "20%", delay: 3.5 },
];

export function FloatingTechIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block" aria-hidden="true">
      {FLOATING_TECH.map((tech, i) => {
        const pos = positions[i % positions.length];
        return (
          <motion.div
            key={tech}
            className="absolute premium-card px-3.5 py-2 rounded-full text-[11px] font-medium tracking-wide text-text-muted uppercase"
            style={{ top: pos.top, left: pos.left, right: pos.right }}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0.3, 0.7, 0.3],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: pos.delay,
              ease: "easeInOut",
            }}
          >
            {tech}
          </motion.div>
        );
      })}
    </div>
  );
}
