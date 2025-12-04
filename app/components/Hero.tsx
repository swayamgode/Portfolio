'use client';
import React from 'react';
import SocialIcons from './SocialIcons';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">

          {/* Main Grid Layout */}
          <div className="grid lg:grid-cols-[1fr,400px] gap-8 items-start">

            {/* Left Column - Main Content */}
            <div className="space-y-8">

              {/* Header Card */}
              <div className="card p-8">
                <div className="flex items-start gap-6">
                  {/* Profile Image */}
                  <div className="flex-shrink-0">
                    <div className="relative w-24 h-24">
                      <div className="w-full h-full rounded-2xl overflow-hidden border-3 border-white shadow-lg">
                        <img
                          src="/profile.png"
                          alt="Swayam Gode"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-3 border-white"></div>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-2">
                      Swayam Gode
                    </h1>
                    <p className="text-lg text-[#666666] mb-4">
                      Full-Stack Developer & AI Enthusiast
                    </p>
                    <p className="text-base text-[#666666] leading-relaxed">
                      Passionate about building innovative web solutions that combine clean code, modern design, and cutting-edge technology.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="card p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-3xl font-bold text-[#1a1a1a] mb-1">2+</div>
                  <div className="text-sm text-[#666666]">Years Exp</div>
                </div>
                <div className="card p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-3xl font-bold text-[#1a1a1a] mb-1">15+</div>
                  <div className="text-sm text-[#666666]">Projects</div>
                </div>
                <div className="card p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-3xl font-bold text-[#1a1a1a] mb-1">10+</div>
                  <div className="text-sm text-[#666666]">Tech Stack</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <a href="mailto:swayamgode@gmail.com" className="btn-primary">
                  Get In Touch
                </a>
                <a href="#about" className="btn-secondary">
                  View Portfolio
                </a>
                <a href="/resume.pdf" className="btn-secondary">
                  Download CV
                </a>
              </div>

            </div>

            {/* Right Column - Info Cards */}
            <div className="space-y-4">

              {/* Tech Stack Card */}
              <div className="card p-6">
                <h3 className="text-sm font-semibold text-[#666666] mb-4 uppercase tracking-wide">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'Node.js', 'Python', 'TypeScript', 'MongoDB'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-[#f5f5f0] rounded-lg text-xs font-medium text-[#666666] hover:bg-white hover:shadow-sm transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Availability Card */}
              <div className="card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                  </div>
                  <h3 className="text-sm font-semibold text-[#1a1a1a]">
                    Available for Work
                  </h3>
                </div>
                <p className="text-sm text-[#666666] mb-4">
                  Open to freelance projects and full-time opportunities
                </p>
                <div className="text-xs text-[#666666]">
                  <strong>Location:</strong> India<br />
                  <strong>Timezone:</strong> IST (GMT+5:30)
                </div>
              </div>

              {/* Social Card */}
              <div className="card p-6">
                <h3 className="text-sm font-semibold text-[#666666] mb-4 uppercase tracking-wide">
                  Connect
                </h3>
                <SocialIcons />
              </div>

              {/* Achievement Badge */}
              <div className="card p-6 bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">🏆</div>
                  <div>
                    <div className="text-sm font-bold text-[#1a1a1a]">Hackathon Winner</div>
                    <div className="text-xs text-[#666666]">ParkSpark 2025</div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;