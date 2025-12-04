'use client';
import React from 'react';

const Skills = () => {
    const skillsData = [
        {
            category: "Languages",
            items: ["Python", "JavaScript", "HTML/CSS", "SQL", "Java"]
        },
        {
            category: "Frameworks & Tools",
            items: ["React.js", "Node.js", "Next.js", "TensorFlow", "Tailwind CSS"]
        },
        {
            category: "Domains",
            items: ["Web Development", "Generative AI", "Blockchain", "Data Analysis"]
        },
        {
            category: "Other Skills",
            items: ["UI/UX Design", "API Integration", "Git & Version Control", "Problem Solving"]
        }
    ];

    return (
        <section id="skills" className="section-padding">
            <div className="container-custom">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <p className="section-title">SKILLS & EXPERTISE</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
                        Technical Arsenal
                    </h2>
                    <p className="text-lg text-[#666666] max-w-2xl mx-auto">
                        Mastering cutting-edge technologies to build exceptional digital experiences
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {skillsData.map((skillGroup, index) => (
                        <div key={index} className="card">

                            {/* Category Header */}
                            <h3 className="text-xl font-bold text-[#1a1a1a] mb-6">
                                {skillGroup.category}
                            </h3>

                            {/* Skills List */}
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((skill, i) => (
                                    <span key={i} className="badge">
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
