import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Collaboration from "@/components/Collaboration";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhyHireMe from "@/components/WhyHireMe";
import Impact from "@/components/Impact";
import Starfield from "@/components/Starfield";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-accent-glow/30 selection:text-white overflow-hidden">
      <Starfield />
      <Hero />
      <About />
      <Impact />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Certifications />
      <Collaboration />
      <WhyHireMe />
      <Contact />
      <Footer />
    </main>
  );
}
