'use client';
import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="section-padding">
            <div className="container-custom">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <p className="section-title">EXPERIENCE</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">
                        Work History
                    </h2>
                </div>

                {/* Experience Card */}
                <div className="max-w-3xl mx-auto">
                    <div className="card">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                            <div>
                                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">
                                    Web Design Intern
                                </h3>
                                <p className="text-lg font-semibold text-[#666666]">
                                    Rebenok (Virar)
                                </p>
                            </div>
                            <div className="badge">
                                May 2025 – Jul 2025
                            </div>
                        </div>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-[#666666]">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1a1a1a] flex items-center justify-center mt-0.5">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span>Designed and developed responsive web interfaces using HTML, CSS, and JavaScript</span>
                            </li>
                            <li className="flex items-start gap-3 text-[#666666]">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1a1a1a] flex items-center justify-center mt-0.5">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span>Collaborated with designers and developers to improve UI/UX flow and overall website accessibility</span>
                            </li>
                            <li className="flex items-start gap-3 text-[#666666]">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1a1a1a] flex items-center justify-center mt-0.5">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span>Enhanced visual consistency and optimized performance for faster load times</span>
                            </li>
                            <li className="flex items-start gap-3 text-[#666666]">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1a1a1a] flex items-center justify-center mt-0.5">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span>Contributed creative ideas for improving client website aesthetics and engagement</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
