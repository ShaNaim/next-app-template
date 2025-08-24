import React from "react";

export default function Footer() {
  return (
    <footer className="mt-12 border-t py-6">
      <div className="text-muted-foreground container mx-auto px-4 text-center text-sm">
        <p>Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui</p>
        <p className="mt-1">Theme system powered by next-themes with SSR support</p>
      </div>
    </footer>
  );
}
