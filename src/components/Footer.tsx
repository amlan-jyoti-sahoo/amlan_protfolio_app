import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center relative z-10 opacity-70">
            <div className="mb-4 md:mb-0 text-center md:text-left">
                <p className="text-sm text-gray-400 font-mono">
                    &copy; {new Date().getFullYear()} Amlan Sahoo. Built with React & Tailwind.
                </p>
            </div>
            
            <div className="flex space-x-6">
                {[Github, Linkedin, Twitter].map((Icon, idx) => (
                    <a key={idx} href="#" className="text-gray-400 hover:text-neon-blue transition-colors duration-300 transform hover:scale-110">
                        <Icon size={20} />
                    </a>
                ))}
            </div>
        </div>
    </footer>
  );
};

export default Footer;
