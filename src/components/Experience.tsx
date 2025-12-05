"use client";

import ScrollAnimation from "./ScrollAnimation";

const experiences = [
    {
        company: "Wipro",
        role: "Quality Engineer (Automation)",
        period: "Aug 2023 – Present",
        location: "Hybrid",
        description: [
            "Contributed to a Selenium + TestNG automation framework by building reusable utilities, stabilizing flaky modules, and improving execution reliability.",
            "Automated 80+ UI workflows using Page Object Model (POM) and modular components, improving test maintenance and reusability.",
            "Developed REST Assured API tests covering authentication, CRUD flows, validations, and error handling scenarios.",
            "Integrated automated test execution with GitHub Actions and Jenkins pipelines to support continuous testing.",
            "Improved regression execution speed by implementing parallel runs and optimizing waits.",
            "Reduced test instability by improving locators, implementing explicit waits, and refining retry logic.",
            "Collaborated with cross-functional teams to triage issues early and support sprint-based testing."
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 md:py-32 px-6 relative z-10 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-5xl mx-auto relative z-10">

                <ScrollAnimation>
                    <div className="mb-12 md:mb-20 text-center">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight">
                            PROFESSIONAL <br className="md:hidden" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                                EXPERIENCE
                            </span>
                        </h2>
                        <p className="text-slate-400 text-base md:text-lg font-light">
                            Practical automation experience — delivering stability, speed, and clarity to the testing process.
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
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-400 font-mono">
                                        <span className="text-cyan-400 font-semibold">{exp.role}</span>
                                        <span className="hidden sm:inline text-slate-700">|</span>
                                        <span>{exp.period}</span>
                                        <span className="hidden sm:inline text-slate-700">|</span>
                                        <span>{exp.location}</span>
                                    </div>
                                </div>

                                <div className="glass-panel p-8 bg-slate-900/30 border-slate-800/50">
                                    <h4 className="text-sm font-bold text-cyan-400 mb-4 uppercase tracking-wider">Key Contributions</h4>
                                    <ul className="space-y-4">
                                        {exp.description.map((item, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-4 text-slate-300 leading-relaxed group/item"
                                            >
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
