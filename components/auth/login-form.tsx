"use client";
import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Compass, UserPlus, Mail, Lock } from "lucide-react";
import { useRouter } from "next/navigation";

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
  hasError: boolean;
}

export function LoginForm({ onLogin, hasError }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const route = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative"
    >
      <motion.div
        animate={hasError ? { x: [-10, 10, -10, 10, 0] } : {}}
        transition={{ duration: 0.4 }}
        className="bg-card/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-border p-8"
      >
        {hasError && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-4 p-3 bg-destructive/10 border border-destructive/20 rounded-lg flex items-start gap-2"
          >
            <span className="text-2xl">🦜</span>
            <p className="text-sm text-destructive-foreground">
              <strong>Panita dice:</strong> ¡Revisa tus datos, explorador!
            </p>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div variants={itemVariants} className="space-y-2">
            <Label
              htmlFor="email"
              className="text-foreground flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-primary" />
              Correo electrónico
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="explorador@panalabs.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-background/50 border-border focus:border-primary transition-colors"
              required
            />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-2">
            <Label
              htmlFor="password"
              className="text-foreground flex items-center gap-2"
            >
              <Lock className="w-4 h-4 text-primary" />
              Contraseña
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-background/50 border-border focus:border-primary transition-colors"
              required
            />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-3">
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              size="lg"
            >
              <Compass className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-500" />
              Entrar a mi aventura
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={() => route.push("/register")}
              className="w-full border-2 border-primary/30 hover:border-primary hover:bg-primary/5 text-foreground font-semibold transition-all duration-300 group relative overflow-hidden bg-transparent"
              size="lg"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <UserPlus className="w-5 h-5 mr-2 relative z-10" />
              <span className="relative z-10">Soy nuevo, quiero unirme</span>
            </Button>
          </motion.div>
        </form>

        <motion.div variants={itemVariants} className="mt-6 text-center">
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            ¿Olvidaste tu contraseña?
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
