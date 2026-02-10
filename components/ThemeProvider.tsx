"use client";

import * as React from "react";

/*
 * Theme context: allows reading and setting theme from anywhere.
 * We inject a script in layout to prevent flash; the actual class
 * toggling is done here so we can use system preference + manual override.
 */
type Theme = "light" | "dark" | "system";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark" | null;
};

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "system",
  enableSystem = true,
  disableTransitionOnChange = false,
}: {
  children: React.ReactNode;
  attribute?: string;
  defaultTheme?: Theme;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}) {
  const [theme, setThemeState] = React.useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = React.useState<"light" | "dark" | null>(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("portfolio-theme") as Theme | null;
    if (stored && (stored === "light" || stored === "dark" || (enableSystem && stored === "system"))) {
      setThemeState(stored);
    }
  }, [enableSystem]);

  React.useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    let resolved: "light" | "dark" = "light";
    if (theme === "system" && enableSystem && typeof window !== "undefined") {
      resolved = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    } else if (theme === "dark" || theme === "light") {
      resolved = theme;
    }
    setResolvedTheme(resolved);
    root.classList.remove("light", "dark");
    root.classList.add(resolved);
    if (disableTransitionOnChange) {
      root.style.setProperty("transition", "none");
      const id = requestAnimationFrame(() => {
        requestAnimationFrame(() => root.style.removeProperty("transition"));
      });
      return () => cancelAnimationFrame(id);
    }
  }, [theme, mounted, enableSystem, disableTransitionOnChange]);

  const setTheme = React.useCallback((next: Theme) => {
    setThemeState(next);
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio-theme", next);
    }
  }, []);

  const value: ThemeContextValue = { theme, setTheme, resolvedTheme };
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
