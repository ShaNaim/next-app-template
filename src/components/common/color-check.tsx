"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ColorPaletteDemo() {
  const colorGroups = [
    {
      title: "Primary & Secondary",
      colors: [
        { name: "Primary", class: "bg-primary", textClass: "text-primary-foreground" },
        { name: "Secondary", class: "bg-secondary", textClass: "text-secondary-foreground" },
        { name: "Accent", class: "bg-accent", textClass: "text-accent-foreground" },
        { name: "Muted", class: "bg-muted", textClass: "text-muted-foreground" },
      ],
    },
    {
      title: "Background Variants",
      colors: [
        { name: "Background", class: "bg-background border", textClass: "text-foreground" },
        {
          name: "Background 2",
          class: "bg-background-secondary border",
          textClass: "text-foreground",
        },
        { name: "Background 3", class: "bg-background-tertiary", textClass: "text-foreground" },
        { name: "Card", class: "bg-card border", textClass: "text-card-foreground" },
      ],
    },
    {
      title: "Semantic Colors",
      colors: [
        { name: "Info", class: "bg-info", textClass: "text-info-foreground" },
        { name: "Success", class: "bg-success", textClass: "text-success-foreground" },
        { name: "Warning", class: "bg-warning", textClass: "text-warning-foreground" },
        { name: "Error", class: "bg-error", textClass: "text-error-foreground" },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold">OKLCH Color Palette</h2>
        <p className="text-muted-foreground">DaisyUI-inspired colors with perfect contrast</p>
      </div>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
        {colorGroups.map((group) => (
          <Card key={group.title}>
            <CardHeader>
              <CardTitle className="text-lg">{group.title}</CardTitle>
              <CardDescription>Colors that adapt to light/dark themes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {group.colors.map((color) => (
                <div
                  key={color.name}
                  className={`${color.class} ${color.textClass} flex items-center justify-between rounded-lg p-4`}
                >
                  <span className="font-medium">{color.name}</span>
                  <span className="text-sm opacity-75">OKLCH</span>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Interactive Buttons Demo */}
      <Card>
        <CardHeader>
          <CardTitle>Interactive Components</CardTitle>
          <CardDescription>See how the new colors work with interactive elements</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Button variant="default">Primary Button</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </div>

          <div className="flex flex-wrap gap-2">
            <div className="bg-info text-info-foreground rounded px-3 py-1 text-sm">Info Badge</div>
            <div className="bg-success text-success-foreground rounded px-3 py-1 text-sm">
              Success Badge
            </div>
            <div className="bg-warning text-warning-foreground rounded px-3 py-1 text-sm">
              Warning Badge
            </div>
            <div className="bg-error text-error-foreground rounded px-3 py-1 text-sm">
              Error Badge
            </div>
          </div>

          <div className="space-y-2">
            <div className="bg-background-secondary rounded border p-3">
              Background Secondary Surface
            </div>
            <div className="bg-background-tertiary rounded p-3">Background Tertiary Surface</div>
          </div>
        </CardContent>
      </Card>

      {/* Color Contrast Demo */}
      <Card>
        <CardHeader>
          <CardTitle>Color Contrast Showcase</CardTitle>
          <CardDescription>
            OKLCH ensures perfect readability in both light and dark modes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <h4 className="font-medium">Text on Colored Backgrounds</h4>
              <div className="bg-primary text-primary-foreground rounded p-3">
                Primary background with high contrast text
              </div>
              <div className="bg-secondary text-secondary-foreground rounded p-3">
                Secondary background maintains readability
              </div>
              <div className="bg-accent text-accent-foreground rounded p-3">
                Accent color with proper contrast ratio
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">Status Indicators</h4>
              <div className="bg-success text-success-foreground flex items-center gap-2 rounded p-3">
                <div className="bg-success-foreground h-2 w-2 rounded-full"></div>
                Operation completed successfully
              </div>
              <div className="bg-warning text-warning-foreground flex items-center gap-2 rounded p-3">
                <div className="bg-warning-foreground h-2 w-2 rounded-full"></div>
                Warning: Please review changes
              </div>
              <div className="bg-error text-error-foreground flex items-center gap-2 rounded p-3">
                <div className="bg-error-foreground h-2 w-2 rounded-full"></div>
                Error: Action failed to complete
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Color Values Reference */}
      <Card>
        <CardHeader>
          <CardTitle>OKLCH Values Reference</CardTitle>
          <CardDescription>Color values used in this theme system</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 font-mono text-sm md:grid-cols-2">
            <div>
              <h4 className="mb-2 text-base font-medium">Light Theme</h4>
              <div className="space-y-1 text-xs">
                <div>
                  Primary: <span className="text-muted-foreground">oklch(52% 0.105 223.128)</span>
                </div>
                <div>
                  Secondary: <span className="text-muted-foreground">oklch(54% 0.281 293.009)</span>
                </div>
                <div>
                  Background:{" "}
                  <span className="text-muted-foreground">oklch(98% 0.002 247.839)</span>
                </div>
                <div>
                  Foreground:{" "}
                  <span className="text-muted-foreground">oklch(27% 0.041 260.031)</span>
                </div>
                <div>
                  Success: <span className="text-muted-foreground">oklch(72% 0.219 149.579)</span>
                </div>
                <div>
                  Warning: <span className="text-muted-foreground">oklch(75% 0.183 55.934)</span>
                </div>
                <div>
                  Error: <span className="text-muted-foreground">oklch(57% 0.245 27.325)</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="mb-2 text-base font-medium">Dark Theme</h4>
              <div className="space-y-1 text-xs">
                <div>
                  Primary: <span className="text-muted-foreground">oklch(52% 0.105 223.128)</span>
                </div>
                <div>
                  Secondary: <span className="text-muted-foreground">oklch(54% 0.281 293.009)</span>
                </div>
                <div>
                  Background:{" "}
                  <span className="text-muted-foreground">oklch(13% 0.028 261.692)</span>
                </div>
                <div>
                  Foreground:{" "}
                  <span className="text-muted-foreground">oklch(96% 0.007 247.896)</span>
                </div>
                <div>
                  Success: <span className="text-muted-foreground">oklch(72% 0.219 149.579)</span>
                </div>
                <div>
                  Warning: <span className="text-muted-foreground">oklch(75% 0.183 55.934)</span>
                </div>
                <div>
                  Error: <span className="text-muted-foreground">oklch(70% 0.191 22.216)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted mt-4 rounded p-3 text-xs">
            <strong>OKLCH Benefits:</strong> Better perceptual uniformity, wider gamut support,
            predictable lightness values, and consistent hue across different lightness levels.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
