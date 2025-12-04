'use client';
import React from 'react';

const Skills = () => {
    const skillsData = [
        {
            category: "Languages",
            icon: "💻",
            gradient: "from-blue-500 to-cyan-400",
            items: [
                { name: "Python", level: 90 },
                { name: "JavaScript", level: 85 },
                { name: "HTML/CSS", level: 95 },
                { name: "SQL", level: 80 },
                { name: "Java", level: 75 }
            ]
        },
        {
            category: "Frameworks & Tools",
            icon: "🛠️",
            gradient: "from-purple-500 to-pink-400",
            items: [
                { name: "React.js", level: 90 },
                { name: "Node.js", level: 85 },
                { name: "Next.js", level: 85 },
                { name: "TensorFlow", level: 70 },
                { name: "Tailwind CSS", level: 95 }
            ]
        },
        {
            category: "Domains",
            icon: "🎯",
            gradient: "from-orange-500 to-red-400",
            items: [
                { name: "Web Development", level: 90 },
                { name: "Generative AI", level: 75 },
                { name: "Blockchain", level: 70 },
                { name: "Data Analysis", level: 80 }
            ]
        },
        {
            category: "Other Skills",
            icon: "✨",
            gradient: "from-green-500 to-teal-400",
            items: [
                { name: "UI/UX Design", level: 85 },
                { name: "API Integration", level: 90 },
                { name: "Git & Version Control", level: 85 },
                { name: "Problem Solving", level: 95 }
            ]
        }
    ];

    return (
        <section id="skills" className="section-padding relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
            </div>

            <div className="container-custom relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-block mb-4">
                        <span className="text-accent text-sm font-bold uppercase tracking-widest px-4 py-2 glass-card rounded-full">Skills & Expertise</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
                        Technical <span className="text-gradient-accent">Arsenal</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Mastering cutting-edge technologies to build exceptional digital experiences
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {skillsData.map((skillGroup, index) => (
                        <div
                            key={index}
                            className="card-premium group"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="text-6xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                                    {skillGroup.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-gradient-accent transition-all duration-300">
                                        {skillGroup.category}
                                    </h3>
                                    <div className={`h-1 w-20 bg-gradient-to-r ${skillGroup.gradient} rounded-full mt-2`} />
                                </div>
                            </div>

                            {/* Skills List */}
                            <div className="space-y-6">
                                {skillGroup.items.map((skill, i) => (
                                    <div key={i} className="group/skill">
                                        <div className="flex justify-between items-center mb-3">
                                            <span className="text-gray-200 font-semibold text-lg group-hover/skill:text-white transition-colors">
                                                {skill.name}
                                            </span>
                                            <span className="text-accent font-bold text-lg tabular-nums">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        {/* Enhanced Progress Bar */}
                                        <div className="skill-bar">
                                            <div
                                                className="skill-bar-fill transition-all duration-1000 ease-out"
                                                style={{
                                                    width: `${skill.level}%`,
                                                    transitionDelay: `${index * 100 + i * 50}ms`
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div className="inline-flex items-center gap-3 px-6 py-3 glass-card rounded-full">
                        <span className="text-gray-400">Always learning, always growing</span>
                        <span className="text-2xl animate-bounce">📚</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
