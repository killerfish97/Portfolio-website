"use client";

import { motion } from "framer-motion";
import { PartyPopper, Sparkles, Star } from "lucide-react";

const PARTY_ICONS: {
  Icon: typeof PartyPopper;
  top: string;
  left?: string;
  right?: string;
  size: number;
  rotate: number;
  delay: number;
}[] = [
  { Icon: PartyPopper, top: "10%", left: "3%", size: 16, rotate: -12, delay: 0 },
  { Icon: Sparkles, top: "28%", right: "4%", size: 14, rotate: 8, delay: 1.4 },
  { Icon: Star, top: "52%", left: "2%", size: 12, rotate: -6, delay: 2.8 },
  { Icon: PartyPopper, top: "68%", right: "3%", size: 15, rotate: 14, delay: 0.8 },
  { Icon: Sparkles, top: "86%", left: "5%", size: 13, rotate: -10, delay: 2.1 },
];

const CONFETTI: {
  top: string;
  left?: string;
  right?: string;
  color: string;
  size: number;
  delay: number;
}[] = [
  { top: "14%", left: "7%", color: "#ffb400", size: 5, delay: 0 },
  { top: "22%", right: "9%", color: "#ffd86b", size: 4, delay: 1.2 },
  { top: "38%", left: "6%", color: "#e8e8ee", size: 4, delay: 2.4 },
  { top: "46%", right: "7%", color: "#ffb400", size: 5, delay: 0.6 },
  { top: "61%", left: "4%", color: "#c9c9d6", size: 3, delay: 1.8 },
  { top: "74%", right: "6%", color: "#ffd86b", size: 4, delay: 3 },
  { top: "90%", left: "8%", color: "#ffb400", size: 4, delay: 1.1 },
];

export function PartyBackgroundIcons() {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,180,0,0.06),transparent_42%),radial-gradient(circle_at_85%_75%,rgba(255,180,0,0.05),transparent_38%)]" />

      {CONFETTI.map((dot, index) => (
        <motion.span
          key={`confetti-${index}`}
          className="absolute rounded-full opacity-40"
          style={{
            top: dot.top,
            left: dot.left,
            right: dot.right,
            width: dot.size,
            height: dot.size,
            backgroundColor: dot.color,
          }}
          animate={{ y: [0, -8, 0], opacity: [0.25, 0.45, 0.25] }}
          transition={{
            duration: 7 + (index % 2) * 2,
            repeat: Infinity,
            delay: dot.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {PARTY_ICONS.map(({ Icon, top, left, right, size, rotate, delay }, index) => (
        <motion.div
          key={`icon-${index}`}
          className="absolute hidden md:block text-accent/10"
          style={{ top, left, right }}
          animate={{
            opacity: [0.06, 0.12, 0.06],
            y: [0, -6, 0],
            rotate: [rotate, rotate + 4, rotate],
          }}
          transition={{
            duration: 9 + index,
            repeat: Infinity,
            delay,
            ease: "easeInOut",
          }}
        >
          <Icon size={size} strokeWidth={1.25} />
        </motion.div>
      ))}
    </div>
  );
}
