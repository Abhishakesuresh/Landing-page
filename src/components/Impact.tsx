"use client";

import ScrollAnimation from "./ScrollAnimation";

const metrics = [
    {
        label: "Regression Time Improved",
        value: "40%",
        subtext: "via parallel execution",
        color: "from-cyan-400 to-blue-500"
    },
    {
        label: "Automation Coverage",
        value: "65%",
        subtext: "UI + API combined",
        color: "from-blue-400 to-indigo-500"
    },
    {
        label: "Flaky Tests Reduced",
        value: "50%",
        subtext: "better waits & locators",
        color: "from-orange-400 to-red-400"
    },
    {
        label: "CI/CD Integration",
        value: "100%",
        subtext: "pipeline automation",
        color: "from-purple-400 to-pink-500"
    },
    {
        label: "API Reliability",
        value: "85%",
        subtext: "schema validation applied",
        color: "from-emerald-400 to-teal-500"
    }
];

export default function Impact() {
    return (
        <section id="impact" className="py-20 md:py-32 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <ScrollAnimation>
                    <div className="text-center mb-12 md:mb-20">
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
                            MEASURABLE <br className="md:hidden" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                                IMPACT
                            </span>
                        </h2>

                        <p className="text-slate-400 text-base md:text-lg max-w-2xl md:mx-auto mt-4">
                            Practical improvements achieved through clean automation, stable execution, and reliable pipelines.
                        </p>
                    </div>
                </ScrollAnimation>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {metrics.map((metric, idx) => (
                        <ScrollAnimation key={idx} delay={idx * 0.1}>
                            <div
                                className="glass-panel p-10 rounded-2xl border border-white/10 backdrop-blur-xl 
                                hover:bg-white/[0.03] transition-all duration-300"
                            >
                                {/* Value */}
                                <div
                                    className={`text-5xl font-extrabold text-transparent bg-clip-text 
                                    bg-gradient-to-r ${metric.color} mb-3`}
                                >
                                    {metric.value}
                                </div>

                                {/* Label */}
                                <h3 className="text-lg text-white font-semibold tracking-wide mb-1">
                                    {metric.label}
                                </h3>

                                {/* Subtext */}
                                <p className="text-sm text-slate-400 tracking-wide font-light uppercase">
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
