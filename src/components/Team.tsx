import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const teamMembers = [
    { id: 1, name: "Ramajayam V", position: "President", image: pres },
    { id: 2, name: "Sudharshan S", position: "Secretary", image: sec },
     { id: 1, name: "Ramajayam V", position: "President", image: pres },
    { id: 2, name: "Sudharshan S", position: "Secretary", image: sec },
    { id: 3, name: "Ashmi Sri Lakshmi", position: "Treasurer", image: tres },
    { id: 4, name: "Sudharshan Karthik T", position: "Seargent at arms", image: saa },
    { id: 1, name: "Ramajayam V", position: "President", image: pres },
    { id: 2, name: "Sudharshan S", position: "Secretary", image: sec },
    { id: 3, name: "Ashmi Sri Lakshmi", position: "Treasurer", image: tres },
    { id: 4, name: "Sudharshan Karthik T", position: "Seargent at arms", image: saa },
    { id: 5, name: "Swarna Karthika N", position: "Joint Secretary", image: js },
    { id: 6, name: "Rohith V", position: "Head of Alumni Relations", image: ir },
    { id: 7, name: "Deerkkadharshini", position: "Head of Contents", image: contents },
    { id: 8, name: "Sornamala", position: "Head of Design", image: design },
    { id: 9, name: "Kalisvikramkumar", position: "Head of Events", image: events },
    { id: 10, name: "Moses J", position: "Head of Human Resources", image: hr },
    { id: 11, name: "Nandhitta S", position: "Head of Industrial Relations", image: ir_2 },
    { id: 12, name: "Ajay B", position: "Head of Marketing", image: marketing },
  ];

  // Each card is 16rem wide (w-64) + 1.5rem gap = ~17.5rem (280px)
  const cardWidth = 280; 
  const totalWidth = teamMembers.length * cardWidth;
  const viewportWidth = typeof window !== "undefined" ? window.innerWidth : 1280;
  const scrollAmount = totalWidth - viewportWidth;

  // Map vertical scroll to horizontal movement (px instead of %)
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollAmount]);

  return (
    <motion.section
      ref={ref}
      className="relative h-[300vh] bg-gradient-to-br from-amber-50 to-amber-100"
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-amber-900 mb-12">
          Our Team
        </h2>

        {/* Cards */}
        <motion.div style={{ x }} className="flex gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative flex-shrink-0 w-64 h-80 rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-amber-900/90 text-white p-3 w-full text-right">
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-sm text-amber-200">{member.position}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Team;
