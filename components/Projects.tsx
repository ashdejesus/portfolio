"use client";

import React from "react";

const projectsData = [
  {
    title: "NoteSphere",
    description: "A JavaScript-powered notes web app built to practice dynamic UI and state management. Features include creating, editing, and organizing notes with an intuitive interface.",
    url: "https://github.com/ashdejesus"
  },
  {
    title: "unicart",
    description: "A JavaScript e-commerce and cart prototype demonstrating interactive DOM manipulation and client-side logic for product management and shopping cart functionality.",
    url: "https://github.com/ashdejesus"
  },
  {
    title: "sulatinmo",
    description: "An HTML site project showcasing static markup, layout design, and content presentation skills with clean semantic HTML structure.",
    url: "https://github.com/ashdejesus"
  },
  {
    title: "cultura-lens",
    description: "A TypeScript-based project tied to image restoration concepts, demonstrating type safety and modern JavaScript development practices.",
    url: "https://github.com/ashdejesus"
  }
];

export default function Projects() {
  return (
    <section className="bento-card p-4 space-y-4 group col-span-1 md:col-span-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <h2 className="text-xl md:text-2xl font-bold text-foreground">Recent Projects</h2>
        </div>
        <a href="#" className="text-foreground text-xs font-medium">View All ›</a>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {projectsData.map((project, idx) => (
          <a
            key={idx}
            href={project.url}
            className="group p-4 bg-muted/5 hover:bg-muted/10 border border-border hover:border-foreground rounded-lg transition-all"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-semibold text-foreground group-hover:text-foreground transition-colors text-sm">
                {project.title}
              </h3>
              <svg className="w-4 h-4 text-muted group-hover:text-foreground flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            <p className="text-foreground/70 text-xs leading-relaxed">
              {project.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
