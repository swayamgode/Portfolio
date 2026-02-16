'use client';
import React, { useEffect, useState } from 'react';
import SocialIcons from './SocialIcons';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float delay-200" />
      <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float delay-400" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className={`space-y-8 ${isVisible ? '' : 'opacity-0'}`}>
            {/* Greeting */}
            <div className="animate-fadeInUp">
              <p className="text-indigo-400 font-medium mb-2">👋 Hello, I'm</p>
              <h1 className="text-6xl md:text-7xl font-bold mb-4">
                <span className="gradient-text">Swayam Gode</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-300 mb-6">
                Full-Stack Developer
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                Crafting innovative web solutions with modern technologies.
                Passionate about clean code, exceptional design, and cutting-edge AI.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 animate-fadeInUp delay-200">
              {[
                { value: '2+', label: 'Years' },
                { value: '15+', label: 'Projects' },
                { value: '10+', label: 'Technologies' },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="glass-light rounded-2xl p-4 text-center hover-lift"
                >
                  <div className="text-3xl font-bold gradient-text-alt">{stat.value}</div>
                  <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fadeInUp delay-300">
              <a
                href="mailto:swayamgode@gmail.com"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/50"
              >
                Get In Touch
              </a>
              <a
                href="#about"
                className="px-8 py-3 rounded-full glass-light hover:glass text-white font-semibold transition-all duration-300 hover:scale-105"
              >
                View Work
              </a>
            </div>

            {/* Social Icons */}
            <div className="animate-fadeInUp delay-400">
              <SocialIcons />
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-6 animate-slideInRight delay-200">
            {/* Profile Card */}
            <div className="glass rounded-3xl p-8 hover-lift neon-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden ring-4 ring-indigo-500/30 animate-glow">
                    <img
                      src="/profile.png"
                      alt="Swayam Gode"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-slate-800 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Available for Work</h3>
                  <p className="text-sm text-slate-400">Open to opportunities</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-slate-400">
                <p><span className="text-indigo-400">📍</span> India (IST)</p>
                <p><span className="text-indigo-400">💼</span> Freelance & Full-time</p>
              </div>
            </div>

            {/* Tech Stack Card */}
            <div className="glass rounded-3xl p-8 hover-lift">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Node.js', 'Python', 'TypeScript', 'MongoDB'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full glass-light text-sm font-medium text-slate-300 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievement Badge */}
            <div className="glass rounded-3xl p-6 hover-lift bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border-yellow-500/20">
              <div className="flex items-center gap-4">
                <div className="text-5xl animate-float">🏆</div>
                <div>
                  <h3 className="text-lg font-bold text-yellow-400">Hackathon Winner</h3>
                  <p className="text-sm text-slate-400">ParkSpark 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fadeInUp delay-600">
          <div className="flex flex-col items-center gap-2 text-slate-400">
            <p className="text-xs uppercase tracking-wider">Scroll Down</p>
            <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex items-start justify-center p-2 animate-float">
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;