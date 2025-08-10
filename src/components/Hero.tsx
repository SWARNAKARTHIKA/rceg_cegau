import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import clg from '../assets/clg.jpeg';

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
        while(index>0){
        index=index-1;
        setDisplayText(fullText.slice(0,index));}
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <img 
          src={clg} 
          alt="College of Engineering Guindy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/70 via-stone-900/60 to-yellow-900/70"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-1 gap-12 ml-5 items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-7xl font-bold text-white mb-3 leading-tight animate-fade-in">
                Rotaract Club Of CEG
              </h1>
              
              <div className="flex justify-center">
                <div className="text-xl md:text-2xl text-stone-200 max-w-2xl mb-12 leading-relaxed fade-in-center">
                  <span className="inline-block">
                    <span className="font-semibold text-stone-100">{displayText}</span>
                    {showCursor && <span className="animate-pulse">|</span>}
                  </span>
                  <span className="block mt-2 text-lg md:text-xl opacity-90">
                     Empowering communities through fellowship, leadership, and meaningful service
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-center z-10">
        <ArrowDown className="w-8 h-8 text-white animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
