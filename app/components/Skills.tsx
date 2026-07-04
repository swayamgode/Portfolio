'use client';
import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaJava, FaHtml5, FaCss3Alt, FaPhp
} from 'react-icons/fa';
import {
  SiJavascript, SiNextdotjs, SiTailwindcss, SiCplusplus, SiTypescript, SiMongodb, SiKotlin
} from 'react-icons/si';

const row1 = [
  { name: 'React',      icon: FaReact,       color: '#61DAFB' },
  { name: 'Next.js',    icon: SiNextdotjs,   color: '#ffffff' },
  { name: 'TypeScript', icon: SiTypescript,  color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript,  color: '#F7DF1E' },
  { name: 'Tailwind',   icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'Node.js',    icon: FaNodeJs,      color: '#6DA55F' },
  { name: 'MongoDB',    icon: SiMongodb,     color: '#47A248' },
  { name: 'HTML',       icon: FaHtml5,       color: '#E34F26' },
];

const row2 = [
  { name: 'Python',  icon: FaPython,    color: '#3776AB' },
  { name: 'Java',    icon: FaJava,      color: '#f89820' },
  { name: 'C++',     icon: SiCplusplus, color: '#00599C' },
  { name: 'Kotlin',  icon: SiKotlin,    color: '#7F52FF' },
  { name: 'PHP',     icon: FaPhp,       color: '#777BB4' },
  { name: 'CSS',     icon: FaCss3Alt,   color: '#264DE4' },
  { name: 'Git',     icon: FaGitAlt,    color: '#F05032' },
];

interface SkillItem {
  name: string;
  icon: React.ElementType;
  color: string;
}

function SkillPill({ name, icon: Icon, color }: SkillItem) {
  return (
    <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-all duration-300 group flex-shrink-0 cursor-default">
      <Icon
        className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
        style={{ color }}
      />
      <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }: { items: SkillItem[]; reverse?: boolean }) {
  const doubled = [...items, ...items]; // duplicate for seamless loop
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className={`flex gap-3 w-max ${reverse ? 'animate-marquee-right' : 'animate-marquee-left'}`}>
        {doubled.map((skill, i) => (
          <SkillPill key={i} {...skill} />
        ))}
      </div>
    </div>
  );
}

const Skills = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="skills" className="py-16 bg-black overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-10" ref={titleRef}>
          <h2 className={`section-title section-title-pink text-xl md:text-2xl ${titleVisible ? 'is-visible' : ''}`}>
            Skills
          </h2>
        </div>
      </div>

      {/* Full-width marquee area */}
      <div
        ref={sectionRef}
        className={`space-y-3 transition-opacity duration-700 ${sectionVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </section>
  );
};

export default Skills;
