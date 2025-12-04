import Link from 'next/link';
import Image from 'next/image';
import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative card-premium hover:scale-105 transition-all duration-500">
      {/* Gradient Border Effect on Hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-accent via-secondary to-tertiary rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />

      <div className="relative bg-[#0a0a0a] rounded-3xl overflow-hidden">
        {/* Project Image */}
        <div className="relative h-64 w-full overflow-hidden">
          {project.image ? (
            <>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Animated Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-accent/20 to-purple-500/20 flex items-center justify-center">
              <div className="text-white text-6xl font-black opacity-20">
                {project.title.charAt(0)}
              </div>
            </div>
          )}

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 right-4 z-10">
              <span className="flex items-center gap-2 bg-gradient-to-r from-accent to-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-2xl shadow-accent/50 animate-pulse-glow">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Featured
              </span>
            </div>
          )}

          {/* Overlay Links on Hover */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/40 backdrop-blur-sm">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 px-6 py-3 rounded-xl font-bold transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-2 shadow-2xl hover:scale-110"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </Link>
            )}
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-accent to-orange-500 text-white px-6 py-3 rounded-xl font-bold transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-2 shadow-2xl shadow-accent/50 hover:scale-110"
              style={{ transitionDelay: '50ms' }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View Code
            </Link>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gradient-accent transition-all duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 mb-6 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech: string, index: number) => (
              <span
                key={index}
                className="px-4 py-2 glass-card text-gray-300 text-sm rounded-xl font-medium hover:border-accent/50 hover:text-white transition-all duration-300 hover:scale-105"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-4 py-2 bg-gradient-to-r from-accent/20 to-orange-500/20 text-accent text-sm rounded-xl font-bold border border-accent/30">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;