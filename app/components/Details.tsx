import React from 'react';

function Details() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-accent/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-secondary/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left - About Text */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-accent text-sm font-bold uppercase tracking-widest px-4 py-2 glass-card rounded-full">About Me</span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
              Building Digital <br />
              <span className="text-gradient-accent animate-gradient">Experiences</span>
            </h2>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                I am a dedicated <span className="font-bold text-white bg-gradient-to-r from-accent/20 to-transparent px-2 py-1 rounded">Full-Stack Developer</span> with a passion for creating seamless web experiences. With expertise in both front-end and back-end technologies, I specialize in building <span className="font-bold text-white bg-gradient-to-r from-secondary/20 to-transparent px-2 py-1 rounded">responsive and user-friendly applications</span>.
              </p>

              <p>
                My goal is to deliver high-quality solutions that meet client needs and exceed expectations through <span className="text-gradient-secondary font-semibold">clean code</span>, <span className="text-gradient-secondary font-semibold">modern design</span>, and <span className="text-gradient-secondary font-semibold">innovative thinking</span>.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2 hover:scale-105 transition-transform">
                <span className="text-2xl">🎓</span>
                <span className="text-sm font-semibold">AI & Data Science</span>
              </div>
              <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2 hover:scale-105 transition-transform">
                <span className="text-2xl">💼</span>
                <span className="text-sm font-semibold">Web Design Intern</span>
              </div>
              <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2 hover:scale-105 transition-transform">
                <span className="text-2xl">🏆</span>
                <span className="text-sm font-semibold">Hackathon Winner</span>
              </div>
            </div>
          </div>

          {/* Right - Enhanced Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="card-premium text-center group hover:scale-105 transition-all duration-500">
              <div className="text-5xl md:text-6xl font-black text-gradient-accent mb-3 group-hover:scale-110 transition-transform">
                2+
              </div>
              <div className="text-gray-400 font-medium">Years of Experience</div>
              <div className="mt-4 h-1 w-full bg-gradient-to-r from-accent to-orange-500 rounded-full" />
            </div>

            <div className="card-premium text-center group hover:scale-105 transition-all duration-500">
              <div className="text-5xl md:text-6xl font-black text-gradient-accent mb-3 group-hover:scale-110 transition-transform">
                15+
              </div>
              <div className="text-gray-400 font-medium">Projects Completed</div>
              <div className="mt-4 h-1 w-full bg-gradient-to-r from-secondary to-blue-500 rounded-full" />
            </div>

            <div className="card-premium text-center group hover:scale-105 transition-all duration-500">
              <div className="text-5xl md:text-6xl font-black text-gradient-accent mb-3 group-hover:scale-110 transition-transform">
                10+
              </div>
              <div className="text-gray-400 font-medium">Technologies Mastered</div>
              <div className="mt-4 h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
            </div>

            <div className="card-premium text-center group hover:scale-105 transition-all duration-500">
              <div className="text-5xl md:text-6xl font-black text-gradient-accent mb-3 group-hover:scale-110 transition-transform">
                100%
              </div>
              <div className="text-gray-400 font-medium">Client Satisfaction</div>
              <div className="mt-4 h-1 w-full bg-gradient-to-r from-green-500 to-teal-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
