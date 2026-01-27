"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BeyondCoding() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background rounded-lg border border-border p-5 space-y-3 h-full"
    >
      <h2 className="text-base font-bold text-foreground">
        Beyond Coding
      </h2>

      <div className="space-y-3 text-foreground/70 text-sm leading-relaxed">
        <p>
          When not writing code, I focus on learning about emerging technologies, minimalism, and startup culture.
        </p>

        <p>
          I share my knowledge through content creation and community building.
        </p>
      </div>
    </motion.div>
  );
}
