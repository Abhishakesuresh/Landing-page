"use client";

import Link from "next/link";
import { FaHome, FaArrowLeft, FaExclamationTriangle } from "react-icons/fa";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-black flex items-center justify-center px-6 relative overflow-hidden">

            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-purple-500/5" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 text-center max-w-lg">

                {/* Icon */}
                <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10">
                    <FaExclamationTriangle className="text-4xl text-cyan-400" />
                </div>

                {/* 404 Text */}
                <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mb-4">
                    404
                </h1>

                {/* Message */}
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                    Page Not Found
                </h2>
                <p className="text-slate-400 mb-10 leading-relaxed">
                    Oops! The page you're looking for doesn't exist or has been moved.
                    Let's get you back on track.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:scale-105 transition-transform"
                    >
                        <FaHome size={16} />
                        Go Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all"
                    >
                        <FaArrowLeft size={14} />
                        Go Back
                    </button>
                </div>

                {/* Decorative line */}
                <div className="mt-16 h-px w-48 mx-auto bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

            </div>
        </main>
    );
}
