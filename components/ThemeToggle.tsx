// components/theme-toggle.tsx
"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

import { useEffect, useState } from "react"
import { Toggle } from "./ui/toggle"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, []);

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null // Avoid hydration mismatch

  return (
    <Toggle
      onClick={handleClick}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[2rem] w-[2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Toggle>
  )
}
