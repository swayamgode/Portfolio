'use client';

import { useState, useMemo } from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '../types/project';

interface ProjectsSectionProps {
  projects: Project[];
  showFilters?: boolean;
  title?: string;
  description?: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  showFilters = true,
  title = "Featured Projects",
  description = "Here are some of the projects I've worked on. Each one represents different skills and technologies I've mastered."
}) => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  const [selectedTech, setSelectedTech] = useState<string>('all');

  const filteredProjects = useMemo(() => {
    let filtered = projects;

    if (filter === 'featured') {
      filtered = filtered.filter(project => project.featured);
    }

    if (selectedTech !== 'all') {
      filtered = filtered.filter(project =>
        project.technologies.includes(selectedTech)
      );
    }

    return filtered;
  }, [projects, filter, selectedTech]);

  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach(project => {
      project.technologies.forEach(tech => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, [projects]);

  return (
    <section id="projects" className="section-padding bg-[#0a0a0a]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Featured <span className="text-gradient-accent">Projects</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-6">
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
              <button
                onClick={() => setFilter('all')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${filter === 'all'
                    ? 'bg-accent text-white shadow-lg shadow-accent/30'
                    : 'glass-card text-gray-300 glass-card-hover'
                  }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setFilter('featured')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${filter === 'featured'
                    ? 'bg-accent text-white shadow-lg shadow-accent/30'
                    : 'glass-card text-gray-300 glass-card-hover'
                  }`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Featured
              </button>
            </div>

            <div className="relative">
              <select
                value={selectedTech}
                onChange={(e) => setSelectedTech(e.target.value)}
                className="appearance-none px-6 py-3 pr-10 glass-card rounded-xl text-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 font-medium cursor-pointer"
              >
                <option value="all">All Technologies</option>
                {allTechnologies.map((tech) => (
                  <option key={tech} value={tech}>
                    {tech}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 glass-card rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-400 mb-3">
              No projects found
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Try adjusting your filters to see more projects.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;