"use client";

import ScrollAnimation from "./ScrollAnimation";
import { FaGithub, FaExternalLinkAlt, FaCode, FaTerminal } from "react-icons/fa";

const projects = [
    {
        title: "Hybrid UI + API Automation Framework",
        description: "A modular POM-based framework supporting parallel runs, environment configs, and Allure reporting.",
        tech: ["Java", "Selenium", "TestNG", "Jenkins"],
        link: "#",
        status: "DEPLOYED"
    },
    {
        title: "REST API Automation Suite",
        description: "Comprehensive API suite covering functional, schema, and negative validations.",
        tech: ["REST Assured", "Postman", "Java"],
        link: "#",
        status: "ACTIVE"
    },
    {
        title: "Dockerized CI/CD Execution Pipeline",
        description: "Automated pipeline for build → test → report using containerized execution.",
        tech: ["Docker", "Jenkins", "GitHub Actions", "AWS"],
        link: "#",
        status: "ONLINE"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-32 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">

                <ScrollAnimation>
                    <div className="mb-20 flex items-end justify-between flex-wrap gap-4">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                                FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">PROJECTS</span>
                            </h2>
                            <p className="text-slate-400 max-w-2xl text-lg font-light">
                                Scalable solutions engineered for reliability.
                            </p>
                        </div>
                        <div className="hidden md:block px-4 py-2 bg-slate-900/50 border border-slate-800 rounded font-mono text-xs text-slate-500">
                            &gt; SELECT * FROM PORTFOLIO WHERE TYPE='ENGINEERING'
                        </div>
                    </div>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ScrollAnimation key={index} delay={index * 0.1}>
                            <div className="glass-panel p-0 h-full flex flex-col group relative overflow-hidden hover:border-purple-500/30">

                                {/* Header Bar */}
                                <div className="px-6 py-3 bg-slate-900/80 border-b border-white/5 flex justify-between items-center">
                                    <div className="flex gap-2">
                                        <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                                        <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                                        <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                                    </div>
                                    <span className="text-[10px] font-mono text-cyan-500/70 tracking-wider">
                                        {project.status}
                                    </span>
                                </div>

                                <div className="p-8 flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="p-3 bg-slate-800/50 text-purple-400 rounded-lg border border-purple-500/20 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                                                <FaTerminal size={20} />
                                            </div>
                                            <a
                                                href={project.link}
                                                className="text-slate-500 hover:text-white transition-colors"
                                            >
                                                <FaExternalLinkAlt size={16} />
                                            </a>
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors font-mono">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-400 leading-relaxed mb-8 text-sm">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tech.map((tech) => (
                                                <span key={tech} className="px-2 py-1 bg-slate-900 text-slate-500 text-[10px] font-bold uppercase tracking-wider rounded border border-slate-800 font-mono group-hover:border-purple-500/20 group-hover:text-purple-300 transition-colors">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <a
                                            href={project.link}
                                            className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-purple-400 transition-colors group/link font-mono"
                                        >
                                            &gt; VIEW_SOURCE_CODE <span className="group-hover/link:translate-x-1 transition-transform">_</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>

            </div>
        </section>
    );
}
