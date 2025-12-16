"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Hero() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleDownload = () => {
        setLoading(true);

        // Simulate processing time animation
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);

            // Reset to normal after 2 seconds
            setTimeout(() => setSuccess(false), 2000);
        }, 1500);
    };

    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 pt-32 sm:pt-20 overflow-hidden">

            <div className="relative max-w-5xl mx-auto text-center space-y-8 sm:space-y-10 z-10">

                {/* Softer Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 cursor-default">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-glow opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-glow"></span>
                        </span>
                        <span className="text-xs font-medium text-secondary tracking-wide">
                            Actively learning & building in automation
                        </span>
                    </div>
                </motion.div>

                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl sm:text-7xl md:text-8xl font-semibold tracking-tighter text-primary leading-[1.1] sm:leading-[1.05]">
                        Abhishake Suresh
                    </h1>

                    <span className="text-gradient-blue text-2xl sm:text-4xl md:text-5xl block mt-4 font-normal">
                        Automation Engineer | SDET | CI/CD Specialist
                    </span>

                    <p className="text-lg sm:text-xl font-medium text-white/90 max-w-xl sm:max-w-3xl mx-auto leading-relaxed mt-6">
                        Turning test automation into reliable, scalable engineering.
                    </p>

                    <p className="text-base sm:text-lg font-normal text-secondary max-w-xl sm:max-w-3xl mx-auto leading-relaxed mt-2">
                        I build clean and maintainable automation systems for UI & API testing,
                        focusing on stability, performance, and continuous integration.
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    {/* Download Resume Button with Loading → Success Animation */}
                    <motion.a
                        href="/resume.pdf"
                        download
                        onClick={handleDownload}
                        className={`
                            group px-8 py-3.5 rounded-full font-medium text-base flex items-center justify-center gap-2
                            transition-all active:scale-95
                            ${success
                                ? "bg-green-500 text-white"
                                : "bg-white text-black hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                            }
                        `}
                    >
                        {loading ? (
                            <>
                                <motion.div
                                    className="h-4 w-4 border-2 border-black/40 border-t-black rounded-full animate-spin"
                                />
                                <span>Preparing Download…</span>
                            </>
                        ) : success ? (
                            <>
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                >
                                    ✓
                                </motion.span>
                                <span>Downloaded</span>
                            </>
                        ) : (
                            <span>Download Resume</span>
                        )}
                    </motion.a>

                    {/* Contact Button */}
                    <a
                        href="#contact"
                        className="group px-8 py-3.5 bg-white/10 text-white backdrop-blur-md border border-white/10 rounded-full font-medium text-base hover:bg-white/20 active:scale-95 transition-all"
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
                    <a href="https://linkedin.com/in/abhishakesuresh" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-secondary hover:text-white transition-colors">
                        <FaLinkedin size={26} />
                    </a>
                    <a href="https://github.com/abhishakesuresh" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-secondary hover:text-white transition-colors">
                        <FaGithub size={26} />
                    </a>
                    <a href="mailto:abhishake.suresh@gmail.com" aria-label="Send Email" className="text-secondary hover:text-white transition-colors">
                        <FaEnvelope size={26} />
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
