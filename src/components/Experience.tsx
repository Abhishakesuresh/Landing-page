"use client";

import ScrollAnimation from "./ScrollAnimation";

const experiences = [
    {
        company: "Wipro",
        role: "Software Engineer (Automation & CI/CD)",
        period: "2024 – Present",
        location: "Hybrid",
        description: [
            "Designed a hybrid UI + API automation framework, reducing maintenance effort by 40%.",
            "Implemented parallel execution → 60% faster regression cycles.",
            "Developed API validation suites achieving 75% endpoint coverage.",
            "Integrated automation into Jenkins pipelines using Docker.",
            "Improved test reliability through RCA & synchronization tuning.",
            "Collaborated with Dev/QA/DevOps to support stable releases."
        ]
    },
    {
        company: "Wipro",
        role: "QA & DevOps Trainee",
        period: "Feb – Jun 2024",
        location: "Remote",
        description: [
            "Hands-on training in Selenium, REST Assured, Jenkins, Docker, Git & AWS.",
            "Built foundational UI & API automation tests.",
            "Configured Jenkins jobs for scheduled runs.",
            "Strengthened knowledge of debugging and test design patterns."
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-32 px-6 relative z-10 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-5xl mx-auto relative z-10">

                <ScrollAnimation>
                    <div className="mb-20">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                            PROFESSIONAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">EXPERIENCE</span>
                        </h2>
                        <p className="text-slate-400 text-lg font-light">
                            Building quality into every release.
                        </p>
                    </div>
                </ScrollAnimation>

                <div className="space-y-16">
                    {experiences.map((exp, idx) => (
                        <ScrollAnimation key={idx} delay={idx * 0.1}>
                            <div className="relative pl-8 md:pl-12 border-l-2 border-slate-700 hover:border-cyan-500/50 transition-colors duration-500 group">

                                {/* Timeline Node */}
                                <div className="absolute -left-[10px] top-0 w-5 h-5 rounded-full bg-slate-950 border-2 border-cyan-500 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all duration-300"></div>

                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                        {exp.company}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500 font-mono">
                                        <span className="text-cyan-400 font-semibold">{exp.role}</span>
                                        <span className="hidden sm:inline text-slate-700">|</span>
                                        <span>{exp.period}</span>
                                        <span className="hidden sm:inline text-slate-700">|</span>
                                        <span>{exp.location}</span>
                                    </div>
                                </div>

                                <div className="glass-panel p-8 bg-slate-900/30 border-slate-800/50">
                                    <ul className="space-y-4">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="flex items-start gap-4 text-slate-300 leading-relaxed group/item">
                                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-500/50 group-hover/item:bg-cyan-400 group-hover/item:shadow-[0_0_10px_rgba(6,182,212,0.8)] transition-all flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>

            </div>
        </section>
    );
}
