"use client";

import React, { useState } from "react";

const recommendationsData = [
  {
    text: `I highly recommend Nichoe Ashley B. De Jesus for any opportunity given to them. They are hardworking, adaptable, and consistently show professionalism in every task. Their strong communication skills, customer service experience, and dedication make them a valuable addition to any team.

Recommender Name

Position, Organization`,
    author: "Recommender Name",
    role: "Position, Organization"
  },
  {
    text: `Nichoe Ashley B. De Jesus is a reliable and motivated individual who demonstrates excellent work ethic and teamwork. Their ability to handle responsibilities efficiently while maintaining professionalism reflects their strong potential for future success.

Recommender Name

Position, Organization`,
    author: "Recommender Name",
    role: "Position, Organization"
  }
];

export default function Recommendations() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="bento-card p-4 space-y-2 group col-span-1 md:col-span-3">
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
