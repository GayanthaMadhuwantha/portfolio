import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';
import Button from './Button';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
      <div className="h-56 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-bold text-xl">{project.title}</h3>
          <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs rounded-full">
            {project.category}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
          {project.link && (
            <Button 
              variant="primary" 
              size="sm" 
              icon={<ExternalLink size={16} />}
              onClick={() => window.open(project.link, '_blank')}
            >
              View Project
            </Button>
          )}
          {project.github && (
            <Button 
              variant="outline" 
              size="sm" 
              icon={<Github size={16} />}
              onClick={() => window.open(project.github, '_blank')}
            >
              Code
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;