import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Tablet } from 'lucide-react';

const projects = {
    company: [
        {
            title: "FinTech Mobile App",
            company: "TechCorp Inc.",
            logo: "TC",
            color: "bg-blue-500",
            storeLinks: { ios: "#", android: "#" }
        },
        {
            title: "E-Commerce Platform",
            company: "ShopifyPlus",
            logo: "SP",
            color: "bg-green-500",
            storeLinks: { ios: "#", android: "#" }
        },
        {
            title: "Health Tracker",
            company: "Wellness.io",
            logo: "W",
            color: "bg-pink-500",
            storeLinks: { ios: "#", android: "#" }
        },
        {
            title: "Delivery Driver App",
            company: "FastLogistics",
            logo: "FL",
            color: "bg-orange-500",
            storeLinks: { ios: "#", android: "#" }
        }
    ],
    personal: [
        {
            title: "AI Code Assistant",
            desc: "A VS Code extension that uses AI to suggest code improvements.",
            tech: ["TypeScript", "OpenAI API", "React"],
            links: { github: "#", demo: "#" },
            video: null // Placeholder for video/gif
        },
        {
            title: "Crypto Dashboard",
            desc: "Real-time cryptocurrency tracking dashboard with advanced charts.",
            tech: ["Next.js", "Tailwind", "Recharts"],
            links: { github: "#", demo: "#" },
            video: null
        },
        {
            title: "3D Portfolio V1",
            desc: "Previous version of my portfolio using Three.js and WebGL.",
            tech: ["Three.js", "React Three Fiber"],
            links: { github: "#", demo: "#" },
            video: null
        }
    ]
};

const CompanyCard = ({ project, index }: { project: any, index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center group border-transparent hover:border-neon-blue/30 transition-all duration-300 relative overflow-hidden"
    >
        <div className={`absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
        
        <div className={`w-16 h-16 ${project.color} rounded-2xl flex items-center justify-center text-2xl font-bold mb-4 shadow-lg group-hover:shadow-neon transition-all`}>
            {project.logo}
        </div>
        
        <h3 className="text-xl font-bold mb-1">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{project.company}</p>
        
        <div className="flex gap-4 mt-auto opacity-60 group-hover:opacity-100 transition-opacity">
            <a href={project.storeLinks.ios} className="hover:text-neon-blue transition-colors"><Tablet size={20} /></a>
            <a href={project.storeLinks.android} className="hover:text-neon-green transition-colors"><Smartphone size={20} /></a>
        </div>
    </motion.div>
);

const PersonalCard = ({ project, index }: { project: any, index: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group relative rounded-2xl overflow-hidden glass-panel border-transparent hover:border-neon-purple/50 transition-all duration-500"
    >
        {/* Video Placeholder Area */}
        <div className="h-48 bg-black/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent z-10" />
            
            {/* Animated Gradient Placeholder if no video */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 via-neon-purple/20 to-neon-pink/20 animate-pulse-slow" />
            
            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-4 py-2 bg-black/70 rounded-full backdrop-blur-sm text-sm border border-white/10">Preview</span>
            </div>
        </div>

        <div className="p-6 relative z-10">
            <h3 className="text-2xl font-bold mb-2 group-hover:text-neon-cyan transition-colors">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.desc}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t: string) => (
                    <span key={t} className="px-2 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-gray-300">
                        {t}
                    </span>
                ))}
            </div>

            <div className="flex gap-4">
                <a href={project.links.github} className="flex items-center gap-2 text-sm font-medium hover:text-neon-blue transition-colors">
                    <Github size={16} /> Code
                </a>
                <a href={project.links.demo} className="flex items-center gap-2 text-sm font-medium hover:text-neon-pink transition-colors">
                    <ExternalLink size={16} /> Live Demo
                </a>
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-green">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A collection of production apps and creative experiments.
                    </p>
                </motion.div>

                {/* Company Projects Section */}
                <div className="mb-20">
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <span className="w-8 h-1 bg-neon-blue rounded-full"></span>
                        Client & Company Work
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {projects.company.map((project, index) => (
                            <CompanyCard key={index} project={project} index={index} />
                        ))}
                    </div>
                </div>

                {/* Personal Projects Section */}
                <div>
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <span className="w-8 h-1 bg-neon-purple rounded-full"></span>
                        Personal Innovations
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.personal.map((project, index) => (
                            <PersonalCard key={index} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
