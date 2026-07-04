'use client';
import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Experience = () => {
  const { ref: expRef, isVisible: expVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: eduRef, isVisible: eduVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const { ref: expTitleRef, isVisible: expTitleVisible } = useScrollReveal<HTMLHeadingElement>();
  const { ref: eduTitleRef, isVisible: eduTitleVisible } = useScrollReveal<HTMLHeadingElement>();

  return (
    <section id="experience" className="py-16 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">

          {/* Experience */}
          <div>
            <h2
              ref={expTitleRef}
              className={`section-title section-title-pink text-xl md:text-2xl mb-8 ${expTitleVisible ? 'is-visible' : ''}`}
            >
              Experience
            </h2>
            <div
              ref={expRef}
              className={`space-y-6 reveal reveal-left ${expVisible ? 'is-visible' : ''}`}
            >
              <div>
                <h3 className="text-white font-bold text-base">
                  Rebenok Infotech — Web Designer Intern
                </h3>
                <p className="text-zinc-500 text-sm mt-2 leading-relaxed">
                  Designed and developed Sure-Image and Prasanaa Homes websites,
                  keeping the UI clean and user-friendly.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2
              ref={eduTitleRef}
              className={`section-title section-title-green text-xl md:text-2xl mb-8 ${eduTitleVisible ? 'is-visible' : ''}`}
            >
              Education
            </h2>
            <div
              ref={eduRef}
              className={`space-y-6 reveal reveal-right ${eduVisible ? 'is-visible' : ''}`}
            >
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
                <p className="text-zinc-500 text-sm">Vidyavardhini&apos;s College of Engineering</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
