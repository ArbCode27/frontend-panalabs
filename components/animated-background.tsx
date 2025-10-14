"use client"

import { motion } from "framer-motion"
import { Film, Camera, Compass, Clapperboard, Video } from "lucide-react"

const floatingIcons = [
  { Icon: Film, delay: 0, duration: 20, x: "10%", y: "20%" },
  { Icon: Camera, delay: 2, duration: 25, x: "80%", y: "15%" },
  { Icon: Compass, delay: 4, duration: 22, x: "15%", y: "70%" },
  { Icon: Clapperboard, delay: 1, duration: 24, x: "85%", y: "75%" },
  { Icon: Video, delay: 3, duration: 23, x: "50%", y: "10%" },
  { Icon: Film, delay: 5, duration: 21, x: "70%", y: "50%" },
]

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
      />

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, delay, duration, x, y }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
            y: [0, -30, 0],
            rotate: [0, 360],
          }}
          transition={{
            delay,
            duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            left: x,
            top: y,
          }}
          className="text-primary/20 dark:text-primary/10"
        >
          <Icon className="w-12 h-12" />
        </motion.div>
      ))}

      {/* Particle effects */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          initial={{
            opacity: 0,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            opacity: [0, 0.5, 0],
            y: [null, Math.random() * -200],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
          }}
          className="absolute w-1 h-1 bg-accent rounded-full"
        />
      ))}
    </div>
  )
}
