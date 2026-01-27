"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg border border-gray-200 p-8"
    >
      <div className="max-w-2xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Get In Touch</h2>
        <p className="text-gray-700 mb-6">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out!
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:your.email@example.com"
            className="flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <FaEnvelope className="text-lg" />
            Email Me
          </a>
          
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors border border-gray-300"
          >
            <FaGithub className="text-lg" />
            GitHub
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors border border-gray-300"
          >
            <FaLinkedin className="text-lg" />
            LinkedIn
          </a>
        </div>
      </div>
    </motion.div>
  );
}
