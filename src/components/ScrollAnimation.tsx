"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
    stagger?: number;
}

export default function ScrollAnimation({
    children,
    className = "",
    delay = 0,
    direction = "up",
    scale = false,
    blur = false,
    duration = 0.8,
    once = true,
    stagger = 0,
}: ScrollAnimationProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: "-10% 0px" });

    const getInitial = () => {
        const initial: any = { opacity: 0 };
        if (direction === "up") initial.y = 40;
        if (direction === "down") initial.y = -40;
        if (direction === "left") initial.x = 40;
        if (direction === "right") initial.x = -40;
        if (scale) initial.scale = 0.95;
        if (blur) initial.filter = "blur(10px)";
        return initial;
    };

    const getAnimate = () => {
        const animate: any = { opacity: 1, y: 0, x: 0 };
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
                duration,
                delay,
                ease: [0.16, 1, 0.3, 1],
                staggerChildren: stagger,
            }}
            className={clsx("will-change-transform", className)}
        >
            {children}
        </motion.div>
    );
}
