'use client';
import React from 'react';
import { MapPin, GraduationCap, Calendar, ArrowUpRight } from 'lucide-react';

const Education = () => {
    const educationData = [
        {
            degree: "Bachelor of Engineering – AI & Data Science",
            school: "Vidyavardhini's College of Engineering and Technology (VCET)",
            location: "Vasai, India",
            year: "2025 – 2028",
            details: [
                "Relevant Coursework: Machine Learning, Web Development, Python Programming, Database Management",
                "Academic Interests: AI-based Systems, Blockchain Applications, Web Innovation"
            ]
        },
        {
            degree: "Diploma in Computer Engineering",
            school: "Vidyavardhini's Bhausaheb Vartak Polytechnic",
            location: "Vasai, India",
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
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-500/2 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="mb-20 animate-fadeInUp">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="w-12 h-[1px] bg-orange-500/50"></span>
                        <p className="text-orange-500 font-mono tracking-[0.3em] uppercase text-[10px]">Academic_Evolution_Matrix</p>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold text-zinc-900 mb-6 font-space tracking-tighter">
                        Academic <span className="gradient-text-alt">Journey</span>
                    </h2>
                </div>

                {/* Timeline Layout */}
                <div className="relative border-l border-zinc-200 pl-8 ml-4 space-y-16 max-w-4xl">
                    {educationData.map((edu, index) => (
                        <div key={index} className="relative">
                            {/* Timeline Node Glow */}
                            <div className="absolute -left-[41px] top-8 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-[0_0_10px_rgba(249,115,22,0.4)] animate-pulse" />
                            
                            {/* Education Card */}
                            <div className="bg-white border border-zinc-200 rounded-3xl p-8 md:p-10 hover-lift relative overflow-hidden group flex flex-col h-full shadow-[0_4px_20px_rgba(0,0,0,0.015)]">
                                
                                {/* HUD Stamp */}
                                <div className="absolute top-0 right-0 p-6 opacity-[0.04] select-none pointer-events-none font-mono text-sm uppercase text-zinc-900">
                                    EDU_BLOCK_0{index + 1} // MATRIX
                                </div>

                                {/* Year and ID */}
                                <div className="mb-6 flex justify-between items-center">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-orange-500/10 text-orange-650 text-xs font-mono font-bold uppercase tracking-wider">
                                        <GraduationCap className="w-3.5 h-3.5" /> Degree
                                    </span>
                                    <span className="text-[10px] font-mono text-zinc-400">ST_CODE: 00{index + 1}</span>
                                </div>

                                {/* Degree & School Info */}
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8 border-b border-zinc-100 pb-8">
                                    <div className="space-y-3">
                                        <h3 className="text-3xl font-bold text-zinc-800 font-space tracking-tight group-hover:text-orange-600 transition-colors">
                                            {edu.degree}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-4 text-zinc-500 text-sm font-medium">
                                            <span className="flex items-center gap-1.5">
                                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                                                {edu.school}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <MapPin className="w-4 h-4 text-zinc-400" /> {edu.location}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 font-mono text-orange-600 text-xs font-bold tracking-wider uppercase whitespace-nowrap self-start">
                                        <Calendar className="w-3.5 h-3.5 text-orange-500" /> {edu.year}
                                    </div>
                                </div>

                                {/* Details Bullet List */}
                                <ul className="space-y-4 mt-auto">
                                    {edu.details.map((detail, i) => (
                                        <li key={i} className="text-zinc-600 flex items-start gap-4 group/item">
                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500/40 mt-2 flex-shrink-0 group-hover/item:bg-orange-500 transition-colors" />
                                            <span className="text-sm font-light leading-relaxed group-hover/item:text-zinc-900 transition-colors">
                                                {detail}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Bottom Info */}
                                <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center justify-between">
                                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Enroll_Status_Verified</span>
                                    <span className="text-xs text-orange-600 group-hover:text-orange-700 font-mono flex items-center gap-1 transition-colors cursor-pointer">
                                        curriculum <ArrowUpRight className="w-4.5 h-4.5" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
