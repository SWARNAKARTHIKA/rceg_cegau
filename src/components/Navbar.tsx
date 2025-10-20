import React from 'react';
import logo1 from '../assets/rotary.png';
import logo2 from '../assets/rotaract.png';
import logo3 from '../assets/au.png';
import logo4 from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Left - Logos */}
        <div className="flex items-center gap-4">
          <img src={logo1} alt="Logo 1" className="w-10 h-10 object-contain" />
          <img src={logo2} alt="Logo 2" className="w-10 h-10 object-contain" />
          <img src={logo3} alt="Logo 3" className="w-10 h-10 object-contain" />
          <img src={logo4} alt="Logo 4" className="w-10 h-10 object-contain" />
        </div>

        {/* Right - Animated Pill Nav Links */}
        <div className="flex gap-4">
          {["Home", "About", "Events", "Team", "Gallery", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative px-4 py-2 rounded-full font-semibold text-gray-700 overflow-hidden group"
            >
              {/* Background animation */}
              <span className="absolute inset-0 bg-amber-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-bottom z-0"></span>
              
              {/* Text */}
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">{link}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
