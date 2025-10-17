"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FeedbackMessage } from "./feedback-message";
import { AnimatedBackground } from "../animated-background";
import { ThemeToggle } from "../theme-toggle";
import { AnimatedLogo } from "./animated-logo";
import { RegisterForm } from "./RegisterForm";

export default function RegisterPage() {
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [registerError, setRegisterError] = useState(false);

  const handleRegister = (
    firstname: string,
    lastname: string,
    nickname: string,
    email: string,
    password: string
  ) => {
    // Simulate registration validation
    if (firstname && lastname && nickname && email && password) {
      setRegisterSuccess(true);
      setTimeout(() => {
        // Transition to main app would happen here
        console.log("Registration successful, transitioning to main app...");
      }, 2000);
    } else {
      setRegisterError(true);
      setTimeout(() => setRegisterError(false), 3000);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[oklch(0.98_0.01_85)] via-[oklch(0.96_0.02_75)] to-[oklch(0.94_0.03_195)] dark:from-[oklch(0.15_0.02_45)] dark:via-[oklch(0.18_0.02_55)] dark:to-[oklch(0.16_0.03_195)]">
      <AnimatedBackground />

      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-md"
        >
          <div className="relative">
            <AnimatedLogo />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 text-center"
            >
              <h1 className="text-3xl font-bold text-balance text-foreground mb-3">
                ¡Únete a la aventura!
              </h1>
              <p className="text-muted-foreground text-pretty leading-relaxed">
                Crea tu cuenta y comienza tu viaje en la edición de video.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8"
            >
              <RegisterForm
                onRegister={handleRegister}
                hasError={registerError}
              />
            </motion.div>

            <motion.footer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8 text-center text-sm text-muted-foreground"
            >
              Hecho con 💛 por PanaLabs · Curso de Edición de Video Nivel 1
            </motion.footer>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {registerSuccess && <FeedbackMessage type="success" />}
      </AnimatePresence>
    </div>
  );
}
