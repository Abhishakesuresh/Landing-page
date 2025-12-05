"use client";

import ScrollAnimation from "./ScrollAnimation";
import { FaEnvelope, FaLinkedin, FaGithub, FaArrowRight, FaFileDownload } from "react-icons/fa";

export default function Contact() {

    const contactItems = [
        {
            icon: <FaEnvelope />,
            label: "Email",
            value: "abhishakesuresh06@gmail.com",
            href: "mailto:abhishakesuresh06@gmail.com",
            gradient: "from-cyan-400 to-blue-500"
        },
        {
            icon: <FaLinkedin />,
            label: "LinkedIn",
            value: "linkedin.com/in/abhishakesuresh",
            href: "https://www.linkedin.com/in/abhishakesuresh/",
            gradient: "from-blue-500 to-purple-500"
        },
        {
            icon: <FaGithub />,
            label: "GitHub",
            value: "github.com/abhishakesuresh",
            href: "https://github.com/abhishakesuresh",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            icon: <FaFileDownload />,
            label: "Resume",
            value: "Download Resume",
            href: "/resume.pdf",
            gradient: "from-emerald-400 to-teal-500"
        }
    ];

    return (
        <section id="contact" className="py-32 px-6 relative z-10">

            {/* Background fade */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-black pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">

                {/* Header */}
                <ScrollAnimation>
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                            Get in Touch
                        </h2>
                        <p className="text-slate-400 max-w-xl mx-auto text-lg mt-4">
                            Always open to new opportunities, discussions, and collaborations.
                        </p>
                    </div>
                </ScrollAnimation>

                {/* Main CTA */}
                <ScrollAnimation delay={0.1}>
                    <div className="rounded-2xl p-10 mb-20 bg-slate-900/40 border border-white/10 backdrop-blur-xl shadow-xl shadow-black/20">

                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                            <div>
                                <h3 className="text-3xl font-semibold text-white mb-3">
                                    Let’s collaborate or connect
                                </h3>
                                <p className="text-slate-400 max-w-md leading-relaxed">
                                    Whether you have an opportunity to discuss or a question about automation,
                                    feel free to reach out.
                                </p>
                            </div>

                            <a
                                href="mailto:abhishakesuresh06@gmail.com"
                                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:scale-105 transition-transform"
                            >
                                Contact Me
                                <FaArrowRight size={14} />
                            </a>

                        </div>
                    </div>
                </ScrollAnimation>

                {/* Contact Cards — Clean Minimal Design */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {contactItems.map((item, idx) => (
                        <ScrollAnimation key={idx} delay={0.2 + idx * 0.1}>
                            <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block p-6 rounded-xl bg-white/[0.03] border border-white/10 
                                hover:bg-white/[0.06] hover:border-white/20 hover:scale-[1.02]
                                transition-all duration-300 ease-out"
                            >
                                <div className="flex items-center gap-4">
                                    {/* Icon */}
                                    <div
                                        className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl
                                        bg-gradient-to-br ${item.gradient} text-white shadow-lg 
                                        group-hover:shadow-xl group-hover:scale-105 transition-all duration-300`}
                                    >
                                        {item.icon}
                                    </div>

                                    {/* Text */}
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase tracking-wider font-medium mb-1">
                                            {item.label}
                                        </p>
                                        <p className="text-sm text-white font-medium group-hover:text-cyan-400 transition-colors">
                                            {item.value}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </ScrollAnimation>
                    ))}
                </div>

                {/* Availability */}
                <ScrollAnimation delay={0.5}>
                    <div className="mt-16 text-center text-slate-400 text-sm">
                        Open to opportunities worldwide
                    </div>
                </ScrollAnimation>

            </div>
        </section>
    );
}
