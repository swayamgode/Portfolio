'use client';
import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      title: "Winner of Park Spark Hackathon",
      description: "Designed and developed Sure-Image and Prasanaa Homes websites make sure to keep ui clean and user friendly. Designed and developed Sure-Image and P rasanaa Homes websites make sure to keep ui clean and user friendly."
    },
    {
      title: "Runner-up of Gen-Ai Hackathon",
      description: "Designed and developed Sure-Image and Prasanaa Homes websites make sure to keep ui clean and user friendly. Designed and developed Sure-Image and P rasanaa Homes websites make sure to keep ui clean and user friendly."
    }
  ];

  return (
    <section id="achievements" className="py-16 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="section-title section-title-pink text-xl md:text-2xl">Achivements</h2>
        </div>

        {/* Achievements List */}
        <div className="space-y-8 max-w-2xl mx-auto">
          {achievements.map((achievement, index) => (
            <div key={index}>
              <h3 className="text-white font-bold text-base mb-2">
                {achievement.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
