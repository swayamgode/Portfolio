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
        <section id="education" className="py-16 px-6 bg-black">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                    Education
                </h2>

                <div className="space-y-6">
                    {educationData.map((edu, index) => (
                        <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10">
                            <div className="mb-4">
                                <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                                <p className="text-accent font-semibold mb-1">{edu.school}</p>
                                <span className="text-sm text-gray-400">{edu.year}</span>
                            </div>
                            <ul className="space-y-2">
                                {edu.details.map((detail, i) => (
                                    <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                                        <span className="text-accent mt-1">•</span>
                                        <span>{detail}</span>
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
