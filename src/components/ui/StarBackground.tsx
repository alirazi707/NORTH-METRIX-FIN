import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export const StarBackground = () => {
    const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number; duration: number; delay: number }[]>([]);

    useEffect(() => {
        // Generate random stars on client-side to avoid hydration mismatch
        const newStars = Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100, // percentage
            y: Math.random() * 100, // percentage
            size: Math.random() * 2 + 1, // 1px to 3px
            duration: Math.random() * 3 + 2, // 2s to 5s
            delay: Math.random() * 2,
        }));
        setStars(newStars);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute bg-white/80 rounded-full"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: star.size,
                        height: star.size,
                    }}
                    animate={{
                        opacity: [0.2, 1, 0.2],
                        scale: [1, 1.2, 1],
                        y: [0, -10, 0] // slight float up effect
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: star.delay,
                    }}
                />
            ))}
        </div>
    );
};
