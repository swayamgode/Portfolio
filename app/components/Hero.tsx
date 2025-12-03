'use client';
import React from 'react';
import SocialIcons from './SocialIcons';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center px-6 overflow-hidden bg-black">
      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">

          {/* Profile Image - Smaller */}
          <div className="relative group flex-shrink-0">
            <div className="relative w-[140px] h-[140px] md:w-[180px] md:h-[180px]">
              {/* Border ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent via-accent/50 to-transparent p-1 group-hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full rounded-full bg-black" />
              </div>

              {/* Image container */}
              <div className="absolute inset-2 rounded-full overflow-hidden">
                <img
                  src="/profile.png"
                  alt="Swayam Gode"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 opacity-100 group-hover:opacity-0"
                />
                <img
                  src="/profilech.png"
                  alt="Swayam Gode Alternate"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 opacity-0 group-hover:opacity-100"
                />
              </div>
            </div>
          </div>

          {/* Content - Better proportions */}
          <div className="flex-1 text-center md:text-left space-y-3 max-w-2xl">
            {/* Name */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
              Hello, I am <span className="text-white">Swayam Gode</span>
            </h1>

            {/* Description */}
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              A Passionate Full-Stack Developer Crafting Seamless Web Experiences
            </p>

            {/* Social Icons */}
            <div className="pt-1">
              <SocialIcons />
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3 justify-center md:justify-start pt-3">
              <a
                href="mailto:swayamgode@gmail.com"
                className="group relative px-5 py-2.5 bg-accent text-white font-semibold text-sm rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/50"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="#about"
                className="px-5 py-2.5 border-2 border-white/20 text-white font-semibold text-sm rounded-full hover:bg-white/5 hover:border-accent/50 transition-all duration-300 hover:scale-105"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;