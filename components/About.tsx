"use client";

import React from "react";

export default function About() {
  return (
    <div className="bento-card p-4 col-span-1 md:col-span-4 space-y-2 group">
      <div className="flex items-center gap-2">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
        <h2 className="text-lg font-bold">About</h2>
      </div>
      <p className="text-sm text-foreground/70 leading-relaxed">
        I&apos;m a Computer Science student with experience in customer service, technical support, graphic design, and organizational leadership. I work on projects involving software development, digital publication materials, and community-based initiatives while continuously improving my skills in programming and technology.

        <br /><br />

        I have contributed to student organizations through public relations, publication design, and communication management, helping improve engagement and online presence. I also gained real-world experience in fast-paced environments through customer service and operational roles that strengthened my adaptability, problem-solving, and teamwork skills.

        <br /><br />

        Currently, I am focusing on software engineering and artificial intelligence through my research project, SafeRide: A Mobile-Based Risk Scoring System for Student Commuting. My work explores the use of smartphone sensors, crowdsourced reports, and intelligent risk analysis to develop safer and smarter commuting solutions for students.
      </p>
    </div>
  );
}
