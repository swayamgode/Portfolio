import Link from 'next/link';
import Image from 'next/image';
import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="card group">
      {/* Project Image */}
      <div className="relative h-48 w-full overflow-hidden rounded-xl mb-4">
        {project.image ? (
          <>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </>
        ) : (
          <div className="w-full h-full bg-[#f5f5f0] flex items-center justify-center">
            <div className="text-[#666666] text-4xl font-bold">
              {project.title.charAt(0)}
            </div>
          </div>
        )}

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 right-3">
            <span className="bg-[#1a1a1a] text-white px-3 py-1 rounded-full text-xs font-semibold">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div>
        {/* Title */}
        <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-[#666666] mb-4 line-clamp-2 text-sm">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech: string, index: number) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#f5f5f0] text-[#666666] text-xs rounded-full font-medium border border-[#e0e0e0]"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 bg-[#f5f5f0] text-[#666666] text-xs rounded-full font-medium border border-[#e0e0e0]">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-[#1a1a1a] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#2d2d2d] transition-colors"
            >
              Live Demo
            </Link>
          )}
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-white text-[#1a1a1a] px-4 py-2 rounded-full text-sm font-semibold border border-[#e0e0e0] hover:border-[#1a1a1a] transition-colors"
          >
            View Code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;