"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[100] rounded-full"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #312e81, #4338ca, #0e7490, #d97706)",
        boxShadow: "0 0 14px rgba(67, 56, 202, 0.35)",
      }}
      aria-hidden="true"
    />
  );
}
