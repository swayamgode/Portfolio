import Link from 'next/link';
import Image from 'next/image';
import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 overflow-hidden">
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
      
      {/* Project Image with Overlay */}
      <div className="relative h-56 w-full overflow-hidden">
        {project.image ? (
          <>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
            <div className="text-white text-4xl font-bold opacity-20">
              {project.title.charAt(0)}
            </div>
          </div>
        )}
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              Featured
            </span>
          </div>
        )}
        
        {/* Live Demo Button on Hover */}
        {project.liveUrl && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 hover:bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex items-center gap-2 shadow-lg"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View Live
            </Link>
          </div>
        )}
      </div>
      
      {/* Project Content */}
      <div className="p-6 relative">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-1">
          {project.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 leading-relaxed">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 4).map((tech: string, index: number) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-200 text-xs rounded-lg font-medium border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-400 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs rounded-lg font-medium">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
        
        {/* Action Buttons */}
        <div className="flex space-x-3 pt-4 border-t border-gray-100 dark:border-gray-700">
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Code
          </Link>
          
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;