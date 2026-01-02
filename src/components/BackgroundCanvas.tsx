import { motion, useScroll, useTransform } from 'framer-motion';

const BackgroundCanvas = () => {
    const { scrollYProgress } = useScroll();
    const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-bg-dark">
            {/* Darker overlay for content readability */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

            {/* Abstract animated Blobs */}
            <motion.div
                className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] bg-neon-purple/20 rounded-full blur-[100px] animate-blob"
                style={{ y: y1 }}
            />
            <motion.div
                className="absolute top-1/2 -right-1/4 w-[600px] h-[600px] bg-neon-blue/20 rounded-full blur-[80px] animate-blob animation-delay-2000"
                style={{ y: y2, rotate }}
            />
            <motion.div
                className="absolute -bottom-1/4 left-1/3 w-[700px] h-[700px] bg-neon-pink/10 rounded-full blur-[90px] animate-blob animation-delay-4000"
                style={{ x: y1 }}
            />

            {/* Grid Pattern with fade */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            
            {/* Particles or dots (optional CSS based) */}
            <div className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.1) 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}
            />
        </div>
    );
};

export default BackgroundCanvas;
