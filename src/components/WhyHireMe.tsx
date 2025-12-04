"use client";

import ScrollAnimation from "./ScrollAnimation";

const reasons = [
    "Build for Scale — Automation that grows with the product",
    "Reliability First — Predictable, stable execution",
    "CI/CD Alignment — Automation integrated with pipelines",
    "Clean Architecture — Modular, reusable, maintainable",
    "Shift-Left Quality — Detect issues early",
    "Collaborative Ownership — Strong alignment with Dev, QA, DevOps",
    "Continuous Improvement — Refactor, optimize, evolve"
];

export default function WhyHireMe() {
    return (
        <section id="why-hire-me" className="py-32 px-6 relative z-10 overflow-hidden">

            <div className="max-w-5xl mx-auto relative z-10">

                <ScrollAnimation>
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">
                            ENGINEERING <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">PRINCIPLES</span>
                        </h2>
                    </div>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {reasons.map((reason, idx) => (
                        <ScrollAnimation key={idx} delay={idx * 0.1}>
                            <div className="flex items-start gap-6 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 hover:bg-slate-900/80 transition-all duration-300 group h-full">
                                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center flex-shrink-0 border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-black group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all">
                                    ✓
                                </div>
                                <p className="text-lg text-slate-300 leading-relaxed font-medium group-hover:text-white transition-colors">
                                    {reason}
                                </p>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>

            </div>
        </section>
    );
}
