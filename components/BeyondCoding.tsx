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

      <div className="mt-3">
        <h3 className="text-sm font-semibold mb-2">Hobbies</h3>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2 p-2 rounded-md border border-foreground/8 bg-background/50">
            <svg className="w-5 h-5 text-foreground/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19V6l12-2v13"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19a4 4 0 11-4-4"></path></svg>
            <span className="text-xs font-medium">Music</span>
          </div>

          <div className="flex items-center gap-2 p-2 rounded-md border border-foreground/8 bg-background/50">
            <svg className="w-5 h-5 text-foreground/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 10l-9 6-9-6 9-6 9 6z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 14v4a2 2 0 002 2h14a2 2 0 002-2v-4"></path></svg>
            <span className="text-xs font-medium">Travel</span>
          </div>

          <div className="flex items-center gap-2 p-2 rounded-md border border-foreground/8 bg-background/50">
            <svg className="w-5 h-5 text-foreground/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></rect><path d="M16 3h-8l-1 4h10l-1-4z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            <span className="text-xs font-medium">Photography</span>
          </div>

          <div className="flex items-center gap-2 p-2 rounded-md border border-foreground/8 bg-background/50">
            <svg className="w-5 h-5 text-foreground/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h18v18H3z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 8h8v8H8z"></path></svg>
            <span className="text-xs font-medium">Chess</span>
          </div>

          <div className="flex items-center gap-2 p-2 rounded-md border border-foreground/8 bg-background/50">
            <svg className="w-5 h-5 text-foreground/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <circle cx="12" cy="3.5" r="1.75" strokeWidth="1.5" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 5v3l2 2-1 3" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 12l1-1 2 1-1 3" />
            </svg>
            <span className="text-xs font-medium">Dancing</span>
          </div>
        </div>
      </div>
    </div>
  );
}
