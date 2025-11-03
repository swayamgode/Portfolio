import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application built with modern technologies including user authentication, payment processing, and admin dashboard.",
    image: "/images/project1.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://ecommerce-platform.vercel.app",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/images/project2.jpg",
    technologies: ["React", "Firebase", "Material-UI", "Redux"],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://task-manager.netlify.app",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather forecasting application with location detection, 7-day forecasts, and interactive maps.",
    technologies: ["TypeScript", "OpenWeather API", "Chart.js", "CSS3"],
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    liveUrl: "https://weather-dashboard.github.io",
    featured: false
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A responsive portfolio website built with Next.js and TypeScript featuring modern design and smooth animations.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://yourportfolio.vercel.app",
    featured: true
  }
];