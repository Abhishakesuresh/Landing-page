"use client";

import { FaLinkedin, FaGithub, FaEnvelope, FaHeart, FaArrowUp } from "react-icons/fa";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            icon: <FaLinkedin size={16} />,
            href: "https://linkedin.com/in/abhishakesuresh",
            label: "LinkedIn",
            hoverColor: "hover:text-blue-400"
        },
        {
            icon: <FaGithub size={16} />,
            href: "https://github.com/abhishakesuresh",
            label: "GitHub",
            hoverColor: "hover:text-purple-400"
        },
        {
            icon: <FaEnvelope size={16} />,
            href: "mailto:abhishakesuresh06@gmail.com",
            label: "Email",
            hoverColor: "hover:text-cyan-400"
        }
    ];

    return (
        <footer className="relative z-10 bg-black">


            <div className="max-w-6xl mx-auto px-4 py-6 md:px-6 md:py-10">
                {/* Compact single row on mobile, expanded on desktop */}
                <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between md:gap-8">

                    {/* Branding - Compact on mobile */}
                    <div className="text-center md:text-left">
                        <h3 className="text-base md:text-lg font-semibold text-white tracking-tight">
                            Abhishake Suresh
                        </h3>
                        <p className="text-slate-500 text-xs md:text-sm hidden md:block">
                            QA Engineer • Test Automation Specialist
                        </p>
                    </div>

                    {/* Social Links - Smaller on mobile */}
                    <div className="flex items-center gap-0">
                        {socialLinks.map((link, idx) => (
                            <a
                                key={idx}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.label}
                                className={`p-2.5 md:p-3 rounded-lg text-slate-400 ${link.hoverColor} 
                                hover:bg-white/5 transition-all duration-300 hover:scale-110`}
                            >
                                {link.icon}
                            </a>
                        ))}

                        {/* Back to Top - Inline with social on mobile */}
                        <button
                            onClick={scrollToTop}
                            className="ml-2 p-2.5 rounded-lg text-slate-400 hover:text-white
                            hover:bg-white/5 transition-all duration-300 md:hidden"
                            aria-label="Back to top"
                        >
                            <FaArrowUp size={14} />
                        </button>
                    </div>

                    {/* Back to Top - Desktop only */}
                    <button
                        onClick={scrollToTop}
                        className="hidden md:flex group items-center gap-2 px-4 py-2 rounded-full 
                        bg-white/5 border border-white/10 text-slate-400 text-sm
                        hover:bg-white/10 hover:border-cyan-500/30 hover:text-white
                        transition-all duration-300"
                    >
                        <span>Back to top</span>
                        <FaArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                </div>

                {/* Bottom - More compact on mobile */}
                <div className="mt-4 pt-4 md:mt-8 md:pt-6 border-t border-white/5">
                    <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between text-[10px] md:text-xs text-slate-600">
                        <p>© {currentYear} Abhishake Suresh</p>
                        <p className="flex items-center gap-1">
                            Built with <FaHeart size={8} className="text-red-500" /> & clean code
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
