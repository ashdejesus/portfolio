"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me better"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Profile Image Placeholder */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-primary to-secondary p-1">
                <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👨‍💻</div>
                    <p className="text-gray-400 text-sm">Nichoe Ashley De Jesus</p>
                  </div>
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 -z-10 blur-2xl bg-primary/30 rounded-2xl"></div>
            </div>
          </motion.div>

          {/* Bio Text */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              I am a <span className="text-primary font-semibold">third-year Computer Science student</span> with 
              a strong interest in full-stack web development and applied system design.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I build web applications that focus on <span className="text-secondary font-semibold">clean interfaces</span>, 
              practical functionality, and <span className="text-accent font-semibold">scalable backend logic</span>. 
              Through academic projects and independent development, I have gained hands-on experience with modern 
              web technologies, databases, and cloud platforms.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I am eager to continue learning, improving my technical skills, and applying them to 
              real-world problems. My goal is to create impactful solutions that make a difference.
            </p>

            {/* Key strengths */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                "Problem Solving",
                "Full-Stack Development",
                "Database Design",
                "Cloud Integration"
              ].map((strength, index) => (
                <motion.div
                  key={strength}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 rounded-lg p-3 border border-primary/30 text-center"
                >
                  <span className="text-sm text-gray-300">{strength}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
