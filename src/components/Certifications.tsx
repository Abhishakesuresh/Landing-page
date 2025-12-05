"use client";

import ScrollAnimation from "./ScrollAnimation";

const certifications = [
    {
        title: "AWS & DevOps Training",
        issuer: "Greens Technology",
        year: "2024",
        id: "CERT-001"
    },
    {
        title: "Automation Testing",
        issuer: "Wipro Internal",
        year: "2023",
        id: "CERT-002"
    },
    {
        title: "Selenium with Java",
        issuer: "Udemy",
        year: "2023",
        id: "CERT-003"
    },
    {
        title: "Python Programming",
        issuer: "FIIT",
        year: "2022",
        id: "CERT-004"
    }
];

export default function Certifications() {
    return (
        <section id="certifications" className="py-20 md:py-32 px-6 relative z-10">
            <div className="max-w-5xl mx-auto">

                <ScrollAnimation>
                    <div className="mb-10 md:mb-16 text-center">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight">
                            CREDENTIALS <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">DATABASE</span>
                        </h2>
                    </div>
                </ScrollAnimation>

                <div className="glass-panel overflow-hidden border-slate-800">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-900/80 border-b border-slate-700 text-slate-400 text-xs font-bold uppercase tracking-[0.1em] font-mono">
                                    <th className="p-6">ID</th>
                                    <th className="p-6">Certification Name</th>
                                    <th className="p-6">Issuing Authority</th>
                                    <th className="p-6 text-right">Year</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800">
                                {certifications.map((cert, idx) => (
                                    <tr key={idx} className="hover:bg-white/5 transition-colors group">
                                        <td className="p-6 text-slate-600 font-mono text-xs group-hover:text-orange-400 transition-colors">
                                            {cert.id}
                                        </td>
                                        <td className="p-6 font-bold text-slate-200 group-hover:text-white transition-colors text-lg">
                                            {cert.title}
                                        </td>
                                        <td className="p-6 text-slate-400 text-sm font-mono">
                                            {cert.issuer}
                                        </td>
                                        <td className="p-6 text-slate-500 text-right font-mono text-sm group-hover:text-orange-400">
                                            {cert.year}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </section>
    );
}
