// components/theme-toggle.tsx
"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { useEffect, useState } from "react";
import { Toggle } from "./ui/toggle";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";
  const handleClick = () => {
    setTheme(isDark ? "light" : "dark");
  };

  if (!mounted) return null; // Avoid hydration mismatch

  return (
    <Toggle onClick={handleClick}>
      <Sun className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute size-8 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Toggle>
  );
}
