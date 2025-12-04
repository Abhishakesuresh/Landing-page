"use client";

import React, { useEffect, useRef } from "react";

interface Star {
    x: number;
    y: number;
    z: number;
    size: number;
    opacity: number;
}

const Starfield = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let stars: Star[] = [];

        // Configuration
        const STAR_COUNT = 400; // Number of stars
        const SPEED = 0.05; // Speed of movement
        const DEPTH = 1000; // Depth of the field

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
                    size: Math.random() * 1.5,
                    opacity: Math.random(),
                });
            }
        };

        const draw = () => {
            if (!ctx || !canvas) return;

            // Clear canvas with a slight fade for trail effect (optional, currently full clear)
            ctx.fillStyle = "#000000";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Center of the screen
            const cx = canvas.width / 2;
            const cy = canvas.height / 2;

            stars.forEach((star) => {
                // Move star closer
                star.z -= SPEED * 10;

                // Reset star if it passes the screen
                if (star.z <= 0) {
                    star.z = DEPTH;
                    star.x = (Math.random() - 0.5) * canvas.width * 2;
                    star.y = (Math.random() - 0.5) * canvas.height * 2;
                }

                // Project 3D coordinates to 2D
                const k = 128.0 / star.z;
                const px = star.x * k + cx;
                const py = star.y * k + cy;

                // Calculate size and opacity based on depth
                const size = (1 - star.z / DEPTH) * 2.5 * star.size;
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

        // Initialize
        resizeCanvas();
        initStars();
        draw();

        window.addEventListener("resize", () => {
            resizeCanvas();
            initStars();
        });

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none bg-black"
        />
    );
};

export default Starfield;
