'use client';
import React from 'react';

const Achievements = () => {
    const achievements = [
        {
            title: "Winner – ParkSpark Hackathon",
            year: "2025",
            description: "Smart City Innovation project"
        },
        {
            title: "Runner-up – GenAI-thon",
            year: "2025",
            description: "AI-powered content creation tool"
        },
        {
            title: "Active Participant",
            year: "Ongoing",
            description: "Multiple inter-college hackathons and coding competitions"
        }
    ];

    return (
        <section id="achievements" className="py-16 px-6 bg-black">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                    Achievements
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {achievements.map((item, index) => (
                        <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10 text-center">
                            <div className="text-4xl mb-3">🏆</div>
                            <span className="text-xs text-accent font-bold">{item.year}</span>
                            <h3 className="text-base font-bold text-white my-2">{item.title}</h3>
                            <p className="text-gray-400 text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
