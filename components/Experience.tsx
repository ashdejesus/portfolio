"use client";

import React from "react";
import { motion } from "framer-motion";

interface ExperienceItem {
  title: string;
  organization: string;
  year: string;
  type: "work" | "education" | "achievement";
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      title: "Computer Science Student",
      organization: "University Name",
      year: "2023",
      type: "education",
    },
    {
      title: "Web Development Intern",
      organization: "Tech Company",
      year: "2024",
      type: "work",
    },
    {
      title: "Hackathon Participant",
      organization: "Various Events",
      year: "2024",
      type: "achievement",
    },
    {
      title: "Dean's Lister",
      organization: "Academic Achievement",
      year: "2024",
      type: "achievement",
    },
    {
      title: "Hello World! 👋",
      organization: "Wrote my first line of code",
      year: "2020",
      type: "achievement",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Experience</h2>
        </motion.div>

        {/* Experience Items */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 pb-8 border-b border-gray-200 last:border-b-0"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {exp.title}
                </h3>
                <p className="text-gray-600">{exp.organization}</p>
              </div>
              <span className="text-blue-600 font-medium text-sm md:text-base md:ml-4">
                {exp.year}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
