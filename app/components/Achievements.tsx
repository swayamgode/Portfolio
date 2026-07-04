'use client';
import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface AchievementItem {
  title: string;
  description: string;
}

// Sub-component so each item can safely use its own hook
function AchievementCard({ title, description, delay }: AchievementItem & { delay: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`reveal reveal-up ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <h3 className="text-white font-bold text-base mb-2 flex items-center gap-2">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#fda4af] mt-0.5 flex-shrink-0" />
        {title}
      </h3>
      <p className="text-zinc-500 text-sm leading-relaxed pl-3.5">
        {description}
      </p>
    </div>
  );
}

const Achievements = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal<HTMLDivElement>();

  const achievements: AchievementItem[] = [
    {
      title: "Winner of Park Spark Hackathon",
      description: "Designed and developed a solution that won first place by delivering a clean, user-friendly experience with a focus on performance and design."
    },
    {
      title: "Runner-up of Gen-AI Hackathon",
      description: "Built a generative AI-powered application that placed second, demonstrating strong collaboration and rapid prototyping skills."
    }
  ];

  return (
    <section id="achievements" className="py-16 px-6 bg-black">
      <div className="max-w-4xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-10" ref={titleRef}>
          <h2 className={`section-title section-title-pink text-xl md:text-2xl ${titleVisible ? 'is-visible' : ''}`}>
            Achievements
          </h2>
        </div>

        {/* Achievements List */}
        <div className="space-y-8 max-w-2xl mx-auto">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              {...achievement}
              delay={index * 0.12}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
