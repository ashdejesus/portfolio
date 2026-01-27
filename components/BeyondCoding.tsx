"use client";

import React from "react";

export default function BeyondCoding() {
  return (
    <div className="bento-card p-4 col-span-1 md:col-span-2 space-y-2 group">
      <div className="flex items-center gap-2">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
        </svg>
        <h2 className="text-lg font-bold">Beyond Coding</h2>
      </div>
      <p className="text-sm text-foreground/70">When not writing code, I focus on learning about emerging technologies, minimalism, and startup culture.<br/><br/>I share my knowledge through content creation and community building.</p>
    </div>
  );
}
