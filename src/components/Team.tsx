import React, { useRef, useState } from "react";
import { Mail, Phone, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

import js from "../assets/ob/js2.jpg";
import pres from "../assets/ob/pres.jpg";
import contents from "../assets/ob/contents.jpg";
import design from "../assets/ob/design.jpg";
import events from "../assets/ob/events.jpeg";
import hr from "../assets/ob/hr.jpeg";
import ir from "../assets/ob/ir.jpg";
import ir_2 from "../assets/ob/ir 2.jpg";
import marketing from "../assets/ob/marketing.jpg";
import saa from "../assets/ob/seargent at arms.jpg";
import sec from "../assets/ob/sec.jpg";
import tres from "../assets/ob/tres.jpg";
import hari from "../assets/ob/hari.jpg";

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

const teamMembers = [
    { id: 1, name: "Ramajayam V", position: "President", image: pres, linkedin: "https://www.linkedin.com/in/ramajayam-v-4b846b38b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { id: 2, name: "Sudharshan S", position: "Secretary", image: sec, linkedin: "https://www.linkedin.com/in/sudarshan-senthilkumar-0563502b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { id: 3, name: "Swarna Karthika N", position: "Joint Secretary", image: js, linkedin: "https://www.linkedin.com/in/swarna-karthika-n/" },
    { id: 4, name: "Ashmi Sri Lakshmi", position: "Treasurer", image: tres, linkedin: "https://www.linkedin.com/in/ashmi-sri-lakshmi-r-098503370/" },
    { id: 5, name: "Sudharshan Karthik T", position: "Seargent at Arms", image: saa, linkedin: "https://www.linkedin.com/in/sudarshan-karthik-bb47bb291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { id: 6, name: "Rohith V", position: "Head of Alumni Relations", image: ir, linkedin: "https://www.linkedin.com/in/rohithv2004" },
    { id: 7, name: "Deerkkadharshini", position: "Head of Contents", image: contents, linkedin: "https://linkedin.com/in/deerkkadharshini-s-160843286/" },
    { id: 8, name: "Sornamala", position: "Head of Design", image: design, linkedin: "https://www.linkedin.com/in/sornamala-u" },
    { id: 9, name: "Kalisvikramkumar", position: "Head of Events", image: events, linkedin: "https://www.linkedin.com/in/kalisvikramkumar-b-067791250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { id: 10, name: "Moses J", position: "Head of Human Resources", image: hr, linkedin: "https://www.linkedin.com/in/moses-moses-j-ba11832b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { id: 11, name: "Nandhitta S", position: "Head of Industrial Relations", image: ir_2, linkedin: "https://www.linkedin.com/in/nandhitta-saravanan-29970029a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { id: 12, name: "Hari vignesh S", position: "Head of Industrial Relations", image: hari, linkedin: "https://www.linkedin.com/in/hari-vignesh-18201b283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
   ];

  // Duplicate list for seamless infinite loop
  const extendedList = [...teamMembers];
  const controls = useAnimation();
  const carouselRef = useRef<HTMLDivElement>(null);

  // Scroll handler for buttons
  const scroll = (direction: string) => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollAmount = clientWidth * 0.8; // how far to scroll per click
      const newScrollLeft = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      carouselRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    }
  };

  // Profile view handlers for mobile
  const nextProfile = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const prevProfile = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-stone-100 to-amber-50 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-extrabold text-amber-900 mb-3">TEAM</h2>
          <div className="relative w-32 h-1 mx-auto overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 animate-[move_3s_linear_infinite]" />
          </div>
        </motion.div>

        {/* Navigation buttons - Desktop */}
        <div className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 z-20">
          <button
            onClick={() => scroll("left")}
            className="p-3 bg-amber-600 text-white rounded-full shadow-lg hover:bg-amber-700 transition"
          >
            <ChevronLeft size={12} />
          </button>
        </div>
        <div className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 z-20">
          <button
            onClick={() => scroll("right")}
            className="p-3 bg-amber-600 text-white rounded-full shadow-lg hover:bg-amber-700 transition"
          >
            <ChevronRight size={12} />
          </button>
        </div>

        {/* Desktop: Infinite horizontal scroll */}
        <div className="hidden md:block">
          <div
            ref={carouselRef}
            className="flex overflow-x-scroll space-x-6 scrollbar-hide snap-x snap-mandatory"
          >
            {extendedList.map((member, index) => (
              <motion.div
                key={index}
                className="min-w-[250px] sm:min-w-[300px] lg:min-w-[350px] flex-shrink-0 snap-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition">
                  <div className="text-center">
                    <div className="relative mb-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-amber-200 group-hover:border-amber-400 transition"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-stone-800 mb-2">{member.name}</h3>
                    <p className="text-amber-700 font-semibold text-lg">{member.position}</p>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-8 h-8 bg-amber-100 rounded-full hover:bg-amber-200 transition-colors mt-2"
                      >
                        <Linkedin className="w-4 h-4 text-amber-600" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Profile view with navigation */}
        <div className="md:hidden flex flex-col items-center">
          <div className="relative w-full max-w-sm mx-auto">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-xl"
            >
              <div className="text-center">
                <div className="relative mb-6">
                  <img
                    src={teamMembers[currentIndex].image}
                    alt={teamMembers[currentIndex].name}
                    className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-amber-200"
                  />
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-2">{teamMembers[currentIndex].name}</h3>
                <p className="text-amber-700 font-semibold text-lg mb-4">{teamMembers[currentIndex].position}</p>
                {teamMembers[currentIndex].linkedin && (
                  <a
                    href={teamMembers[currentIndex].linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 bg-amber-100 rounded-full hover:bg-amber-200 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-amber-600" />
                  </a>
                )}
              </div>
            </motion.div>

            {/* Mobile Navigation Buttons */}
            <button
              onClick={prevProfile}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 p-3 bg-amber-600 text-white rounded-full shadow-lg hover:bg-amber-700 transition"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextProfile}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 p-3 bg-amber-600 text-white rounded-full shadow-lg hover:bg-amber-700 transition"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Optional: Auto-scroll animation */}
      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
        className="hidden"
      />
    </section>
  );
};

export default Team;
