"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import clsx from "clsx";

interface ScrollAnimationProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    scale?: boolean;
    blur?: boolean;
    duration?: number;
    once?: boolean;
}

export default function ScrollAnimation({
    children,
    className = "",
    delay = 0,
    direction = "up",
    scale = false,
    blur = false,
    duration = 0.6,
    once = true,
}: ScrollAnimationProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: "-5% 0px" });
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    // Simpler, faster animations on mobile
    const getInitial = () => {
        if (isMobile) {
            return { opacity: 0, y: 20 };
        }
        const initial: Record<string, number | string> = { opacity: 0 };
        if (direction === "up") initial.y = 40;
        if (direction === "down") initial.y = -40;
        if (direction === "left") initial.x = 40;
        if (direction === "right") initial.x = -40;
        if (scale) initial.scale = 0.95;
        if (blur) initial.filter = "blur(10px)";
        return initial;
    };

    const getAnimate = () => {
        if (isMobile) {
            return { opacity: 1, y: 0 };
        }
        const animate: Record<string, number | string> = { opacity: 1, y: 0, x: 0 };
        if (scale) animate.scale = 1;
        if (blur) animate.filter = "blur(0px)";
        return animate;
    };

    return (
        <motion.div
            ref={ref}
            initial={getInitial()}
            animate={isInView ? getAnimate() : getInitial()}
            transition={{
                duration: isMobile ? 0.4 : duration,
                delay: isMobile ? delay * 0.5 : delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            className={clsx(className)}
        >
            {children}
        </motion.div>
    );
}
