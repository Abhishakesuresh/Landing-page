"use client";

import ScrollAnimation from "./ScrollAnimation";

const skillCategories = [
    {
        title: "Automation Frameworks",
        skills: ["Selenium", "Playwright", "TestNG", "JUnit", "Maven", "Allure Reports"],
        color: "border-cyan-500/50 text-cyan-400"
    },
    {
        title: "API Testing & Validation",
        skills: ["REST Assured", "Postman", "Swagger", "JSON Schema Validation"],
        color: "border-purple-500/50 text-purple-400"
    },
    {
        title: "CI/CD & DevOps",
        skills: ["Jenkins", "Docker", "GitHub Actions", "AWS EC2"],
        color: "border-blue-500/50 text-blue-400"
    },
    {
        title: "Programming & Databases",
        skills: ["Java", "Python", "TypeScript", "MySQL", "MongoDB"],
        color: "border-emerald-500/50 text-emerald-400"
    },
    {
        title: "Quality Engineering Practices",
        skills: ["RCA", "Test Strategy", "Requirements Traceability", "Agile/Scrum", "Observability-driven testing"],
        color: "border-orange-500/50 text-orange-400"
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-32 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">

                <ScrollAnimation>
                    <div className="mb-20">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                            TECHNICAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">ARSENAL</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl text-lg font-light">
                            High-performance tools for building resilient automation ecosystems.
                        </p>
                    </div>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <ScrollAnimation key={idx} delay={idx * 0.1}>
                            <div className="glass-panel p-8 h-full group relative overflow-hidden">

                                {/* Neon Accent Line */}
                                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-current to-transparent opacity-50 group-hover:opacity-100 transition-opacity ${category.color.split(' ')[1]}`}></div>

                                <h3 className={`text-xl font-bold mb-6 font-mono tracking-wide ${category.color.split(' ')[1]}`}>
                                    {category.title}
                                </h3>

                                <div className="flex flex-wrap gap-3">
                                    {category.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1.5 text-xs font-semibold bg-slate-950/50 text-slate-300 border border-slate-800 rounded hover:border-white/20 hover:text-white hover:bg-slate-800 transition-all cursor-crosshair font-mono"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>

            </div>
        </section>
    );
}
