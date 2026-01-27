"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SectionHeading from "./ui/SectionHeading";
import Card from "./ui/Card";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  github?: string;
  demo?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Indak Dangal Hub",
      description:
        "A web-based scheduling and availability management system for a university dance organization. It allows members to submit academic schedules while officers analyze availability, create events, and coordinate rehearsals.",
      techStack: ["Laravel", "MySQL", "Tailwind CSS"],
      features: [
        "Schedule submission and availability tracking",
        "Event creation and management",
        "Rehearsal coordination tools",
        "Officer analytics dashboard",
      ],
    },
    {
      title: "SafeRide",
      description:
        "A system that collects GPS and mobile sensor data to help identify unsafe driving behaviors in public transportation, combined with anonymous commuter incident reports.",
      techStack: ["Firebase", "Cloud Firestore", "JavaScript"],
      features: [
        "GPS and sensor data collection",
        "Unsafe driving behavior detection",
        "Anonymous incident reporting",
        "Real-time data analysis",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading
          title="Featured Projects"
          subtitle="Some of the projects I've built"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full group">
                <div className="flex flex-col h-full">
                  {/* Project Header */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-3 text-gradient">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6 flex-grow">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">
                      Key Features:
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-300">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <span className="text-accent mr-2">▹</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 mt-auto">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        <FaGithub className="text-xl" />
                        <span className="text-sm">View Code</span>
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        <FaExternalLinkAlt className="text-lg" />
                        <span className="text-sm">Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">
            Want to see more of my work?
          </p>
          <motion.a
            href="https://github.com/ashdejesus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-full border border-primary/30 text-primary transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <FaGithub className="text-xl" />
            <span>Visit My GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
