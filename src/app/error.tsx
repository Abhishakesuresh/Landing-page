"use client";

import { useEffect } from "react";
import { FaRedo, FaHome, FaBug } from "react-icons/fa";
import Link from "next/link";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Application Error:", error);
    }, [error]);

    return (
        <main className="min-h-screen bg-black flex items-center justify-center px-6 relative overflow-hidden">

            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-transparent to-orange-500/5" />
            <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-red-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 text-center max-w-lg">

                {/* Icon */}
                <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-white/10 animate-pulse">
                    <FaBug className="text-4xl text-red-400" />
                </div>

                {/* Error Text */}
                <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 mb-4">
                    Oops!
                </h1>

                {/* Message */}
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                    Something Went Wrong
                </h2>
                <p className="text-slate-400 mb-10 leading-relaxed">
                    An unexpected error occurred. Don't worry, it happens to the best of us.
                    Try again or head back home.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={() => reset()}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-red-400 to-orange-500 text-black font-semibold hover:scale-105 transition-transform"
                    >
                        <FaRedo size={14} />
                        Try Again
                    </button>

                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all"
                    >
                        <FaHome size={16} />
                        Go Home
                    </Link>
                </div>

                {/* Error digest for debugging */}
                {error.digest && (
                    <p className="mt-10 text-xs text-slate-600 font-mono">
                        Error ID: {error.digest}
                    </p>
                )}

                {/* Decorative line */}
                <div className="mt-10 h-px w-48 mx-auto bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

            </div>
        </main>
    );
}
