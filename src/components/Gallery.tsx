import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from 'framer-motion';

import pic1 from "../assets/1.jpg";
import pic2 from "../assets/2.jpg";
import pic3 from "../assets/3.jpg";
import pic4 from "../assets/4.jpg";
import pic5 from "../assets/5.jpg";
import pic6 from "../assets/6.jpg";
import pic7 from "../assets/7.jpg";
import pic8 from "../assets/8.jpg";
import pic9 from "../assets/9.jpg";
import pic10 from "../assets/10.jpg";
import pic11 from "../assets/11.jpg";
import pic12 from "../assets/12.png";
import pic13 from "../assets/13.jpg";
import pic14 from "../assets/14.jpg";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const rows = galleryRef.current?.querySelectorAll(".gallery-row");
  if (rows && rows.length > 0) {
    rows.forEach((row) => {
      gsap.from(row, {
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: row,
          start: "top 85%",
          once: true,
        },
      });
    });

    ScrollTrigger.refresh();
  }
}, []);



  const images = [
    pic1, pic2, pic3, pic4, pic5,
    pic6, pic7, pic8, pic9, pic10,
    pic11, pic12, pic13, pic14
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-amber-50 to-stone-100">
      <div className="mb-16 text-center fade-in">
        <motion.div
                 className="text-center mb-12"
                 initial={{ opacity: 0, y: -50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8 }}
               >
                 <h2 className="text-5xl font-extrabold text-amber-900 mb-3">OUR JOURNEY IN PICTURES</h2>
                 <div className="relative w-32 h-1 mx-auto overflow-hidden rounded-full">
                   <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 animate-[move_3s_linear_infinite]" />
                 </div>
               </motion.div>
      </div>

      <div
  ref={galleryRef}
  className="grid gap-4 px-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 auto-rows-[200px] grid-flow-dense"
>
  {images.map((img, idx) => (
    <div
      key={idx}
      className={`gallery-item relative overflow-hidden rounded-xl shadow-lg group self-stretch min-w-full
        ${idx % 5 === 0 ? "row-span-2" : ""}
        ${idx % 7 === 0 ? "col-span-2" : ""}
      `}
    >
      <img
        src={img}
        alt={`Gallery ${idx}`}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  ))}
</div>
    </section>
  );
};

export default Gallery;
