"use client";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="py-16 border-t border-white/10 bg-black relative z-10">
            <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-6">

                {/* Name / Branding */}
                <div className="text-center">
                    <h3 className="text-xl font-semibold text-white tracking-tight">
                        Abhishake Suresh
                    </h3>
                    <p className="text-slate-500 text-sm mt-2">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>

                {/* Social Icons */}
                <div className="flex gap-8">
                    <a
                        href="https://linkedin.com/in/abhishakesuresh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                    >
                        <FaLinkedin size={22} />
                    </a>

                    <a
                        href="https://github.com/abhishakesuresh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                    >
                        <FaGithub size={22} />
                    </a>

                    <a
                        href="mailto:abhishakesuresh06@gmail.com"
                        className="text-slate-400 hover:text-white transition-colors"
                    >
                        <FaEnvelope size={22} />
                    </a>
                </div>

                {/* Subtle line */}
                <div className="w-full h-px bg-white/5 mt-4" />

                {/* Footer Note */}
                <p className="text-xs text-slate-600 text-center mt-2 tracking-wide">
                    Built with clean design & minimalism.
                </p>
            </div>
        </footer>
    );
}
