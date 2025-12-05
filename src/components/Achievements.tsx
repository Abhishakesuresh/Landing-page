"use client";

import ScrollAnimation from "./ScrollAnimation";

const achievements = [
    {
        title: "Regression Execution: 10 hrs → 4 hrs",
        description: "Optimized framework + parallel execution reduced regression cycle by 60%."
    },
    {
        title: "Automation Coverage: 40% → 78%",
        description: "Expanded UI + API automation with stable reusable modules."
    },
    {
        title: "Flaky Tests Reduced by 70%",
        description: "Refactored waits, eliminated brittle selectors, and implemented retry logic."
    },
    {
        title: "CI/CD Pipeline Speed: +45% Faster",
        description: "Integrated GitHub Actions + caching + parallel jobs."
    },
    {
        title: "API Test Stability Improved by 90%",
        description: "Used schema validation + layered request builders."
    }
];

export default function Achievements() {
    return (
        <section id="achievements" className="py-20 md:py-32 px-6 relative z-10">
            <div className="max-w-5xl mx-auto">

                <ScrollAnimation>
                    <div className="mb-12 md:mb-20 text-center">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight">
                            KEY <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">ACHIEVEMENTS</span>
                        </h2>
                        <p className="text-slate-400 text-base md:text-lg font-light">
                            Impact that recruiters love — measurable results in quality engineering.
                        </p>
                    </div>
                </ScrollAnimation>

                <div className="glass-panel p-8 md:p-12 relative overflow-hidden bg-slate-900/40">
                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none"></div>

                    <ul className="space-y-6 relative z-10">
                        {achievements.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-6 text-lg font-medium text-slate-300 group cursor-default p-4 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/5">
                                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 text-sm font-bold flex-shrink-0 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-black group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300 font-mono">
                                    0{idx + 1}
                                </span>
                                <div>
                                    <div className="font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                                        {item.title}
                                    </div>
                                    <div className="text-sm text-slate-400 tracking-wide">
                                        {item.description}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
}
