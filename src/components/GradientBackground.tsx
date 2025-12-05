"use client";

export default function GradientBackground() {
    return (
        <div className="fixed inset-0 -z-10 pointer-events-none bg-black overflow-hidden">
            {/* Desktop only - gradient orbs */}
            <div className="hidden md:block">
                {/* Top left cyan glow */}
                <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px]" />

                {/* Center purple glow */}
                <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-purple-600/15 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />

                {/* Bottom right blue glow */}
                <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px]" />

                {/* Accent pink glow */}
                <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-pink-500/15 rounded-full blur-[100px]" />
            </div>
        </div>
    );
}
