'use client';
import React, { useEffect, useState } from 'react';
import SocialIcons from './SocialIcons';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-void">
      {/* Cinematic Radial Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px] animate-radial-glow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-magenta-600/10 rounded-full blur-[120px] animate-radial-glow delay-500" style={{ backgroundColor: 'rgba(174, 5, 198, 0.1)' }} />

      {/* Animated Background Grid - Subtle */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(195, 192, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(195, 192, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className={`space-y-10 ${isVisible ? '' : 'opacity-0'}`}>
            {/* Greeting */}
            <div className="animate-fadeInUp">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-12 h-[1px] bg-indigo-500/50"></span>
                <p className="text-indigo-400 font-medium tracking-[0.2em] uppercase text-xs">Engineered Excellence</p>
              </div>
              <h1 className="text-7xl md:text-8xl font-bold mb-4 tracking-tighter">
                <span className="gradient-text">Swayam Gode</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-400 mb-8 font-space">
                Full-Stack Architect <span className="text-indigo-500/50">&</span> AI Specialist
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed max-w-xl font-light">
                Building the next generation of digital experiences through 
                <span className="text-white"> high-fidelity code</span> and 
                <span className="text-white"> cinematic design</span>.
              </p>
            </div>

            {/* Stats - Tiered Glass */}
            <div className="grid grid-cols-3 gap-6 animate-fadeInUp delay-200">
              {[
                { value: '2+', label: 'Years Exp' },
                { value: '15+', label: 'Deployments' },
                { value: '10+', label: 'Core stacks' },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="glass-level-1 rounded-2xl p-6 text-center hover-lift rim-light"
                >
                  <div className="text-4xl font-bold gradient-text-alt tracking-tighter">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-2 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons - Magnetic-like feel via transitions */}
            <div className="flex flex-wrap gap-6 animate-fadeInUp delay-300">
              <a
                href="mailto:swayamgode@gmail.com"
                className="group relative px-10 py-4 rounded-full bg-indigo-600 text-white font-bold transition-all duration-500 hover:scale-105 hover:bg-indigo-500 overflow-hidden shadow-[0_0_20px_rgba(79,70,229,0.4)]"
              >
                <span className="relative z-10">Initiate Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
              <a
                href="#projects"
                className="px-10 py-4 rounded-full glass-level-2 text-white font-bold transition-all duration-500 hover:scale-105 border-white/10 hover:border-white/30"
              >
                View Repository
              </a>
            </div>

            {/* Social Icons */}
            <div className="animate-fadeInUp delay-400 pt-4">
              <SocialIcons />
            </div>
          </div>

          {/* Right Column - Holographic Profile & HUD */}
          <div className="relative animate-slideInRight delay-200 flex justify-center">
            {/* Background Glow for Profile */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-600/10 rounded-full blur-[100px] animate-pulse" />
            
            <div className="relative w-full max-w-md space-y-8">
              {/* Profile Card - Level 2 Glass */}
              <div className="glass-level-2 rounded-[2.5rem] p-10 hover-lift rim-light">
                <div className="flex items-center gap-8 mb-8">
                  <div className="relative">
                    <div className="w-28 h-28 rounded-3xl overflow-hidden ring-[1px] ring-indigo-500/50 animate-glow p-1 bg-indigo-500/10">
                      <img
                        src="/profile.png"
                        alt="Swayam Gode"
                        className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#AE05C6] rounded-full border-4 border-[#10131a] flex items-center justify-center animate-pulse shadow-[0_0_15px_rgba(174,5,198,0.5)]">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">Status: Active</h3>
                    <p className="text-indigo-400/80 font-mono text-sm tracking-tighter">LOCATION: INDIA // IST</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pb-8 border-b border-white/5">
                  <div className="space-y-1">
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest">Availability</p>
                    <p className="text-sm font-medium">FULL_TIME_READY</p>
                  </div>
                  <div className="space-y-1 text-right">
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest">Protocol</p>
                    <p className="text-sm font-medium">REMOTE / HYBRID</p>
                  </div>
                </div>

                <div className="pt-8 flex justify-between items-center group cursor-help">
                  <div className="space-y-1">
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest">Experience Hash</p>
                    <p className="text-xs font-mono text-indigo-400/60 truncate w-32">0x73776179616D_UX</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-magenta-500/50 transition-colors">
                    <span className="text-xs font-bold text-magenta-500">?</span>
                  </div>
                </div>
              </div>

              {/* Stack Snippet - Technical HUD feel */}
              <div className="glass-level-1 rounded-3xl p-8 hover-lift border-indigo-500/10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-bold text-slate-300 flex items-center gap-3 tracking-[0.2em] uppercase">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full animate-ping"></span>
                    Terminal_Stack
                  </h3>
                  <span className="text-[10px] font-mono text-slate-500">v2.0.24</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['Next.js', 'PyTorch', 'TypeScript', 'Prisma', 'Tailwind'].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1.5 rounded-lg glass-level-2 text-[11px] font-bold text-slate-400 border-white/5 hover:text-indigo-400 hover:border-indigo-500/30 transition-all cursor-crosshair font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cinematic Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-fadeInUp delay-600">
          <div className="flex flex-col items-center gap-4">
            <div className="w-[1px] h-12 bg-gradient-to-b from-indigo-500 to-transparent" />
            <p className="text-[10px] uppercase tracking-[0.4em] text-slate-500 -rotate-90 origin-left translate-x-1 translate-y-4">Nav_Sequence</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;