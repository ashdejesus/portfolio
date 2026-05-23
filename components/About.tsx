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
        Versatile and detail-oriented Computer Science student with solid customer service experience and technical literacy. I thrive in fast-paced environments, deliver exceptional service, and resolve customer inquiries effectively. Skilled in high-volume interactions, problem solving, and maintaining professionalism under pressure. Strong communication and adaptability enable me to provide technical support and issue resolution across diverse needs.
      </p>
    </div>
  );
}
