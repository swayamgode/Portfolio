'use client';
import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="px-6 pt-24 pb-16 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-6">
          {/* Profile Image */}
          <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden flex-shrink-0">
            <img
              src="/profile_krishna.png"
              alt="Swayam Gode"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "/profile.png";
              }}
            />
          </div>

          {/* Name and Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight flex items-center gap-2">
              <span className="relative pb-1">
                SWAYAM GODE.
                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#fda4af] rounded-full" />
              </span>
              <span className="text-2xl">👋</span>
            </h1>
            <p className="text-zinc-350 text-base md:text-lg mt-2 font-medium">
              Web Developer | Data Analyst | Tech Enthusiast
            </p>
            <p className="text-zinc-500 text-sm mt-2 max-w-lg leading-relaxed">
              I love Designing and developming always looking to learn new build new .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;