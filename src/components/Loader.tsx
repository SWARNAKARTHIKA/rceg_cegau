import React from "react";
import {motion} from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-amber-100 via-yellow-200 to-stone-100 overflow-hidden z-50">
      {/* Glowing Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-amber-300 rounded-full blur-3xl opacity-30 animate-orb"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-400 rounded-full blur-3xl opacity-40 animate-orb-delayed"></div>
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-orange-200 rounded-full blur-3xl opacity-25 animate-orb-slow"></div>

      {/* Text Animation */}
        <div className="flex flex-wrap text-center">
  <motion.p 
    className="text-3xl md:text-5xl font-extrabold tracking-wide text-[#78350F]"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ 
      duration: 1.60,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }}
  >
    <span className="text-3xl font-medium font-['cursive'] italic">
      Evolving The world{" "}
    </span>
    <span className="text-3xl animate-color-change font-extrabold font-['cursive'] italic">
      FORWARD
    </span>
  </motion.p>
</div>
    </div>
  );
};

export default Loader;
