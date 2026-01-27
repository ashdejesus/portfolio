"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiLaravel,
  SiPhp,
  SiFirebase,
  SiSupabase,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiVercel,
} from "react-icons/si";
import { FaDatabase, FaCloud, FaCode } from "react-icons/fa";
import SectionHeading from "./ui/SectionHeading";
import Card from "./ui/Card";

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
}

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      icon: <FaCode className="text-2xl" />,
      skills: [
        { name: "HTML", icon: <SiHtml5 />, color: "text-orange-500" },
        { name: "CSS", icon: <SiCss3 />, color: "text-blue-500" },
        { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
      ] as Skill[],
    },
    {
      category: "Backend",
      icon: <FaCloud className="text-2xl" />,
      skills: [
        { name: "Laravel", icon: <SiLaravel />, color: "text-red-500" },
        { name: "PHP", icon: <SiPhp />, color: "text-indigo-400" },
        { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-500" },
        { name: "Supabase", icon: <SiSupabase />, color: "text-green-500" },
      ] as Skill[],
    },
    {
      category: "Databases",
      icon: <FaDatabase className="text-2xl" />,
      skills: [
        { name: "MySQL", icon: <SiMysql />, color: "text-blue-400" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-600" },
        { name: "Cloud Firestore", icon: <SiFirebase />, color: "text-orange-400" },
      ] as Skill[],
    },
    {
      category: "Tools & Platforms",
      icon: <FaCode className="text-2xl" />,
      skills: [
        { name: "Git", icon: <SiGit />, color: "text-orange-600" },
        { name: "GitHub", icon: <SiGithub />, color: "text-white" },
        { name: "Vercel", icon: <SiVercel />, color: "text-white" },
        { name: "Firebase Studio", icon: <SiFirebase />, color: "text-yellow-500" },
      ] as Skill[],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Tools and technologies I work with"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <Card className="h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-primary">{category.icon}</div>
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all cursor-pointer"
                    >
                      <span className={`text-2xl ${skill.color}`}>
                        {skill.icon}
                      </span>
                      <span className="text-gray-300">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">Also experienced with:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["REST APIs", "Authentication Systems", "AI-assisted features"].map(
              (item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full text-sm border border-primary/30"
                >
                  {item}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
