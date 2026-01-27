import Hero from "@/components/Hero";
import Achievements from "@/components/Achievements";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import BeyondCoding from "@/components/BeyondCoding";
import RecentCertifications from "@/components/RecentCertifications";
import Recommendations from "@/components/Recommendations";

export default function Home() {
  return (
    <main className="min-h-screen bg-background animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section - Full Width */}
        <section className="mb-8 animate-fade-in">
          <Hero />
        </section>

        {/* Achievements Section - Full Width */}
        <section className="mb-8 animate-fade-in animation-delay-100">
          <Achievements />
        </section>

        {/* Two Column Layout */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Left Column - About (2 cols) */}
          <div className="md:col-span-2 animate-fade-in">
            <About />
          </div>

          {/* Right Column - Experience (1 col) */}
          <div className="animate-fade-in animation-delay-200">
            <Experience />
          </div>
        </section>

        {/* Tech Stack - Full Width */}
        <section className="mb-8 animate-fade-in animation-delay-200">
          <Skills />
        </section>

        {/* Beyond Coding - Full Width */}
        <section className="mb-8 animate-fade-in animation-delay-300">
          <BeyondCoding />
        </section>

        {/* Recent Projects - Full Width */}
        <section className="mb-8 animate-fade-in animation-delay-300">
          <Projects />
        </section>

        {/* Certifications & Recommendations */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="animate-fade-in animation-delay-400">
            <RecentCertifications />
          </div>
          <div className="overflow-hidden animate-fade-in animation-delay-400">
            <Recommendations />
          </div>
        </section>

        {/* Contact/Links - Full Width */}
        <section className="mb-8 animate-fade-in animation-delay-500">
          <Contact />
        </section>

        {/* Gallery - Full Width */}
        <section className="mb-8 animate-fade-in animation-delay-600">
          <Gallery />
        </section>
      </div>

      <footer className="max-w-6xl mx-auto px-4 py-8 border-t border-border mt-12">
        <div className="flex justify-center items-center">
          <p className="text-sm text-foreground/70">© 2026 Nichoe Ashley De Jesus. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
