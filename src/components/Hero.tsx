import React from 'react';
import { ArrowDown } from 'lucide-react';

// 1. Optimized URL with f_auto (format) and q_auto (quality)
const rcegBgCDN = 'https://res.cloudinary.com/dipcixbc4/image/upload/f_auto,q_auto/v1765884176/rceg_cyocwu.webp';

// 2. Low-Quality Image Placeholder (LQIP) - tiny size + heavy blur
const lqipBlur = 'https://res.cloudinary.com/dipcixbc4/image/upload/e_blur:1000,w_50,f_auto,q_auto/v1765884176/rceg_cyocwu.webp';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        /* The browser loads these from top to bottom. 
           It shows the gradient/blur instantly while the main image downloads.
        */
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
          url(${rcegBgCDN}), 
          url(${lqipBlur})
        `,
      }}
    >
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 text-center mt-16">
          <h1 className="text-2xl sm:text-3xl md:text-7xl font-bold text-white mb-3 leading-tight drop-shadow-lg">
            Rotaract club of CEG
          </h1>
          <p className="text-white/80 text-xs sm:text-sm md:text-base mb-6 tracking-wide">
            PARENT CLUB: ROTARACT CLUB OF MADRAS SOUTH R.I DIST 3234
          </p>

          <div className="text-lg sm:text-xl md:text-2xl text-stone-200 max-w-2xl mx-auto leading-relaxed">
            <span className="font-semibold">Service Above Self</span>
            <span className="animate-pulse"> | </span>
            <span className="block mt-2 text-base sm:text-lg md:text-xl opacity-90">
              Empowering communities through fellowship, leadership, and meaningful service
            </span>
          </div>
        </div>
      </div>

      {/* Scroll down icon */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <ArrowDown className="w-8 h-8 text-white animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
