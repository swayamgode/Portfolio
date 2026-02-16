import React from 'react';

function Details() {
  return (
    <section id="about" className="py-24 px-6 relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - About Text */}
          <div className="space-y-6">
            <p className="text-indigo-400 font-semibold uppercase tracking-wider text-sm">About Me</p>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Building Digital <span className="gradient-text">Experiences</span>
            </h2>

            <div className="space-y-4 text-lg text-slate-300 leading-relaxed">
              <p>
                I am a dedicated <span className="text-white font-semibold">Full-Stack Developer</span> with a passion for creating seamless web experiences. With expertise in both front-end and back-end technologies, I specialize in building <span className="text-white font-semibold">responsive and user-friendly applications</span>.
              </p>

              <p>
                My goal is to deliver high-quality solutions that meet client needs and exceed expectations through clean code, modern design, and innovative thinking.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="px-4 py-2 glass-light rounded-full text-sm font-medium text-slate-300">
                🎓 AI & Data Science
              </div>
              <div className="px-4 py-2 glass-light rounded-full text-sm font-medium text-slate-300">
                💼 Web Design Intern
              </div>
              <div className="px-4 py-2 glass-light rounded-full text-sm font-medium text-slate-300">
                🏆 Hackathon Winner
              </div>
            </div>
          </div>

          {/* Right - Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '2+', label: 'Years of Experience' },
              { value: '15+', label: 'Projects Completed' },
              { value: '10+', label: 'Technologies Mastered' },
              { value: '100%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-2xl p-6 text-center hover-lift">
                <div className="text-4xl font-bold gradient-text-alt mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
