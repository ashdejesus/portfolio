import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-6 max-w-7xl py-12">
        {/* Hero Section - Full Width */}
        <div className="mb-12">
          <Hero />
        </div>

        {/* Bento Grid Layout */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* About - Left (1 col) */}
          <div className="md:col-span-1">
            <About />
          </div>

          {/* Skills & Experience - Right (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <Skills />
          </div>

          {/* Projects - Full Width */}
          <div className="md:col-span-3">
            <Projects />
          </div>

          {/* Contact - Full Width */}
          <div className="md:col-span-3">
            <Contact />
          </div>

          {/* Gallery - Full Width */}
          <div className="md:col-span-3">
            <Gallery />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
