"use client";

import { motion, useReducedMotion } from "framer-motion";

export const smoothEase = [0.25, 0.46, 0.45, 0.94];
export const springConfig = { type: "spring", stiffness: 120, damping: 20 };

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: smoothEase } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: smoothEase } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.65, ease: smoothEase } },
};

export const slideRight = {
  hidden: { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: smoothEase } },
};

export const slideLeft = {
  hidden: { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: smoothEase } },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

export function MotionSection({ children, className = "", delay = 0, variant = fadeUp, once = true }) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <section className={className}>{children}</section>;

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={variant}
      transition={{ ...variant.visible?.transition, delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export function MotionDiv({ children, className = "", delay = 0, variant = fadeUp, once = true }) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      variants={variant}
      transition={{ duration: 0.65, ease: smoothEase, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MotionStagger({ children, className = "", once = true }) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MotionItem({ children, className = "", variant = fadeUp }) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div variants={variant} className={className}>
      {children}
    </motion.div>
  );
}

export function MotionHero({ children, className = "" }) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease: smoothEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MotionCard({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, ease: smoothEase, delay }}
      whileHover={{ y: -6, transition: { duration: 0.3, ease: smoothEase } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MotionFloat({ children, className = "", duration = 5 }) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      animate={{ y: [0, -14, 0] }}
      transition={{ repeat: Infinity, duration, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
