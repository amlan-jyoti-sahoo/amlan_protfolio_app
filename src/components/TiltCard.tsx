import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
}

const TiltCard = ({ children, className = "" }: TiltCardProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

    const transform = useMotionTemplate`perspective(1000px) rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        const rX = (mouseY / height - 0.5) * -20; // Rotate X range: -10 to 10 deg
        const rY = (mouseX / width - 0.5) * 20;   // Rotate Y range: -10 to 10 deg
        
        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transformStyle: "preserve-3d", transform }}
            className={`relative ${className}`}
        >
            {children}
            
            {/* Glowing Border Gradient effect behind (optional/common) */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neon-blue/0 via-neon-purple/0 to-neon-pink/0 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700 group-hover:via-neon-purple/30 pointer-events-none" />
        </motion.div>
    );
};

export default TiltCard;
