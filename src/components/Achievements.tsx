"use client";

import ScrollAnimation from "./ScrollAnimation";

const achievements = [
    "Improved regression speed by 60%",
    "Achieved 75% automation coverage",
    "Built CI/CD-ready automation using Docker",
    "Reduced flakiness via RCA & refactoring",
    "Enabled cross-browser testing via Selenium Grid"
];

export default function Achievements() {
    return (
        <section id="achievements" className="py-32 px-6 relative z-10">
            <div className="max-w-5xl mx-auto">

                <ScrollAnimation>
                    <div className="mb-20 text-center">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                            KEY <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">ACHIEVEMENTS</span>
                        </h2>
                        <p className="text-slate-400 text-lg font-light">
                            Milestones in quality assurance and automation.
                        </p>
                    </div>
                </ScrollAnimation>

                <div className="glass-panel p-8 md:p-12 relative overflow-hidden bg-slate-900/40">
                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none"></div>

                    <ul className="space-y-6 relative z-10">
                        {achievements.map((item, idx) => (
                            <ScrollAnimation key={idx} delay={idx * 0.1}>
                                <li className="flex items-center gap-6 text-lg font-medium text-slate-300 group cursor-default p-4 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/5">
                                    <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 text-sm font-bold flex-shrink-0 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-black group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300 font-mono">
                                        0{idx + 1}
                                    </span>
                                    <span className="group-hover:text-white transition-colors tracking-wide">
                                        {item}
                                    </span>
                                </li>
                            </ScrollAnimation>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
}
