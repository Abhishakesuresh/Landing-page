"use client";

import ScrollAnimation from "./ScrollAnimation";
import { FaGithub, FaExternalLinkAlt, FaCode, FaTerminal } from "react-icons/fa";

const projects = [
    {
        title: "Enterprise Automation Framework",
        subtitle: "(Flagship Project)",
        description: "A scalable, modular automation framework supporting UI, API, and CI execution.",
        tech: ["Java", "Selenium", "TestNG", "Maven", "GitHub Actions", "Docker"],
        features: [
            "Page Object Model + Data-driven design",
            "API integration layer (REST Assured)",
            "Centralized reporting (Allure)",
            "Parallel test execution",
            "Dockerized test runs"
        ],
        impact: [
            "Cut execution time by 60%",
            "Increased release reliability",
            "Eliminated flaky tests across 3 modules"
        ],
        link: "#",
        status: "FLAGSHIP"
    },
    {
        title: "CI/CD Pipeline",
        subtitle: "for Automated Testing",
        description: "A fully automated pipeline that triggers tests on every commit.",
        tech: ["GitHub Actions", "Docker", "Maven", "Linux"],
        features: [
            "Build → Test → Report → Deploy",
            "Parallel matrix execution",
            "Docker container execution",
            "Slack/Email notifications"
        ],
        impact: [
            "45% faster deployment cycles",
            "Fully automated QA approvals"
        ],
        link: "#",
        status: "ACTIVE"
    },
    {
        title: "API Automation Suite",
        subtitle: "",
        description: "A robust API test suite covering Auth, Integrations, Business workflows, and Error handling.",
        tech: ["REST Assured", "Java", "JSON Schema Validator"],
        features: [
            "Authentication flows",
            "Integration testing",
            "Business logic validation",
            "Error handling scenarios"
        ],
        impact: [
            "90% stability improvement",
            "Detects breaking changes instantly via CI"
        ],
        link: "#",
        status: "DEPLOYED"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 md:py-32 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">

                <ScrollAnimation>
                    <div className="mb-12 md:mb-20 text-center">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                            FEATURED <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">PROJECTS</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl md:mx-auto text-base md:text-lg font-light">
                            With depth + impact + tech stack
                        </p>
                    </div>
                </ScrollAnimation>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

                                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors font-mono">
                                            {project.title}
                                        </h3>
                                        {project.subtitle && (
                                            <p className="text-sm text-cyan-400 mb-3 font-mono">{project.subtitle}</p>
                                        )}
                                        <p className="text-slate-400 leading-relaxed mb-6 text-sm">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack */}
                                        <div className="mb-6">
                                            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Tech Stack</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tech.map((tech) => (
                                                    <span key={tech} className="px-2 py-1 bg-slate-900 text-slate-500 text-[10px] font-bold uppercase tracking-wider rounded border border-slate-800 font-mono group-hover:border-purple-500/20 group-hover:text-purple-300 transition-colors">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Features */}
                                        <div className="mb-6">
                                            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Key Features</h4>
                                            <ul className="space-y-1">
                                                {project.features.map((feature, idx) => (
                                                    <li key={idx} className="text-xs text-slate-400 flex items-start gap-2">
                                                        <span className="text-cyan-500 mt-0.5">▸</span>
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Impact */}
                                        <div className="mb-6">
                                            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">Impact</h4>
                                            <ul className="space-y-1">
                                                {project.impact.map((item, idx) => (
                                                    <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                                                        <span className="text-emerald-400 mt-0.5">✓</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <a
                                        href={project.link}
                                        className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-purple-400 transition-colors group/link font-mono"
                                    >
                                        &gt; VIEW_SOURCE_CODE <span className="group-hover/link:translate-x-1 transition-transform">_</span>
                                    </a>
                                </div>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>

            </div>
        </section>
    );
}
