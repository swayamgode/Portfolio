'use client';
import React from 'react';
import SocialIcons from './SocialIcons';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background Image - Large Portrait */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          {/* Profile Image */}
          <img
            src="/profile.png"
            alt="Swayam Gode"
            className="w-full h-full object-cover object-center opacity-40 grayscale"
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60" />
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-1/3 left-0 w-48 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="absolute top-1/3 left-0 w-2 h-2 bg-accent rounded-full animate-pulse-glow" style={{ left: '110px' }} />

      <div className="absolute bottom-1/3 right-0 w-48 h-px bg-gradient-to-l from-transparent via-accent to-transparent" />
      <div className="absolute bottom-1/3 right-0 w-2 h-2 bg-accent rounded-full animate-pulse-glow" style={{ right: '110px' }} />

      {/* Floating Badge */}
      <div className="absolute top-20 right-20 hidden lg:block">
        <div className="relative">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent to-orange-500 flex items-center justify-center animate-float">
            <div className="w-28 h-28 rounded-full bg-[#0a0a0a] flex flex-col items-center justify-center border-2 border-white/20">
              <div className="text-white text-xs font-bold uppercase tracking-wider">Open to</div>
              <div className="text-accent text-lg font-black">Work</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          {/* Top Label */}
          <div className="mb-8">
            <span className="text-accent text-sm md:text-base font-bold uppercase tracking-[0.3em] animate-fadeInUp">
              Full-Stack Developer
            </span>
          </div>

          {/* Large Typography Overlay */}
          <div className="relative mb-12 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            {/* First Name - Outlined */}
            <h1 className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-black leading-none uppercase mb-2">
              <span className="text-transparent" style={{
                WebkitTextStroke: '2px white',
                textStroke: '2px white'
              }}>
                SWAYAM
              </span>
            </h1>

            {/* Last Name - Filled with Gradient */}
            <h1 className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-black leading-none uppercase text-gradient-accent">
              GODE
            </h1>
          </div>

          {/* Tagline */}
          <div className="max-w-2xl mb-12 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Where <span className="font-bold text-white">innovation</span> meets <span className="font-bold text-white">creativity</span> and <span className="font-bold text-white">code</span> meets <span className="font-bold text-white">design</span>
            </p>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>

            {/* Left - Stats & Social */}
            <div className="space-y-6">
              {/* Stats */}
              <div className="flex gap-12">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-gradient-accent">2+</div>
                  <div className="text-xs uppercase tracking-wider text-gray-500 mt-1">Years Exp</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-gradient-accent">15+</div>
                  <div className="text-xs uppercase tracking-wider text-gray-500 mt-1">Projects</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-gradient-accent">10+</div>
                  <div className="text-xs uppercase tracking-wider text-gray-500 mt-1">Tech Stack</div>
                </div>
              </div>

              {/* Social Icons */}
              <div>
                <SocialIcons />
              </div>
            </div>

            {/* Right - CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:swayamgode@gmail.com" className="btn-primary group">
                <span className="relative z-10 flex items-center gap-2">
                  Get In Touch
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              <a href="#about" className="btn-secondary group">
                <span className="relative z-10 flex items-center gap-2">
                  View Work
                  <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Bottom Label */}
          <div className="mt-16 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
            <div className="inline-flex items-center gap-3 px-5 py-3 glass-card rounded-full">
              <div className="relative">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse-glow" />
                <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping" />
              </div>
              <span className="text-sm font-medium text-gray-300">
                Crafting <span className="text-white font-bold">seamless digital experiences</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center gap-3 group">
          <span className="text-xs uppercase tracking-widest text-gray-500 group-hover:text-accent transition-colors font-semibold">Scroll</span>
          <div className="w-6 h-10 border-2 border-gray-600 group-hover:border-accent rounded-full flex items-start justify-center p-2 transition-colors">
            <div className="w-1 h-2 bg-accent rounded-full animate-pulse" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;