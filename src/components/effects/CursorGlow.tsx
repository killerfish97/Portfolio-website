"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouchDevice = "ontouchstart" in window;

    if (prefersReducedMotion || isTouchDevice) return;

    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMove);
    document.body.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.body.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-[99] mix-blend-screen"
      animate={{ x: position.x - 200, y: position.y - 200 }}
      transition={{ type: "spring", damping: 25, stiffness: 200, mass: 0.5 }}
      aria-hidden="true"
    >
      <div
        className="w-[400px] h-[400px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.12) 0%, rgba(14,165,233,0.05) 40%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}
