"use client";

import { motion } from "framer-motion";

/*
 * Consistent section wrapper: max-width, padding, and optional reveal
 * animation. Uses Framer Motion for a single fade-up on scroll into view.
 */
const defaultReveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.4, ease: "easeOut" },
};

type SectionLayoutProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  /** Set false to disable the reveal animation for this section */
  animate?: boolean;
};

export function SectionLayout({ id, title, children, animate = true }: SectionLayoutProps) {
  const Wrapper = animate ? motion.section : "section";
  const wrapperProps = animate
    ? { ...defaultReveal, className: "scroll-mt-20" }
    : { className: "scroll-mt-20" };

  return (
    <Wrapper id={id} {...wrapperProps}>
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <h2 className="mb-8 text-xl font-semibold tracking-tight text-[var(--color-text)] sm:text-2xl">
          {title}
        </h2>
        {children}
      </div>
    </Wrapper>
  );
}
