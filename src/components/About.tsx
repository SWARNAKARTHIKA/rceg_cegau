import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import pic from "../assets/grp_pic.webp";

const About = () => {
  const { scrollYProgress } = useScroll();
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-gradient-to-br from-amber-50 via-stone-100 to-amber-100"
    >
      {/* Decorative blurred background circles */}
      <div className="absolute top-10 left-10 w-32 sm:w-48 h-32 sm:h-48 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 sm:w-64 h-48 sm:h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Decorative rope gradient (optional aesthetic element) */}
      <motion.svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 1000 1500"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="ropeGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#78350f" />
            <stop offset="40%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#fcd34d" />
          </linearGradient>
        </defs>
      </motion.svg>

      <div className="container mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-amber-900 mb-3">
            About Us
          </h2>
          <div className="relative w-24 sm:w-32 h-1 mx-auto mb-8 overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 animate-[move_3s_linear_infinite]" />
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Left: Image */}
          <motion.div
            className="group relative w-full flex justify-center"
            initial={{ opacity: 0, x: -80, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="rounded-xl shadow-xl overflow-hidden transform transition-transform duration-500 group-hover:rotate-1 group-hover:scale-105 w-full max-w-[500px]">
              <img
                src={pic}
                alt="Rotaract Club"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="text-center md:text-left px-2 sm:px-0"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-stone-800 mb-4 sm:mb-6">
              Theme:{" "}
              <span className="text-amber-700">Inspire, Integrate, Innovate</span>
            </h3>
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed mb-4 sm:mb-6">
              Rotaract Club of CEG stands as a beacon of service and leadership,
              driven by a vision to create lasting positive change. We are a
              dynamic community of young leaders dedicated to making a meaningful
              impact on society.
            </p>
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed mb-6 sm:mb-8">
              Guided by the Rotary motto,{" "}
              <span className="font-semibold text-amber-800">
                Service Above Self
              </span>
              , our initiatives span impactful community projects, professional
              growth opportunities, and international fellowship programs that
              connect us with Rotaractors around the globe.
            </p>

            {/* Scrolling Services (Marquee style) */}
            <div className="relative w-full overflow-hidden">
              <motion.div
                className="flex whitespace-nowrap text-sm sm:text-base md:text-lg font-semibold tracking-wide"
                initial={{ x: "100%" }}
                animate={{ x: "-100%" }}
                transition={{ duration: 10, ease: "linear", repeat: Infinity }}
              >
                <span className="mx-4 sm:mx-6 text-amber-800">
                  Club Service
                </span>
                <span className="text-amber-500">•</span>
                <span className="mx-4 sm:mx-6 text-amber-800">
                  Professional Service
                </span>
                <span className="text-amber-500">•</span>
                <span className="mx-4 sm:mx-6 text-amber-800">
                  Community Service
                </span>
                <span className="text-amber-500">•</span>
                <span className="mx-4 sm:mx-6 text-amber-800">
                  International Service
                </span>
                <span className="text-amber-500">•</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Keyframes for divider */}
      <style>{`
        @keyframes move {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default About;
