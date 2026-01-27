"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bento-card p-4 md:p-6 mb-8 animate-fade-in md:col-span-2">
      <div className="flex items-center gap-4 md:gap-6">
        {/* Profile Image */}
        <Image
          src="/bryllim.png"
          alt="Nichoe Ashley De Jesus"
          width={160}
          height={160}
          className="rounded-lg w-40 h-40 object-cover flex-shrink-0"
          priority
        />

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Name and Title */}
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-lg md:text-2xl font-bold truncate">Nichoe Ashley De Jesus</h1>
            <svg viewBox="0 0 22 22" className="h-4 w-4 flex-shrink-0" fill="none">
              <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" fill="#1d9bf0" />
            </svg>
          </div>

          {/* Location */}
          <p className="text-xs md:text-sm text-foreground/70 mb-2 flex items-center gap-1">
            <svg className="w-3 h-3 md:w-3.5 md:h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="truncate">Metro Manila, Philippines</span>
          </p>

          {/* Title */}
          <p className="text-[10px] md:text-sm text-foreground mb-3 md:mb-4">
            3rd Year Computer Science Student <span className="text-muted">\</span> Aspiring Full-Stack Developer
          </p>

          {/* CTA Button */}
          <a
            href="mailto:dejesusnichoeashley81@gmail.com"
            className="inline-flex h-7 md:h-8 items-center rounded-lg bg-foreground px-2.5 md:px-4 text-[8px] md:text-xs font-medium text-background transition-all duration-200 hover:bg-foreground/90 hover:-translate-y-0.5 gap-1 md:gap-1.5 whitespace-nowrap"
          >
            <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Contact Me</span>
          </a>
        </div>
      </div>
    </section>
  );
}
