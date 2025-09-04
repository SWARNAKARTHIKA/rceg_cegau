import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import clg from '../assets/rceg.png';
import logo1 from '../assets/rotary.png';
import logo2 from '../assets/rotaract.png';
import logo3 from '../assets/au.png';
import logo4 from '../assets/logo.png';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Service Above Self";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        while (index > 0) {
          index = index - 1;
          setDisplayText(fullText.slice(0, index));
        }
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
   <section className="min-h-screen relative overflow-hidden">
  {/* Background */}
  <div className="absolute inset-0">
    <img 
      src={clg} 
      alt="College of Engineering Guindy"
      className="w-full h-full object-cover"
    />
   {/* <div className="absolute inset-0 bg-gradient-to-br from-amber-900/70 via-stone-900/60 to-yellow-900/70"></div>*/}
   <div className="absolute inset-0 bg-black/60"></div>
  </div>

 

  {/* Main Content */}
  <div className="relative z-10 min-h-screen flex items-center">
    <div className="container mx-auto px-6">
      <div className="text-center mt-16"> {/* Added margin to push content down */}
        <h1 className="text-3xl md:text-7xl font-bold text-white mb-3 leading-tight">
          Rotaract Club Of CEG
        </h1>
        <p className="text-white/80 text-sm md:text-base mb-6">
          PARENT CLUB: ROTARACT CLUB OF MADRAS SOUTH R | DIST 3234
        </p>
        <div className="text-xl md:text-2xl text-stone-200 max-w-2xl mx-auto leading-relaxed">
          <span className="font-semibold">{displayText}</span>
          {showCursor && <span className="animate-pulse">|</span>}
          <span className="block mt-2 text-lg md:text-xl opacity-90">
            Empowering communities through fellowship, leadership, and meaningful service
          </span>
        </div>
      </div>
    </div>
  </div>

  {/* Scroll Down Icon */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
    <ArrowDown className="w-8 h-8 text-white animate-bounce" />
  </div>
</section>

  );
};

export default Hero;
