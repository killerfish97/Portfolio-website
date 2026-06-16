"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "shine bg-gradient-to-r from-primary via-primary-light to-accent text-white shadow-xl shadow-primary/20 hover:shadow-primary/30 border border-white/20",
  secondary:
    "premium-card text-text hover:-translate-y-0.5",
  outline:
    "border-2 border-primary/20 text-primary-light bg-surface/60 hover:bg-surface hover:border-primary/35 backdrop-blur-sm",
  ghost: "text-text-muted hover:text-text hover:bg-surface-light",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-sm font-semibold tracking-wide",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  external,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2.5 rounded-full font-medium transition-all duration-300 cursor-pointer",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
