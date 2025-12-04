'use client';
import React from 'react';

const Achievements = () => {
    const achievements = [
        {
            title: "Winner – ParkSpark Hackathon",
            year: "2025",
            description: "Smart City Innovation project",
            icon: "🏆",
            gradient: "from-yellow-400 to-orange-500"
        },
        {
            title: "Runner-up – GenAI-thon",
            year: "2025",
            description: "AI-powered content creation tool",
            icon: "🥈",
            gradient: "from-gray-300 to-gray-500"
        },
        {
            title: "Active Participant",
            year: "Ongoing",
            description: "Multiple inter-college hackathons and coding competitions",
            icon: "🎯",
            gradient: "from-purple-400 to-pink-500"
        }
    ];

    return (
        <section id="achievements" className="section-padding relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
            </div>

            <div className="container-custom relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-block mb-4">
                        <span className="text-accent text-sm font-bold uppercase tracking-widest px-4 py-2 glass-card rounded-full">Achievements</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
                        Awards & <span className="text-gradient-accent">Recognition</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Celebrating milestones and accomplishments in my journey
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {achievements.map((item, index) => (
                        <div
                            key={index}
                            className="card-premium text-center group hover:scale-110 transition-all duration-500"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Icon with Glow */}
                            <div className="relative inline-block mb-6">
                                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity`} />
                                <div className="relative text-7xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                                    {item.icon}
                                </div>
                            </div>

                            {/* Year Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent/20 to-orange-500/20 text-accent text-sm font-bold rounded-full border border-accent/30 mb-4">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {item.year}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-gradient-accent transition-all duration-300">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 leading-relaxed">
                                {item.description}
                            </p>

                            {/* Bottom Gradient Line */}
                            <div className={`mt-6 h-1 w-full bg-gradient-to-r ${item.gradient} rounded-full`} />
                        </div>
                    ))}
                </div>

                {/* Bottom Message */}
                <div className="text-center mt-16">
                    <div className="inline-flex items-center gap-3 px-6 py-3 glass-card rounded-full">
                        <span className="text-gray-400">More achievements coming soon</span>
                        <span className="text-2xl animate-bounce">🚀</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
