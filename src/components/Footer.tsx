"use client";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="py-12 relative z-10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-white font-mono mb-2">
                        <span className="text-cyan-500">&lt;</span>
                        AS_Labs
                        <span className="text-cyan-500">/&gt;</span>
                    </h3>
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} Abhishake Suresh. All systems nominal.
                    </p>
                </div>

                <div className="flex gap-6">
                    <a href="https://linkedin.com/in/abhishakesuresh" target="_blank" className="text-slate-500 hover:text-cyan-400 transition-colors">
                        <FaLinkedin size={20} />
                    </a>
                    <a href="https://github.com/abhishakesuresh" target="_blank" className="text-slate-500 hover:text-purple-400 transition-colors">
                        <FaGithub size={20} />
                    </a>
                    <a href="mailto:abhishakesuresh06@gmail.com" className="text-slate-500 hover:text-red-400 transition-colors">
                        <FaEnvelope size={20} />
                    </a>
                </div>

            </div>
        </footer>
    );
}
