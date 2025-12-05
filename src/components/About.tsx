"use client";
import ScrollAnimation from "./ScrollAnimation";

export default function About() {
    return (
        <section id="about" className="py-20 md:py-32 px-6 relative z-10">
            <div className="max-w-5xl mx-auto">

                {/* Section Header */}
                <ScrollAnimation>
                    <div className="mb-12 md:mb-16 text-center">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight">
                            ABOUT <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">ME</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl md:mx-auto text-base md:text-lg font-light">
                            I build clean, stable, and reliable automation that helps teams move faster with confidence.
                        </p>
                    </div>
                </ScrollAnimation>

                {/* Main About Panel */}
                <ScrollAnimation delay={0.1}>
                    <div className="glass-panel p-8 md:p-12 relative overflow-hidden">
                        <div className="text-lg text-slate-400 leading-relaxed space-y-6">

                            <p>
                                I'm an <span className="text-cyan-400 font-semibold">Automation Engineer</span> who approaches testing with a developer mindset.
                                I focus on writing maintainable automation, improving execution stability, and building systems that reduce manual effort.
                            </p>

                            <p>
                                With <strong className="text-white">1.5+ years of hands-on experience</strong>, I have worked across UI automation,
                                API testing, and CI/CD integration—creating workflows that support fast and reliable releases.
                            </p>

                            {/* Key Highlights */}
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                <li className="flex items-start gap-3 text-slate-300">
                                    <span className="text-cyan-400 mt-1">▸</span>
                                    <span>
                                        <strong className="text-white">Building scalable automation</strong> using Selenium, Playwright & REST Assured
                                    </span>
                                </li>

                                <li className="flex items-start gap-3 text-slate-300">
                                    <span className="text-cyan-400 mt-1">▸</span>
                                    <span>
                                        <strong className="text-white">Writing clean, readable code</strong> following reusable patterns
                                    </span>
                                </li>

                                <li className="flex items-start gap-3 text-slate-300">
                                    <span className="text-cyan-400 mt-1">▸</span>
                                    <span>
                                        <strong className="text-white">Improving test reliability</strong> by reducing flaky tests & execution failures
                                    </span>
                                </li>

                                <li className="flex items-start gap-3 text-slate-300">
                                    <span className="text-cyan-400 mt-1">▸</span>
                                    <span>
                                        <strong className="text-white">Integrating automation</strong> with GitHub Actions & Jenkins pipelines
                                    </span>
                                </li>

                                <li className="flex items-start gap-3 text-slate-300">
                                    <span className="text-cyan-400 mt-1">▸</span>
                                    <span>
                                        <strong className="text-white">Supporting faster releases</strong> with parallel execution & stable test suites
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Quote / Highlight */}
                        <div className="mt-8 pt-8 border-t border-white/10">
                            <p className="text-xl font-medium text-white/90 italic border-l-4 border-cyan-500 pl-6 py-2">
                                My goal is simple: build automation that brings reliability, speed, and clarity to the development process.
                            </p>
                        </div>
                    </div>
                </ScrollAnimation>

            </div>
        </section>
    );
}
