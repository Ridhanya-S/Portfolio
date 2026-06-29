"use client";

import { createContext, useContext, useState, useMemo, useCallback, ReactNode } from "react";

type Theme = "dark" | "light";

const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({
  theme: "dark",
  toggle: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

function getInitialTheme(): Theme {
  if (globalThis.window === undefined) return "dark";
  const stored = localStorage.getItem("theme") as Theme | null;
  if (stored) return stored;
  return globalThis.window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export default function ThemeProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      document.documentElement.dataset["theme"] = next;
      localStorage.setItem("theme", next);
      return next;
    });
  }, []);

  const value = useMemo(() => ({ theme, toggle }), [theme, toggle]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
