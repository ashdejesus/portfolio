"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const projectsData = [
  {
    title: "Indak Dangal Hub",
    description: "A web-based scheduling and availability management system for university dance organization",
    url: "https://example.com/indak"
  },
  {
    title: "SafeRide",
    description: "GPS and sensor data collection system for identifying unsafe driving behaviors",
    url: "https://example.com/saferide"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio showcasing projects and skills",
    url: "https://example.com/portfolio"
  },
  {
    title: "AI Learning Platform",
    description: "Interactive platform for learning AI concepts and building projects",
    url: "https://example.com/ai-platform"
  }
];

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg border border-gray-200 p-6 space-y-4"
    >
      <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
        <span className="text-2xl">💼</span> Recent Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {projectsData.map((project, idx) => (
          <motion.a
            key={idx}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            className="group p-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-blue-300 rounded-lg transition-all"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm">
                {project.title}
              </h3>
              <FaExternalLinkAlt className="text-gray-400 group-hover:text-blue-600 flex-shrink-0 transition-colors text-xs" />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {project.description}
            </p>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
