'use client';
import React from 'react';
import { 
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaJava, FaHtml5, FaCss3Alt, FaPhp
} from 'react-icons/fa';
import { 
  SiJavascript, SiNextdotjs, SiTailwindcss, SiCplusplus, SiTypescript, SiMongodb,
  SiKotlin
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'Git', icon: FaGitAlt },
    { name: 'C++', icon: SiCplusplus },
    { name: 'Java', icon: FaJava },
    { name: 'Python', icon: FaPython },
    { name: 'Kotlin', icon: SiKotlin },
    { name: 'C++', icon: SiCplusplus },
    { name: 'React', icon: FaReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'PHP', icon: FaPhp },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'CSS', icon: FaCss3Alt },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Tailwind', icon: SiTailwindcss },
    { name: 'HTML', icon: FaHtml5 },
    { name: 'MongoDB', icon: SiMongodb },
  ];

  return (
    <section id="skills" className="py-16 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="section-title section-title-pink text-xl md:text-2xl">Skills</h2>
        </div>

        {/* Skills Grid - circular icons */}
        <div className="flex flex-wrap justify-center gap-6 max-w-xl mx-auto">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={index}
                className="group cursor-pointer"
                title={skill.name}
              >
                <div className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center transition-all duration-300 group-hover:border-zinc-600 group-hover:bg-zinc-800 group-hover:scale-110">
                  <IconComponent className="w-6 h-6 text-zinc-300 group-hover:text-white transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
