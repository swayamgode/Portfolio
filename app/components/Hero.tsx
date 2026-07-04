'use client';
import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="px-6 pt-24 pb-16 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-8">

          {/* Profile Image */}
          <div className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden flex-shrink-0">
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
          <div className="flex flex-col gap-1">
            {/* Name */}
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight flex items-center gap-2">
              <span className="relative pb-1">
                SWAYAM GODE.
                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#fda4af] rounded-full" />
              </span>
              <span className="text-2xl">👋</span>
            </h1>

            {/* Role */}
            <p className="text-white text-base md:text-lg font-medium mt-1">
              Web Developer | Data Analyst | Tech Enthusiast
            </p>

            {/* Bio */}
            <p className="text-zinc-500 text-sm mt-1 max-w-lg leading-relaxed">
              I love Designing and developming always looking to learn new build new .
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;