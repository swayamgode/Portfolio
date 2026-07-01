'use client';
import React from 'react';

const ProjectsGrid = () => {
  const projectImages = [
    { id: 1, src: '/project1.png', alt: 'Sure-Image Website', span: 'col-span-1' },
    { id: 2, src: '/project2.png', alt: 'Gettasu Anime Project', span: 'col-span-1' },
    { id: 3, src: '/project3.png', alt: 'Cultural Heritage Website', span: 'col-span-1' },
    { id: 4, src: '/project4.png', alt: 'Pure Kinetic Energy', span: 'col-span-1' },
    { id: 5, src: '/project5.png', alt: 'Kerala Houseboat Photography', span: 'col-span-1' },
    { id: 6, src: '/project6.png', alt: 'Fintech App', span: 'col-span-1' },
  ];

  return (
    <section id="projects" className="py-16 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="section-title text-xl md:text-2xl">My Projects</h2>
        </div>

        {/* Projects Grid - 3 cols top, 3 cols bottom (2 wider + 1) */}
        <div className="grid grid-cols-3 gap-4">
          {/* Top row - 3 equal */}
          {projectImages.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className="rounded-2xl overflow-hidden hover-lift cursor-pointer group aspect-[4/3]"
            >
              <img
                src={project.src}
                alt={project.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Bottom row - different layout: 1 wider left, 1 center, 1 right */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          {projectImages.slice(3, 6).map((project) => (
            <div
              key={project.id}
              className="rounded-2xl overflow-hidden hover-lift cursor-pointer group aspect-[4/3]"
            >
              <img
                src={project.src}
                alt={project.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
