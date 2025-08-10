import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const row3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createMarquee = (
      target: HTMLDivElement | null,
      direction: number,
      duration: number
    ) => {
      if (!target) return;
      const totalWidth = target.scrollWidth / 2;

      gsap.to(target, {
        x: direction > 0 ? `-${totalWidth}px` : `${totalWidth}px`,
        duration,
        ease: "none",
        repeat: -1,
        paused: true,
        scrollTrigger: {
          trigger: target,
          start: "top bottom",
          end: "bottom top",
          onEnter: () => gsap.globalTimeline.resume(),
          onLeave: () => gsap.globalTimeline.pause(),
          onEnterBack: () => gsap.globalTimeline.resume(),
          onLeaveBack: () => gsap.globalTimeline.pause(),
        },
      });
    };

    createMarquee(row1Ref.current, 1, 20);
    createMarquee(row2Ref.current, -1, 25);
    createMarquee(row3Ref.current, 1, 30);
  }, []);

  const GalleryRow = ({
    images,
    rowRef,
  }: {
    images: string[];
    rowRef: React.RefObject<HTMLDivElement>;
  }) => (
    <div className="overflow-hidden">
      <div ref={rowRef} className="flex gap-6 w-max will-change-transform">
        {[...images, ...images].map((image, idx) => (
          <div
            key={idx}
            className="relative flex-shrink-0 w-80 h-60 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
          >
            <img
              src={image}
              alt={`Gallery ${idx}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-stone-100 overflow-hidden">
      <div className="mb-16 text-center fade-in">
        <h2 className="text-5xl font-bold text-amber-900 mb-6">
          Our Journey in Pictures
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-yellow-600 mx-auto mb-8"></div>
      </div>

      <div className="space-y-8">
        <GalleryRow images={[pic1, pic2, pic3, pic4, pic5]} rowRef={row1Ref} />
        <GalleryRow
          images={[pic6, pic7, pic8, pic9, pic10]}
          rowRef={row2Ref}
        />
        <GalleryRow
          images={[pic11, pic12, pic13, pic14]}
          rowRef={row3Ref}
        />
      </div>
    </section>
  );
};

export default Gallery;
