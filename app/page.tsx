import React from 'react';
import Hero from './components/Hero';
import ProjectsGrid from './components/ProjectsGrid';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

const Page = () => {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <ProjectsGrid />
      <Experience />
      <Skills />
      <Achievements />
      <Contact />
    </div>
  );
};

export default Page;
