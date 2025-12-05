"use client";

import React, { useEffect, useRef, useState } from "react";

interface Star {
    x: number;
    y: number;
    z: number;
    size: number;
    opacity: number;
}

const Starfield = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Detect mobile device
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let stars: Star[] = [];
        let lastTime = 0;
        const FPS = 30; // Limit to 30 FPS for better performance
        const frameInterval = 1000 / FPS;

        // Configuration - reduced for mobile
        const STAR_COUNT = isMobile ? 100 : 200; // Reduced star count
        const SPEED = 0.03; // Slower speed
        const DEPTH = 1000;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const initStars = () => {
            stars = [];
            for (let i = 0; i < STAR_COUNT; i++) {
                stars.push({
                    x: (Math.random() - 0.5) * canvas.width * 2,
                    y: (Math.random() - 0.5) * canvas.height * 2,
                    z: Math.random() * DEPTH,
                    size: Math.random() * 1.2,
                    opacity: Math.random() * 0.8,
                });
            }
        };

        const draw = (currentTime: number) => {
            if (!ctx || !canvas) return;

            // Throttle frame rate
            const elapsed = currentTime - lastTime;
            if (elapsed < frameInterval) {
                animationFrameId = requestAnimationFrame(draw);
                return;
            }
            lastTime = currentTime - (elapsed % frameInterval);

            // Clear canvas
            ctx.fillStyle = "#000000";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const cx = canvas.width / 2;
            const cy = canvas.height / 2;

            stars.forEach((star) => {
                star.z -= SPEED * 10;

                if (star.z <= 0) {
                    star.z = DEPTH;
                    star.x = (Math.random() - 0.5) * canvas.width * 2;
                    star.y = (Math.random() - 0.5) * canvas.height * 2;
                }

                const k = 128.0 / star.z;
                const px = star.x * k + cx;
                const py = star.y * k + cy;

                const size = (1 - star.z / DEPTH) * 2 * star.size;
                const opacity = (1 - star.z / DEPTH) * star.opacity;

                if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
                    ctx.beginPath();
                    ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
                    ctx.arc(px, py, size, 0, Math.PI * 2);
                    ctx.fill();
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        resizeCanvas();
        initStars();
        animationFrameId = requestAnimationFrame(draw);

        const handleResize = () => {
            resizeCanvas();
            initStars();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("resize", checkMobile);
        };
    }, [isMobile]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none bg-black"
            style={{ willChange: "auto" }}
        />
    );
};

export default Starfield;
