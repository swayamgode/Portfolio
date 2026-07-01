'use client';
import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="px-6 pt-24 pb-16 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-6">
          {/* Profile Image */}
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-zinc-700 flex-shrink-0">
            <img
              src="/profile.png"
              alt="Swayam Gode"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=256";
              }}
            />
          </div>

          {/* Name and Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight flex items-center gap-2">
              SWAYAM GODE. <span className="text-2xl">🤟</span>
            </h1>
            <p className="text-zinc-400 text-sm mt-1 font-medium">
              Web Developer | Data Analyst | Tech Enthusiast
            </p>
            <p className="text-zinc-600 text-xs mt-2 max-w-md leading-relaxed">
              I love Designing and developing always looking to learn new build new
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;