import Link from 'next/link';
import Image from 'next/image';
import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="glass-level-2 p-5 rounded-[2rem] group hover-lift rim-light flex flex-col h-full border-white/5">
      {/* Project Image Viewport */}
      <div className="relative h-56 w-full overflow-hidden rounded-2xl mb-6 bg-indigo-500/5 group-hover:bg-indigo-500/10 transition-colors">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-slate-700 text-6xl font-bold opacity-20 font-space italic">
              {project.title.charAt(0)}
            </div>
          </div>
        )}

        {/* Featured Badge - Neon Magenta */}
        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-[#AE05C6] text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(174,5,198,0.4)]">
              Primary_Asset
            </span>
          </div>
        )}
        
        {/* Overlay Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#10131a] via-transparent to-transparent opacity-60" />
      </div>

      {/* Project Content */}
      <div className="flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
          <p className="text-[10px] text-indigo-400 font-mono tracking-tighter uppercase opacity-70">Project_Deployment_01</p>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-3 font-space tracking-tight group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-400 mb-6 line-clamp-2 text-sm font-light leading-relaxed">
          {project.description}
        </p>

        {/* Technologies - Data Terminal Style */}
        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
          {project.technologies.slice(0, 3).map((tech: string, index: number) => (
            <span
              key={index}
              className="px-3 py-1 bg-white/5 text-slate-400 text-[10px] rounded-md font-bold uppercase tracking-wider border border-white/10 group-hover:border-indigo-500/30 group-hover:text-indigo-300 transition-all"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 bg-white/3 text-slate-500 text-[10px] rounded-md font-bold border border-white/5">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Action Links - HUD Buttons */}
        <div className="flex gap-4">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-indigo-600/10 hover:bg-indigo-600 text-indigo-400 hover:text-white px-4 py-3 rounded-xl text-xs font-bold transition-all duration-300 border border-indigo-500/30 hover:shadow-[0_0_15px_rgba(79,70,229,0.3)]"
            >
              U_INTERFACE
            </Link>
          )}
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center glass-level-1 text-slate-400 hover:text-white px-4 py-3 rounded-xl text-xs font-bold border border-white/5 hover:border-white/20 transition-all duration-300"
          >
            S_CODE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;