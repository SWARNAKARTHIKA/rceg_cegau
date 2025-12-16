import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';


const rcegBgCDN = 'https://res.cloudinary.com/dipcixbc4/image/upload/v1765884176/rceg_cyocwu.webp'; 

const Hero = () => {
  const [bgLoaded, setBgLoaded] = useState(false);

  // Lazy load background image
  useEffect(() => {
    // 2. Use the CDN URL in the Image object source
    const img = new Image();
    img.src = rcegBgCDN;

    img.onload = () => setBgLoaded(true);


    return () => {
        img.onload = null;
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-cover bg-center bg-no-repeat transition-opacity duration-700"
      style={{
        // 3. Use the CDN URL in the background style property
        backgroundImage: bgLoaded ? `url(${rcegBgCDN})` : "none", // <--- Changed to rcegBgCDN
        opacity: bgLoaded ? 1 : 0,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

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
            <span className="animate-pulse">|</span>
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
