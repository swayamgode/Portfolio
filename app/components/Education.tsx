'use client';
import React from 'react';

const Education = () => {
    const educationData = [
        {
            degree: "Bachelor of Engineering – AI & Data Science",
            school: "Vidyavardhini's College of Engineering and Technology (VCET), Vasai",
            year: "2025 – 2028",
            icon: "🎓",
            gradient: "from-blue-500 to-cyan-400",
            details: [
                "Relevant Coursework: Machine Learning, Web Development, Python Programming, Database Management",
                "Academic Interests: AI-based Systems, Blockchain Applications, Web Innovation"
            ]
        },
        {
            degree: "Diploma in Computer Engineering",
            school: "Vidyavardhini's Bhausaheb Vartak Polytechnic, Vasai",
            year: "2022 – 2025",
            icon: "📚",
            gradient: "from-purple-500 to-pink-400",
            details: [
                "Focused on foundational computer science concepts, database management, and web technologies",
                "Completed multiple projects in web design, software development, and IoT integration",
                "Graduated with strong technical and problem-solving skills"
            ]
        }
    ];

    return (
        <section id="education" className="section-padding relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-tl from-secondary/10 to-transparent rounded-full blur-3xl" />
            </div>

            <div className="container-custom relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-block mb-4">
                        <span className="text-accent text-sm font-bold uppercase tracking-widest px-4 py-2 glass-card rounded-full">Education</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
                        Academic <span className="text-gradient-accent">Journey</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {educationData.map((edu, index) => (
                        <div
                            key={index}
                            className="card-premium group hover:scale-105 transition-all duration-500"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            {/* Icon with Gradient Glow */}
                            <div className="relative inline-block mb-6">
                                <div className={`absolute inset-0 bg-gradient-to-r ${edu.gradient} rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity`} />
                                <div className="relative text-7xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                                    {edu.icon}
                                </div>
                            </div>

                            {/* Year Badge */}
                            <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-accent/20 to-orange-500/20 text-accent rounded-full border border-accent/30 mb-6 font-bold">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {edu.year}
                            </div>

                            {/* Degree */}
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gradient-accent transition-all duration-300">
                                {edu.degree}
                            </h3>

                            {/* School */}
                            <p className="text-lg font-semibold bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent mb-6">
                                {edu.school}
                            </p>

                            {/* Details */}
                            <ul className="space-y-3">
                                {edu.details.map((detail, i) => (
                                    <li key={i} className="text-gray-400 flex items-start gap-3 group/item hover:text-gray-300 transition-colors">
                                        <span className="text-accent mt-1 text-xl">•</span>
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Bottom Gradient Line */}
                            <div className={`mt-6 h-1 w-full bg-gradient-to-r ${edu.gradient} rounded-full`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
