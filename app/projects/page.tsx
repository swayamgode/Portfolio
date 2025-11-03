import { Metadata } from 'next';
import ProjectsSection from '../components/ProjectsSection';
import { projects } from '../data/project';

export const metadata: Metadata = {
  title: 'Projects | Your Name',
  description: 'Explore my portfolio of web development projects built with modern technologies.',
};

const ProjectsPage: React.FC = () => {
  return (
    <main>
      <ProjectsSection projects={projects} />
    </main>
  );
};

export default ProjectsPage;