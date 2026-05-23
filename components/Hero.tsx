"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored) {
        const prefer = stored === 'dark';
        setIsDark(prefer);
        document.documentElement.classList.toggle('dark', prefer);
        return;
      }
    } catch {}

    // fallback to system preference
    const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
    document.documentElement.classList.toggle('dark', prefersDark);
  }, []);

  return (
    <section className="mb-8 animate-fade-in">
      <div className="flex items-center gap-4 md:gap-6">
        {/* Profile Image */}
        <Image
          src="/bryllim.svg"
          alt="Nichoe Ashley De Jesus"
          width={160}
          height={160}
          className="rounded-lg w-40 h-40 md:w-40 md:h-40 object-cover flex-shrink-0"
          priority
        />

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Name and Verified Badge */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <h1 className="text-lg md:text-2xl font-bold truncate">Nichoe Ashley De Jesus</h1>
              <svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0" aria-label="Verified user">
                <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" fill="#1d9bf0"></path>
              </svg>
            </div>
            <button
              onClick={() => {
                const next = !isDark;
                setIsDark(next);
                try {
                  localStorage.setItem('theme', next ? 'dark' : 'light');
                } catch {}
                document.documentElement.classList.toggle('dark', next);
              }}
              aria-pressed={isDark}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-h-0 min-w-0 ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`}
              aria-label="Toggle theme"
            >
              <div className={`absolute top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 ease-in-out ${isDark ? 'translate-x-5' : 'translate-x-0'}`}>
                <svg className="h-3 w-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"></path>
                </svg>
              </div>
            </button>
          </div>

          {/* Location */}
          <p className="text-xs md:text-sm text-foreground/70 mt-0.5 flex items-center gap-1">
            <svg className="w-3 h-3 md:w-3.5 md:h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span className="truncate">Cabuyao, Philippines</span>
          </p>

          {/* Title */}
          <div className="flex items-center justify-between mt-1.5 md:mt-2">
            <p className="text-[10px] md:text-base">3rd Year Computer Science Student <span className="text-foreground/40">\</span> Aspiring Full-Stack Developer</p>
            <div className="hidden md:block">
              {/* Hackathon badge would go here */}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-2 mt-3 md:mt-4">
            <div className="flex gap-2">
              <a
                download
                className="inline-flex h-7 md:h-8 items-center rounded-lg bg-foreground px-2.5 md:px-4 text-[8px] md:text-xs font-medium text-background transition-all duration-200 hover:bg-foreground/90 hover:-translate-y-0.5 gap-1 md:gap-1.5 whitespace-nowrap min-h-0"
                href="/resume.pdf"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span className="text-left">Download Resume</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
              <a className="hidden md:inline-flex h-7 md:h-8 items-center rounded-lg border border-border bg-background px-2.5 md:px-4 text-[8px] md:text-xs font-medium transition-all duration-200 hover:bg-muted hover:-translate-y-0.5 gap-1 md:gap-1.5 whitespace-nowrap min-h-0" href="mailto:dejesusnichoeashley81@gmail.com">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="text-left">Send Email</span>
              </a>
              <a className="inline-flex h-7 md:h-8 items-center rounded-lg border border-border bg-background px-2.5 md:px-4 text-[8px] md:text-xs font-medium transition-all duration-200 hover:bg-muted hover:-translate-y-0.5 gap-1 md:gap-1.5 whitespace-nowrap flex-1 md:flex-1 min-h-0" href="#">
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                <span className="text-left flex-1"><span className="md:hidden">Community</span><span className="hidden md:inline">Visit my community and join the discussion here!</span></span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="block md:hidden">
              {/* Mobile hackathon badge */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
