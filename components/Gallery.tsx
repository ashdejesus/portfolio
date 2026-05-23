"use client";

import React, { useState } from "react";
import Image from "next/image";

const images = [
  "/gallery/gallery-1.svg",
  "/gallery/gallery-2.svg",
  "/gallery/gallery-3.svg",
  "/gallery/gallery-4.svg",
  "/gallery/gallery-5.svg",
  "/gallery/gallery-6.svg",
  "/gallery/gallery-7.svg",
  "/gallery/gallery-8.svg",
  "/gallery/gallery-9.svg",
  "/gallery/gallery-10.svg",
  "/gallery/gallery-11.svg",
  "/gallery/gallery-12.svg",
  "/gallery/gallery-13.svg",
  "/gallery/gallery-14.svg",
  "/gallery/gallery-15.svg"
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bento-card p-4 col-span-1 md:col-span-6 space-y-2 group">
      <div className="flex items-center gap-2">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
        <h2 className="text-lg font-bold">Gallery</h2>
      </div>

      <div className="relative">
        <div className="relative overflow-hidden">
          <div className="flex gap-2 transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 0}px)` }}>
            {images.map((img, idx) => (
              <div key={idx} className="relative flex-shrink-0 aspect-square overflow-hidden rounded-lg bg-foreground/5 border border-foreground/10 hover:border-foreground/20 transition-all duration-200 hover:-translate-y-0.5 group/image" style={{ width: "calc((100% - 2rem) / 5)" }}>
                <Image
                  alt={`Gallery image ${idx + 1}`}
                  src={img}
                  fill
                  className="object-cover transition-transform duration-200 group-hover/image:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-6 z-10 p-2 rounded-full bg-background border border-foreground/10 hover:border-foreground/20 hover:bg-foreground/5 transition-all duration-200 hover:scale-110 shadow-sm opacity-50 cursor-not-allowed"
          aria-label="Previous image"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-6 z-10 p-2 rounded-full bg-background border border-foreground/10 hover:border-foreground/20 hover:bg-foreground/5 transition-all duration-200 hover:scale-110 shadow-sm"
          aria-label="Next image"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
