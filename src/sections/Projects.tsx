import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projects, categories } from '../data/projects';
import Button from '../components/Button';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [visibleProjects, setVisibleProjects] = useState(projects.slice(0, 6));
  const [showAll, setShowAll] = useState(false);

  const handleFilterChange = (category: string) => {
    setFilter(category);
    setShowAll(false);
    
    if (category === 'All') {
      setVisibleProjects(projects.slice(0, 6));
    } else {
      const filtered = projects.filter(project => project.category === category);
      setVisibleProjects(filtered);
    }
  };

  const loadMore = () => {
    setVisibleProjects(projects);
    setShowAll(true);
  };

  const resetView = () => {
    setVisibleProjects(projects.slice(0, 6));
    setShowAll(false);
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle 
          title="My Projects"
          subtitle="Here are some of the projects I've worked on. Each project represents a unique challenge and solution."
          centered
        />
        
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => handleFilterChange('All')}
            className={`px-4 py-2 rounded-full transition-colors ${
              filter === 'All'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            All
          </button>
          
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleFilterChange(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {!showAll && visibleProjects.length < projects.length && filter === 'All' && (
          <div className="mt-12 text-center">
            <Button variant="outline" onClick={loadMore}>
              Load More Projects
            </Button>
          </div>
        )}
        
        {showAll && (
          <div className="mt-12 text-center">
            <Button variant="ghost" onClick={resetView}>
              Show Less
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;