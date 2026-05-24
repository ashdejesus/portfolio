"use client";

import React from "react";

interface EducationItem {
  degree: string;
  school: string;
  year: string;
}

export default function Education() {
  const education: EducationItem[] = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Pamantasan ng Cabuyao",
      year: "2022 – Present",
    },
    {
      degree: "TVL – Information and Communications Technology",
      school: "St. Ignatius Academy - Cabuyao Campus",
      year: "2020 – 2022",
    },
    {
      degree: "Junior High School",
      school: "Pulo National High School",
      year: "2016 – 2020",
    },
    {
      degree: "Hello World! 👋🏻",
      school: "Wrote my first line of code and started exploring technology and programming.",
      year: "2015",
    },
  ];

  return (
    <section className="bento-card p-4 space-y-0 group col-span-1 md:col-span-2">
      <div className="flex items-center gap-2 mb-0">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14.25L3 9l9-5.25L21 9l-9 5.25z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.25 10.5V15c0 1.657 3.03 3 6.75 3s6.75-1.343 6.75-3v-4.5"></path>
        </svg>
        <h2 className="text-lg font-bold">Education</h2>
      </div>

      <div className="relative space-y-6 mt-0">
        <div className="absolute left-1.5 top-0 bottom-0 w-px bg-border"></div>

        {education.map((item, index) => (
          <div key={index} className="relative pl-6">
            <div className="space-y-0.5 peer">
              <h3 className={`text-sm font-semibold transition-colors ${index === 0 ? "text-foreground" : "peer-hover:text-foreground"}`}>
                {item.degree}
              </h3>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs text-foreground/70 leading-relaxed">{item.school}</span>
                <span className="text-xs font-mono px-1.5 py-0.5 rounded-full bg-foreground/5 border border-foreground/10 flex-shrink-0">
                  {item.year}
                </span>
              </div>
            </div>
            <div className={`absolute left-0 top-0 w-3 h-3 rounded-full border-2 transition-colors duration-200 ${index === 0 ? "border-foreground bg-foreground" : "border-border bg-background peer-hover:border-foreground peer-hover:bg-foreground"}`}></div>
          </div>
        ))}
      </div>
    </section>
  );
}
