import React from 'react';
import Antigravity from './Antigravity';

export const StarBackground = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <Antigravity
                count={300}
                magnetRadius={41}
                ringRadius={9}
                waveSpeed={0.2}
                waveAmplitude={2}
                particleSize={0.2}
                lerpSpeed={0.02}
                color="#ffffff"
                autoAnimate={true}
                particleVariance={1}
                rotationSpeed={0.1}
                depthFactor={2.5}
                pulseSpeed={2}
                particleShape="capsule"
                fieldStrength={10}
            />
        </div>
    );
};
