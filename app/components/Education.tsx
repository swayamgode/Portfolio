'use client';
import React from 'react';

const Education = () => {
    const educationData = [
        {
            degree: "Bachelor of Engineering – AI & Data Science",
            school: "Vidyavardhini's College of Engineering and Technology (VCET), Vasai",
            year: "2025 – 2028",
            details: [
                "Relevant Coursework: Machine Learning, Web Development, Python Programming, Database Management",
                "Academic Interests: AI-based Systems, Blockchain Applications, Web Innovation"
            ]
        },
        {
            degree: "Diploma in Computer Engineering",
            school: "Vidyavardhini's Bhausaheb Vartak Polytechnic, Vasai",
            year: "2022 – 2025",
            details: [
                "Focused on foundational computer science concepts, database management, and web technologies",
                "Completed multiple projects in web design, software development, and IoT integration",
                "Graduated with strong technical and problem-solving skills"
            ]
        }
    ];

    return (
        <section id="education" className="py-32 px-6 relative bg-void overflow-hidden">
            {/* Background decoration */}
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-magenta-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Section Header - Left Aligned */}
                <div className="mb-20 animate-fadeInUp">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="w-12 h-[1px] bg-magenta-500/50"></span>
                        <p className="text-magenta-400 font-bold tracking-[0.3em] uppercase text-[10px]">Academic_Evolution_Matrix</p>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 font-space tracking-tighter">
                        Academic <span className="gradient-text-alt">Journey</span>
                    </h2>
                </div>

                {/* Education Cards - Level 1 Glass */}
                <div className="grid md:grid-cols-2 gap-10 max-w-6xl">
                    {educationData.map((edu, index) => (
                        <div key={index} className="glass-level-1 rounded-[2.5rem] p-10 hover-lift rim-light group border-white/5 flex flex-col h-full">

                            {/* HUD Year Badge */}
                            <div className="mb-6 flex justify-between items-center">
                                <div className="glass-level-2 px-6 py-2 rounded-xl border-white/5 font-mono text-indigo-400 text-xs font-bold tracking-widest uppercase">
                                    {edu.year}
                                </div>
                                <span className="text-[10px] font-mono text-slate-600">ST_CODE: 00{index+1}</span>
                            </div>

                            {/* Degree */}
                            <h3 className="text-2xl font-bold text-white mb-3 font-space tracking-tight group-hover:text-indigo-400 transition-colors">
                                {edu.degree}
                            </h3>

                            {/* School */}
                            <div className="flex items-center gap-3 mb-8">
                                <span className="w-1.5 h-1.5 rounded-full bg-magenta-500"></span>
                                <p className="text-lg font-bold text-slate-400 font-space tracking-tight leading-snug">
                                    {edu.school}
                                </p>
                            </div>

                            {/* Details - Technical Bullet List */}
                            <ul className="space-y-4 mt-auto border-t border-white/5 pt-8">
                                {edu.details.map((detail, i) => (
                                    <li key={i} className="text-slate-400 flex items-start gap-4 group/item">
                                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/30 mt-2 flex-shrink-0 group-hover/item:bg-indigo-500 transition-colors" />
                                        <span className="text-sm font-light leading-relaxed group-hover/item:text-slate-200 transition-colors">{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;

