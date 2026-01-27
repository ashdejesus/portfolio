"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb
} from "react-icons/si";

const skillsData = {
  Frontend: [
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Tailwind CSS", icon: SiTailwindcss }
  ],
  Backend: [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb }
  ]
};

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg border border-gray-200 p-6 space-y-6"
    >
      <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
        <span className="text-2xl">⚙️</span> Tech Stack
      </h2>

      <div className="space-y-5">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg text-sm text-gray-800 transition-colors"
                  >
                    <IconComponent className="text-base" />
                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Achievement Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-5 text-white space-y-2">
        <div className="text-sm font-semibold">I&apos;M PART OF</div>
        <div className="text-3xl font-bold">PH<span className="text-yellow-300">/</span>100</div>
        <p className="text-xs opacity-90">
          PH100 is the annual list of the brightest minds under 30 in the Philippines
        </p>
      </div>

      {/* Experience */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
          <span>💼</span> Experience
        </h3>
        <div className="space-y-3">
          {[
            { title: "Computer Science Student", org: "University", year: "2023" },
            { title: "Web Development Intern", org: "Tech Company", year: "2024" },
            { title: "Dean&apos;s Lister", org: "Academic Achievement", year: "2024" }
          ].map((exp, idx) => (
            <div key={idx} className="flex items-start gap-3 pb-3 border-b border-gray-200 last:border-b-0">
              <span className="text-blue-600 text-xl flex-shrink-0">•</span>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 text-sm">{exp.title}</p>
                <p className="text-gray-600 text-xs">{exp.org}</p>
                <p className="text-blue-600 font-medium text-xs">{exp.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
