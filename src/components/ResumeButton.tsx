"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFileDownload, FaCheckCircle } from "react-icons/fa";
import { BiLoaderAlt } from "react-icons/bi";

interface ResumeButtonProps {
    compact?: boolean;
}

export default function ResumeButton({ compact = false }: ResumeButtonProps) {
    const [status, setStatus] = useState<"idle" | "generating" | "complete">("idle");

    const handlePrint = () => {
        if (status !== "idle") return;
        setStatus("generating");

        // Simulate generation time
        setTimeout(() => {
            setStatus("complete");

            // Trigger download
            const link = document.createElement("a");
            link.href = "/resume.pdf";
            link.download = "Abhishake_Suresh_Resume.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Reset
            setTimeout(() => {
                setStatus("idle");
            }, 3000);
        }, 2500);
    };

    return (
        <div className="relative inline-block group z-50">
            {/* The Digital Card (Hologram/Glass) */}
            <AnimatePresence>
                {status !== "idle" && (
                    <motion.div
                        initial={{ y: -20, opacity: 0, scale: 0.8, rotateX: -15 }}
                        animate={{
                            y: "110%",
                            opacity: 1,
                            scale: 1,
                            rotateX: 0,
                            transition: {
                                type: "spring",
                                stiffness: 120,
                                damping: 15,
                                mass: 1
                            }
                        }}
                        exit={{ opacity: 0, y: 50, transition: { duration: 0.3 } }}
                        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-64 h-80 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden origin-top"
                        style={{ perspective: "1000px", top: "100%" }}
                    >
                        {/* Scanline Effect */}
                        <motion.div
                            initial={{ top: "-10%" }}
                            animate={{ top: "120%" }}
                            transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                            className="absolute left-0 w-full h-2 bg-accent-silver/50 blur-sm shadow-[0_0_15px_rgba(207,174,157,0.8)] z-20"
                        />

                        {/* Content */}
                        <div className="p-5 flex flex-col h-full relative z-10">
                            {/* Header */}
                            <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                                <div className="text-[10px] font-mono text-accent-silver tracking-widest">SYSTEM_ID: 8X-29</div>
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            </div>

                            {/* Profile Preview */}
                            <div className="flex-1 flex flex-col items-center justify-center space-y-3 opacity-90">
                                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-2xl">
                                    QA
                                </div>
                                <div className="text-center">
                                    <div className="text-white font-bold text-sm">Abhishake Suresh</div>
                                    <div className="text-xs text-text-secondary">QA Automation Engineer</div>
                                </div>

                                {/* Tech Stack Grid */}
                                <div className="grid grid-cols-3 gap-1 w-full mt-2">
                                    {[...Array(6)].map((_, i) => (
                                        <div key={i} className="h-1 bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: "100%" }}
                                                transition={{ delay: 0.5 + (i * 0.1), duration: 0.5 }}
                                                className="h-full bg-accent-silver"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Footer Status */}
                            <div className="mt-auto pt-3 border-t border-white/10">
                                <div className="flex items-center justify-between text-[10px] font-mono">
                                    <span className="text-text-secondary">STATUS</span>
                                    <span className={`${status === 'complete' ? 'text-green-400' : 'text-accent-silver'}`}>
                                        {status === 'complete' ? 'DOWNLOADED' : 'GENERATING...'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Background Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] z-0 pointer-events-none"></div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* The Button */}
            <motion.button
                onClick={handlePrint}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative z-20 flex items-center gap-2 rounded-full font-semibold transition-all duration-500 shadow-lg overflow-hidden ${compact
                    ? "px-4 py-2 text-xs"
                    : "px-8 py-4 text-base"
                    } ${status !== "idle"
                        ? `bg-[#1c1c1e] text-white border border-accent-silver/30 shadow-accent-silver/10 justify-center ${compact ? "w-32" : "w-48"}`
                        : `bg-[#1c1c1e] text-white border border-white/10 hover:bg-[#2c2c2e] hover:border-white/20 justify-center ${compact ? "w-36" : "w-56"}`
                    }`}
            >
                <AnimatePresence mode="wait">
                    {status === "idle" && (
                        <motion.div
                            key="idle"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center gap-2"
                        >
                            <FaFileDownload className={compact ? "text-sm" : "text-lg"} />
                            <span>{compact ? "Resume" : "Download CV"}</span>
                        </motion.div>
                    )}

                    {status === "generating" && (
                        <motion.div
                            key="generating"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center gap-2"
                        >
                            <BiLoaderAlt className={`animate-spin text-accent-silver ${compact ? "text-sm" : "text-xl"}`} />
                            <span className="text-accent-silver">{compact ? "Wait..." : "Processing..."}</span>
                        </motion.div>
                    )}

                    {status === "complete" && (
                        <motion.div
                            key="complete"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center gap-2"
                        >
                            <FaCheckCircle className={`text-green-400 ${compact ? "text-sm" : "text-lg"}`} />
                            <span className="text-white">Done</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
}
