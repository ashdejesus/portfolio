"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiCheckBadge } from "react-icons/hi2";
import { scrollToSection } from "@/lib/utils";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-start bg-white rounded-lg border border-gray-200 p-8">
      {/* Profile Photo - Left Side */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex-shrink-0"
      >
        <div className="w-48 h-56 rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
          <div className="text-9xl">👨‍💻</div>
        </div>
      </motion.div>

      {/* Content - Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 space-y-4"
      >
        {/* Name with Badge */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-4xl font-bold text-gray-900">Nichoe Ashley De Jesus</h1>
            <HiCheckBadge className="text-blue-600 text-3xl flex-shrink-0" />
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-gray-600 mb-3">
            <FaMapMarkerAlt className="text-sm" />
            <span className="text-sm">Metro Manila, Philippines</span>
          </div>

          {/* Title */}
          <p className="text-lg text-gray-700 font-medium">
            Software Engineer • Full-Stack Developer
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 pt-2">
          <button
            onClick={() => scrollToSection("contact")}
            className="flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            📅 Schedule a Call
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors border border-gray-300"
          >
            ✉️ Send Email
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors border border-gray-300"
          >
            👥 Visit my community and join the discussion here!
          </button>
        </div>

        {/* Achievement Badge */}
        <div className="pt-4">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 px-4 py-2 rounded-lg text-sm font-medium border border-blue-300">
            🏆 Dean&apos;s Lister 2024
          </div>
        </div>
      </motion.div>
    </div>
  );
}
