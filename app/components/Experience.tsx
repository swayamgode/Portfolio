'use client';
import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">

          {/* Experience */}
          <div>
            <h2 className="section-title section-title-always section-title-pink text-xl md:text-2xl mb-8">
              Experience
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-bold text-base">
                  Rebenok Infotech - Web Designer Intern
                </h3>
                <p className="text-zinc-500 text-sm mt-2 leading-relaxed">
                  Designed and developed Sure-Image and Prasanaa Homes websites make sure to keep ui clean and user friendly. Designed and developed Sure-Image and P rasanaa Homes websites make sure to keep ui clean and user friendly.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="section-title section-title-always section-title-green text-xl md:text-2xl mb-8">
              Education
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-semibold text-sm">
                  Diploma in Computer Engineering
                </h3>
                <p className="text-zinc-500 text-sm">Bhausaheb Vartak Polytechnic</p>
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">
                  BE in Artificial Intelligence and Data Science
                </h3>
                <p className="text-zinc-500 text-sm">Vidyavardhini&apos;s College of Engineeering</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
