import React, { useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import HealthCampDetail from './components/HealthCampDetail';
import './styles/fonts.css';

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.normalizeScroll(true);

      const animateElements = (selector: string, from: any, to: any) => {
        gsap.utils.toArray(selector).forEach((element: any) => {
          gsap.fromTo(element, from, {
            ...to,
            scrollTrigger: {
              trigger: element,
              start: "top 95%",
              end: "bottom 65%",
              scrub: 2,
            }
          });
        });
      };

      animateElements('.fade-in', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
      animateElements('.slide-up', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
      animateElements('.slide-left', { opacity: 0, x: -100 }, { delay: 0.2, opacity: 1, x: 0, duration: 1, ease: "power2.out" });
      animateElements('.slide-right', { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1.5, ease: "power2.out" });
      animateElements('.scale-in', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" });

    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="bg-[#0f0f2b] text-white min-h-screen overflow-x-hidden">
      {/* Hero stays full scale */}
      <Hero />

      {/* Everything else is zoomed */}
      <div className="app-zoom-wrapper">
        <div>
          <Navbar/>
          <About />
      
          <Events />
          <Team />
          <Gallery />
          <Contact />
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="bg-[#0f0f2b] min-h-screen text-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/health-camp" element={<HealthCampDetail />} />
      </Routes>
    </div>
  );
}

export default App;
