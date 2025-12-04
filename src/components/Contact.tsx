"use client";

import ScrollAnimation from "./ScrollAnimation";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="py-32 px-6 relative z-10 border-t border-slate-900">
            <div className="max-w-7xl mx-auto">

                <ScrollAnimation>
                    <div className="mb-20 text-center">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                            ESTABLISH <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">CONNECTION</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
                            Open to freelance, full-time, and hybrid/remote automation roles.
                        </p>
                    </div>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            icon: <FaEnvelope />,
                            label: "Email",
                            value: "abhishakesuresh06@gmail.com",
                            href: "mailto:abhishakesuresh06@gmail.com",
                            color: "text-red-400",
                            border: "hover:border-red-500/50",
                            shadow: "hover:shadow-red-500/20"
                        },
                        {
                            icon: <FaLinkedin />,
                            label: "LinkedIn",
                            value: "Abhishake Suresh",
                            href: "https://www.linkedin.com/in/abhishakesuresh/",
                            color: "text-blue-400",
                            border: "hover:border-blue-500/50",
                            shadow: "hover:shadow-blue-500/20"
                        },
                        {
                            icon: <FaGithub />,
                            label: "GitHub",
                            value: "@abhishakesuresh",
                            href: "https://github.com/abhishakesuresh",
                            color: "text-purple-400",
                            border: "hover:border-purple-500/50",
                            shadow: "hover:shadow-purple-500/20"
                        },
                        {
                            icon: <FaMapMarkerAlt />,
                            label: "Location",
                            value: "Chennai, India",
                            href: "https://www.google.com/maps/place/Chennai",
                            color: "text-emerald-400",
                            border: "hover:border-emerald-500/50",
                            shadow: "hover:shadow-emerald-500/20"
                        }
                    ].map((item, idx) => (
                        <ScrollAnimation key={idx} delay={idx * 0.1}>
                            <a
                                href={item.href}
                                target="_blank"
                                className={`glass-panel p-8 flex flex-col items-center text-center h-full group hover:-translate-y-2 transition-all duration-300 ${item.border} hover:shadow-lg`}
                            >
                                <div className={`w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center text-3xl mb-6 border border-slate-800 ${item.color} group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                                    {item.icon}
                                </div>
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-[0.15em] mb-3 font-mono">
                                    {item.label}
                                </span>
                                <span className="text-sm font-bold text-slate-200 break-all group-hover:text-white transition-colors font-mono">
                                    {item.value}
                                </span>
                            </a>
                        </ScrollAnimation>
                    ))}
                </div>

            </div>
        </section>
    );
}
