import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Impact from "@/components/Impact";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-accent-glow/30 selection:text-white overflow-hidden">
      <Hero />
      <About />
      <Impact />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
