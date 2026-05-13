import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ScrollLogoAnimationProps {
    onComplete?: () => void;
}

export function ScrollLogoAnimation({ onComplete }: ScrollLogoAnimationProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [frameIndex, setFrameIndex] = useState(0);
    const [opacity, setOpacity] = useState(1);

    const onCompleteRef = useRef(onComplete);
    useEffect(() => {
        onCompleteRef.current = onComplete;
    }, [onComplete]);

    // Load images
    useEffect(() => {
        const loadImages = async () => {
            const modules = import.meta.glob('@/assets/logo-frames/*.jpg', { eager: true });
            const sortedKeys = Object.keys(modules).sort();

            const loadedImages: HTMLImageElement[] = [];

            const promises = sortedKeys.map((key) => {
                return new Promise<void>((resolve, reject) => {
                    const img = new Image();
                    // @ts-ignore
                    img.src = modules[key].default;
                    img.onload = () => {
                        loadedImages.push(img);
                        resolve();
                    };
                    img.onerror = reject;
                });
            });

            try {
                await Promise.all(promises);

                // Ensure sorted order
                const orderedPromises = sortedKeys.map((key) => {
                    return new Promise<HTMLImageElement>((resolve) => {
                        const img = new Image();
                        // @ts-ignore
                        img.src = modules[key].default;
                        img.onload = () => resolve(img);
                    });
                });

                const results = await Promise.all(orderedPromises);
                setImages(results);
                setIsLoaded(true);
            } catch (error) {
                console.error("Failed to load logo frames", error);
            }
        };

        loadImages();
    }, []);

    // Animation Loop
    useEffect(() => {
        if (!isLoaded || images.length === 0) return;

        let animationFrameId: number;
        // Animation settings
        const totalFrames = images.length - 1; // 0 to 42
        const duration = 2000; // 2 seconds total for animation
        const startTime = performance.now();

        const animate = (time: number) => {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const currentFrame = Math.floor(progress * totalFrames);

            setFrameIndex(currentFrame);

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(animate);
            } else {
                // Animation Complete
                const isMobile = window.innerWidth < 768;
                setOpacity(isMobile ? 0 : 0.3);
                if (onCompleteRef.current) onCompleteRef.current();
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [isLoaded, images]); // Removed onComplete to prevent restart

    // Draw Logic
    useEffect(() => {
        if (!canvasRef.current || images.length === 0) return;

        const canvas = canvasRef.current;

        const render = () => {
            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            const img = images[frameIndex];
            if (!img) return;

            // Clear layout
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Draw image centered and covering/containing
            const scale = Math.min(canvas.width / img.width, canvas.height / img.height) * 0.8;

            const w = img.width * scale;
            const h = img.height * scale;
            // Center (canvas.width - w) / 2
            // Then add 15% of width to move it "bit right" as requested (ONLY ON DESKTOP)
            const isMobile = canvas.width < 768;
            const x = ((canvas.width - w) / 2) + (isMobile ? 0 : (canvas.width * 0.15));
            const y = (canvas.height - h) / 2;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, x, y, w, h);
        };

        render();

        // Rerender on resize
        const handleResize = () => requestAnimationFrame(render);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [images, frameIndex]);

    return (
        <motion.div
            className="absolute inset-0 bg-black z-[-1] pointer-events-none transition-opacity duration-[2000ms] ease-in-out"
        // We handle opacity of the canvas container, but actually 
        // the request was: "black screen... logo opacity 30... landing page visible".
        // So the container BG should stay black (opacity 1).
        // The CANVAS (logo) should fade to 0.3.
        >
            <motion.canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full transition-opacity duration-[2000ms]"
                style={{ opacity: opacity }}
            />
        </motion.div>
    );
}
