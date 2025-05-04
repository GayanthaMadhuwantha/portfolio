import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import Button from '../components/Button';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-100 via-white to-white dark:from-primary-900/30 dark:via-gray-900 dark:to-gray-900"></div>

      <div className="container pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-4">
                Full-Stack Developer
              </span>
              <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-4 text-gray-900 dark:text-white">
                Creating digital <span className="text-primary-600 dark:text-primary-400">experiences</span> that matter
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                I design and develop applications that deliver exceptional user experiences and solve real-world problems.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="primary">
                View My Work
              </Button>
              <a href="https://drive.google.com/file/d/1l_ZkigBhlb5IjAAiX7es2RniuBe4Jh7-/view?usp=sharing" target='_blank' download>
                <Button variant="outline">
                  Download Resume
                </Button>
              </a>

            </div>

            <div className="mt-8 flex items-center space-x-4">
              <span className="text-gray-600 dark:text-gray-400">Connect:</span>
              <a href="https://github.com/GayanthaMadhuwantha" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/gayantha-maduwantha-1133222aa" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <div className="relative h-72 md:h-96 rounded-xl overflow-hidden shadow-2xl border-8 border-white dark:border-gray-800">
              <img
                src="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Developer at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
      >
        <span className="mb-2 text-sm">Scroll Down</span>
        <ArrowDown className="animate-bounce" size={20} />
      </a>
    </section>
  );
};

export default Hero;