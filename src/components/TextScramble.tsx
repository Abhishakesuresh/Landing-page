"use client";

import React, { useEffect, useRef, useState } from "react";

interface TextScrambleProps {
    text: string;
    className?: string;
    duration?: number;
    delay?: number;
}

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

const TextScramble: React.FC<TextScrambleProps> = ({
    text,
    className = "",
    duration = 1000,
    delay = 0
}) => {
    const [displayText, setDisplayText] = useState(text);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        let frameId: number;
        let startTime: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;

            if (progress < delay) {
                frameId = requestAnimationFrame(animate);
                return;
            }

            const animationProgress = Math.min((progress - delay) / duration, 1);

            if (animationProgress === 1) {
                setDisplayText(text);
                setIsAnimating(false);
                return;
            }

            const scrambled = text
                .split("")
                .map((char, index) => {
                    if (char === " ") return " ";
                    if (index < text.length * animationProgress) {
                        return text[index];
                    }
                    return chars[Math.floor(Math.random() * chars.length)];
                })
                .join("");

            setDisplayText(scrambled);
            frameId = requestAnimationFrame(animate);
        };

        frameId = requestAnimationFrame(animate);
        setIsAnimating(true);

        return () => cancelAnimationFrame(frameId);
    }, [text, duration, delay]);

    return (
        <span className={`${className} inline-block font-mono`}>
            {displayText}
        </span>
    );
};

export default TextScramble;
