import React, { useRef, useState } from "react";
import { Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const teamMembers = [
    { 
      id: 1, 
      name: "Ramajayam V", 
      position: "President", 
      image: "https://res.cloudinary.com/dipcixbc4/image/upload/v1766146955/pres_udgee2.jpg", 
      linkedin: "https://www.linkedin.com/in/ramajayam-v-4b846b38b" 
    },
  { 
      id: 2, 
      name: "Sudharshan S", 
      position: "Secretary", 
      image: "https://res.cloudinary.com/dipcixbc4/image/upload/v1766148083/Screenshot_2025-12-19_181520_tzf8go.png", 
      linkedin: "https://www.linkedin.com/in/sudarshan-senthilkumar-0563502b1" 
    },
    { 
      id: 3, 
      name: "Swarna Karthika N", 
      position: "Joint Secretary", 
      image: "https://res.cloudinary.com/dipcixbc4/image/upload/v1766146939/js2_ollhbo.jpg", 
      linkedin: "https://www.linkedin.com/in/swarna-karthika-n/" 
    },
    { 
      id: 4, 
      name: "Ashmi Sri Lakshmi", 
      position: "Treasurer", 
      image: "https://res.cloudinary.com/dipcixbc4/image/upload/v1766146946/tres_vduwzj.jpg", 
      linkedin: "https://www.linkedin.com/in/ashmi-sri-lakshmi-r-098503370/" 
    },
    { 
      id: 5, 
      name: "Sudharshan Karthik T", 
      position: "Sergeant at Arms", 
      image: "https://res.cloudinary.com/dipcixbc4/image/upload/v1766146943/seargent_at_arms_adv0nw.jpg", 
      linkedin: "https://www.linkedin.com/in/sudarshan-karthik-bb47bb291" 
    },
    { 
      id: 6, 
      name: "Rohith V", 
      position: "Head of Alumni Relations", 
      image: "https://res.cloudinary.com/dipcixbc4/image/upload/v1766146956/ir_wakhaa.jpg", 
      linkedin: "https://www.linkedin.com/in/rohithv2004" 
    },
    { 
      id: 7, 
      name: "Deerkkadharshini", 
      position: "Head of Contents", 
      image: "https://res.cloudinary.com/dipcixbc4/image/upload/v1766146942/contents_kyt9cj.jpg", 
      linkedin: "https://linkedin.com/in/deerkkadharshini-s-160843286/" 
    },
    { 
      id: 9, 
      name: "Kalisvikramkumar", 
      position: "Head of Events", 
      image: "https://res.cloudinary.com/dipcixbc4/image/upload/v1766146940/events_syldo6.jpg", 
      linkedin: "https://www.linkedin.com/in/kalisvikramkumar-b-067791250" 
    },
    { 
      id: 10, 
      name: "Moses J", 
      position: "Head of Human Resources", 
      image: "https://res.cloudinary.com/dipcixbc4/image/upload/v1766146941/hr_tnvobw.jpg", 
      linkedin: "https://www.linkedin.com/in/moses-moses-j-ba11832b9" 
    },
    { 
      id: 11, 
      name: "Nandhitta S", 
      position: "Head of Industrial Relations", 
      image: "https://res.cloudinary.com/dipcixbc4/image/upload/v1766146950/ir_2_osk7k9.jpg", 
      linkedin: "https://www.linkedin.com/in/nandhitta-saravanan-29970029a" 
    },
    { 
      id: 12, 
      name: "Hari vignesh S", 
      position: "Head of Industrial Relations", 
      image: "https://res.cloudinary.com/dipcixbc4/image/upload/v1766146940/hari_tr40t6.jpg", 
      linkedin: "https://www.linkedin.com/in/hari-vignesh-18201b283" 
    },
    { 
      id: 13, 
      name: "Fawaz Sadhak", 
      position: "Head of Logistics", 
      image: "https://res.cloudinary.com/dipcixbc4/image/upload/v1766146941/logi_ipmybx.jpg", 
      linkedin: "https://www.linkedin.com/in/fawaz-sadhak/" 
    }
  ];

  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollAmount = clientWidth * 0.8;
      const newScrollLeft = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      carouselRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    }
  };

  const nextProfile = () => setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  const prevProfile = () => setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-stone-100 to-amber-50 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-extrabold text-amber-900 mb-3">TEAM</h2>
          <div className="relative w-32 h-1 mx-auto overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 animate-[move_3s_linear_infinite]" />
          </div>
        </motion.div>

        {/* Desktop Controls */}
        <div className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-20">
          <button onClick={() => scroll("left")} className="p-3 bg-amber-600 text-white rounded-full shadow-lg hover:bg-amber-700 transition">
            <ChevronLeft size={24} />
          </button>
        </div>
        <div className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-20">
          <button onClick={() => scroll("right")} className="p-3 bg-amber-600 text-white rounded-full shadow-lg hover:bg-amber-700 transition">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:block">
          <div ref={carouselRef} className="flex overflow-x-scroll space-x-6 scrollbar-hide snap-x snap-mandatory py-4">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                className="min-w-[250px] sm:min-w-[300px] lg:min-w-[350px] flex-shrink-0 snap-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition">
                  <div className="text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-amber-200 mb-6"
                    />
                    <h3 className="text-xl font-bold text-stone-800 mb-2">{member.name}</h3>
                    <p className="text-amber-700 font-semibold text-lg">{member.position}</p>
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex mt-4 items-center justify-center w-8 h-8 bg-amber-100 rounded-full text-amber-600 hover:bg-amber-200 transition">
                        <Linkedin size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden flex flex-col items-center">
          <div className="relative w-full max-w-sm mx-auto">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl p-6 shadow-xl text-center"
            >
              <img
                src={teamMembers[currentIndex].image}
                alt={teamMembers[currentIndex].name}
                className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-amber-200 mb-6"
              />
              <h3 className="text-2xl font-bold text-stone-800 mb-2">{teamMembers[currentIndex].name}</h3>
              <p className="text-amber-700 font-semibold text-lg mb-4">{teamMembers[currentIndex].position}</p>
              {teamMembers[currentIndex].linkedin && (
                <a href={teamMembers[currentIndex].linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-10 h-10 bg-amber-100 rounded-full text-amber-600">
                  <Linkedin size={20} />
                </a>
              )}
            </motion.div>
            <button onClick={prevProfile} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-3 bg-amber-600 text-white rounded-full shadow-lg"><ChevronLeft size={16} /></button>
            <button onClick={nextProfile} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-3 bg-amber-600 text-white rounded-full shadow-lg"><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;