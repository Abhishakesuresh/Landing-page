"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-4" : "py-6"
                    }`}
            >
                <div className="max-w-[1200px] mx-auto px-6">
                    <div
                        className="flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 bg-surface/70 backdrop-blur-xl border border-white/10 shadow-lg"
                    >
                        {/* Brand */}
                        <a href="#" className="text-lg font-semibold tracking-tight text-white hover:opacity-80 transition-opacity">
                            Abhishake Suresh
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-white/90 hover:text-white transition-colors duration-200"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden md:block">
                            <a
                                href="/resume.pdf"
                                download
                                className="px-5 py-2 rounded-full bg-white text-black text-xs font-semibold hover:bg-gray-200 transition-colors"
                            >
                                Resume
                            </a>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden text-white"
                            onClick={() => setMenuOpen(true)}
                        >
                            <FaBars size={20} />
                        </button>
                    </div>
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
                            <div className="flex justify-between items-center mb-8">
                                <span className="text-lg font-semibold text-white">Menu</span>
                                <button onClick={() => setMenuOpen(false)} className="text-secondary hover:text-white">
                                    <FaTimes size={20} />
                                </button>
                            </div>

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
                                <a
                                    href="/resume.pdf"
                                    download
                                    className="mt-4 text-center py-3 rounded-xl bg-white text-black font-semibold"
                                >
                                    Download Resume
                                </a>
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
