import React from 'react';

function Details() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left - About Text */}
          <div className="space-y-6">
            <p className="section-title">ABOUT ME</p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight">
              Building Digital Experiences
            </h2>

            <div className="space-y-4 text-base text-[#666666] leading-relaxed">
              <p>
                I am a dedicated <span className="font-semibold text-[#1a1a1a]">Full-Stack Developer</span> with a passion for creating seamless web experiences. With expertise in both front-end and back-end technologies, I specialize in building <span className="font-semibold text-[#1a1a1a]">responsive and user-friendly applications</span>.
              </p>

              <p>
                My goal is to deliver high-quality solutions that meet client needs and exceed expectations through clean code, modern design, and innovative thinking.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="badge">
                🎓 AI & Data Science
              </div>
              <div className="badge">
                💼 Web Design Intern
              </div>
              <div className="badge">
                🏆 Hackathon Winner
              </div>
            </div>
          </div>

          {/* Right - Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="card text-center">
              <div className="text-4xl font-bold text-[#1a1a1a] mb-2">
                2+
              </div>
              <div className="text-sm text-[#666666]">Years of Experience</div>
            </div>

            <div className="card text-center">
              <div className="text-4xl font-bold text-[#1a1a1a] mb-2">
                15+
              </div>
              <div className="text-sm text-[#666666]">Projects Completed</div>
            </div>

            <div className="card text-center">
              <div className="text-4xl font-bold text-[#1a1a1a] mb-2">
                10+
              </div>
              <div className="text-sm text-[#666666]">Technologies Mastered</div>
            </div>

            <div className="card text-center">
              <div className="text-4xl font-bold text-[#1a1a1a] mb-2">
                100%
              </div>
              <div className="text-sm text-[#666666]">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
