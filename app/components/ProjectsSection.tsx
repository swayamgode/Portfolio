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
  title = "Selected Works",
  description = "A distillation of engineering challenges and architectural solutions spanning full-stack development and artificial intelligence."
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
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header - Technical Briefing Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 animate-fadeInUp">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-magenta-500/50"></span>
              <p className="text-magenta-500 font-bold tracking-[0.3em] uppercase text-[10px]">Project_Archive_0x24</p>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 font-space tracking-tighter">
              {title}
            </h2>
            <p className="text-lg text-slate-400 font-light leading-relaxed">
              {description}
            </p>
          </div>
          
          <div className="hidden md:block text-right">
            <p className="text-[10px] font-mono text-slate-600 uppercase tracking-widest mb-1">Total_Deployments</p>
            <p className="text-4xl font-bold gradient-text-alt">{projects.length}</p>
          </div>
        </div>

        {/* Filters - Tiered Glass */}
        {showFilters && (
          <div className="flex flex-col sm:flex-row justify-between items-center mb-16 gap-6 animate-fadeInUp delay-100">
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              <button
                onClick={() => setFilter('all')}
                className={`px-8 py-2.5 rounded-xl font-bold transition-all text-[11px] uppercase tracking-widest ${filter === 'all'
                    ? 'bg-indigo-600 text-white shadow-[0_0_15px_rgba(79,70,229,0.3)]'
                    : 'glass-level-1 text-slate-400 hover:text-white border-white/5'
                  }`}
              >
                All_Systems
              </button>
              <button
                onClick={() => setFilter('featured')}
                className={`px-8 py-2.5 rounded-xl font-bold transition-all text-[11px] uppercase tracking-widest ${filter === 'featured'
                    ? 'bg-[#AE05C6] text-white shadow-[0_0_15px_rgba(174,5,198,0.3)]'
                    : 'glass-level-1 text-slate-400 hover:text-white border-white/5'
                  }`}
              >
                Primary_Assets
              </button>
            </div>

            <div className="relative w-full sm:w-auto">
              <select
                value={selectedTech}
                onChange={(e) => setSelectedTech(e.target.value)}
                className="w-full sm:w-auto appearance-none px-8 py-2.5 pr-12 glass-level-1 border-white/5 rounded-xl text-slate-400 hover:text-white focus:outline-none focus:border-indigo-500/50 transition-all font-bold text-[11px] uppercase tracking-widest cursor-pointer"
              >
                <option value="all">Filter_Stack: ALL</option>
                {allTechnologies.map((tech) => (
                  <option key={tech} value={tech} className="bg-[#10131a] text-slate-400">
                    {tech}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-indigo-500/50">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* Projects Grid - High Neg Space */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-fadeInUp delay-200">
          {filteredProjects.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty State - Technical UI feel */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-24 glass-level-1 rounded-[3rem] border-white/5 border-dashed border-2 animate-fadeInUp">
            <div className="text-6xl mb-6 opacity-20">📡</div>
            <h3 className="text-2xl font-bold text-white mb-2 font-space">
              Zero results found
            </h3>
            <p className="text-slate-500 font-mono text-sm">
              Adjust parameters to establish connection.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;