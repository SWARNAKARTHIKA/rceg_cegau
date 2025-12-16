import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from 'react-router-dom';
// The local imports are no longer needed:
// import conclave from '../assets/conc.jpg';
// import sangarsh from '../assets/sangarsh.jpg';
// import vizhithiru from '../assets/vizhithiru.jpg';
// import pp from '../assets/pp.jpg';

// Define CDN URLs with optimization parameters for grid display (w_400):
const OPTIMIZE = 'w_400,f_auto,q_auto';

const cdnConclave = `https://res.cloudinary.com/dipcixbc4/image/upload/${OPTIMIZE}/v1765884620/conc_lj6lq5.jpg`;
const cdnSangarsh = `https://res.cloudinary.com/dipcixbc4/image/upload/${OPTIMIZE}/v1765884596/sangarsh_v0l6k3.jpg`;
const cdnVizhithiru = `https://res.cloudinary.com/dipcixbc4/image/upload/${OPTIMIZE}/v1765884516/10_gtukdr.jpg`; // Using the 4th provided link
const cdnAarambham = `https://res.cloudinary.com/dipcixbc4/image/upload/${OPTIMIZE}/v1765884573/pp_puniqs.jpg`;


const Events = () => {
  const navigate = useNavigate();

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-amber-50 to-stone-100">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
          <motion.div
           className="text-center mb-16"
           initial={{ opacity: 0, y: -50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
         >
           <h2 className="text-5xl font-extrabold text-amber-900 mb-3">
             EVENTS
           </h2>
           <div className="relative w-32 h-1 mx-auto mb-8 overflow-hidden rounded-full">
             <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 animate-[move_3s_linear_infinite]" />
           </div>
         </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          
          {/* AARAMBHAM */}
          <div className="slide-up scale-in group">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={cdnAarambham} // <-- CDN LINK USED HERE
                  alt="AARAMBHAM"
                  className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-stone-800 mb-3 group-hover:text-amber-800 transition-colors">
                 AARAMBHAM
                </h3>
                <p className="text-stone-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  Event that recreates traditional village games.
                </p>
              </div>
            </div>
          </div>

          {/* VIZHITHIRU */}
          <div
            className="slide-up scale-in group cursor-pointer"
            
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={cdnVizhithiru} // <-- CDN LINK USED HERE
                  alt="VIZHITHIRU"
                  className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-stone-800 mb-3 group-hover:text-amber-800 transition-colors">
                  VIZHITHIRU
                </h3>
                <p className="text-stone-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                 Empowers government school students through hands-on projects and learning sessions.</p>
              </div>
            </div>
          </div>

          {/* SANGARSH */}
          <div className="slide-up scale-in group">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={cdnSangarsh} // <-- CDN LINK USED HERE
                  alt="SANGARSH"
                  className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-stone-800 mb-3 group-hover:text-amber-800 transition-colors">
                  SANGARSH
                </h3>
                <p className="text-stone-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  Charity concert that raises funds for noble causes through music and culturals.</p>
              </div>
            </div>
          </div>

          {/* CONCLAVE */}
          <div className="slide-up scale-in group">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={cdnConclave} // <-- CDN LINK USED HERE
                  alt="CONCLAVE"
                  className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-stone-800 mb-3 group-hover:text-amber-800 transition-colors">
                  CONCLAVE
                </h3>
                <p className="text-stone-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  Motivational talk show where students and professionals come together to share ideas.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Events;
