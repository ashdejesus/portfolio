"use client";

import React from "react";

export default function Achievements() {
  const achievements = [
    {
      title: "Developer",
      subtitle: "SafeRide Developer",
      badge: "SAFERIDE",
      gradient: "from-blue-600 to-blue-400",
      textColor: "text-white",
    },
    {
      title: "Full-Stack Developer",
      subtitle: "JavaScript & React Specialist",
      badge: "FULL-STACK",
      gradient: "from-purple-600 to-pink-500",
      textColor: "text-white",
    },
    {
      title: "CS Student",
      subtitle: "Pamantasan ng Cabuyao",
      badge: "2022-PRESENT",
      gradient: "from-amber-500 to-orange-400",
      textColor: "text-white",
    },
    {
      title: "Open Source",
      subtitle: "Contributing to the community",
      badge: "CONTRIBUTOR",
      gradient: "from-green-600 to-teal-500",
      textColor: "text-white",
    },
  ];

  return (
    <section className="mb-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-xl p-6 flex flex-col justify-between min-h-[200px] group shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br ${achievement.gradient}`}
          >
            {/* Decorative bg element */}
            <div className="absolute top-2 right-2 w-12 h-12 rounded-full opacity-20 blur-md group-hover:scale-110 transition-transform" style={{ background: 'rgba(255,255,255,0.3)' }}></div>
            
            {/* Content */}
            <div className="relative z-10">
              <p className={`text-xs font-semibold mb-2 ${achievement.textColor} opacity-90`}>{achievement.badge}</p>
              <h3 className={`font-bold text-lg mb-1 ${achievement.textColor}`}>{achievement.title}</h3>
              <p className={`text-xs ${achievement.textColor} opacity-90`}>{achievement.subtitle}</p>
            </div>
            
            {/* Bottom accent */}
            <div className="relative z-10 flex gap-1 mt-4">
              <div className="w-2 h-2 rounded-full opacity-60" style={{ background: 'rgba(255,255,255,0.8)' }}></div>
              <div className="w-2 h-2 rounded-full opacity-40" style={{ background: 'rgba(255,255,255,0.8)' }}></div>
              <div className="w-2 h-2 rounded-full opacity-20" style={{ background: 'rgba(255,255,255,0.8)' }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
