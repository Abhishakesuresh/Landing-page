"use client";

"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFileDownload, FaEnvelope } from "react-icons/fa";
import TextScramble from "./TextScramble";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 pt-24 sm:pt-20 overflow-hidden">

            <div className="relative max-w-5xl mx-auto text-center space-y-8 sm:space-y-10 z-10">

                {/* Notification Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md transition-colors hover:bg-white/10 cursor-default">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-glow opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-glow"></span>
                        </span>
                        <span className="text-xs font-medium text-secondary tracking-wide">
                            Available for new opportunities
                        </span>
                    </div>
                </motion.div>

                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1 className="text-4xl sm:text-7xl md:text-8xl font-semibold tracking-tighter text-primary mb-4 sm:mb-6 leading-[1.1] sm:leading-[1.05]">
                        Abhishake Suresh <br />
                        <span className="text-gradient-blue text-2xl sm:text-4xl md:text-5xl block mt-4 font-normal">
                            Automation Engineer • SDET • CI/CD Engineering
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl font-medium text-white/90 max-w-xl sm:max-w-3xl mx-auto leading-relaxed tracking-tight px-4 sm:px-0 mb-6">
                        Engineering reliable automation systems that accelerate delivery and strengthen product quality.
                    </p>

                    <p className="text-base sm:text-lg font-normal text-secondary max-w-xl sm:max-w-3xl mx-auto leading-relaxed tracking-tight px-4 sm:px-0">
                        I design scalable test frameworks, optimize CI/CD execution, and build automation that behaves like production-ready software—stable, maintainable, and measurable.
                    </p>
                </motion.div>

                {/* CTA Buttons - Apple Style */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-6 sm:px-0"
                >
                    <a
                        href="/resume.pdf"
                        download
                        className="group relative w-full sm:w-auto px-8 py-3.5 bg-white text-black rounded-full font-medium text-base transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)] flex justify-center"
                    >
                        <span className="flex items-center gap-2">
                            Download Resume
                        </span>
                    </a>

                    <a
                        href="#contact"
                        className="group w-full sm:w-auto px-8 py-3.5 bg-white/10 text-white backdrop-blur-md border border-white/10 rounded-full font-medium text-base hover:bg-white/20 transition-all active:scale-95 flex items-center justify-center gap-2"
                    >
                        Contact Me
                    </a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="pt-8 sm:pt-12 flex items-center justify-center gap-8"
                >
                    <a href="https://linkedin.com/in/abhishakesuresh" target="_blank" className="text-secondary hover:text-white transition-colors duration-300">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://github.com/abhishakesuresh" target="_blank" className="text-secondary hover:text-white transition-colors duration-300">
                        <FaGithub size={24} />
                    </a>
                    <a href="mailto:abhishakesuresh06@gmail.com" className="text-secondary hover:text-white transition-colors duration-300">
                        <FaEnvelope size={24} />
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
