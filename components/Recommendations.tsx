"use client";

import React, { useState } from "react";

const recommendationsData = [
  {
    text: "Bryl and I worked together in various projects where I saw his tenacity to deliver what he promised to do. He is able to meet deadlines without sacrificing the quality of the output, and at times even exceeding the set goals. His dedication to pursue his craft and...",
    author: "Van Honoridez",
    role: "Application Development Analyst at Accenture"
  },
  {
    text: "Was an intern at PocketDevs and sir Bryl was our main trainer to the different technologies we use in the company such as Laravel, Bootstrap, etc. With his guidance, I was equipped with some of the current trends and insights in the tech industry which enabled me.",
    author: "Patrick Vince Velasco",
    role: "Software Engineer, YNS"
  }
];

export default function Recommendations() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="bento-card p-4 space-y-2 group md:col-span-2">
      <div className="flex items-center gap-2 mb-4">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
        <h2 className="text-lg font-bold">Recommendations</h2>
      </div>

      <div className="space-y-4 mt-4">
        <div className="space-y-2">
          <p className="text-foreground/70 text-sm leading-relaxed">
            {recommendationsData[currentIndex].text}
          </p>
          <div className="pt-2 border-t border-border">
            <p className="font-semibold text-foreground text-sm">
              {recommendationsData[currentIndex].author}
            </p>
            <p className="text-foreground/60 text-xs">
              {recommendationsData[currentIndex].role}
            </p>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex items-center justify-center gap-1.5">
          {recommendationsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-colors ${
                idx === currentIndex ? "bg-foreground" : "bg-border"
              }`}
              aria-label={`Recommendation ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
