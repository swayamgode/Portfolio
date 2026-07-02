'use client';
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsGrid = () => {
  const projectImages = [
    {
      id: 1,
      src: '/project1.png',
      alt: 'Sure-Image Website',
      title: 'Sure-Image Platform',
      category: 'Generative AI App',
      description: 'A platform leveraging state-of-the-art diffusion models to generate high-fidelity commercial imagery from textual descriptions.',
      tags: ['React', 'Next.js', 'Tailwind'],
      gridClass: 'md:col-span-1 md:row-span-2', // Portrait 9:16 style
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      src: '/project2.png',
      alt: 'Gettasu Anime Project',
      title: 'Gettasu Anime',
      category: 'Database Discovery',
      description: 'High-performance discovery engine for anime databases featuring sub-second global searches and real-time community ratings.',
      tags: ['Next.js', 'GraphQL', 'Tailwind'],
      gridClass: 'md:col-span-2 md:row-span-1', // Wide Desktop style
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      src: '/project3.png',
      alt: 'Cultural Heritage Website',
      title: 'Cultural Heritage Portal',
      category: 'Creative Showcase',
      description: 'An interactive virtual museum cataloging regional artifacts and history with 3D canvas projections.',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      gridClass: 'md:col-span-1 md:row-span-1', // Square style
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      src: '/project4.png', // Pure Kinetic Energy
      alt: 'Pure Kinetic Energy',
      title: 'Pure Kinetic Energy',
      category: 'Interactive Physics',
      description: 'A physics engine canvas simulation projecting kinetic wave movements, particle behavior, and dynamic collision equations.',
      tags: ['Canvas API', 'TypeScript'],
      gridClass: 'md:col-span-1 md:row-span-1', // Square style
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      src: '/project5.png', // Kerala Houseboat Photography
      alt: 'Kerala Houseboat Photography',
      title: 'Houseboat Photography',
      category: 'Photography Portfolio',
      description: 'Immersive full-screen visual catalog capturing the beautiful houseboat culture and serene backwater trails of Kerala.',
      tags: ['UI/UX Design', 'Next.js', 'Framer Motion'],
      gridClass: 'md:col-span-2 md:row-span-2', // Large Desktop style
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      src: '/project6.png', // Fintech App
      alt: 'Fintech App',
      title: 'Fintech Dashboard',
      category: 'Financial Analytics',
      description: 'React dashboard visualizer displaying mock portfolios, market trends, transaction registries, and real-time charts.',
      tags: ['React', 'Chart.js', 'Tailwind'],
      gridClass: 'md:col-span-1 md:row-span-2', // Portrait 9:16 style
      demoUrl: '#',
      githubUrl: '#'
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="section-title section-title-green text-xl md:text-2xl">My Projects</h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[180px]">
          {projectImages.map((project) => (
            <div
              key={project.id}
              className={`relative rounded-2xl bg-zinc-900/30 border border-zinc-800/60 overflow-hidden hover:border-[#fda4af]/40 hover:shadow-[0_8px_30px_rgba(253,164,175,0.08)] transition-all duration-500 hover:-translate-y-1.5 group cursor-pointer min-h-[260px] md:min-h-0 ${project.gridClass}`}
            >
              {/* Full background image */}
              <img
                src={project.src}
                alt={project.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Default Ambient Bottom Gradient Overlay (visible when not hovered) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none flex flex-col justify-end p-5">
                <span className="text-[9px] text-zinc-400 font-mono tracking-wider uppercase font-semibold">
                  {project.category}
                </span>
                <h3 className="text-white font-bold text-sm md:text-base leading-snug font-space">
                  {project.title}
                </h3>
              </div>

              {/* Hover Full Screen Glass Overlay */}
              <div className="absolute inset-0 bg-black/85 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-350 flex flex-col justify-between p-6">
                {/* Overlay Header */}
                <div>
                  <span className="text-[9px] text-[#fda4af] font-mono tracking-wider uppercase font-bold">
                    {project.category}
                  </span>
                  <h3 className="text-white font-extrabold text-base md:text-lg leading-snug mt-1 font-space">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-xs mt-3 leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                {/* Overlay Footer */}
                <div>
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-0.5 bg-zinc-900/60 border border-zinc-800 text-[9px] text-zinc-350 rounded-md font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* GitHub & Live Links */}
                  <div className="flex gap-2">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#fda4af] hover:bg-white text-black rounded-lg text-xs font-bold transition-all duration-300 shadow-[0_4px_12px_rgba(253,164,175,0.2)]"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center p-2.5 bg-zinc-900 border border-zinc-850 hover:bg-zinc-800 text-white rounded-lg transition-all duration-300"
                      title="Source Code"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;


