"use client";

import ScrollAnimation from "./ScrollAnimation";
import { FaEnvelope, FaLinkedin, FaGithub, FaArrowRight, FaFileDownload } from "react-icons/fa";

export default function Contact() {

    const contactItems = [
        {
            icon: <FaEnvelope />,
            label: "Email",
            value: "abhishake.suresh@gmail.com",
            href: "mailto:abhishake.suresh@gmail.com",
            gradient: "from-cyan-400 to-blue-500"
        },
        {
            icon: <FaLinkedin />,
            label: "LinkedIn",
            value: "Abhishake Suresh",
            href: "https://www.linkedin.com/in/abhishakesuresh/",
            gradient: "from-blue-500 to-purple-500"
        },
        {
            icon: <FaGithub />,
            label: "GitHub",
            value: "Abhishake Suresh",
            href: "https://github.com/abhishakesuresh",
            gradient: "from-purple-500 to-pink-500"
        },

    ];

    return (
        <section id="contact" className="py-20 md:py-32 px-6 relative z-10">



            <div className="max-w-5xl mx-auto relative z-10">

                {/* Header */}
                <ScrollAnimation>
                    <div className="text-center mb-12 md:mb-20">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                            Get in <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Touch</span>
                        </h2>
                        <p className="text-slate-400 max-w-xl md:mx-auto text-base md:text-lg mt-4">
                            Always open to new opportunities, discussions, and collaborations.
                        </p>
                    </div>
                </ScrollAnimation>

                {/* Main CTA */}


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



            </div>
        </section>
    );
}
