"use client";

import * as React from "react";
import { useTheme as useNextTheme } from "next-themes";

export function useTheme() {
  const { theme, setTheme, resolvedTheme, themes, systemTheme } = useNextTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return {
    theme: mounted ? theme : undefined,
    setTheme,
    resolvedTheme: mounted ? resolvedTheme : undefined,
    themes,
    systemTheme: mounted ? systemTheme : undefined,
    mounted,
    // Helper functions
    isDark: mounted ? resolvedTheme === "dark" : false,
    isLight: mounted ? resolvedTheme === "light" : false,
    isSystem: mounted ? theme === "system" : false,
    toggleTheme: () => {
      if (mounted) {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }
    },
  };
}

// Hook for getting theme-aware values safely
export function useThemeValue<T>(lightValue: T, darkValue: T, fallbackValue?: T): T {
  const { resolvedTheme, mounted } = useTheme();

  if (!mounted) {
    return fallbackValue ?? lightValue; // Return fallback or light value during SSR
  }

  return resolvedTheme === "dark" ? darkValue : lightValue;
}

// Hook for theme-aware classes safely
export function useThemeClass(
  lightClass: string,
  darkClass: string,
  fallbackClass?: string
): string {
  return useThemeValue(lightClass, darkClass, fallbackClass);
}

// Hook for conditional rendering based on theme (SSR-safe)
export function useThemeRenderer() {
  const { mounted, isDark, isLight } = useTheme();

  return {
    mounted,
    isDark: mounted ? isDark : false,
    isLight: mounted ? isLight : false,
    // Render different content based on theme, but only after mounting
    renderWhenMounted: <T>(lightContent: T, darkContent: T, fallback?: T) => {
      if (!mounted) {
        return fallback ?? null;
      }
      return isDark ? darkContent : lightContent;
    },
  };
}
