import React from 'react';
import Hero from './components/Hero';
import Details from './components/Details';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import ProjectsSection from './components/ProjectsSection';
import { projects } from './data/project';

const page = () => {
  return (
    <div className="bg-[#f5f5f0] min-h-screen">
      <Hero />
      <Details />
      <Experience />
      <Education />
      <Skills />
      <ProjectsSection projects={projects} />
      <Achievements />
    </div>
  )
}

export default page

