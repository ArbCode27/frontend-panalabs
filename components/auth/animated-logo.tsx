"use client"

import { motion } from "framer-motion"
import { Film, Compass } from "lucide-react"

export function AnimatedLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center gap-4"
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          type: "spring",
          stiffness: 200,
        }}
        className="relative"
      >
        <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary via-accent to-secondary shadow-2xl">
          <Film className="w-10 h-10 text-primary-foreground" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute inset-0 rounded-full border-4 border-dashed border-primary-foreground/30"
          />
        </div>

        <motion.div
          initial={{ scale: 0, x: 20, y: -20 }}
          animate={{ scale: 1, x: 0, y: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
          className="absolute -top-2 -right-2"
        >
          <Compass className="w-8 h-8 text-accent drop-shadow-lg" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          PanaLabs
        </h2>
        <p className="text-sm text-muted-foreground mt-1">Tu aventura creativa</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
        className="absolute -left-12 top-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <div className="text-6xl">🦜</div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
