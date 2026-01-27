"use client";

import React from "react";

export default function Skills() {
  const skills = {
    Frontend: ["JavaScript", "HTML", "CSS", "React", "Tailwind CSS"],
    "Libraries & Frameworks": ["React", "Tailwind CSS"],
    "Backend & Tools": ["Firebase", "Supabase", "Git", "GitHub"],
    Languages: ["JavaScript", "Java"],
    Additional: ["RESTful APIs", "Responsive UI", "Project Workflows"]
  };

  return (
    <section className="bento-card p-4 space-y-2 group md:col-span-2">
      <div className="flex items-center gap-2">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
        <h2 className="text-lg font-bold">Tech Stack</h2>
      </div>

      <div className="space-y-3 mt-3">
        {Object.entries(skills).map(([category, techs]) => (
          <div key={category}>
            <h3 className="text-xs font-semibold mb-1.5 text-foreground">{category}</h3>
            <div className="flex flex-wrap gap-1.5">
              {techs.map((tech) => (
                <span key={tech} className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
