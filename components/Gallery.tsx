"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  { id: 1, emoji: "📸", label: "Photo 1" },
  { id: 2, emoji: "🌟", label: "Photo 2" },
  { id: 3, emoji: "🎤", label: "Photo 3" },
  { id: 4, emoji: "🏆", label: "Photo 4" },
  { id: 5, emoji: "👥", label: "Photo 5" }
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
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background rounded-lg border border-border p-5 space-y-4"
    >
      <h2 className="text-base font-bold text-foreground">
        Gallery
      </h2>

      <div className="relative">
        {/* Images Container */}
        <div className="w-full h-64 bg-gradient-to-br from-muted/20 to-muted/40 rounded-lg overflow-hidden border border-border flex items-center justify-center">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center w-full h-full"
          >
            <div className="text-8xl">{images[currentIndex].emoji}</div>
          </motion.div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-background hover:bg-muted text-foreground/70 hover:text-foreground p-2 rounded-full shadow-md transition-all z-10"
        >
          <FaChevronLeft className="text-sm" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-background hover:bg-muted text-foreground/70 hover:text-foreground p-2 rounded-full shadow-md transition-all z-10"
        >
          <FaChevronRight className="text-sm" />
        </button>

        {/* Slide Counter */}
        <div className="text-center mt-3 text-foreground/60 text-xs">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </motion.div>
  );
}
