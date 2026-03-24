'use client';
import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="py-32 px-6 relative bg-void overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Section Header - Left Aligned */}
                <div className="mb-20 animate-fadeInUp">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="w-12 h-[1px] bg-indigo-500/50"></span>
                        <p className="text-indigo-400 font-bold tracking-[0.3em] uppercase text-[10px]">Professional_Record_Log</p>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 font-space tracking-tighter">
                        Work <span className="gradient-text">History</span>
                    </h2>
                </div>

                {/* Experience Card - Technical HUD feel */}
                <div className="max-w-4xl">
                    <div className="glass-level-1 rounded-[2.5rem] p-10 hover-lift rim-light group border-white/5 relative overflow-hidden">
                        {/* Decorative HUD Elements */}
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <span className="font-mono text-xs uppercase cursor-wait">ENCRYPTED_LOG_01</span>
                        </div>
                    
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10 border-b border-white/5 pb-10">
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-2 font-space tracking-tight group-hover:text-indigo-400 transition-colors">
                                    Web Design Intern
                                </h3>
                                <div className="flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-magenta-500"></span>
                                    <p className="text-xl font-bold text-slate-400 font-space tracking-tight">
                                        Rebenok (Virar)
                                    </p>
                                </div>
                            </div>
                            <div className="glass-level-2 px-6 py-2.5 rounded-xl border-white/5 font-mono text-indigo-400 text-sm font-bold tracking-tighter uppercase whitespace-nowrap">
                                May 2025 – Jul 2025
                            </div>
                        </div>

                        <ul className="space-y-6">
                            {[
                                "Designed and developed responsive web interfaces using HTML, CSS, and JavaScript",
                                "Collaborated with designers and developers to improve UI/UX flow and overall website accessibility",
                                "Enhanced visual consistency and optimized performance for faster load times",
                                "Contributed creative ideas for improving client website aesthetics and engagement"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-5 text-slate-400 group/item">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mt-0.5 group-hover/item:bg-indigo-500 group-hover/item:border-indigo-400 transition-all">
                                        <svg className="w-4 h-4 text-indigo-400 group-hover/item:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-lg font-light leading-relaxed group-hover/item:text-slate-200 transition-colors">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

