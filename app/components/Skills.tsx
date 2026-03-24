'use client';
import React from 'react';

const Skills = () => {
    const skillsData = [
        {
            category: "Core_Engine",
            items: ["Python", "JavaScript", "HTML/CSS", "SQL", "Java"]
        },
        {
            category: "Architecture_Frameworks",
            items: ["React.js", "Node.js", "Next.js", "TensorFlow", "Tailwind CSS"]
        },
        {
            category: "Operational_Domains",
            items: ["Web Development", "Generative AI", "Blockchain", "Data Analysis"]
        },
        {
            category: "System_Augmentation",
            items: ["UI/UX Design", "API Integration", "Git & Version Control", "Problem Solving"]
        }
    ];

    return (
        <section id="skills" className="py-32 px-6 relative overflow-hidden bg-void">
            {/* Background decoration */}
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header - Left Aligned */}
                <div className="mb-20 animate-fadeInUp">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="w-12 h-[1px] bg-indigo-500/50"></span>
                        <p className="text-indigo-400 font-bold tracking-[0.3em] uppercase text-[10px]">Expertise_Matrix_v2</p>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 font-space tracking-tighter">
                        Technical <span className="gradient-text">Arsenal</span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl font-light leading-relaxed">
                        Deploying state-of-the-art technologies to architect high-performance digital ecosystems and intelligent interfaces.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillsData.map((skillGroup, index) => (
                        <div key={index} className="glass-level-1 rounded-[2.5rem] p-8 hover-lift rim-light group border-white/5">
                            {/* HUD-like Category Header */}
                            <div className="flex flex-col gap-1 mb-8">
                                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Category_Ref</span>
                                <h3 className="text-xl font-bold text-white font-space tracking-tight group-hover:text-indigo-400 transition-colors">
                                    {skillGroup.category}
                                </h3>
                            </div>

                            {/* Skills List - Data Clusters */}
                            <div className="flex flex-wrap gap-2.5">
                                {skillGroup.items.map((skill, i) => (
                                    <div
                                        key={i}
                                        className="relative group/skill"
                                    >
                                        <span
                                            className="block px-4 py-2 glass-level-2 rounded-xl text-[11px] font-bold text-slate-400 border-white/5 group-hover/skill:text-indigo-300 group-hover/skill:border-indigo-500/50 transition-all cursor-crosshair font-mono uppercase tracking-tighter"
                                        >
                                            {skill}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            
                            {/* Decorative Corner */}
                            <div className="absolute bottom-6 right-6 w-10 h-10 border-b border-r border-white/5 group-hover:border-magenta-500/30 transition-colors pointer-events-none" />
                        </div>
                    ))}
                </div>
                
                {/* Background Tech Label */}
                <div className="absolute -bottom-10 right-0 opacity-[0.02] pointer-events-none select-none">
                    <span className="text-[15rem] font-bold font-space uppercase">SKILLS</span>
                </div>
            </div>
        </section>
    );
};

export default Skills;

