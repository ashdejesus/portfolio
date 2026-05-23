"use client";

import React from "react";

interface ExperienceItem {
  title: string;
  organization: string;
  year: string;
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      title: "Barista",
      organization: "CoffeePrint Cafe, Cabuyao, Laguna",
      year: "March 2025",
    },
    {
      title: "Service Crew",
      organization: "McDonald's Petron SLEX KM44",
      year: "Jan 2023 – Mar 2024",
    },
    {
      title: "Voter Support Assistant (Election Day Worker)",
      organization: "Local Election Committee / COMELEC",
      year: "May 2022",
    },
    {
      title: "Public Relations Officer / Layout Artist",
      organization: "School Organization",
      year: "Dec 2025 – Present",
    },
  ];

  return (
    <section className="bento-card p-4 space-y-2 group col-span-1 md:col-span-2 md:row-span-2">
      <div className="flex items-center gap-2 mb-3">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <h2 className="text-lg font-bold">Experience</h2>
      </div>

      <div className="relative space-y-10 mt-3">
        <div className="absolute left-1.5 top-2 bottom-0 w-px bg-border"></div>

        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-6 group">
            <div className={`absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              index === 0 
                ? "border-foreground bg-foreground" 
                : "border-border bg-background hover:border-foreground hover:bg-foreground"
            }`}></div>
            <div className="space-y-0.5">
              <h3 className={`text-sm font-semibold transition-colors ${
                index === 0 ? "text-foreground" : "group-hover:text-foreground"
              }`}>
                {exp.title}
              </h3>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs text-foreground/70">{exp.organization}</span>
                <span className="text-xs font-mono px-1.5 py-0.5 rounded-full bg-foreground/5 border border-foreground/10 flex-shrink-0">
                  {exp.year}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
