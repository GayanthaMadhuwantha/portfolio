import React from 'react';
import SectionTitle from '../components/SectionTitle';
import SkillBar from '../components/SkillBar';
import { skills } from '../data/skills';
import { Code, User, Briefcase, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-800/50">
      <div className="container">
        <SectionTitle 
          title="About Me"
          subtitle="I'm a passionate developer with a focus on creating beautiful, functional, and user-friendly applications."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="sticky top-24">
              <div className="relative mb-8 rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Profile" 
                  className="w-full"
                />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <User className="text-primary-600 dark:text-primary-400 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Bio</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Based in San Francisco, I'm a full-stack developer with 5+ years of experience building web and mobile applications.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Briefcase className="text-primary-600 dark:text-primary-400 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Experience</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Senior Developer at TechCorp (2020-Present)<br />
                      Developer at WebSolutions (2018-2020)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <GraduationCap className="text-primary-600 dark:text-primary-400 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Education</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      B.S. Computer Science, University of California (2018)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Code className="text-primary-600 dark:text-primary-400 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Coding Activity</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      250+ contributions on GitHub in the last year
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-7">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                I started my journey as a web developer over 5 years ago, working with HTML, CSS, and JavaScript. As my skills evolved, I began working with modern frameworks like React and Node.js, which allowed me to build more complex and interactive applications.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                My passion lies in creating intuitive user interfaces and efficient backend systems. I enjoy the process of transforming ideas into functional applications that provide value to users. I'm constantly learning new technologies and techniques to improve my skills and stay current with industry trends.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new frameworks and libraries. I believe in writing clean, maintainable code and building applications that are not only functional but also visually appealing.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                {skills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
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