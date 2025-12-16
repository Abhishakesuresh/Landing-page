"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // Resume Download States
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleDownload = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setSuccess(true);

            setTimeout(() => setSuccess(false), 2000);
        }, 1500);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}
            >
                <div className="max-w-[1200px] mx-auto px-4 md:px-6">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="flex items-center justify-between px-4 py-3 md:px-6 rounded-full transition-all duration-300 bg-surface/70 backdrop-blur-xl shadow-lg"
                    >

                        {/* Brand */}
                        <motion.a
                            variants={itemVariants}
                            href="#"
                            className="text-lg font-semibold tracking-tight text-white hover:opacity-80 transition-opacity"
                        >
                            Abhishake Suresh
                        </motion.a>

                        {/* Desktop Navigation */}
                        <motion.div variants={containerVariants} className="hidden md:flex items-center gap-6">
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    variants={itemVariants}
                                    className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-200"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </motion.div>

                        {/* Desktop Social Icons + Resume CTA */}
                        <motion.div variants={containerVariants} className="hidden md:flex items-center gap-4">

                            {/* Social Icons */}
                            <motion.div variants={itemVariants} className="flex items-center gap-3 pr-4 border-r border-white/10">
                                <a
                                    href="https://linkedin.com/in/abhishakesuresh"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn Profile"
                                    className="text-white/60 hover:text-cyan-400 transition-colors duration-200"
                                >
                                    <FaLinkedin size={18} />
                                </a>
                                <a
                                    href="https://github.com/abhishakesuresh"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub Profile"
                                    className="text-white/60 hover:text-purple-400 transition-colors duration-200"
                                >
                                    <FaGithub size={18} />
                                </a>
                            </motion.div>

                            {/* Resume Button - With Animation */}
                            <motion.a
                                variants={itemVariants}
                                href="/resume.pdf"
                                download
                                onClick={handleDownload}
                                className={`
                                    px-5 py-2 rounded-full text-xs font-semibold flex items-center gap-2 transition-all active:scale-95
                                    ${success ? "bg-green-500 text-white" : "bg-white text-black hover:bg-gray-200"}
                                `}
                            >
                                {loading ? (
                                    <>
                                        <motion.div
                                            className="h-3 w-3 border-2 border-black/40 border-t-black rounded-full animate-spin"
                                        />
                                        <span>Preparing…</span>
                                    </>
                                ) : success ? (
                                    <>
                                        <span>✓</span>
                                        <span>Downloaded</span>
                                    </>
                                ) : (
                                    "Resume"
                                )}
                            </motion.a>
                        </motion.div>

                        {/* Mobile Toggle */}
                        <motion.button
                            variants={itemVariants}
                            className="md:hidden text-white"
                            onClick={() => setMenuOpen(true)}
                            aria-label="Open menu"
                        >
                            <FaBars size={20} />
                        </motion.button>
                    </motion.div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMenuOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[998]"
                        />

                        <motion.div
                            initial={{ y: "-100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-100%" }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="fixed top-0 left-0 right-0 z-[999] bg-surface border-b border-white/10 p-6 rounded-b-3xl shadow-2xl"
                        >
                            {/* Menu Header */}
                            <div className="flex justify-between items-center mb-8">
                                <span className="text-lg font-semibold text-white">Menu</span>
                                <button onClick={() => setMenuOpen(false)} className="text-secondary hover:text-white" aria-label="Close menu">
                                    <FaTimes size={20} />
                                </button>
                            </div>

                            {/* Mobile Nav Links */}
                            <nav className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setMenuOpen(false)}
                                        className="text-xl font-medium text-white/90 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                ))}

                                {/* Mobile Social Icons */}
                                <div className="flex items-center gap-6 mt-4 pt-4 border-t border-white/10">
                                    <a href="https://linkedin.com/in/abhishakesuresh" aria-label="LinkedIn Profile" className="text-white/60 hover:text-cyan-400">
                                        <FaLinkedin size={24} />
                                    </a>
                                    <a href="https://github.com/abhishakesuresh" aria-label="GitHub Profile" className="text-white/60 hover:text-purple-400">
                                        <FaGithub size={24} />
                                    </a>
                                </div>

                                {/* Mobile Resume Button - With Animation */}
                                <motion.a
                                    href="/resume.pdf"
                                    download
                                    onClick={handleDownload}
                                    className={`
                                        mt-4 text-center py-3 rounded-xl font-semibold flex items-center justify-center gap-2
                                        transition-all active:scale-95
                                        ${success ? "bg-green-500 text-white" : "bg-white text-black"}
                                    `}
                                >
                                    {loading ? (
                                        <>
                                            <motion.div
                                                className="h-4 w-4 border-2 border-black/40 border-t-black rounded-full animate-spin"
                                            />
                                            <span>Preparing…</span>
                                        </>
                                    ) : success ? (
                                        <>
                                            <span>✓</span>
                                            <span>Downloaded</span>
                                        </>
                                    ) : (
                                        "Download Resume"
                                    )}
                                </motion.a>
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
