# 🚀 Next.js Starter Template

A comprehensive, production-ready Next.js starter template with modern tooling,
advanced theming, and developer experience optimizations. Built with TypeScript,
Tailwind CSS, and shadcn/ui.

![Next.js](https://img.shields.io/badge/Next.js-15.5.0-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0+-06B6D4?logo=tailwindcss)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

### 🏗️ **Core Stack**

- **Next.js 15** with App Router and React 19
- **TypeScript** with strict configuration
- **Tailwind CSS v4** with design tokens
- **shadcn/ui** components built on Radix UI primitives

### 🎨 **Advanced Theme System**

- **OKLCH Color Space** - DaisyUI-inspired colors with perfect contrast
- **SSR-Safe Theming** - No hydration mismatches
- **Dark/Light/System** modes with smooth transitions
- **Theme Persistence** with localStorage
- **Custom Theme Hooks** for theme-aware components

### 🛠️ **Developer Experience**

- **ESLint + Prettier** - Consistent code formatting
- **Pre-commit Hooks** - Automated code quality checks
- **VS Code Configuration** - Optimized settings and extensions
- **Environment Validation** - Type-safe env variables with Zod
- **Path Aliases** - Clean imports with `@/` prefix

### 🎯 **Production Ready**

- **SEO Optimized** - Meta tags, OpenGraph, structured data
- **Performance** - Image optimization and bundle analysis
- **Accessibility** - WCAG compliant components
- **Type Safety** - End-to-end TypeScript coverage

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm 8+

### Installation

1. **Clone or download this template**

   ```bash
   git clone <repository-url>
   cd nextjs-starter-template
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:3000
   ```

## 📝 Available Scripts

| Script                 | Description                               |
| ---------------------- | ----------------------------------------- |
| `npm run dev`          | Start development server                  |
| `npm run build`        | Build for production                      |
| `npm run start`        | Start production server                   |
| `npm run lint`         | Run ESLint                                |
| `npm run lint:fix`     | Fix ESLint errors                         |
| `npm run format`       | Format code with Prettier                 |
| `npm run format:check` | Check code formatting                     |
| `npm run type-check`   | Run TypeScript type checking              |
| `npm run check-all`    | Run all checks (lint, format, type-check) |

## 🎨 Theme System

### OKLCH Color Advantages

- **Perceptual Uniformity** - Colors with same lightness appear equally bright
- **Wide Gamut Support** - Better colors on modern displays
- **Predictable Contrast** - Consistent accessibility across themes
- **Future Proof** - CSS standard for next-generation displays

### Theme Usage

```tsx
import { useTheme } from "@/hooks/use-theme";

function MyComponent() {
  const { theme, setTheme, isDark, toggleTheme } = useTheme();

  return (
    <div className="bg-background text-foreground">
      <button onClick={() => setTheme("dark")}>
        Switch to {isDark ? "light" : "dark"} mode
      </button>
    </div>
  );
}
```

### Available Colors

```css
/* Primary colors */
bg-primary text-primary-foreground
bg-secondary text-secondary-foreground
bg-accent text-accent-foreground

/* Background variants */
bg-background-secondary
bg-background-tertiary

/* Semantic colors */
bg-info text-info-foreground
bg-success text-success-foreground
bg-warning text-warning-foreground
bg-error text-error-foreground
```

## 🧩 Components

### Adding New Components

Use the shadcn/ui CLI to add new components:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
```

### Available Components

- ✅ Button with multiple variants
- ✅ Card with header, content, footer
- ✅ Input with proper styling
- ✅ Label with accessibility features
- ✅ Dropdown Menu for theme toggle
- ✅ Theme Toggle components

## 📁 Project Structure

```
src/
├── app/                       # Next.js App Router
│   ├── globals.css            # Global styles with OKLCH colors
│   ├── layout.tsx             # Root layout with theme provider
│   └── page.tsx               # Homepage with demos
├── components/
│   ├── ui/                    # shadcn/ui components
│   ├── provide /              # Custom Providers
|   |   └──theme-provider.tsx  # SSR-safe theme provider
│   ├── theme-toggle.tsx       # Theme switching components
│   └── common/
|       └──color-check.tsx     # Color showcase
├── hook/                      # Custom React hooks
│   └── use-theme.ts           # Theme management hook
├── lib/                       # Utilities and configurations
    ├── utils.ts               # Tailwind merge utilities
    ├── env.ts                 # Environment validation
    ├── theme.ts               # Theme configuration
    └── theme-utils.ts         # Theme utility functions

```

## 🔧 Configuration Files

| File                 | Purpose                    |
| -------------------- | -------------------------- |
| `next.config.ts`     | Next.js configuration      |
| `tailwind.config.js` | Tailwind CSS configuration |
| `tsconfig.json`      | TypeScript configuration   |
| `eslint.config.mjs`  | ESLint configuration       |
| `.prettierrc`        | Prettier formatting rules  |
| `components.json`    | shadcn/ui configuration    |

## 🌍 Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
# App Configuration
NEXT_PUBLIC_APP_NAME="Your App Name"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Database (when needed)
# DATABASE_URL="your-database-url"

# Authentication (when needed)
# NEXTAUTH_SECRET="your-secret"
# NEXTAUTH_URL="http://localhost:3000"
```

All environment variables are validated with Zod schemas for type safety.

## 🎯 Customization

### Changing Colors

1. **Update theme configuration** in `src/lib/theme.ts`
2. **Modify CSS variables** in `src/app/globals.css`
3. **Use theme utilities** in `src/lib/theme-utils.ts`

### Adding New Themes

```typescript
// In src/lib/theme.ts
export const themePresets = {
  default: {
    /* existing colors */
  },
  myTheme: {
    light: {
      primary: "oklch(60% 0.15 240)", // Custom blue
      // ... other colors
    },
    dark: {
      primary: "oklch(70% 0.15 240)", // Lighter for dark mode
      // ... other colors
    },
  },
};
```

## 📦 Adding Features

### Database Integration

```bash
# Prisma
npm install prisma @prisma/client
npx prisma init

# Drizzle
npm install drizzle-orm
```

### Authentication

```bash
# NextAuth.js
npm install next-auth
```

### Form Handling

```bash
# React Hook Form with Zod
npm install react-hook-form @hookform/resolvers zod
```

### State Management

```bash
# Zustand (recommended)
npm install zustand

# React Query (for server state)
npm install @tanstack/react-query
```

## 🚢 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

- **Netlify** - Works out of the box
- **Railway** - Add `railway.json` configuration
- **Docker** - Add `Dockerfile` for containerization

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file
for details.

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing framework
- **shadcn** - For the beautiful component library
- **Tailwind CSS** - For the utility-first CSS framework
- **Radix UI** - For accessible component primitives
- **DaisyUI** - For color system inspiration

## 🆘 Support

- 📖 [Documentation](https://nextjs.org/docs)
- 💬 [GitHub Discussions](https://github.com/vercel/next.js/discussions)
- 🐛 [Report Issues](https://github.com/your-username/nextjs-starter/issues)

---

                         **Happy coding!**
