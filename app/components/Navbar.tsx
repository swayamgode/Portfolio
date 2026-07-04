'use client';
import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (pathname === '/') {
        const sections = ['hero', 'projects', 'experience', 'skills', 'achievements', 'contact'];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const scrollToSection = (id: string) => {
    if (pathname !== '/') {
      router.push(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Education' },
    { id: 'contact', label: 'Contact Me' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-navSlideDown ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-white/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-center">
        <div className="flex items-center gap-10">
          {navItems.map((item, i) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={{ animationDelay: `${0.05 + i * 0.07}s` }}
              className={`relative text-sm font-medium transition-all duration-300
                animate-fadeInUp opacity-0
                ${activeSection === item.id && pathname === '/'
                  ? 'text-white'
                  : 'text-zinc-500 hover:text-white'
                }`}
            >
              {item.label}
              {activeSection === item.id && pathname === '/' && (
                <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#a3e635] rounded-full transition-all duration-300" />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
