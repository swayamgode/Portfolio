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
        <section id="education" className="section-padding">
            <div className="container-custom">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <p className="section-title">EDUCATION</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">
                        Academic Journey
                    </h2>
                </div>

                {/* Education Cards */}
                <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {educationData.map((edu, index) => (
                        <div key={index} className="card">

                            {/* Year Badge */}
                            <div className="badge mb-4">
                                {edu.year}
                            </div>

                            {/* Degree */}
                            <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                                {edu.degree}
                            </h3>

                            {/* School */}
                            <p className="text-base font-semibold text-[#666666] mb-6">
                                {edu.school}
                            </p>

                            {/* Details */}
                            <ul className="space-y-3">
                                {edu.details.map((detail, i) => (
                                    <li key={i} className="text-[#666666] flex items-start gap-3">
                                        <span className="text-[#1a1a1a] mt-1">•</span>
                                        <span className="text-sm">{detail}</span>
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
