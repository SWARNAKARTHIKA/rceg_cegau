import React from 'react';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const OPTIMIZE = 'w_600,f_auto,q_auto';

const cdnConclave = `https://res.cloudinary.com/dipcixbc4/image/upload/${OPTIMIZE}/v1765884620/conc_lj6lq5.jpg`;
const cdnSangarsh = `https://res.cloudinary.com/dipcixbc4/image/upload/${OPTIMIZE}/v1765884596/sangarsh_v0l6k3.jpg`;
const cdnVizhithiru = `https://res.cloudinary.com/dipcixbc4/image/upload/${OPTIMIZE}/v1765884516/10_gtukdr.jpg`;
const cdnAarambham = `https://res.cloudinary.com/dipcixbc4/image/upload/${OPTIMIZE}/v1765884573/pp_puniqs.jpg`;

const Events = () => {
  const navigate = useNavigate();

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-amber-50 to-stone-100">
      <div className="container mx-auto px-4 sm:px-6">
        
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-5xl font-extrabold text-amber-900 mb-3 tracking-tight">EVENTS</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* AARAMBHAM */}
          <motion.div whileHover={{ y: -8 }} className="bg-white rounded-3xl overflow-hidden shadow-lg flex flex-col">
            <div className="h-56 overflow-hidden relative">
              <img src={cdnAarambham} alt="AARAMBHAM" className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-amber-900/80 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded font-bold uppercase tracking-tighter">
                New Gallery
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-stone-800 mb-2">AARAMBHAM</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                Event that recreates traditional village games.
              </p>
              
              <div className="mt-auto">
                <button
                  onClick={() => navigate('/aarambham-2025')}
                  className="group flex items-center gap-2 text-amber-700 font-bold text-sm tracking-wide transition-colors hover:text-amber-900"
                >
                  <span className="relative">
                    Aarambham'25 PICS
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight size={16} />
                  </motion.div>
                </button>
              </div>
            </div>
          </motion.div>

          {/* VIZHITHIRU */}
          <motion.div whileHover={{ y: -8 }} className="bg-white rounded-3xl overflow-hidden shadow-lg flex flex-col">
            <div className="h-56 overflow-hidden">
              <img src={cdnVizhithiru} alt="VIZHITHIRU" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-stone-800 mb-2">VIZHITHIRU</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Empowers government school students through hands-on projects and learning sessions.
              </p>
            </div>
          </motion.div>

          {/* SANGARSH */}
          <motion.div whileHover={{ y: -8 }} className="bg-white rounded-3xl overflow-hidden shadow-lg flex flex-col">
            <div className="h-56 overflow-hidden">
              <img src={cdnSangarsh} alt="SANGARSH" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-stone-800 mb-2">SANGARSH</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Charity concert that raises funds for noble causes through music and culturals.
              </p>
            </div>
          </motion.div>

          {/* CONCLAVE */}
          <motion.div whileHover={{ y: -8 }} className="bg-white rounded-3xl overflow-hidden shadow-lg flex flex-col">
            <div className="h-56 overflow-hidden">
              <img src={cdnConclave} alt="CONCLAVE" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-stone-800 mb-2">CONCLAVE</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Motivational talk show where students and professionals come together to share ideas.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Events;