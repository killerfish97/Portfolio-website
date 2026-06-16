"use client";

import { motion } from "framer-motion";

export type SectionDecorVariant =
  | "hero"
  | "services"
  | "projects"
  | "experience"
  | "education"
  | "contact";

type VariantLayout = {
  cornerClass: string;
  zigzagClass: string;
  circlesClass: string;
  trianglesClass: string;
  framePrimaryClass: string;
  frameSecondaryClass: string;
  blockClass: string;
  plusClass: string;
  glowClass: string;
  animationDelay: number;
};

const VARIANTS: Record<SectionDecorVariant, VariantLayout> = {
  hero: {
    cornerClass: "top-6 left-6",
    zigzagClass: "top-10 right-10 md:right-16",
    circlesClass: "top-14 right-28 md:right-36",
    trianglesClass: "top-[38%] right-6 md:right-14",
    framePrimaryClass: "bottom-16 right-16",
    frameSecondaryClass: "bottom-20 right-20",
    blockClass: "bottom-10 right-10 md:right-20",
    plusClass: "bottom-8 right-8",
    glowClass: "-bottom-10 -right-10",
    animationDelay: 0,
  },
  services: {
    cornerClass: "top-4 right-6 rotate-90",
    zigzagClass: "top-12 left-8 md:left-14",
    circlesClass: "top-10 left-20 md:left-28",
    trianglesClass: "top-[30%] left-4 md:left-12",
    framePrimaryClass: "bottom-12 left-10",
    frameSecondaryClass: "bottom-16 left-6",
    blockClass: "bottom-14 left-8 md:left-16",
    plusClass: "bottom-6 left-6",
    glowClass: "-bottom-8 -left-8",
    animationDelay: 0.3,
  },
  projects: {
    cornerClass: "top-5 left-5",
    zigzagClass: "top-8 right-12 md:right-20",
    circlesClass: "top-16 right-24 md:right-32",
    trianglesClass: "bottom-[28%] right-8 md:right-16",
    framePrimaryClass: "bottom-20 right-12",
    frameSecondaryClass: "bottom-24 right-8",
    blockClass: "bottom-12 right-6 md:right-14",
    plusClass: "top-8 right-6",
    glowClass: "-bottom-12 -right-12",
    animationDelay: 0.6,
  },
  experience: {
    cornerClass: "top-6 right-8 rotate-90",
    zigzagClass: "bottom-16 left-10 md:left-16",
    circlesClass: "bottom-24 left-24 md:left-32",
    trianglesClass: "top-[22%] right-4 md:right-10",
    framePrimaryClass: "top-20 right-14",
    frameSecondaryClass: "top-24 right-10",
    blockClass: "top-16 right-8 md:right-12",
    plusClass: "bottom-10 right-10",
    glowClass: "-top-8 -right-8",
    animationDelay: 0.9,
  },
  education: {
    cornerClass: "bottom-8 left-6 rotate-180",
    zigzagClass: "top-10 right-8 md:right-14",
    circlesClass: "bottom-14 right-20 md:right-28",
    trianglesClass: "top-[40%] left-6 md:left-14",
    framePrimaryClass: "bottom-16 left-14",
    frameSecondaryClass: "bottom-20 left-10",
    blockClass: "top-14 left-10 md:left-16",
    plusClass: "top-6 left-8",
    glowClass: "-bottom-10 -left-10",
    animationDelay: 1.2,
  },
  contact: {
    cornerClass: "top-5 right-5 rotate-90",
    zigzagClass: "bottom-10 left-8 md:left-14",
    circlesClass: "top-12 right-16 md:right-24",
    trianglesClass: "bottom-[35%] left-4 md:left-12",
    framePrimaryClass: "bottom-14 right-10",
    frameSecondaryClass: "bottom-20 right-6",
    blockClass: "bottom-10 right-16 md:right-24",
    plusClass: "bottom-8 left-8",
    glowClass: "-bottom-8 -left-8",
    animationDelay: 1.5,
  },
};

function CornerLines({ className }: { className: string }) {
  return (
    <svg
      className={`absolute w-12 h-12 md:w-14 md:h-14 text-text/15 ${className}`}
      viewBox="0 0 56 56"
      fill="none"
    >
      <path
        d="M8 44 L8 8 L44 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 36 L36 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Zigzag({ className, delay }: { className: string; delay: number }) {
  return (
    <motion.svg
      className={`absolute w-16 h-8 md:w-20 md:h-10 text-text/18 ${className}`}
      viewBox="0 0 80 32"
      fill="none"
      animate={{ opacity: [0.12, 0.2, 0.12] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <path
        d="M4 22 L18 10 L32 22 L46 10 L60 22 L74 10"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

function OverlappingCircles({
  className,
  delay,
}: {
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      className={`absolute hidden sm:block ${className}`}
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <div className="w-7 h-7 md:w-9 md:h-9 rounded-full border-2 border-text/22" />
      <div className="w-7 h-7 md:w-9 md:h-9 rounded-full border-2 border-text/10 -mt-5 ml-5 md:-mt-6 md:ml-6" />
    </motion.div>
  );
}

function LayeredTriangles({
  className,
  delay,
}: {
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      className={`absolute hidden md:block ${className}`}
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <svg
        className="absolute top-0 left-0 w-20 h-20 md:w-24 md:h-24 text-text/20"
        viewBox="0 0 96 96"
        fill="none"
      >
        <path
          d="M20 76 L20 20 L76 76 Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        className="absolute top-4 left-4 w-20 h-20 md:w-24 md:h-24 text-text/10"
        viewBox="0 0 96 96"
        fill="none"
      >
        <path
          d="M20 76 L20 20 L76 76 Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}

export function SectionBackgroundDecor({
  variant = "hero",
}: {
  variant?: SectionDecorVariant;
}) {
  const layout = VARIANTS[variant];

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden
    >
      <CornerLines className={layout.cornerClass} />
      <Zigzag className={layout.zigzagClass} delay={layout.animationDelay} />
      <OverlappingCircles
        className={layout.circlesClass}
        delay={layout.animationDelay + 0.2}
      />
      <LayeredTriangles
        className={layout.trianglesClass}
        delay={layout.animationDelay + 0.4}
      />

      <div
        className={`absolute w-24 h-28 md:w-28 md:h-32 rounded-2xl bg-[#4F5FD9]/8 rotate-[22deg] hidden lg:block ${layout.blockClass}`}
      />
      <div
        className={`absolute w-28 h-32 md:w-32 md:h-36 rounded-2xl border-2 border-text/10 rotate-[22deg] translate-x-3 hidden lg:block ${layout.framePrimaryClass}`}
      />
      <div
        className={`absolute w-28 h-32 md:w-32 md:h-36 rounded-2xl border-2 border-text/6 rotate-[22deg] -translate-x-2 hidden lg:block ${layout.frameSecondaryClass}`}
      />

      <span
        className={`absolute text-xl md:text-2xl font-light text-text/18 leading-none select-none ${layout.plusClass}`}
      >
        +
      </span>

      <div
        className={`absolute w-40 h-40 md:w-48 md:h-48 rounded-full bg-accent/8 blur-3xl ${layout.glowClass}`}
      />
    </div>
  );
}
