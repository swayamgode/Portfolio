import React from 'react';
import Hero from './components/Hero';
import Details from './components/Details';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import ProjectsSection from './components/ProjectsSection';
import { projects } from './data/project';

const Page = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Details />
      <Experience />
      <Education />
      <Skills />
      <ProjectsSection projects={projects} />
      <Achievements />
    </div>
  );
};

export default Page;
