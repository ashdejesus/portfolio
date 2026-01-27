"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg border border-gray-200 p-6 space-y-4"
    >
      <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
        <span className="text-2xl">📖</span> About
      </h2>

      <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
        <p>
          I&apos;m a Computer Science student passionate about building beautiful web applications with modern technologies. I specialize in full-stack development and love creating solutions that make a difference.
        </p>

        <p>
          I&apos;ve worked on various projects including web applications, mobile apps, and AI-powered solutions. My journey in tech has been filled with learning, building, and sharing knowledge with the community.
        </p>

        <p>
          Currently diving deeper into AI and modern web frameworks, focusing on creating intelligent applications and optimizing development workflows.
        </p>
      </div>
    </motion.div>
  );
}
