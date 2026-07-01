'use client';
import React, { useEffect, useState } from 'react';
import { User, Award, BookOpen, Terminal, Sparkles, Activity } from 'lucide-react';

const Details = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger radar and layout entry animations
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Radar points animation percentages
  const stats = [
    { label: 'Full-Stack Dev', value: 94, angle: 0 },
    { label: 'AI & Data Science', value: 88, angle: 72 },
    { label: 'UI/UX Design', value: 90, angle: 144 },
    { label: 'Backend APIs', value: 86, angle: 216 },
    { label: 'Systems & ML Ops', value: 82, angle: 288 }
  ];

  // Radar center is 150, 150. Radius max is 100.
  const getCoordinates = (value: number, angle: number, scale = 1.0) => {
    const angleRad = (angle - 90) * (Math.PI / 180);
    const radius = value * scale;
    const x = 150 + radius * Math.cos(angleRad);
    const y = 150 + radius * Math.sin(angleRad);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  };

  // Generate SVG polygon points based on values
  const getPolygonPoints = (scale = 1.0) => {
    return stats.map(s => {
      const val = animate ? s.value : 10; // start small and animate out
      return getCoordinates(val, s.angle, scale);
    }).join(' ');
  };

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden bg-void">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/2 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/3 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left - About Text */}
          <div className="space-y-8 animate-fadeInUp">
            <div className="flex items-center gap-3">
              <span className="w-10 h-[2px] bg-orange-500"></span>
              <p className="text-orange-500 font-bold tracking-[0.25em] uppercase text-xs">Profile Diagnostics</p>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-zinc-900 leading-none tracking-tighter">
              Building Digital <span className="gradient-text">Experiences</span>
            </h2>

            <div className="space-y-5 text-base md:text-lg text-zinc-600 leading-relaxed font-light">
              <p>
                I am a dedicated <span className="text-zinc-900 font-medium">Full-Stack Architect</span> with a passion for designing cohesive, high-performance systems. By merging deep machine learning pipelines with premium frontend layouts, I create digital solutions that are as powerful as they are beautiful.
              </p>
              <p>
                My technical philosophy centers on <span className="text-orange-600 font-medium">clean code structure</span>, <span className="text-orange-500 font-medium">cinematic micro-interactions</span>, and scalable API systems.
              </p>
            </div>

            {/* Quick Facts - Badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              {[
                { icon: BookOpen, text: 'AI & Data Science (VCET)' },
                { icon: User, text: 'Web Design Intern' },
                { icon: Award, text: 'Hackathon Winner (ParkSpark)' },
              ].map((fact, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 px-5 py-3 bg-white rounded-2xl text-xs font-semibold text-zinc-700 border border-zinc-200 hover:border-orange-500/30 transition-all hover:bg-orange-50/20 cursor-default shadow-[0_1px_3px_rgba(0,0,0,0.01)]"
                >
                  <fact.icon className="w-4 h-4 text-orange-500" />
                  <span>{fact.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Radar Chart */}
          <div className="flex justify-center items-center">
            <div className="bg-white border border-zinc-200 rounded-3xl p-8 w-full max-w-md relative overflow-hidden group hover-lift shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.012)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
              
              <div className="flex items-center justify-between mb-8 border-b border-zinc-100 pb-4">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-orange-500 animate-pulse" />
                  <span className="text-xs font-bold font-mono tracking-widest text-zinc-500 uppercase">Skill_Radar_Chart</span>
                </div>
                <Sparkles className="w-4 h-4 text-orange-500" />
              </div>

              {/* Radar Grid SVG */}
              <div className="relative w-full aspect-square max-w-[280px] mx-auto">
                <svg viewBox="0 0 300 300" className="w-full h-full">
                  {/* Outer Rings (Grid) */}
                  {[0.2, 0.4, 0.6, 0.8, 1.0].map((scale, i) => (
                    <polygon
                      key={i}
                      points={getPolygonPoints(scale)}
                      fill="none"
                      stroke="rgba(0, 0, 0, 0.04)"
                      strokeWidth="1"
                    />
                  ))}

                  {/* Outer Pentagon Boundary */}
                  <polygon
                    points={stats.map(s => getCoordinates(100, s.angle)).join(' ')}
                    fill="none"
                    stroke="rgba(249, 115, 22, 0.15)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />

                  {/* Axes Lines */}
                  {stats.map((s, i) => {
                    const outerPoint = getCoordinates(100, s.angle);
                    return (
                      <line
                        key={i}
                        x1="150"
                        y1="150"
                        x2={outerPoint.split(',')[0]}
                        y2={outerPoint.split(',')[1]}
                        stroke="rgba(0, 0, 0, 0.04)"
                        strokeWidth="1"
                      />
                    );
                  })}

                  {/* Glow Area Polygon */}
                  <polygon
                    points={getPolygonPoints(1.0)}
                    fill="rgba(249, 115, 22, 0.15)"
                    stroke="rgba(249, 115, 22, 0.8)"
                    strokeWidth="2.5"
                    className="transition-all duration-1000 ease-out"
                    style={{ filter: 'drop-shadow(0 0 6px rgba(249, 115, 22, 0.35))' }}
                  />

                  {/* Data Point Nodes */}
                  {stats.map((s, i) => {
                    const val = animate ? s.value : 10;
                    const coords = getCoordinates(val, s.angle).split(',');
                    return (
                      <circle
                        key={i}
                        cx={coords[0]}
                        cy={coords[1]}
                        r="4.5"
                        fill="#f97316"
                        stroke="#fff"
                        strokeWidth="1.5"
                        className="transition-all duration-1000 ease-out"
                        style={{ filter: 'drop-shadow(0 0 3px rgba(249,115,22,0.4))' }}
                      />
                    );
                  })}
                </svg>
              </div>

              {/* Legend Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-zinc-100">
                {stats.slice(0, 4).map((s, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-md bg-orange-500/10 border border-orange-500/30 flex items-center justify-center shrink-0">
                      <span className="w-1 h-1 rounded-full bg-orange-500" />
                    </span>
                    <div className="font-mono text-left">
                      <p className="text-[9px] text-zinc-400 uppercase tracking-widest">{s.label}</p>
                      <p className="text-xs font-bold text-zinc-700">{s.value}%</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Details;
