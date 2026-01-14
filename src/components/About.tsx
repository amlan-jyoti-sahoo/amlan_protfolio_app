import { useMemo } from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const stats = [
        { label: "Years Exp", value: "3+", color: "text-neon-blue" },
        { label: "Projects", value: "15+", color: "text-neon-purple" },
        { label: "Tech Stack", value: "20+", color: "text-neon-pink" },
        { label: "Coffee", value: "∞", color: "text-neon-green" },
    ];

    const coreSkills = [
        { name: "React Native", level: 95, color: "bg-neon-cyan" },
        { name: "Redux", level: 90, color: "bg-neon-cyan" },
        { name: "TypeScript", level: 90, color: "bg-neon-cyan" },
        { name: "JavaScript", level: 92, color: "bg-neon-cyan" },
        { name: "Java", level: 80, color: "bg-neon-cyan" },
        { name: "Flutter", level: 75, color: "bg-neon-cyan" },
        { name: "Kotlin", level: 60, color: "bg-neon-cyan" },
    ];

    const otherSkills = useMemo(() => ({
        "Frameworks": ["React Native", "Redux", "Zustand", "Re.Pack", "Flutter"],
        "Languages": ["TypeScript", "JavaScript", "Java", "Kotlin", "Dart"],
        "Core Concepts": ["Hooks", "REST APIs", "State Management", "Performance Optimization", "Debugging","Playstore/Appstore Deployment", ],
        "Libraries": ["Reanimated", "FlashList", "Juspay", "DigiLocker", "OCR", "Firebase"],
        "Tools": ["Git", "BitBucket", "Android Studio", "Xcode", "CodePush", "Jest", ],
        "Cloud": ["AWS (EC2, S3, IAM)"]
    }), []);

    return (
        <section id="about" className="py-12 px-6 relative overflow-visible">
            <div className="max-w-7xl mx-auto">
                <div className="glass-panel rounded-3xl p-8 border border-white/10 relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/10 blur-[100px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-blue/10 blur-[100px] rounded-full pointer-events-none" />

                    <div className="grid lg:grid-cols-2 gap-12 relative z-10">
                        
                        {/* Left Column: Bio & Core Skills */}
                        <div className="flex flex-col gap-8">
                            <div>
                                <motion.h2 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="text-3xl font-bold mb-4"
                                >
                                    Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Architect</span>
                                </motion.h2>

                                <motion.p 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="text-gray-400 text-sm leading-relaxed mb-6"
                                >

                                    I'm not just a coder; I'm a digital architect. With a deep passion for clean architecture and pixel-perfect design, I bridge the gap between complex backend logic and beautiful frontend experiences.
                                    My mission is simple: to build software that is not only functional but also delightful to use.
                                </motion.p>

                                {/* Compact Stats */}
                                <div className="flex gap-4 mb-8">
                                    {stats.map((stat, i) => (
                                        <div key={i} className="text-center">
                                            <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                                            <div className="text-xs text-gray-500 uppercase">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Core Skills Progress Bars */}
                            <div className="space-y-4">
                                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Core Proficiency</h3>
                                {coreSkills.map((skill, index) => (
                                    <div key={skill.name} className="space-y-1">
                                        <div className="flex justify-between text-xs">
                                            <span className="text-gray-300">{skill.name}</span>
                                            <span className="text-gray-400">{skill.level}/100</span>
                                        </div>
                                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                                                className={`h-full ${skill.color} shadow-[0_0_8px_currentColor]`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Other Skills (Compact Grid) */}
                        <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Technical Arsenal</h3>
                            <div className="space-y-6">
                                {Object.entries(otherSkills).map(([category, skills], index) => (
                                    <motion.div 
                                        key={category}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 + (index * 0.1) }}
                                    >
                                        <div className="text-xs text-neon-cyan/80 mb-2 font-mono">{category}</div>
                                        <div className="flex flex-wrap gap-2">
                                            {skills.map((skill) => (
                                                <span 
                                                    key={skill}
                                                    className="text-xs text-white bg-white/10 px-2 py-1 rounded border border-white/10 hover:border-white/20 hover:bg-white/20 transition-colors cursor-default"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
