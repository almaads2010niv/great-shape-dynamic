"use client";

import { useContext } from "react";
import { ThemeContext } from "@/components/ThemeProvider";
import { themeContent } from "@/config/themes";
import type { ThemePath } from "@/components/ThemeProvider";

export function useTheme() {
  const context = useContext(ThemeContext);
  const content = context.activePath
    ? themeContent[context.activePath]
    : themeContent.routine;

  return {
    ...context,
    content,
  };
}

export type { ThemePath };
