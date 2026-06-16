"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "@/data/site";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const start = Date.now();

    const tick = () => {
      const elapsed = Date.now() - start;
      const p = Math.min((elapsed / duration) * 100, 100);
      setProgress(p);

      if (p < 100) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(onComplete, 500);
      }
    };

    requestAnimationFrame(tick);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        role="status"
        aria-label="Loading portfolio"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="glow-orb w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" style={{ background: "radial-gradient(circle, #8b7cf7, transparent 70%)" }} />
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center relative z-10"
        >
          <div className="relative w-20 h-20 mx-auto mb-8">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-accent opacity-30 blur-xl animate-pulse" />
            <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-primary to-accent-secondary flex items-center justify-center border border-white/15">
              <span className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-white">
                NK
              </span>
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-1 font-[family-name:var(--font-space-grotesk)] tracking-tight">
            {SITE_CONFIG.name}
          </h2>
          <p className="text-text-muted text-xs uppercase tracking-[0.2em] mb-10">
            Loading portfolio
          </p>
          <div className="w-56 h-[3px] bg-surface-light rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, #8b7cf7, #38bdf8, #c084fc)",
              }}
            />
          </div>
          <p className="text-text-muted text-xs mt-3 tabular-nums">{Math.round(progress)}%</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
