'use client';
import React from 'react';
import Link from 'next/link';
import { Project } from '../types/project';
import { Github, ExternalLink, Activity, Code, Globe, CloudSun } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Generative vector art helper based on project ID/type
  const renderProjectArt = (id: number, title: string) => {
    switch (id) {
      case 1: // E-Commerce Platform
        return (
          <svg className="w-full h-full bg-zinc-50 group-hover:scale-105 transition-transform duration-700" viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-ec" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(249, 115, 22, 0.06)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-ec)" />
            
            <circle cx="200" cy="110" r="55" fill="none" stroke="rgba(249, 115, 22, 0.15)" strokeWidth="1.5" className="animate-[pulse_3s_infinite]" />
            <circle cx="200" cy="110" r="80" fill="none" stroke="rgba(249, 115, 22, 0.08)" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_40s_linear_infinite]" />
            
            {/* Payment Node Connection */}
            <path d="M 60 110 L 340 110" stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
            <path d="M 200 30 L 200 190" stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
            
            <g transform="translate(110, 110)" className="animate-[float_4s_ease-in-out_infinite]">
              <circle r="16" fill="rgba(249, 115, 22, 0.08)" stroke="#f97316" strokeWidth="1.5" />
              <text x="0" y="4" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="bold" fontFamily="monospace">$</text>
            </g>
            
            <g transform="translate(290, 110)" className="animate-[float_4s_ease-in-out_infinite_1s]">
              <circle r="16" fill="rgba(249, 115, 22, 0.06)" stroke="#ea580c" strokeWidth="1.5" />
              <text x="0" y="3" textAnchor="middle" fill="#ea580c" fontSize="8" fontWeight="bold" fontFamily="monospace">API</text>
            </g>
            
            <rect x="185" y="95" width="30" height="30" rx="6" fill="rgba(255, 255, 255, 0.9)" stroke="#f97316" strokeWidth="2" className="animate-pulse" />
          </svg>
        );

      case 2: // Task Management App
        return (
          <svg className="w-full h-full bg-zinc-50 group-hover:scale-105 transition-transform duration-700" viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-tm" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(249, 115, 22, 0.05)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-tm)" />
            
            {/* Kanban Columns Layout */}
            <rect x="40" y="40" width="80" height="140" rx="8" fill="rgba(0,0,0,0.01)" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
            <rect x="160" y="40" width="80" height="140" rx="8" fill="rgba(249, 115, 22, 0.03)" stroke="rgba(249, 115, 22, 0.12)" strokeWidth="1" />
            <rect x="280" y="40" width="80" height="140" rx="8" fill="rgba(0,0,0,0.01)" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
            
            {/* Task Cards */}
            <rect x="50" y="60" width="60" height="25" rx="4" fill="rgba(0,0,0,0.03)" />
            <rect x="170" y="60" width="60" height="25" rx="4" fill="rgba(249, 115, 22, 0.15)" />
            <rect x="170" y="95" width="60" height="25" rx="4" fill="rgba(0,0,0,0.03)" />
            
            <circle cx="200" cy="72" r="3" fill="#f97316" className="animate-ping" />
            <circle cx="80" cy="72" r="3" fill="rgba(0,0,0,0.15)" />
            
            {/* Floating Flow Lines */}
            <path d="M 110 72 Q 140 72 170 72" fill="none" stroke="rgba(249,115,22,0.35)" strokeWidth="1.5" strokeDasharray="3 3" />
          </svg>
        );

      case 3: // Weather Dashboard
        return (
          <svg className="w-full h-full bg-zinc-50 group-hover:scale-105 transition-transform duration-700" viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-wd" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(249, 115, 22, 0.04)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-wd)" />
            
            {/* Atmospheric Sin Waves */}
            <path d="M 30 110 Q 110 50 200 110 T 370 110" fill="none" stroke="rgba(249, 115, 22, 0.25)" strokeWidth="2" className="animate-pulse" />
            <path d="M 30 130 Q 110 80 200 130 T 370 130" fill="none" stroke="rgba(249, 115, 22, 0.1)" strokeWidth="1.5" />
            
            {/* Weather Radar Ring */}
            <circle cx="200" cy="110" r="40" fill="none" stroke="rgba(249, 115, 22, 0.15)" strokeWidth="1" />
            <line x1="200" y1="70" x2="200" y2="150" stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
            <line x1="160" y1="110" x2="240" y2="110" stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
            
            <g transform="translate(200, 110)" className="animate-[spin_6s_linear_infinite]">
              <circle cx="0" cy="-40" r="5" fill="#f97316" />
              <line x1="0" y1="0" x2="0" y2="-40" stroke="#f97316" strokeWidth="1.5" />
            </g>
          </svg>
        );

      default: // Portfolio Website & general
        return (
          <svg className="w-full h-full bg-zinc-50 group-hover:scale-105 transition-transform duration-700" viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pf" width="16" height="16" patternUnits="userSpaceOnUse">
                <rect width="16" height="16" fill="none" />
                <path d="M 16 0 L 0 0 0 16" fill="none" stroke="rgba(0, 0, 0, 0.02)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pf)" />
            
            {/* Visualizer bars */}
            <g fill="rgba(249, 115, 22, 0.12)">
              <rect x="60" y="80" width="15" height="60" rx="3" className="animate-pulse" />
              <rect x="85" y="60" width="15" height="100" rx="3" className="animate-[pulse_1.5s_infinite]" />
              <rect x="110" y="90" width="15" height="40" rx="3" className="animate-pulse" />
              <rect x="135" y="75" width="15" height="70" rx="3" className="animate-[pulse_1.8s_infinite]" />
            </g>
            
            {/* Orbital Rings */}
            <circle cx="280" cy="110" r="45" fill="none" stroke="rgba(249, 115, 22, 0.12)" strokeWidth="1.5" />
            <circle cx="280" cy="110" r="30" fill="none" stroke="rgba(249, 115, 22, 0.2)" strokeWidth="1.5" strokeDasharray="3 3" className="animate-[spin_12s_linear_infinite]" />
            
            <circle cx="280" cy="110" r="5" fill="#f97316" className="animate-ping" />
          </svg>
        );
    }
  };

  return (
    <div className="bg-white border border-zinc-200 p-5 rounded-3xl group hover-lift flex flex-col h-full relative overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.015)]">
      
      {/* Visual Header viewport */}
      <div className="relative h-52 w-full overflow-hidden rounded-2xl mb-6 bg-zinc-50 border border-zinc-100">
        {renderProjectArt(project.id, project.title)}
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 z-10">
            <span className="bg-orange-500 text-white px-3.5 py-1 rounded-md text-[9px] font-mono font-bold uppercase tracking-widest shadow-[0_4px_12px_rgba(249,115,22,0.3)]">
              Primary_Asset
            </span>
          </div>
        )}
        
        {/* Ambient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60 pointer-events-none" />
      </div>

      {/* Content info */}
      <div className="flex flex-col flex-1 relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <Activity className="w-3.5 h-3.5 text-orange-500 animate-pulse" />
          <span className="text-[9px] text-orange-500 font-mono tracking-wider uppercase opacity-75">
            System_Build_0{project.id} // verified
          </span>
        </div>

        <h3 className="text-2xl font-bold text-zinc-800 mb-3 font-space tracking-tight group-hover:text-orange-600 transition-colors">
          {project.title}
        </h3>

        <p className="text-zinc-500 mb-6 line-clamp-3 text-sm font-light leading-relaxed">
          {project.description}
        </p>

        {/* Technologies Grid */}
        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-zinc-50 text-zinc-500 text-[9px] font-mono rounded-md font-semibold border border-zinc-100 group-hover:border-orange-500/20 group-hover:text-orange-600 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Panel Buttons */}
        <div className="flex gap-4 border-t border-zinc-100 pt-4">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 bg-orange-500/10 hover:bg-orange-500 text-orange-600 hover:text-white py-3 rounded-xl text-xs font-bold transition-all duration-300 border border-orange-500/20 hover:shadow-[0_4px_15px_rgba(249,115,22,0.25)]"
            >
              <ExternalLink className="w-3.5 h-3.5" /> U_INTERFACE
            </Link>
          )}
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-white text-zinc-500 hover:text-zinc-800 py-3 rounded-xl text-xs font-bold border border-zinc-200 hover:border-zinc-300 transition-all duration-300"
          >
            <Github className="w-3.5 h-3.5" /> S_CODE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;