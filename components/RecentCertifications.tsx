"use client";

import React from "react";

const certificationsData = [
  { title: "Huawei Developer Expert", org: "Huawei" },
  { title: "Generative AI Leader", org: "Google" },
  { title: "Software Engineering", org: "TestDome" },
  { title: "Generative AI Professional", org: "Oracle" }
];

export default function RecentCertifications() {
  return (
    <section className="bento-card p-4 space-y-2 group md:col-span-2">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-lg font-bold">Recent Certifications</h2>
        </div>
        <a href="#" className="text-primary text-xs font-medium">View All ›</a>
      </div>

      <div className="space-y-3 mt-4">
        {certificationsData.map((cert, idx) => (
          <div key={idx} className="pb-3 border-b border-border last:border-b-0 last:pb-0">
            <p className="font-semibold text-foreground text-sm">{cert.title}</p>
            <p className="text-foreground/60 text-xs mt-0.5">{cert.org}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
