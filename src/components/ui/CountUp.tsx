import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CountUpProps {
    value: number;
    direction?: "up" | "down";
    className?: string;
    suffix?: string;
    prefix?: string;
    decimals?: number;
    start?: number;
}

export function CountUp({
    value,
    direction = "up",
    className,
    suffix = "",
    prefix = "",
    decimals = 0,
    start = 0,
}: CountUpProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(direction === "down" ? value : start);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 120,
    });
    const isInView = useInView(ref, { once: false, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(direction === "down" ? 0 : value);
        } else {
            // Reset to initial state when out of view
            motionValue.set(direction === "down" ? value : 0);
        }
    }, [isInView, motionValue, direction, value]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = `${prefix}${latest.toFixed(decimals)}${suffix}`;
            }
        });
    }, [springValue, decimals, suffix, prefix]);

    return <span ref={ref} className={className} />;
}
