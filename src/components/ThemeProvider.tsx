"use client";

import { createContext, useState, useEffect, type ReactNode } from "react";

export type ThemePath = "routine" | "relax" | "athlete";

interface ThemeContextType {
  activePath: ThemePath | null;
  setActivePath: (path: ThemePath) => void;
  hasChosen: boolean;
}

export const ThemeContext = createContext<ThemeContextType>({
  activePath: null,
  setActivePath: () => {},
  hasChosen: false,
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [activePath, setActivePath] = useState<ThemePath | null>(null);
  const [hasChosen, setHasChosen] = useState(false);

  // URL param routing: ?path=routine|relax|athlete → skip PathSelector
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pathParam = params.get("path");
    if (pathParam && ["routine", "relax", "athlete"].includes(pathParam)) {
      setActivePath(pathParam as ThemePath);
      setHasChosen(true);
    }
  }, []);

  const handleSetPath = (path: ThemePath) => {
    setActivePath(path);
    setHasChosen(true);
    // Scroll to top on path selection
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <ThemeContext.Provider
      value={{ activePath, setActivePath: handleSetPath, hasChosen }}
    >
      <div
        data-theme={activePath || "routine"}
        className="min-h-screen"
        style={{ backgroundColor: "var(--theme-bg)", color: "var(--theme-text)" }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
