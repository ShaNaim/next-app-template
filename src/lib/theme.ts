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

export const themeColors = {
  light: {
    // Base colors (backgrounds and surfaces)
    background: "oklch(98% 0.002 247.839)", // base-100
    "background-secondary": "oklch(98% 0 0)", // base-200
    "background-tertiary": "oklch(70% 0.022 261.325)", // base-300
    foreground: "oklch(27% 0.041 260.031)", // base-content

    // Card and surface colors
    card: "oklch(98% 0.002 247.839)",
    "card-foreground": "oklch(27% 0.041 260.031)",
    popover: "oklch(98% 0.002 247.839)",
    "popover-foreground": "oklch(27% 0.041 260.031)",

    // Primary brand colors
    primary: "oklch(52% 0.105 223.128)",
    "primary-foreground": "oklch(100% 0 0)",

    // Secondary colors
    secondary: "oklch(54% 0.281 293.009)",
    "secondary-foreground": "oklch(28% 0.109 3.907)",

    // Muted/subtle colors
    muted: "oklch(98% 0 0)", // base-200
    "muted-foreground": "oklch(70% 0.022 261.325)", // base-300

    // Accent colors
    accent: "oklch(92% 0.013 255.508)",
    "accent-foreground": "oklch(28% 0.141 291.089)",

    // State colors
    destructive: "oklch(57% 0.245 27.325)", // error
    "destructive-foreground": "oklch(25% 0.092 26.042)", // error-content

    // Border and input colors
    border: "oklch(70% 0.022 261.325)", // base-300
    input: "oklch(70% 0.022 261.325)",
    ring: "oklch(52% 0.105 223.128)", // primary

    // Semantic colors
    info: "oklch(78% 0.154 211.53)",
    "info-foreground": "oklch(30% 0.056 229.695)",
    success: "oklch(72% 0.219 149.579)",
    "success-foreground": "oklch(26% 0.051 172.552)",
    warning: "oklch(75% 0.183 55.934)",
    "warning-foreground": "oklch(26% 0.079 36.259)",
  },
  dark: {
    // Base colors (backgrounds and surfaces)
    background: "oklch(13% 0.028 261.692)", // base-100
    "background-secondary": "oklch(13% 0.028 261.692)", // base-200
    "background-tertiary": "oklch(27% 0.033 256.848)", // base-300
    foreground: "oklch(96% 0.007 247.896)", // base-content

    // Card and surface colors
    card: "oklch(13% 0.028 261.692)",
    "card-foreground": "oklch(96% 0.007 247.896)",
    popover: "oklch(13% 0.028 261.692)",
    "popover-foreground": "oklch(96% 0.007 247.896)",

    // Primary brand colors
    primary: "oklch(52% 0.105 223.128)",
    "primary-foreground": "oklch(100% 0 0)",

    // Secondary colors
    secondary: "oklch(54% 0.281 293.009)",
    "secondary-foreground": "oklch(28% 0.109 3.907)",

    // Muted/subtle colors
    muted: "oklch(27% 0.033 256.848)", // base-300
    "muted-foreground": "oklch(96% 0.007 247.896)",

    // Accent colors
    accent: "oklch(92% 0.013 255.508)",
    "accent-foreground": "oklch(28% 0.141 291.089)",

    // State colors
    destructive: "oklch(70% 0.191 22.216)", // error (darker version)
    "destructive-foreground": "oklch(25% 0.092 26.042)", // error-content

    // Border and input colors
    border: "oklch(27% 0.033 256.848)", // base-300
    input: "oklch(27% 0.033 256.848)",
    ring: "oklch(52% 0.105 223.128)", // primary

    // Semantic colors
    info: "oklch(78% 0.154 211.53)",
    "info-foreground": "oklch(30% 0.056 229.695)",
    success: "oklch(72% 0.219 149.579)",
    "success-foreground": "oklch(26% 0.051 172.552)",
    warning: "oklch(75% 0.183 55.934)",
    "warning-foreground": "oklch(26% 0.079 36.259)",
  },
} as const;

// Helper function to get theme-specific values
export function getThemeValue<T>(theme: "light" | "dark", lightValue: T, darkValue: T): T {
  return theme === "dark" ? darkValue : lightValue;
}

// DaisyUI-inspired design tokens
export const designTokens = {
  radius: {
    selector: "0.5rem",
    field: "0.5rem",
    box: "1rem",
    sm: "calc(var(--radius) - 4px)",
    md: "calc(var(--radius) - 2px)",
    lg: "var(--radius)",
    xl: "calc(var(--radius) + 4px)",
  },
  size: {
    selector: "0.25rem",
    field: "0.25rem",
  },
  border: {
    width: "1px",
  },
  effects: {
    depth: 1,
    noise: 1,
  },
} as const;

// Extended theme presets with DaisyUI-inspired colors
export const themePresets = {
  default: {
    light: themeColors.light,
    dark: themeColors.dark,
  },
  blue: {
    light: {
      ...themeColors.light,
      primary: "oklch(58% 0.147 231.171)",
      "primary-foreground": "oklch(100% 0 0)",
    },
    dark: {
      ...themeColors.dark,
      primary: "oklch(65% 0.157 238.395)",
      "primary-foreground": "oklch(100% 0 0)",
    },
  },
  green: {
    light: {
      ...themeColors.light,
      primary: "oklch(58% 0.168 142.495)",
      "primary-foreground": "oklch(100% 0 0)",
    },
    dark: {
      ...themeColors.dark,
      primary: "oklch(65% 0.178 149.579)",
      "primary-foreground": "oklch(100% 0 0)",
    },
  },
  purple: {
    light: {
      ...themeColors.light,
      primary: "oklch(58% 0.234 293.009)",
      "primary-foreground": "oklch(100% 0 0)",
    },
    dark: {
      ...themeColors.dark,
      primary: "oklch(65% 0.244 300.235)",
      "primary-foreground": "oklch(100% 0 0)",
    },
  },
} as const;

export type ThemePreset = keyof typeof themePresets;
