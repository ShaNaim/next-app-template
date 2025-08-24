import React from "react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
  return (
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
  );
}
