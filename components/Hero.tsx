"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import Button from "./ui/Button";
import { scrollToSection } from "@/lib/utils";

export default function Hero() {
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.8,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-6 py-20 text-center">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="mb-6">
            Hi, I&apos;m{" "}
            <span className="text-gradient">Nichoe Ashley De Jesus</span>
          </h1>
        </motion.div>

        <motion.div
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            3rd Year Computer Science Student
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Aspiring Full-Stack Developer passionate about building modern web
            applications with clean interfaces and scalable backend logic
          </p>
        </motion.div>

        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          className="flex gap-4 justify-center flex-wrap"
        >
          <Button
            variant="primary"
            onClick={() => scrollToSection("projects")}
          >
            View Projects
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection("contact")}
          >
            Get in Touch
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          onClick={() => scrollToSection("about")}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FaChevronDown className="text-primary text-2xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
