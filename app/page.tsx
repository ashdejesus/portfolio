import Hero from "@/components/Hero";
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
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section - Full Width */}
        <section className="mb-8 animate-fade-in">
          <Hero />
        </section>

        {/* Bento Grid Layout - 6 columns */}
        <section className="grid grid-cols-1 md:grid-cols-6 gap-2">
          {/* About - 4 cols */}
          <div className="col-span-1 md:col-span-4 animate-fade-in">
            <About />
          </div>

          {/* Experience - 2 cols */}
          <div className="col-span-1 md:col-span-2 animate-fade-in animation-delay-200">
            <Experience />
          </div>

          {/* Tech Stack - 4 cols */}
          <div className="col-span-1 md:col-span-4 animate-fade-in animation-delay-200">
            <Skills />
          </div>

          {/* Beyond Coding - 2 cols */}
          <div className="col-span-1 md:col-span-2 animate-fade-in animation-delay-300">
            <BeyondCoding />
          </div>

          {/* Recent Projects - 6 cols */}
          <div className="col-span-1 md:col-span-6 animate-fade-in animation-delay-300">
            <Projects />
          </div>

          {/* Certifications - 3 cols */}
          <div className="col-span-1 md:col-span-3 animate-fade-in animation-delay-400">
            <RecentCertifications />
          </div>

          {/* Recommendations - 3 cols */}
          <div className="col-span-1 md:col-span-3 overflow-hidden animate-fade-in animation-delay-400">
            <Recommendations />
          </div>

          {/* Contact/Links - 6 cols */}
          <div className="col-span-1 md:col-span-6 animate-fade-in animation-delay-500">
            <Contact />
          </div>

          {/* Gallery - 6 cols */}
          <div className="col-span-1 md:col-span-6 animate-fade-in animation-delay-600">
            <Gallery />
          </div>
        </section>
      </div>

      <footer className="max-w-4xl mx-auto px-4 py-8 border-t border-border mt-12">
        <div className="flex justify-center items-center">
          <p className="text-sm text-foreground/70">© 2026 Bryl Lim. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
