import React from 'react';
import logo1 from '../assets/rotary.png';
import logo2 from '../assets/rotaract.png';
import logo3 from '../assets/au.png';
import logo4 from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-yelow-200 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 bg-white/80 shadow-m flex items-center justify-between">
        
        {/* Left - Logos */}
        <div className="flex items-center gap-4">
          <img src={logo1} alt="Logo 1" className="w-10 h-10 object-contain" />
          <img src={logo2} alt="Logo 2" className="w-10 h-10 object-contain" />
          <img src={logo3} alt="Logo 3" className="w-10 h-10 object-contain" />
          <img src={logo4} alt="Logo 4" className="w-10 h-10 object-contain" />
        </div>

        {/* Right - Nav Links */}
        <div className="flex gap-8 text-lg font-semibold text-gray-700">
          <a href="#home" className="hover:text-amber-700">Home</a>
          <a href="#about" className="hover:text-amber-700">About</a>
          <a href="#events" className="hover:text-amber-700">Events</a>
          <a href="#team" className="hover:text-amber-700">Team</a>
          <a href="#gallery" className="hover:text-amber-700">Gallery</a>
          <a href="#contact" className="hover:text-amber-700">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
