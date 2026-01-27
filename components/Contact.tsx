"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import SectionHeading from "./ui/SectionHeading";
import Card from "./ui/Card";
import Button from "./ui/Button";

export default function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/ashdejesus",
      color: "hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/yourusername",
      color: "hover:text-blue-500",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      url: "mailto:dejesusnichoeashley81@gmail.com",
      color: "hover:text-primary",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeading
          title="Get In Touch"
          subtitle="Let's build something amazing together"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <h3 className="text-2xl font-semibold mb-6">
                Let&apos;s Connect
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions. Feel free to reach out!
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-primary text-xl" />
                  <a
                    href="mailto:dejesusnichoeashley81@gmail.com"
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    dejesusnichoeashley81@gmail.com
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className={`text-3xl text-gray-400 ${link.color} transition-colors`}
                      aria-label={link.name}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <h3 className="text-2xl font-semibold mb-6">
                Send a Message
              </h3>
              <form
                action="mailto:dejesusnichoeashley81@gmail.com"
                method="post"
                encType="text/plain"
                className="space-y-4"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors text-white resize-none"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>

                <Button type="submit" variant="primary" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
