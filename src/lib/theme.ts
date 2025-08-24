export const themes = {
  light: "light",
  dark: "dark",
  system: "system",
} as const;

export type Theme = keyof typeof themes;

export const defaultTheme: Theme = "system";

// Theme configuration for next-themes
export const themeConfig = {
  attribute: "class",
  defaultTheme: defaultTheme,
  enableSystem: true,
  themes: Object.values(themes),
  storageKey: "theme",
} as const;

// CSS custom properties for themes
export const themeColors = {
  light: {
    background: "hsl(0 0% 100%)",
    foreground: "hsl(240 10% 3.9%)",
    card: "hsl(0 0% 100%)",
    "card-foreground": "hsl(240 10% 3.9%)",
    popover: "hsl(0 0% 100%)",
    "popover-foreground": "hsl(240 10% 3.9%)",
    primary: "hsl(240 5.9% 10%)",
    "primary-foreground": "hsl(0 0% 98%)",
    secondary: "hsl(240 4.8% 95.9%)",
    "secondary-foreground": "hsl(240 5.9% 10%)",
    muted: "hsl(240 4.8% 95.9%)",
    "muted-foreground": "hsl(240 3.8% 46.1%)",
    accent: "hsl(240 4.8% 95.9%)",
    "accent-foreground": "hsl(240 5.9% 10%)",
    destructive: "hsl(0 84.2% 60.2%)",
    "destructive-foreground": "hsl(0 0% 98%)",
    border: "hsl(240 5.9% 90%)",
    input: "hsl(240 5.9% 90%)",
    ring: "hsl(240 5.9% 10%)",
  },
  dark: {
    background: "hsl(240 10% 3.9%)",
    foreground: "hsl(0 0% 98%)",
    card: "hsl(240 10% 3.9%)",
    "card-foreground": "hsl(0 0% 98%)",
    popover: "hsl(240 10% 3.9%)",
    "popover-foreground": "hsl(0 0% 98%)",
    primary: "hsl(0 0% 98%)",
    "primary-foreground": "hsl(240 5.9% 10%)",
    secondary: "hsl(240 3.7% 15.9%)",
    "secondary-foreground": "hsl(0 0% 98%)",
    muted: "hsl(240 3.7% 15.9%)",
    "muted-foreground": "hsl(240 5% 64.9%)",
    accent: "hsl(240 3.7% 15.9%)",
    "accent-foreground": "hsl(0 0% 98%)",
    destructive: "hsl(0 62.8% 30.6%)",
    "destructive-foreground": "hsl(0 0% 98%)",
    border: "hsl(240 3.7% 15.9%)",
    input: "hsl(240 3.7% 15.9%)",
    ring: "hsl(240 4.9% 83.9%)",
  },
} as const;

// Helper function to get theme-specific values
export function getThemeValue<T>(theme: "light" | "dark", lightValue: T, darkValue: T): T {
  return theme === "dark" ? darkValue : lightValue;
}

// Predefined theme combinations for common use cases
export const themePresets = {
  blue: {
    light: {
      primary: "hsl(221.2 83.2% 53.3%)",
      "primary-foreground": "hsl(210 40% 98%)",
    },
    dark: {
      primary: "hsl(217.2 91.2% 59.8%)",
      "primary-foreground": "hsl(222.2 84% 4.9%)",
    },
  },
  green: {
    light: {
      primary: "hsl(142.1 76.2% 36.3%)",
      "primary-foreground": "hsl(355.7 100% 97.3%)",
    },
    dark: {
      primary: "hsl(142.1 70.6% 45.3%)",
      "primary-foreground": "hsl(144.9 80.4% 10%)",
    },
  },
  purple: {
    light: {
      primary: "hsl(262.1 83.3% 57.8%)",
      "primary-foreground": "hsl(210 40% 98%)",
    },
    dark: {
      primary: "hsl(263.4 70% 50.4%)",
      "primary-foreground": "hsl(256 100% 6%)",
    },
  },
} as const;

export type ThemePreset = keyof typeof themePresets;
