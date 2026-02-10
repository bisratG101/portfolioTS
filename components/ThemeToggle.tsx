"use client";

import { useTheme } from "@/components/ThemeProvider";
import { motion } from "framer-motion";

type Theme = "light" | "dark" | "system";

const options: { value: Theme; label: string }[] = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
];

/*
 * Segmented control for theme: Light | Dark | System.
 * System respects prefers-color-scheme; manual choice is persisted in localStorage.
 */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="flex rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-0.5"
      role="radiogroup"
      aria-label="Color theme"
    >
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          role="radio"
          aria-checked={theme === opt.value}
          onClick={() => setTheme(opt.value)}
          className="relative rounded-md px-3 py-1.5 text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
        >
          {theme === opt.value && (
            <motion.span
              layoutId="theme-indicator"
              className="absolute inset-0 rounded-md bg-[var(--color-border)]"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              aria-hidden
            />
          )}
          <span className="relative z-10">{opt.label}</span>
        </button>
      ))}
    </div>
  );
}
