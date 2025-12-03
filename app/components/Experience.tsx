'use client';
import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="py-16 px-6 bg-black">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                    Work Experience
                </h2>

                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <div className="mb-4">
                        <h3 className="text-xl font-bold text-white">Web Design Intern</h3>
                        <p className="text-accent font-semibold">Rebenok (Virar)</p>
                        <span className="text-sm text-gray-400">May 2025 – Jul 2025</span>
                    </div>

                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li className="flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span>Designed and developed responsive web interfaces using HTML, CSS, and JavaScript</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span>Collaborated with designers and developers to improve UI/UX flow and overall website accessibility</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span>Enhanced visual consistency and optimized performance for faster load times</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span>Contributed creative ideas for improving client website aesthetics and engagement</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Experience;
