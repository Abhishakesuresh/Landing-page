"use client";

import { FaLinkedin, FaGithub, FaEnvelope, FaHeart, FaArrowUp } from "react-icons/fa";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            icon: <FaLinkedin size={18} />,
            href: "https://linkedin.com/in/abhishakesuresh",
            label: "LinkedIn",
            hoverColor: "hover:text-blue-400"
        },
        {
            icon: <FaGithub size={18} />,
            href: "https://github.com/abhishakesuresh",
            label: "GitHub",
            hoverColor: "hover:text-purple-400"
        },
        {
            icon: <FaEnvelope size={18} />,
            href: "mailto:abhishakesuresh06@gmail.com",
            label: "Email",
            hoverColor: "hover:text-cyan-400"
        }
    ];

    return (
        <footer className="relative z-10 bg-black/80 backdrop-blur-xl">
            {/* Gradient separator */}
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* Left - Branding */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <h3 className="text-lg font-semibold text-white tracking-tight">
                            Abhishake Suresh
                        </h3>
                        <p className="text-slate-500 text-sm">
                            QA Engineer • Test Automation Specialist
                        </p>
                    </div>

                    {/* Center - Social Links */}
                    <div className="flex items-center gap-1">
                        {socialLinks.map((link, idx) => (
                            <a
                                key={idx}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.label}
                                className={`p-3 rounded-xl text-slate-400 ${link.hoverColor} 
                                hover:bg-white/5 transition-all duration-300 hover:scale-110`}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>

                    {/* Right - Back to Top */}
                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 px-4 py-2 rounded-full 
                        bg-white/5 border border-white/10 text-slate-400 text-sm
                        hover:bg-white/10 hover:border-cyan-500/30 hover:text-white
                        transition-all duration-300"
                    >
                        <span>Back to top</span>
                        <FaArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                </div>

                {/* Bottom */}
                <div className="mt-10 pt-6 border-t border-white/5">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
                        <p>
                            © {currentYear} Abhishake Suresh. All rights reserved.
                        </p>
                        <p className="flex items-center gap-1.5">
                            Built with <FaHeart size={10} className="text-red-500 animate-pulse" /> and clean code
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
