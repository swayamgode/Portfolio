'use client';
import React from 'react';

const Skills = () => {
    const skillsData = [
        { category: "Languages", items: ["Python", "JavaScript", "HTML", "CSS", "SQL", "Java"] },
        { category: "Tools/Frameworks", items: ["React.js", "Node.js", "Express.js", "TensorFlow", "Next.js", "Tailwind CSS"] },
        { category: "Domains", items: ["Web Development", "Generative AI", "Blockchain", "Data Analysis"] },
        { category: "Other Skills", items: ["UI/UX Design", "API Integration", "Git & Version Control", "Problem Solving"] }
    ];

    return (
        <section id="skills" className="py-16 px-6 bg-black">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                    Skills
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {skillsData.map((skillGroup, index) => (
                        <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10">
                            <h3 className="text-lg font-bold text-accent mb-4">{skillGroup.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((skill, i) => (
                                    <span key={i} className="bg-black/50 text-gray-300 text-sm px-3 py-1 rounded-full border border-white/10">
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
