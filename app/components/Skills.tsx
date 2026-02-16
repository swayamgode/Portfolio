'use client';
import React from 'react';

const Skills = () => {
    const skillsData = [
        {
            category: "Languages",
            icon: "💻",
            items: ["Python", "JavaScript", "HTML/CSS", "SQL", "Java"]
        },
        {
            category: "Frameworks & Tools",
            icon: "🛠️",
            items: ["React.js", "Node.js", "Next.js", "TensorFlow", "Tailwind CSS"]
        },
        {
            category: "Domains",
            icon: "🎯",
            items: ["Web Development", "Generative AI", "Blockchain", "Data Analysis"]
        },
        {
            category: "Other Skills",
            icon: "⚡",
            items: ["UI/UX Design", "API Integration", "Git & Version Control", "Problem Solving"]
        }
    ];

    return (
        <section id="skills" className="py-24 px-6 relative">
            {/* Background decoration */}
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-indigo-400 font-semibold uppercase tracking-wider text-sm mb-4">Skills & Expertise</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Technical <span className="gradient-text">Arsenal</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Mastering cutting-edge technologies to build exceptional digital experiences
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {skillsData.map((skillGroup, index) => (
                        <div key={index} className="glass rounded-3xl p-8 hover-lift">
                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-3xl">{skillGroup.icon}</span>
                                <h3 className="text-xl font-bold text-white">
                                    {skillGroup.category}
                                </h3>
                            </div>

                            {/* Skills List */}
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 glass-light rounded-full text-sm font-medium text-slate-300 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
