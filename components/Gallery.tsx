"use client";

import React, { useRef, useState, useCallback } from "react";
import Image from "next/image";

const images = [
  "/gallery/image1.JPEG",
  "/gallery/IMAGE2.JPEG",
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateArrows = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 4);
  }, []);

  const scroll = (dir: "prev" | "next") => {
    const el = scrollRef.current;
    if (!el) return;
    // scroll by one item width + gap (gap-2 = 8px)
    const item = el.querySelector("div[data-gallery-item]") as HTMLElement | null;
    const amount = item ? item.offsetWidth + 8 : 200;
    el.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <div className="bento-card p-4 col-span-1 md:col-span-6 space-y-3 group">
      {/* Header */}
      <div className="flex items-center gap-2">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <h2 className="text-lg font-bold">Gallery</h2>
      </div>

      {/* Scroll strip with edge fade masks */}
      <div className="relative">
        {/* Left fade edge */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-12 z-10 transition-opacity duration-200"
          style={{
            background: "linear-gradient(to right, var(--background), transparent)",
            opacity: atStart ? 0 : 1,
          }}
        />
        {/* Right fade edge */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-12 z-10 transition-opacity duration-200"
          style={{
            background: "linear-gradient(to left, var(--background), transparent)",
            opacity: atEnd ? 0 : 1,
          }}
        />

        {/* Scroll container */}
        <div
          ref={scrollRef}
          onScroll={updateArrows}
          data-gallery-scroll
          className="flex gap-2 overflow-x-auto pb-1"
          style={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              data-gallery-item
              className="relative flex-shrink-0 aspect-square overflow-hidden rounded-lg bg-foreground/5 border border-foreground/10 hover:border-foreground/20 transition-all duration-200 hover:-translate-y-0.5 group/image"
              style={{ scrollSnapAlign: "start", width: "clamp(140px, 20%, 200px)" }}
            >
              <Image
                alt={`Gallery image ${idx + 1}`}
                src={img}
                fill
                className="object-cover transition-transform duration-300 group-hover/image:scale-105"
                sizes="(max-width: 640px) 140px, 200px"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Arrow controls */}
      <div className="flex items-center justify-end gap-1.5 pt-0.5">
        <button
          onClick={() => scroll("prev")}
          disabled={atStart}
          className="p-1.5 rounded-full border border-foreground/10 hover:border-foreground/20 hover:bg-foreground/5 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110"
          aria-label="Previous images"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => scroll("next")}
          disabled={atEnd}
          className="p-1.5 rounded-full border border-foreground/10 hover:border-foreground/20 hover:bg-foreground/5 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110"
          aria-label="Next images"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
