import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

// Lazy load below-fold components to improve initial load time
const About = dynamic(() => import("@/components/About"), { ssr: true });
const Impact = dynamic(() => import("@/components/Impact"), { ssr: true });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: true });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: true });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: true });
const Achievements = dynamic(() => import("@/components/Achievements"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

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
