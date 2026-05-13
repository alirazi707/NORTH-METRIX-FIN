import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface RevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    overflow?: "hidden" | "visible";
    className?: string;
}

export const Reveal = ({ children, width = "fit-content", delay = 0, overflow = "hidden", className = "" }: RevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-50px" });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        } else {
            mainControls.start("hidden");
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref} className={className} style={{ position: "relative", width, overflow }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
                className="h-full"
            >
                {children}
            </motion.div>
        </div>
    );
};
