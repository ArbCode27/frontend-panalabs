"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark")
    setTheme(isDark ? "dark" : "light")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full bg-card/80 backdrop-blur-xl border-border hover:bg-card shadow-lg"
    >
      <motion.div initial={false} animate={{ rotate: theme === "dark" ? 180 : 0 }} transition={{ duration: 0.3 }}>
        {theme === "light" ? <Sun className="h-5 w-5 text-primary" /> : <Moon className="h-5 w-5 text-primary" />}
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
