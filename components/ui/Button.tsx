"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
}

export default function Button({ 
  variant = "primary", 
  children, 
  className,
  ...props 
}: ButtonProps) {
  const baseStyles = "px-8 py-3 rounded-full font-semibold text-base transition-all duration-300 cursor-pointer border-2";
  
  const variants = {
    primary: "bg-primary border-primary text-background hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/50",
    secondary: "bg-secondary border-secondary text-background hover:bg-secondary/90 hover:shadow-lg hover:shadow-secondary/50",
    outline: "bg-transparent border-primary text-primary hover:bg-primary hover:text-background",
  };

  return (
    <motion.button
      className={cn(baseStyles, variants[variant], className)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
