"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypingAnimationProps {
  texts: string[];
  className?: string;
}

export function TypingAnimation({ texts, className }: TypingAnimationProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <span className={`inline-block relative ${className ?? ""}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={texts[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="gradient-text"
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
