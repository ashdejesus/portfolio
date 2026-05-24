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
      title: "Service Crew",
      organization: "McDonalds Petron SLEX KM44",
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

  // parse year/month strings to a comparable numeric value (YYYYMM). "Present" => very large
  const monthMap: Record<string, number> = {
    jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6,
    jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12,
  };

  function parseDateValue(str: string) {
    const s = str.toLowerCase();
    if (s.includes("present")) return 999999;
    // try to find an end date after a dash
    const rangeSep = s.includes("–") ? "–" : s.includes("-") ? "-" : null;
    const target = rangeSep ? s.split(rangeSep)[1].trim() : s;
    // look for month and year
    const m = target.match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*/i);
    const y = target.match(/(20\d{2}|19\d{2})/);
    const year = y ? parseInt(y[0], 10) : 0;
    const month = m ? monthMap[m[0].slice(0,3).toLowerCase()] : 1;
    return year * 100 + month;
  }

  const sorted = [...experiences].sort((a, b) => parseDateValue(b.year) - parseDateValue(a.year));

  return (
    <section className="bento-card p-4 space-y-0 group col-span-1 md:col-span-2 md:row-span-2">
      <div className="flex items-center gap-2 mb-0">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <h2 className="text-lg font-bold">Experience</h2>
      </div>

      <div className="relative space-y-6 mt-0">
        <div className="absolute left-1.5 top-0 bottom-0 w-px bg-border"></div>

        {sorted.map((exp, index) => (
          <div key={index} className="relative pl-6">
            <div className="space-y-0.5 peer">
              <h3 className={`text-sm font-semibold transition-colors ${
                index === 0 ? "text-foreground" : "peer-hover:text-foreground"
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
            <div className={`absolute left-0 top-0 w-3 h-3 rounded-full border-2 transition-colors duration-200 ${
              index === 0
                ? "border-foreground bg-foreground"
                : "border-border bg-background peer-hover:border-foreground peer-hover:bg-foreground"
            }`}></div>
          </div>
        ))}
      </div>
    </section>
  );
}
