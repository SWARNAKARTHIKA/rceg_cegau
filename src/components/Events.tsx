import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import conclave from '../assets/conc.jpg';
import sangarsh from '../assets/sangarsh.jpg';
import vizhithiru from '../assets/vizhithiru.jpg';
import pp from '../assets/pp.jpg';

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
          <div className="slide-up scale-in group">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={pp}
                  alt="CONCLAVE 2"
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

          {/* Event 1 */}
          <div
            className="slide-up scale-in group cursor-pointer"
            onClick={() => navigate('/health-camp')}
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={vizhithiru}
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

          {/* Event 2 */}
          <div className="slide-up scale-in group">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={sangarsh}
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

          {/* Event 3 */}
          <div className="slide-up scale-in group">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={conclave}
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

          {/* Event 4 */}
         
        </div>
      </div>
    </section>
  );
};

export default Events;
