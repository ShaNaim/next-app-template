import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

import { env } from "@/lib/env";
import { ThemeProvider } from "@/components/provider/theme-provider";
import BaseLayout from "@/components/layout/base";
import { themeConfig } from "@/lib/theme";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: env.NEXT_PUBLIC_APP_NAME,
    template: `%s | ${env.NEXT_PUBLIC_APP_NAME}`,
  },
  description: "A comprehensive Next.js starter template with TypeScript, Tailwind CSS, and more",
  keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Starter Template"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: env.NEXT_PUBLIC_APP_URL,
    title: env.NEXT_PUBLIC_APP_NAME,
    description: "A comprehensive Next.js starter template",
    siteName: env.NEXT_PUBLIC_APP_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: env.NEXT_PUBLIC_APP_NAME,
    description: "A comprehensive Next.js starter template",
    creator: "@yourusername",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme by setting initial theme */}
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider {...themeConfig}>
          <BaseLayout>{children}</BaseLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
