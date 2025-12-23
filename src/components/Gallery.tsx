import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  const images = [
    "https://res.cloudinary.com/dipcixbc4/image/upload/v1765884528/15_kiv7yt.jpg",
    "https://res.cloudinary.com/dipcixbc4/image/upload/v1765884526/4_ztxcla.jpg",
    "https://res.cloudinary.com/dipcixbc4/image/upload/v1765884526/11_l7rnib.jpg",
    "https://res.cloudinary.com/dipcixbc4/image/upload/v1765884525/8_ouvfda.jpg",
    "https://res.cloudinary.com/dipcixbc4/image/upload/v1765884525/16_n31gkp.jpg",
    "https://res.cloudinary.com/dipcixbc4/image/upload/v1765884521/3_t7ziel.jpg",
    "https://res.cloudinary.com/dipcixbc4/image/upload/v1765884516/10_gtukdr.jpg",
    "https://res.cloudinary.com/dipcixbc4/image/upload/v1765884513/12_llxw3e.png",
    "https://res.cloudinary.com/dipcixbc4/image/upload/v1765884509/5_vfnjbh.jpg",
    "https://res.cloudinary.com/dipcixbc4/image/upload/v1765884498/9_y6ytel.jpg"
  ];

  useEffect(() => {
    // We use context to ensure GSAP targets the right elements and cleans up properly
    let ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".gallery-item");
      
      items.forEach((item: any) => {
        gsap.fromTo(item, 
          { opacity: 0, y: 30 }, 
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%", // Triggers when the top of the image hits 90% of the viewport height
              toggleActions: "play none none none",
              once: true,
            }
          }
        );
      });
    }, galleryRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-amber-50 to-stone-100 min-h-screen">
      <div className="mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="px-4"
        >
          <h2 className="text-5xl font-extrabold text-amber-900 mb-3">OUR JOURNEY IN PICTURES</h2>
          <div className="relative w-32 h-1 mx-auto overflow-hidden rounded-full bg-gray-200">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 animate-pulse" />
          </div>
        </motion.div>
      </div>

      <div
        ref={galleryRef}
        className="grid gap-4 px-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 auto-rows-[250px] grid-flow-dense"
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`gallery-item relative overflow-hidden rounded-xl shadow-lg group
              ${idx % 5 === 0 ? "md:row-span-2" : ""}
              ${idx % 7 === 0 ? "md:col-span-2" : ""}
            `}
          >
            <img
              src={img}
              alt={`Gallery image ${idx}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              onLoad={() => ScrollTrigger.refresh()} // Refresh triggers once images actually load
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;