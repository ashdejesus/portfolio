"use client";

import React from "react";

export default function Contact() {
  const memberships = [
    { name: "GitHub: ashdejesus", link: "https://github.com/ashdejesus" },
    { name: "Aspiring Full-Stack Developer", link: "#" }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/in/yourusername" },
    { name: "GitHub", icon: "github", url: "https://github.com/yourusername" },
    { name: "Instagram", icon: "instagram", url: "https://instagram.com/yourusername" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* A member of */}
      <section className="bento-card p-4 space-y-2 group">
        <div className="flex items-center gap-2 mb-3">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 12H9m4 0a4 4 0 110-5.292M3 20.236a9 9 0 0118 0" />
          </svg>
          <h3 className="text-sm font-bold">A member of</h3>
        </div>
        <div className="space-y-2">
          {memberships.map((membership, idx) => (
            <a
              key={idx}
              href={membership.link}
              className="block text-xs text-primary hover:underline font-medium"
            >
              {membership.name}
              <svg className="w-3 h-3 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ))}
        </div>
      </section>

      {/* Social Links */}
      <section className="bento-card p-4 space-y-2 group">
        <div className="flex items-center gap-2 mb-3">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4.243 4.243a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4.243-4.243a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          <h3 className="text-sm font-bold">Social Links</h3>
        </div>
        <div className="space-y-2">
          <a href="https://github.com/ashdejesus" target="_blank" rel="noopener noreferrer" className="block text-xs text-primary hover:underline font-medium">GitHub</a>
          <a href="#linkedin" className="block text-xs text-primary hover:underline font-medium">LinkedIn</a>
          <a href="#twitter" className="block text-xs text-primary hover:underline font-medium">Twitter/X</a>
        </div>
      </section>

      {/* Speaking */}
      <section className="bento-card p-4 space-y-2 group">
        <div className="flex items-center gap-2 mb-3">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4" />
          </svg>
          <h3 className="text-sm font-bold">Speaking</h3>
        </div>
        <p className="text-xs text-foreground/70 leading-relaxed mb-3">
          Available for speaking at events about software development and emerging technologies.
        </p>
        <a href="#" className="text-xs text-primary hover:underline font-medium">Get in touch ›</a>
      </section>

      {/* Email */}
      <section className="bento-card p-4 space-y-2 group">
        <div className="flex items-center gap-2 mb-3">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <h3 className="text-sm font-bold">Email</h3>
        </div>
        <a href="mailto:dejesusnichoeashley81@gmail.com" className="text-xs text-primary hover:underline font-medium break-all">
          dejesusnichoeashley81@gmail.com
        </a>
      </section>

      {/* Let's Talk */}
      <section className="bento-card p-4 space-y-2 group">
        <div className="flex items-center gap-2 mb-3">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-sm font-bold">Let&apos;s Talk</h3>
        </div>
        <a href="#schedule-call" className="text-xs text-primary hover:underline font-medium">Schedule a Call ›</a>
      </section>

      {/* Community */}
      <section className="bento-card p-4 space-y-2 group">
        <div className="flex items-center gap-2 mb-3">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m6 2a2 2 0 11-4 0m4 0a2 2 0 11-4 0m6 0a2 2 0 11-4 0m-6 0a2 2 0 11-4 0m0 4v2m0 4v2m0 4v2" />
          </svg>
          <h3 className="text-sm font-bold">Community</h3>
        </div>
        <a href="#community" className="text-xs text-primary hover:underline font-medium">Join Discussion ›</a>
      </section>
    </div>
  );
}
