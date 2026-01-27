"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { scrollToSection } from "@/lib/utils";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/ashdejesus",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/yourusername",
    },
  ];

  return (
    <footer className="bg-white/5 border-t border-white/10 py-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm"
          >
            © {currentYear} Nichoe Ashley De Jesus. All rights reserved.
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-2xl text-gray-400 hover:text-primary transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Back to Top */}
          <motion.button
            onClick={() => scrollToSection("home")}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, y: -5 }}
            className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors cursor-pointer"
          >
            <span className="text-sm">Back to Top</span>
            <FaArrowUp className="text-lg" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
