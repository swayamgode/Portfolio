import { IconType } from 'react-icons';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaGitAlt,
  FaAws,
  FaDocker
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiJavascript, 
  SiTypescript, 
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiJest,
  SiRedis,
  SiGraphql,
  SiKubernetes
} from 'react-icons/si';

interface TechItem {
  name: string;
  icon: IconType;
  color: string;
}

const techStack: TechItem[] = [
  { name: 'React', icon: FaReact, color: 'text-blue-500' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-black dark:text-white' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600' },
  { name: 'Python', icon: FaPython, color: 'text-blue-400' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-500' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-700' },
  { name: 'Express', icon: SiExpress, color: 'text-gray-600 dark:text-gray-300' },
  { name: 'GraphQL', icon: SiGraphql, color: 'text-pink-600' },
  { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
  { name: 'AWS', icon: FaAws, color: 'text-orange-400' },
  { name: 'Docker', icon: FaDocker, color: 'text-blue-400' },
  { name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-500' },
  { name: 'Jest', icon: SiJest, color: 'text-red-600' },
  { name: 'Redis', icon: SiRedis, color: 'text-red-500' },
];

export default function TechStack() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {techStack.map((tech: TechItem, index: number) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer hover:-translate-y-1"
            >
              <tech.icon 
                className={`w-10 h-10 ${tech.color} group-hover:scale-110 transition-transform duration-300 mb-3`} 
              />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-200 text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}