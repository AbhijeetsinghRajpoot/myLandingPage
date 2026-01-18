import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`glass-navbar p-4  top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-xl bg-opacity-90' : ''
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-display tracking-wide text-glass-gradient">Abhijeet_Singh</h1>
        <ul className="flex space-x-6 font-heading">
          <li>
            <a 
              href="#about" 
              className="hover:underline  hover:text-glass-glow transition-all duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className="hover:underline hover:text-glass-glow transition-all duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="hover:underline hover:text-glass-glow transition-all duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
