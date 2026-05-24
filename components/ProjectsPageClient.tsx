"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/projects";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export default function ProjectsPageClient() {
  return (
    <motion.main
      className="min-h-screen bg-background text-foreground"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <div className="mx-auto max-w-4xl px-4 py-8 md:py-12">
        <motion.div className="mb-8 flex items-center gap-4" variants={itemVariants}>
          <Link href="/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            ← Back to Home
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold">All Projects</h1>
        </motion.div>

        <motion.section className="grid gap-4 md:grid-cols-2" variants={containerVariants}>
          {projectsData.map((project) => (
            <motion.a
              key={project.title}
              href={project.url}
              className="rounded-2xl border border-border bg-background p-5 transition-all hover:border-foreground/30 hover:shadow-sm"
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
              <p className="text-sm text-foreground/70 leading-relaxed">{project.description}</p>
              <div className="mt-4 inline-flex rounded-md bg-foreground/5 px-2.5 py-1 text-xs font-mono text-foreground/70">
                {project.url === "#" ? "coming-soon" : project.url.replace(/^https?:\/\//, "")}
              </div>
            </motion.a>
          ))}
        </motion.section>
      </div>
    </motion.main>
  );
}
