"use client";

import ScrollAnimation from "./ScrollAnimation";

const principles = [
    {
        text: "Agile collaboration across Dev, QA, Product",
        icon: "⚡"
    },
    {
        text: "Structured defect triage & RCA",
        icon: "🔍"
    },
    {
        text: "CI/CD-enabled continuous testing",
        icon: "🔄"
    },
    {
        text: "Quality-focused mindset",
        icon: "📈"
    },
    {
        text: "Efficient test planning and grooming",
        icon: "📋"
    }
];

export default function Collaboration() {
    return (
        <section id="collaboration" className="py-20 md:py-32 px-6 relative z-10">
            <div className="max-w-5xl mx-auto">

                <ScrollAnimation>
                    <div className="mb-12 md:mb-20 text-center">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight">
                            WORK <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">PRINCIPLES</span>
                        </h2>
                        <p className="text-slate-400 text-base md:text-lg font-light">
                            Collaborative protocols for high-velocity engineering teams.
                        </p>
                    </div>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {principles.map((item, idx) => (
                        <ScrollAnimation key={idx} delay={idx * 0.1}>
                            <div className="glass-panel p-8 flex items-start gap-6 hover:border-pink-500/30 group transition-all duration-300">
                                <span className="text-4xl group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(236,72,153,0.3)]">
                                    {item.icon}
                                </span>
                                <p className="text-slate-300 font-medium leading-relaxed group-hover:text-white text-lg">
                                    {item.text}
                                </p>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>

            </div>
        </section>
    );
}
