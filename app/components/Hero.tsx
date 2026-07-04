'use client';
import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="px-6 pt-24 pb-16 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-6">

          {/* Profile Image wrapper — fades in */}
          <div
            className="w-32 h-32 md:w-36 md:h-36 flex-shrink-0 animate-fadeInUp opacity-0"
            style={{ animationFillMode: 'forwards' }}
          >
            {/* Inner ring — pulse ring lives here separately */}
            <div className="w-full h-full rounded-full overflow-hidden animate-ring-pulse">
              <img
                src="/profile_krishna.png"
                alt="Swayam Gode"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/profile.png";
                }}
              />
            </div>
          </div>

          {/* Name and Info — staggered reveal */}
          <div>
            {/* Name with shimmer */}
            <h1
              className="text-3xl md:text-4xl font-extrabold tracking-tight flex items-center gap-2 animate-fadeInUp opacity-0 delay-100"
              style={{ animationFillMode: 'forwards' }}
            >
              <span className="relative pb-1">
                <span className="shimmer-underline">SWAYAM GODE.</span>
                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#fda4af] rounded-full" />
              </span>
              <span className="text-2xl" style={{ WebkitTextFillColor: 'initial' }}>👋</span>
            </h1>

            {/* Role */}
            <p
              className="text-zinc-400 text-base md:text-lg mt-2 font-medium animate-fadeInUp opacity-0 delay-200"
              style={{ animationFillMode: 'forwards' }}
            >
              Web Developer | Data Analyst | Tech Enthusiast
            </p>

            {/* Bio */}
            <p
              className="text-zinc-500 text-sm mt-2 max-w-lg leading-relaxed animate-fadeInUp opacity-0 delay-300"
              style={{ animationFillMode: 'forwards' }}
            >
              I love designing and developing — always looking to learn and build new things.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;