"use client";

import React from "react";

interface Achievement {
  title: string;
  description: string;
  icon: string;
}

export default function Achievements() {
  const achievements: Achievement[] = [
    {
      title: "GitHub Developer",
      description: "Active contributor building real-world projects",
      icon: "🚀",
    },
    {
      title: "CS Student",
      description: "3rd Year Computer Science, learning-by-doing approach",
      icon: "🎓",
    },
    {
      title: "Full-Stack Learning",
      description: "Building modern web applications with React, JavaScript, and more",
      icon: "💻",
    },
  ];

  return (
    <section className="mb-8 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="bento-card p-4 text-center group"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <div className="text-3xl mb-2">{achievement.icon}</div>
            <h3 className="font-semibold text-sm mb-1">{achievement.title}</h3>
            <p className="text-xs text-foreground/60">{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
