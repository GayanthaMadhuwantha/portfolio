import React from 'react';
import { Code, Github, Linkedin, Mail } from 'lucide-react';
import { navLinks } from '../data/navLinks';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          <div className="md:col-span-5">
            <div className="flex items-center space-x-2 mb-4">
              <Code className="text-primary-400" size={28} />
              <span className="text-xl font-bold">Portfolio</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Creating digital experiences that blend aesthetics with functionality, 
              focused on delivering exceptional user experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/GayanthaMadhuwantha" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/gayantha-maduwantha-1133222aa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="gayanthamadhuwantha@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h3 className="text-lg font-bold mb-4">Subscribe to Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with my latest projects and technologies.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-2 bg-gray-800 rounded-l-lg border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-r-lg text-white font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;