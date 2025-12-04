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
    <section id="projects" className="section-padding">
      <div className="container-custom">

        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="section-title">PORTFOLIO</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-[#666666] max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
              <button
                onClick={() => setFilter('all')}
                className={`px-5 py-2 rounded-full font-medium transition-all text-sm ${filter === 'all'
                    ? 'bg-[#1a1a1a] text-white'
                    : 'bg-white text-[#666666] border border-[#e0e0e0] hover:border-[#1a1a1a]'
                  }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setFilter('featured')}
                className={`px-5 py-2 rounded-full font-medium transition-all text-sm ${filter === 'featured'
                    ? 'bg-[#1a1a1a] text-white'
                    : 'bg-white text-[#666666] border border-[#e0e0e0] hover:border-[#1a1a1a]'
                  }`}
              >
                Featured
              </button>
            </div>

            <div className="relative">
              <select
                value={selectedTech}
                onChange={(e) => setSelectedTech(e.target.value)}
                className="appearance-none px-5 py-2 pr-10 bg-white border border-[#e0e0e0] rounded-full text-[#666666] focus:outline-none focus:border-[#1a1a1a] transition-all font-medium cursor-pointer text-sm"
              >
                <option value="all">All Technologies</option>
                {allTechnologies.map((tech) => (
                  <option key={tech} value={tech}>
                    {tech}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#666666]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">
              No projects found
            </h3>
            <p className="text-[#666666]">
              Try adjusting your filters to see more projects.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;