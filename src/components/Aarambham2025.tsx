import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, Maximize2, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import MinimalNavbar from './MinimalNavbar';

const IMAGES = [
  "https://res.cloudinary.com/dipcixbc4/image/upload/f_auto,q_auto/v1766149471/Screenshot_2025-12-19_182946_fsowfu.png",
  "https://res.cloudinary.com/dipcixbc4/image/upload/f_auto,q_auto/v1766149469/Screenshot_2025-12-19_183009_mztgc5.png",
  "https://res.cloudinary.com/dipcixbc4/image/upload/f_auto,q_auto/v1766149467/Screenshot_2025-12-19_183015_y6dtbz.png",
  "https://res.cloudinary.com/dipcixbc4/image/upload/f_auto,q_auto/v1766149464/Screenshot_2025-12-19_183027_evcucm.png",
  "https://res.cloudinary.com/dipcixbc4/image/upload/f_auto,q_auto/v1766149462/Screenshot_2025-12-19_183041_qpbd6r.png",
  "https://res.cloudinary.com/dipcixbc4/image/upload/f_auto,q_auto/v1766149460/Screenshot_2025-12-19_183049_w27egr.png",
  "https://res.cloudinary.com/dipcixbc4/image/upload/f_auto,q_auto/v1766149458/Screenshot_2025-12-19_183057_vhave9.png",
  "https://res.cloudinary.com/dipcixbc4/image/upload/f_auto,q_auto/v1766149455/Screenshot_2025-12-19_183109_unyrmx.png",
  "https://res.cloudinary.com/dipcixbc4/image/upload/f_auto,q_auto/v1766149454/Screenshot_2025-12-19_183126_yq0db0.png",
  "https://res.cloudinary.com/dipcixbc4/image/upload/f_auto,q_auto/v1766149453/Screenshot_2025-12-19_183133_e3tggd.png",
  "https://res.cloudinary.com/dipcixbc4/image/upload/f_auto,q_auto/v1766149452/Screenshot_2025-12-19_183207_ii47nm.png",
  "https://res.cloudinary.com/dipcixbc4/image/upload/f_auto,q_auto/v1766149446/Screenshot_2025-12-19_183220_gmiiz8.png",
  "https://res.cloudinary.com/dipcixbc4/image/upload/f_auto,q_auto/v1766149444/Screenshot_2025-12-19_183228_cycidn.png",
  "https://res.cloudinary.com/dipcixbc4/image/upload/f_auto,q_auto/v1766149443/Screenshot_2025-12-19_183237_p9g6x7.png",
  "https://res.cloudinary.com/dipcixbc4/image/upload/f_auto,q_auto/v1766149441/Screenshot_2025-12-19_183244_nzquef.png",
  "https://res.cloudinary.com/dipcixbc4/image/upload/f_auto,q_auto/v1766149438/Screenshot_2025-12-19_183258_ggcixo.png",
  "https://res.cloudinary.com/dipcixbc4/image/upload/f_auto,q_auto/v1766149436/Screenshot_2025-12-19_183309_oneixo.png",
  "https://res.cloudinary.com/dipcixbc4/image/upload/f_auto,q_auto/v1766149436/Screenshot_2025-12-19_183320_jyaszf.png",
  "https://res.cloudinary.com/dipcixbc4/image/upload/f_auto,q_auto/v1766149432/Screenshot_2025-12-19_183330_q6yuky.png",
  "https://res.cloudinary.com/dipcixbc4/image/upload/f_auto,q_auto/v1766149430/Screenshot_2025-12-19_183337_nzenzf.png",
  "https://res.cloudinary.com/dipcixbc4/image/upload/f_auto,q_auto/v1766149429/Screenshot_2025-12-19_183405_fws5vz.png",
  "https://res.cloudinary.com/dipcixbc4/image/upload/f_auto,q_auto/v1766149429/Screenshot_2025-12-19_183347_efzcf6.png",
  "https://res.cloudinary.com/dipcixbc4/image/upload/f_auto,q_auto/v1766149427/Screenshot_2025-12-19_183413_rr96bj.png",
  "https://res.cloudinary.com/dipcixbc4/image/upload/f_auto,q_auto/v1766149427/Screenshot_2025-12-19_183357_n7svee.png",
  "https://res.cloudinary.com/dipcixbc4/image/upload/f_auto,q_auto/v1766149425/Screenshot_2025-12-19_183444_cmlvt8.png",
  "https://res.cloudinary.com/dipcixbc4/image/upload/f_auto,q_auto/v1766149421/Screenshot_2025-12-19_183421_hdv47w.png",
  "https://res.cloudinary.com/dipcixbc4/image/upload/f_auto,q_auto/v1766149420/Screenshot_2025-12-19_183430_qym0ye.png",
  "https://res.cloudinary.com/dipcixbc4/image/upload/f_auto,q_auto/v1766149418/Screenshot_2025-12-19_183437_gdufok.png",
  "https://res.cloudinary.com/dipcixbc4/image/upload/f_auto,q_auto/v1766149414/Screenshot_2025-12-19_183451_arqadq.png",
  "https://res.cloudinary.com/dipcixbc4/image/upload/f_auto,q_auto/v1766149412/Screenshot_2025-12-19_183510_otdzni.png",
  "https://res.cloudinary.com/dipcixbc4/image/upload/f_auto,q_auto/v1766149411/Screenshot_2025-12-19_183525_h0t7bg.png",
  "https://res.cloudinary.com/dipcixbc4/image/upload/f_auto,q_auto/v1766149409/Screenshot_2025-12-19_183537_sov7nj.png",
  "https://res.cloudinary.com/dipcixbc4/image/upload/f_auto,q_auto/v1766149409/Screenshot_2025-12-19_183553_i4bbh7.png",
  "https://res.cloudinary.com/dipcixbc4/image/upload/f_auto,q_auto/v1766149408/Screenshot_2025-12-19_183606_nbyhii.png",
  "https://res.cloudinary.com/dipcixbc4/image/upload/f_auto,q_auto/v1766149406/Screenshot_2025-12-19_183653_qmyogq.png",
  "https://res.cloudinary.com/dipcixbc4/image/upload/f_auto,q_auto/v1766149405/Screenshot_2025-12-19_183707_uupwka.png"
];

const Aarambham2025: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  const downloadImage = (url: string) => {
    const downloadUrl = url.replace('/upload/', '/upload/fl_attachment/');
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute('download', 'aarambham_photo.png');
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const nextImg = () => { if (currentIndex !== null) setCurrentIndex((currentIndex + 1) % IMAGES.length); };
  const prevImg = () => { if (currentIndex !== null) setCurrentIndex((currentIndex - 1 + IMAGES.length) % IMAGES.length); };

  return (
    <>
      <MinimalNavbar />
      <section className="pt-20 bg-gradient-to-b from-amber-50 to-stone-100 min-h-screen text-center">
        <div className="container mx-auto px-4 sm:px-6">
        
        {/* Animated Header Section */}
        <div className="max-w-3xl mx-auto mb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-amber-700 font-bold mb-4"
          >
            <Calendar size={18} /> October 24, 2025
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-6xl font-extrabold text-amber-900 tracking-tight mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            AARAMBHAM 2025
          </motion.h1>

          <motion.p 
            className="text-stone-600 text-lg leading-relaxed mb-6 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
          Celebrating our roots with a blast from the past! Aarambham 2025 transformed the campus into a traditional arena, breaking the ice for freshers through high-energy village games and newfound friendships.</motion.p>

          <motion.p 
            className="text-stone-500 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Captured by <span className="font-bold text-amber-700 underline decoration-amber-200 underline-offset-4">The Guindy Times</span>
          </motion.p>
        </div>

        {/* Original Masonry Grid Layout restored */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {IMAGES.map((src, i) => (
            <motion.div 
              key={i} 
              className="group relative rounded-xl overflow-hidden bg-white shadow-md break-inside-avoid hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img src={src} alt={`Aarambham ${i + 1}`} className="w-full h-auto block" />
              
              {/* Original Circle Hover Buttons restored */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                <button 
                  onClick={() => setCurrentIndex(i)}
                  className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-amber-900 transition"
                >
                  <Maximize2 size={20} />
                </button>
                <button 
                  onClick={() => downloadImage(src)}
                  className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-amber-900 transition"
                >
                  <Download size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Original Lightbox with Navigation restored */}
      <AnimatePresence>
        {currentIndex !== null && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button onClick={() => setCurrentIndex(null)} className="absolute top-6 right-6 text-white/70 hover:text-white transition z-[60]">
              <X size={32} />
            </button>

            <button onClick={prevImg} className="absolute left-4 md:left-10 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition z-[60]">
              <ChevronLeft size={32} />
            </button>

            <div className="relative flex flex-col items-center">
              <motion.img 
                key={currentIndex}
                src={IMAGES[currentIndex]} 
                className="max-w-full max-h-[80vh] rounded-lg shadow-2xl object-contain"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              />
              <div className="mt-6 flex gap-4">
                <button 
                  onClick={() => downloadImage(IMAGES[currentIndex])}
                  className="flex items-center gap-2 px-6 py-2 bg-amber-600 text-white rounded-full font-semibold hover:bg-amber-700 transition"
                >
                  <Download size={18} /> Download
                </button>
                <span className="flex items-center text-white/60 font-medium">
                  {currentIndex + 1} / {IMAGES.length}
                </span>
              </div>
            </div>

            <button onClick={nextImg} className="absolute right-4 md:right-10 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition z-[60]">
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      </section>

      {/* Footer with Credits */}
      <footer className="bg-amber-900 text-amber-50 text-center py-8 border-t border-amber-800">
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
  
          <p className="text-sm mb-2">© 2025 Aarambham. All Rights Reserved.</p>
            </motion.div>
      </footer>
    </>
  );
};

export default Aarambham2025;