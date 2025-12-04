"use client";
import ScrollAnimation from "./ScrollAnimation";

export default function About() {
    return (
        <section id="about" className="py-32 px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">

                <div className="inline-block px-4 py-1 mb-8 bg-slate-900 border border-slate-800 rounded-full">
                    <span className="text-xs font-bold text-cyan-500 uppercase tracking-[0.2em] font-mono">
                        About Me
                    </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                    I’m an <span className="text-cyan-400">Automation Engineer</span> with 2 years of experience building end-to-end automation for enterprise-scale applications.
                </h2>

                <div className="text-lg text-slate-400 leading-relaxed mb-8 text-left max-w-2xl mx-auto space-y-4">
                    <p>My core focus is designing automation that is:</p>
                    <ul className="list-disc pl-6 space-y-2 marker:text-cyan-500">
                        <li><strong className="text-white">Scalable</strong> — modular, clean architecture</li>
                        <li><strong className="text-white">Reliable</strong> — predictable execution, minimal flakiness</li>
                        <li><strong className="text-white">CI/CD-driven</strong> — automation aligned with pipelines</li>
                        <li><strong className="text-white">Impact-oriented</strong> — measurable improvements to quality & velocity</li>
                    </ul>
                </div>

                <p className="text-xl font-medium text-white/90 italic border-l-4 border-cyan-500 pl-6 py-2 bg-white/5 rounded-r-lg max-w-2xl mx-auto">
                    “Quality is not an activity — it’s an engineering responsibility.”
                </p>

            </div>
        </section>
    );
}
