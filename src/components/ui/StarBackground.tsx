import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const StarBackground = () => {
    const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number; duration: number; delay: number }[]>([]);
    const [meteors, setMeteors] = useState<{ id: number; left: number; delay: number; duration: number }[]>([]);

    useEffect(() => {
        // Generate random stars on client-side
        const newStars = Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100, // percentage
            y: Math.random() * 100, // percentage
            size: Math.random() * 2 + 1, // 1px to 3px
            duration: Math.random() * 3 + 2, // 2s to 5s
            delay: Math.random() * 2,
        }));
        setStars(newStars);

        // Generate meteors
        const newMeteors = Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            left: Math.floor(Math.random() * (100 - -50) + -50), // Random horizontal start
            delay: Math.random() * 10 + 0.2, // Random delay
            duration: Math.floor(Math.random() * (10 - 2) + 2), // Random duration
        }));
        setMeteors(newMeteors);
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

            {/* Meteor Styles */}
            <style>{`
                @keyframes meteor {
                    0% { transform: rotate(215deg) translateX(0); opacity: 1; }
                    70% { opacity: 1; }
                    100% { transform: rotate(215deg) translateX(-500px); opacity: 0; }
                }
                .meteor-effect {
                    animation-name: meteor;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                }
            `}</style>

            {/* Meteors */}
            {meteors.map((meteor) => (
                <span
                    key={meteor.id}
                    className="absolute top-0 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] meteor-effect opacity-0"
                    style={{
                        left: meteor.left + "%",
                        animationDelay: meteor.delay + "s",
                        animationDuration: meteor.duration + "s",
                    }}
                >
                    {/* Meteor Tail */}
                    <div className="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" />
                </span>
            ))}
        </div>
    );
};
