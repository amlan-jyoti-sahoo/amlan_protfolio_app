import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import TiltCard from './TiltCard';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20">
            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
                
                {/* Text Content */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block glass-panel px-4 py-1.5 rounded-full mb-6"
                    >
                        <span className="text-neon-blue text-sm font-mono tracking-wider"> &lt; Hello World /&gt;</span>
                    </motion.div>

                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl md:text-3xl font-display text-white mb-2"
                    >
                        Hi, I'm <span className="text-neon-cyan">Amlanjyoti Sahoo</span>
                    </motion.h2>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Mobile App <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink">
                            Developer
                        </span>
                    </h1>
                    
                    <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
                        Building scalable mobile & web applications with modern technologies. 
                        Focused on performance, user experience, and clean code.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <motion.a 
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-8 py-4 bg-neon-blue text-black font-bold rounded-full overflow-hidden flex items-center gap-2"
                        >
                            <span className="relative z-10">View Projects</span>
                            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-white/50 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </motion.a>
                        
                        <motion.a 
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 glass-panel text-white font-bold rounded-full flex items-center gap-2 hover:bg-white/10 transition-colors border border-white/10"
                        >
                            <span>Contact Me</span>
                            <Mail className="w-5 h-5" />
                        </motion.a>
                    </div>
                </motion.div>

                {/* Abstract Visual / Tech Animation */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative hidden md:block h-[500px]"
                >
                     {/* Code/Tech decorative elements */}
                    <TiltCard className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 rounded-2xl glass-panel border border-white/5 p-8 overflow-hidden group hover:border-neon-purple/50 transition-colors duration-500">
                         {/* Continuous Floating / Breathing Animation for the inner content */}
                         <motion.div 
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative h-full"
                         >
                             <div className="space-y-4 font-mono text-sm opacity-60">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.5 + (i * 0.1) }}
                                        className="h-2 bg-gradient-to-r from-neon-blue/20 to-transparent rounded w-3/4"
                                    />
                                ))}
                                 <motion.div 
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ repeat: Infinity, duration: 4 }}
                                    className="absolute top-1/4 right-10 w-20 h-20 bg-neon-pink/20 blur-xl rounded-full" 
                                 />
                             </div>
                             
                             {/* Floating badges */}
                             <motion.div 
                                whileHover={{ scale: 1.1 }}
                                animate={{ y: [0, -20, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                                className="absolute bottom-10 right-10 glass-panel p-4 rounded-xl border border-neon-cyan/30 shadow-lg shadow-neon-cyan/20"
                             >
                                 <div className="flex items-center gap-3">
                                     <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse" />
                                     <span className="text-neon-cyan font-mono">System Online</span>
                                 </div>
                             </motion.div>
                         </motion.div>
                    </TiltCard>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
