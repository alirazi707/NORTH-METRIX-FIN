import React, { useRef, useEffect } from 'react';

export const StarBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        const setSize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        setSize();
        window.addEventListener('resize', setSize);

        // Star parameters for "Boehm Tech" intensity
        const STAR_COUNT = 200; // Reduced intensity
        const ROTATION_SPEED = 0.0002; // Slower revolving
        const TRAVEL_SPEED = 0.5; // Much slower travel (calmer)

        interface Star {
            x: number;
            y: number;
            z: number;
        }

        const stars: Star[] = [];

        // Initialize stars
        for (let i = 0; i < STAR_COUNT; i++) {
            stars.push({
                x: Math.random() * width - width / 2,
                y: Math.random() * height - height / 2,
                z: Math.random() * width,
            });
        }

        let animationFrameId: number;

        const render = () => {
            // Clear canvas (transparent to let global black show through)
            ctx.clearRect(0, 0, width, height);

            const cx = width / 2;
            const cy = height / 2;

            stars.forEach((star) => {
                // 1. Move stars towards viewer (Travel)
                star.z -= TRAVEL_SPEED;
                if (star.z <= 0) {
                    // Reset star to back
                    star.z = width;
                    star.x = Math.random() * width - width / 2;
                    star.y = Math.random() * height - height / 2;
                }

                // 2. Rotate stars (Revolve) around center
                // Basic 2D rotation matrix
                const angle = ROTATION_SPEED;
                const cos = Math.cos(angle);
                const sin = Math.sin(angle);
                const nx = star.x * cos - star.y * sin;
                const ny = star.x * sin + star.y * cos;
                star.x = nx;
                star.y = ny;

                // 3. Project to 2D
                const k = 128.0 / star.z; // Perspective factor
                const px = star.x * k + cx;
                const py = star.y * k + cy;

                // 4. Draw
                if (px >= 0 && px <= width && py >= 0 && py <= height) {
                    const size = (1 - star.z / width) * 1.5;
                    let opacity = (1 - star.z / width) * 0.5;

                    // Smooth fade out as star approaches screen (prevent popping)
                    if (star.z < 100) {
                        opacity *= star.z / 100;
                    }

                    ctx.beginPath();
                    ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
                    ctx.arc(px, py, size, 0, Math.PI * 2);
                    ctx.fill();
                }
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', setSize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
        />
    );
};
