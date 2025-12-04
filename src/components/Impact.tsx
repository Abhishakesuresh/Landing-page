"use client";

import ScrollAnimation from "./ScrollAnimation";

const metrics = [
    {
        label: "Regression Speed",
        value: "60%",
        subtext: "Faster regression execution (10h → 4h)",
        color: "text-cyan-400",
        border: "border-cyan-500/30",
        shadow: "shadow-cyan-500/20"
    },
    {
        label: "Automation Coverage",
        value: "75%",
        subtext: "Automation coverage across UI/API",
        color: "text-blue-400",
        border: "border-blue-500/30",
        shadow: "shadow-blue-500/20"
    },
    {
        label: "Maintenance Effort",
        value: "40%",
        subtext: "Reduced maintenance effort (Modular POM)",
        color: "text-orange-400",
        border: "border-orange-500/30",
        shadow: "shadow-orange-500/20"
    },
    {
        label: "CI/CD Stability",
        value: "100%",
        subtext: "CI/CD stability (Dockerized runs)",
        color: "text-white",
        border: "border-white/30",
        shadow: "shadow-white/10"
    },
    {
        label: "UI Scenarios",
        value: "120+",
        subtext: "Automated UI flows",
        color: "text-purple-400",
        border: "border-purple-500/30",
        shadow: "shadow-purple-500/20"
    },
    {
        label: "API Validations",
        value: "40+",
        subtext: "API validations",
        color: "text-emerald-400",
        border: "border-emerald-500/30",
        shadow: "shadow-emerald-500/20"
    }
];

export default function Impact() {
    return (
        <section id="impact" className="py-32 px-6 relative z-10">

            <div className="max-w-7xl mx-auto relative z-10">

                <ScrollAnimation>
                    <div className="text-center mb-20">
                        <div className="inline-block px-4 py-1 mb-6 bg-slate-900 border border-slate-800 rounded-full">
                            <span className="text-xs font-bold text-cyan-500 uppercase tracking-[0.2em] font-mono animate-pulse">
                                Engineering Impact
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                            ENGINEERING <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">IMPACT</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
                            Measurable results strengthening quality and delivery
                        </p>
                    </div>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {metrics.map((metric, idx) => (
                        <ScrollAnimation key={idx} delay={idx * 0.1}>
                            <div className={`glass-panel p-8 h-full flex flex-col justify-center items-center text-center group hover:border-opacity-100 transition-all duration-500 ${metric.border}`}>
                                <div className={`text-6xl font-black mb-4 font-mono tracking-tighter ${metric.color} drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-300`}>
                                    {metric.value}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 tracking-wide">
                                    {metric.label}
                                </h3>
                                <p className="text-xs text-slate-400 font-mono uppercase tracking-wider bg-slate-900/80 px-3 py-1 rounded border border-slate-800">
                                    {metric.subtext}
                                </p>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>

            </div>
        </section>
    );
}
