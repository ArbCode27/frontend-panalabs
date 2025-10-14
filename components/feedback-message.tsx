"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface FeedbackMessageProps {
  type: "success" | "error"
}

export function FeedbackMessage({ type }: FeedbackMessageProps) {
  const [confetti, setConfetti] = useState<
    Array<{ id: number; x: number; y: number; rotation: number; color: string }>
  >([])

  useEffect(() => {
    if (type === "success") {
      const colors = ["#f59e0b", "#06b6d4", "#eab308", "#10b981"]
      const newConfetti = Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: -20,
        rotation: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)],
      }))
      setConfetti(newConfetti)
    }
  }, [type])

  if (type === "success") {
    return (
      <div className="fixed inset-0 pointer-events-none z-50">
        {confetti.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{
              x: particle.x,
              y: particle.y,
              rotate: particle.rotation,
              opacity: 1,
            }}
            animate={{
              y: window.innerHeight + 100,
              rotate: particle.rotation + 720,
              opacity: 0,
            }}
            transition={{
              duration: Math.random() * 2 + 2,
              ease: "easeIn",
            }}
            style={{
              position: "absolute",
              width: "10px",
              height: "10px",
              backgroundColor: particle.color,
              borderRadius: "2px",
            }}
          />
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-primary p-8 text-center"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 0.5, repeat: 3 }}
            className="text-6xl mb-4"
          >
            🎉
          </motion.div>
          <h3 className="text-2xl font-bold text-foreground mb-2">¡Bienvenido de vuelta!</h3>
          <p className="text-muted-foreground">Preparando tu aventura creativa...</p>
        </motion.div>
      </div>
    )
  }

  return null
}
