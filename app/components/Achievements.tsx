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
        <section id="achievements" className="section-padding">
            <div className="container-custom">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <p className="section-title">ACHIEVEMENTS</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
                        Awards & Recognition
                    </h2>
                    <p className="text-lg text-[#666666] max-w-2xl mx-auto">
                        Celebrating milestones and accomplishments in my journey
                    </p>
                </div>

                {/* Achievement Cards */}
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {achievements.map((item, index) => (
                        <div key={index} className="card text-center">

                            {/* Year Badge */}
                            <div className="badge mx-auto mb-4">
                                {item.year}
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-bold text-[#1a1a1a] mb-3 leading-tight">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[#666666] leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
