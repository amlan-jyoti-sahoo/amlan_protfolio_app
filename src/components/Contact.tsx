import { motion } from 'framer-motion';
import { Send, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20 relative px-6">
            <div className="max-w-xl w-full relative z-10">
                 <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-panel p-8 rounded-2xl border border-white/10"
                 >
                    <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                        <Mail className="text-neon-blue animate-pulse" />
                        <h2 className="text-2xl font-bold text-white">Get In Touch</h2>
                        <div className="ml-auto text-xs font-mono text-gray-500">STATUS: OPEN_FOR_WORK</div>
                    </div>

                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs text-neon-blue font-mono uppercase">Name</label>
                            <input 
                                type="text" 
                                className="w-full bg-black/20 border border-white/10 rounded-lg text-white p-3 focus:outline-none focus:border-neon-blue transition-colors font-mono"
                                placeholder="John Doe"
                            />
                        </div>
                        
                        <div className="space-y-2">
                            <label className="text-xs text-neon-purple font-mono uppercase">Email</label>
                            <input 
                                type="email" 
                                className="w-full bg-black/20 border border-white/10 rounded-lg text-white p-3 focus:outline-none focus:border-neon-purple transition-colors font-mono"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs text-neon-pink font-mono uppercase">Message</label>
                            <textarea 
                                rows={4}
                                className="w-full bg-black/20 border border-white/10 rounded-lg text-white p-3 focus:outline-none focus:border-neon-pink transition-colors font-mono resize-none"
                                placeholder="Let's build something amazing..."
                            ></textarea>
                        </div>

                        <button type="button" className="w-full py-4 bg-neon-blue/10 border border-neon-blue/50 text-neon-blue font-bold rounded-lg uppercase tracking-widest hover:bg-neon-blue hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group">
                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            Send Message
                        </button>
                    </form>
                 </motion.div>
            </div>
        </section>
    );
};

export default Contact;
