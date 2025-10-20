import React, { useRef } from "react";
import { Mail, Phone, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

import js from "../assets/ob/js.jpg";
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

const Team = () => {
  const teamMembers = [
    { id: 1, name: "Ramajayam V", position: "President", image: pres },
    { id: 2, name: "Sudharshan S", position: "Secretary", image: sec },
    { id: 3, name: "Ashmi Sri Lakshmi", position: "Treasurer", image: tres },
    { id: 4, name: "Sudharshan Karthik T", position: "Seargent at Arms", image: saa },
    { id: 5, name: "Swarna Karthika N", position: "Joint Secretary", image: js },
    { id: 6, name: "Rohith V", position: "Head of Alumni Relations", image: ir },
    { id: 7, name: "Deerkkadharshini", position: "Head of Contents", image: contents },
    { id: 8, name: "Sornamala", position: "Head of Design", image: design },
    { id: 9, name: "Kalisvikramkumar", position: "Head of Events", image: events },
    { id: 10, name: "Moses J", position: "Head of Human Resources", image: hr },
    { id: 11, name: "Nandhitta S", position: "Head of Industrial Relations", image: ir_2 },
    { id: 12, name: "Ajay B", position: "Head of Marketing", image: marketing },
  ];

  // Duplicate list for seamless infinite loop
  const extendedList = [...teamMembers, ...teamMembers];
  const controls = useAnimation();
  const carouselRef = useRef(null);

  // Scroll handler for buttons
  const scroll = (direction) => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollAmount = clientWidth * 0.8; // how far to scroll per click
      carouselRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-stone-100 to-amber-50 overflow-hidden relative">
      <div className="container mx-auto px-6">
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

        {/* Navigation buttons */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20">
          <button
            onClick={() => scroll("left")}
            className="p-3 bg-amber-600 text-white rounded-full shadow-lg hover:bg-amber-700 transition"
          >
            <ChevronLeft size={24} />
          </button>
        </div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20">
          <button
            onClick={() => scroll("right")}
            className="p-3 bg-amber-600 text-white rounded-full shadow-lg hover:bg-amber-700 transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Infinite horizontal scroll */}
        <motion.div
          ref={carouselRef}
          className="flex overflow-x-scroll space-x-6 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollBehavior: "smooth" }}
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
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
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
