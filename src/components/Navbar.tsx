import React, { useState } from 'react';
import logo1 from '../assets/rotary.png';
import logo2 from '../assets/rotaract.png';
import logo3 from '../assets/au.png';
import logo4 from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">

        {/* Left - Logos */}
        <div className="flex items-center gap-2 sm:gap-4">
          <img src={logo1} alt="Logo 1" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
          <img src={logo2} alt="Logo 2" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
          <img src={logo3} alt="Logo 3" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
          <img src={logo4} alt="Logo 4" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-2 sm:gap-4">
          {["Home", "About", "Events", "Team", "Gallery", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative px-3 sm:px-4 py-2 rounded-full font-semibold text-gray-700 overflow-hidden group text-sm sm:text-base"
            >
              {/* Background animation */}
              <span className="absolute inset-0 bg-amber-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-bottom z-0"></span>

              {/* Text */}
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">{link}</span>
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg">
          <div className="px-4 py-4 space-y-2">
            {["Home", "About", "Events", "Team", "Gallery", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block px-4 py-2 text-gray-700 hover:bg-amber-500 hover:text-white rounded-md transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
