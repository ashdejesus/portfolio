"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { skillGroups } from "@/lib/skills";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export default function TechStackPageClient() {
  return (
    <motion.main className="min-h-screen text-foreground" initial="hidden" animate="show" variants={containerVariants}>
      <div className="mx-auto max-w-5xl px-6 py-12">
        <motion.div className="mb-8" variants={itemVariants}>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              ← Back to Home
            </Link>
          </div>
          <h1 className="mt-4 text-2xl md:text-3xl font-bold">Tech Stack</h1>
        </motion.div>

        <motion.section className="grid gap-8 md:grid-cols-2" variants={containerVariants}>
          {skillGroups.map((group) => (
            <motion.div key={group.category} className="p-0" variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-3">{group.category}</h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span key={item} className="px-3 py-1 text-sm rounded-md bg-black border border-gray-700 text-white font-medium">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.section>
      </div>
    </motion.main>
  );
}
