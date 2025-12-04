'use client';
import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="section-padding relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl" />
            </div>

            <div className="container-custom relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-block mb-4">
                        <span className="text-accent text-sm font-bold uppercase tracking-widest px-4 py-2 glass-card rounded-full">Experience</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
                        Work <span className="text-gradient-accent">History</span>
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Animated Timeline Line */}
                        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-orange-400 to-transparent rounded-full" />

                        {/* Experience Card */}
                        <div className="relative pl-12 md:pl-24">
                            {/* Glowing Timeline Dot */}
                            <div className="absolute left-0 md:left-6 top-0 flex items-center justify-center">
                                <div className="w-6 h-6 bg-accent rounded-full border-4 border-[#0a0a0a] shadow-lg shadow-accent/50 animate-pulse-glow" />
                                <div className="absolute w-12 h-12 bg-accent/20 rounded-full animate-ping" />
                            </div>

                            <div className="card-premium group hover:scale-105 transition-all duration-500">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-gradient-accent transition-all duration-300">
                                            Web Design Intern
                                        </h3>
                                        <p className="text-xl font-semibold bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
                                            Rebenok (Virar)
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-accent/20 to-orange-500/20 text-accent rounded-2xl border border-accent/30 font-bold shadow-lg">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        May 2025 – Jul 2025
                                    </div>
                                </div>

                                <ul className="space-y-4">
                                    <li className="flex items-start gap-4 text-gray-300 group/item hover:text-white transition-colors">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-accent to-orange-500 flex items-center justify-center mt-0.5">
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-lg">Designed and developed responsive web interfaces using HTML, CSS, and JavaScript</span>
                                    </li>
                                    <li className="flex items-start gap-4 text-gray-300 group/item hover:text-white transition-colors">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-accent to-orange-500 flex items-center justify-center mt-0.5">
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-lg">Collaborated with designers and developers to improve UI/UX flow and overall website accessibility</span>
                                    </li>
                                    <li className="flex items-start gap-4 text-gray-300 group/item hover:text-white transition-colors">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-accent to-orange-500 flex items-center justify-center mt-0.5">
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-lg">Enhanced visual consistency and optimized performance for faster load times</span>
                                    </li>
                                    <li className="flex items-start gap-4 text-gray-300 group/item hover:text-white transition-colors">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-accent to-orange-500 flex items-center justify-center mt-0.5">
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-lg">Contributed creative ideas for improving client website aesthetics and engagement</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
