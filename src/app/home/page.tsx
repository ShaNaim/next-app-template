import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-bold">Next.js Starter</h1>
          </div>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-4xl space-y-8">
          {/* Hero Section */}
          <div className="space-y-4 text-center">
            <h1 className="text-foreground text-4xl font-bold">
              Welcome to Next.js Starter Template
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
              A comprehensive starter template with TypeScript, Tailwind CSS, shadcn/ui, and
              complete theme system with dark/light mode support.
            </p>
          </div>

          {/* Theme Demo Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Main Demo Card */}
            <Card>
              <CardHeader>
                <CardTitle>Get Started</CardTitle>
                <CardDescription>
                  Your project is set up with theme support and all modern tools!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <Button className="w-full">Get Started</Button>
              </CardContent>
            </Card>

            {/* Theme Features Card */}
            <Card>
              <CardHeader>
                <CardTitle>Theme Features</CardTitle>
                <CardDescription>Complete theme system with multiple options</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-muted-foreground text-sm">• Light & Dark modes</p>
                  <p className="text-muted-foreground text-sm">• System preference detection</p>
                  <p className="text-muted-foreground text-sm">• Persistent theme selection</p>
                  <p className="text-muted-foreground text-sm">• Custom theme hooks</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Light
                  </Button>
                  <Button variant="outline" size="sm">
                    Dark
                  </Button>
                  <Button variant="outline" size="sm">
                    System
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Color Palette Card */}
            <Card>
              <CardHeader>
                <CardTitle>Color Palette</CardTitle>
                <CardDescription>Theme-aware color system</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-4 gap-2">
                  <div className="bg-primary h-8 rounded" title="Primary" />
                  <div className="bg-secondary h-8 rounded" title="Secondary" />
                  <div className="bg-accent h-8 rounded" title="Accent" />
                  <div className="bg-muted h-8 rounded" title="Muted" />
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <div className="bg-card h-8 rounded border" title="Card" />
                  <div className="bg-popover h-8 rounded border" title="Popover" />
                  <div className="bg-destructive h-8 rounded" title="Destructive" />
                  <div className="bg-border h-8 rounded border-2" title="Border" />
                </div>
                <p className="text-muted-foreground text-xs">
                  All colors automatically adapt to light/dark theme
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Development Features */}
            <Card>
              <CardHeader>
                <CardTitle>Developer Experience</CardTitle>
                <CardDescription>Modern development tools and configurations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-sm">TypeScript with strict configuration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-sm">ESLint + Prettier + Husky</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-sm">Environment validation with Zod</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-sm">VS Code settings & extensions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-sm">Pre-commit hooks</span>
                </div>
              </CardContent>
            </Card>

            {/* UI/UX Features */}
            <Card>
              <CardHeader>
                <CardTitle>UI & Styling</CardTitle>
                <CardDescription>
                  Beautiful, accessible, and customizable components
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span className="text-sm">shadcn/ui component library</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span className="text-sm">Tailwind CSS v4 with design tokens</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span className="text-sm">Radix UI primitives</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span className="text-sm">Dark/Light theme system</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span className="text-sm">SSR-safe theme implementation</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interactive Demo Section */}
          <Card>
            <CardHeader>
              <CardTitle>Interactive Demo</CardTitle>
              <CardDescription>Try out the theme switching and form components</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="text-sm font-medium">Form Components</h4>
                  <div className="space-y-2">
                    <Label htmlFor="demo-name">Full Name</Label>
                    <Input id="demo-name" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="demo-email">Email Address</Label>
                    <Input id="demo-email" type="email" placeholder="john@example.com" />
                  </div>
                  <div className="flex gap-2">
                    <Button>Submit</Button>
                    <Button variant="outline">Cancel</Button>
                    <Button variant="destructive">Delete</Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-medium">Button Variants</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="default" size="sm">
                      Default
                    </Button>
                    <Button variant="secondary" size="sm">
                      Secondary
                    </Button>
                    <Button variant="outline" size="sm">
                      Outline
                    </Button>
                    <Button variant="ghost" size="sm">
                      Ghost
                    </Button>
                    <Button variant="link" size="sm">
                      Link
                    </Button>
                    <Button variant="destructive" size="sm">
                      Destructive
                    </Button>
                  </div>
                  <div className="pt-4">
                    <h5 className="mb-2 text-xs font-medium">Theme Controls</h5>
                    <div className="flex gap-2">
                      <ThemeToggle />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card>
            <CardHeader>
              <CardTitle>What&apos;s Next?</CardTitle>
              <CardDescription>
                Ready to build your application? Here are some next steps.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">📚 Add More Components</h4>
                  <p className="text-muted-foreground text-xs">
                    Use{" "}
                    <code className="bg-muted rounded px-1">npx shadcn@latest add [component]</code>{" "}
                    to add more UI components
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">🗃️ Add Database</h4>
                  <p className="text-muted-foreground text-xs">
                    Set up Prisma, Drizzle, or your preferred database solution
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">🔐 Add Authentication</h4>
                  <p className="text-muted-foreground text-xs">
                    Implement NextAuth.js or your preferred auth solution
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t py-6">
        <div className="text-muted-foreground container mx-auto px-4 text-center text-sm">
          <p>Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui</p>
          <p className="mt-1">Theme system powered by next-themes with SSR support</p>
        </div>
      </footer>
    </div>
  );
}
