import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, HeartHandshake, Music, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import SangarshNavbar from './SangarshNavbar';
import sangarshLogo from '../assets/sangarsh/logo.png';
import sangarshBg from '../assets/sangarsh/bg.png';
import Contact from "../components/Contact";

import b1 from '../assets/sangarsh/b1.jpeg';
import b2 from '../assets/sangarsh/b2.jpeg';
import b3 from '../assets/sangarsh/b3.jpeg';
import b4 from '../assets/sangarsh/b4.jpeg';

// Beneficiary images
import ben2007_1 from '../assets/sangarsh/BENEFICIARY/2007/contri.jpg';
import ben2009_1 from '../assets/sangarsh/BENEFICIARY/2009/b4.png';
import ben2009_2 from '../assets/sangarsh/BENEFICIARY/2009/IMG_0415.jpg';
import ben2010_1 from '../assets/sangarsh/BENEFICIARY/2010/IMG_0706 (2).jpg';
import ben2010_2 from '../assets/sangarsh/BENEFICIARY/2010/s2.jpg';
import ben2011_1 from '../assets/sangarsh/BENEFICIARY/2011/1.jpg';
import ben2011_2 from '../assets/sangarsh/BENEFICIARY/2011/3.png';
import ben2012_1 from '../assets/sangarsh/BENEFICIARY/2012/IMG_8253.CR2.jpg';
import ben2014_1 from '../assets/sangarsh/BENEFICIARY/2014/4.jpg';
import ben2015_1 from '../assets/sangarsh/BENEFICIARY/2015/IMG_0908.jpg';
import ben2018_1 from '../assets/sangarsh/BENEFICIARY/2018/IMG_0368.jpg';
import ben2023_1 from '../assets/sangarsh/BENEFICIARY/2023/_DSC0830.jpg';

const LEGACY = [
  {
    year: '2007',
    beneficiary: 'Mentally challenged & spastic children of Samaroana and RASA',
    project: 'Built an audio-visual library and constructed a living room',
    performers: 'Naresh Iyer, Pop Shalini, Saindhavi, Ranjith, Ragul Nambiyar',
  },
  {
    year: '2008',
    beneficiary: 'CSI Home for Polio Rehabilitation',
    project: 'Reconstructed premises and constructed a computer lab',
    performers: 'Ranjith, Naresh Iyer, Devan',
  },
  {
    year: '2009',
    beneficiary: 'Karunai Illam, East Tambaram',
    project: 'Renovated the home',
    performers: 'Krish, Benny Dayal',
  },
  {
    year: '2010',
    beneficiary: 'HIV infected children of SHELTER, Kolathur',
    project: 'Donated for construction of a new home',
    performers: 'Krishna Iyer, Benny Dayal, Sri Mathumitha',
  },
  {
    year: '2011',
    beneficiary: 'Annai Shri Sharada Illam',
    project: "Renovation of home infrastructure and sanitation facilities (funding ~\u20b910,00,000); additionally a donation of $1000 to Rotary International for Polio eradication.",
    performers: 'Andrea Jeremiah, Benny Dayal, Lady Kash & Krissy, Velmurugan, Mukesh',
  },
  {
    year: '2012',
    beneficiary: 'Dr. Mani Heart Foundation & Govt. High School, Thirumazhisai',
    project: 'Donated towards construction of new home',
    performers: 'Shweta Mohan, Tippu, Aalap Raju, Ranjith',
  },
  {
    year: '2014',
    beneficiary: 'Children of Hemophilia Society, Madras',
    project: 'Raised funds for the betterment and care of children with haemophilia',
    performers: 'Sakthishri Gopalan, Tippu, Harihara Sudan, Pop Shalini, M.K. Mukesh, A.L. Ruflon',
  },
  {
    year: '2015',
    beneficiary: 'Children affected by Lysosomal Storage Disorders',
    project: 'Fundraising to support medication and treatment for affected children',
    performers: 'Manasi, M.K. Balaji, Pop Shalini, Velmurugan',
  },
  {
    year: '2018',
    beneficiary: 'Jayaram Karpagavalli Foundation, Madurai',
    project: 'Provided transport facilities & donated towards new home',
    performers: 'V.V. Prasanna, Malavika Sundar',
  },
  {
    year: '2023',
    beneficiary: 'Physically challenged people of COODU Trust, Dindigul',
    project: 'Facilitated a Self-Employment Centre and inclusive facilities for persons with disabilities and the elderly, promoting dignity and sustainable livelihoods',
    performers: 'Kanimozhi, Santhosh Balaji, Nivas K Prasanna, Pop Shalini, Britto Manohar, Lakshmi V Ramakrishnan',
  },
];

const SANGARSH: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const transformedScrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const scrollTransformed = (direction: 'left' | 'right') => {
    if (transformedScrollRef.current) {
      const scrollAmount = 400;
      transformedScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  const BENEFICIARIES = [
    {
      year: '2007',
      images: [ben2007_1],
      desc: LEGACY.find(l => l.year === '2007')?.beneficiary || 'Support & facilities for special children',
    },
    {
      year: '2009',
      images: [ben2009_1, ben2009_2],
      desc: LEGACY.find(l => l.year === '2009')?.beneficiary || 'Home renovations and care',
    },
    {
      year: '2010',
      images: [ben2010_1, ben2010_2],
      desc: LEGACY.find(l => l.year === '2010')?.beneficiary || 'Healthcare & housing support',
    },
    {
      year: '2011',
      images: [ben2011_1, ben2011_2],
      desc: "Renovation & sanitation support for Annai Shri Sharada Illam; funds and fundraising activities helped improve living conditions and health services.",
    },
    {
      year: '2012',
      images: [ben2012_1],
      desc: LEGACY.find(l => l.year === '2012')?.beneficiary || 'Educational support',
    },
    {
      year: '2014',
      images: [ben2014_1],
      desc: 'Funds raised for children of the Hemophilia Society, Madras — support for medical care and better access to services.',
    },
    {
      year: '2015',
      images: [ben2015_1],
      desc: 'Supported medication and treatment for children with Lysosomal Storage Disorders through targeted fundraising.',
    },
    {
      year: '2018',
      images: [ben2018_1],
      desc: LEGACY.find(l => l.year === '2018')?.beneficiary || 'Transport & home support',
    },
    {
      year: '2023',
      images: [ben2023_1],
      desc: 'Supported COODU Trust, Dindigul — facilitating a Self-Employment Centre and inclusive facilities for persons with disabilities.',
    },
  ];

  // Dynamically load all images from all_year folders using glob
  const allYearImages = import.meta.glob<{ default: string }>(
    '../assets/sangarsh/all_year/**/*.{jpg,jpeg,JPG,JPEG,png,PNG,CR2}',
    { eager: true }
  );

  // Build a year -> images map from glob results (max 4 images per year)
  const yearImagesMap: { [key: string]: string[] } = {};
  Object.entries(allYearImages).forEach(([path, module]) => {
    const match = path.match(/all_year[\/\\](\d{4})[\/\\]/);
    if (match) {
      const year = match[1];
      if (!yearImagesMap[year]) yearImagesMap[year] = [];
      if (yearImagesMap[year].length < 4) {
        yearImagesMap[year].push(module.default);
      }
    }
  });

  return (
    <>
      <SangarshNavbar />
      <section className="pt-0 bg-gradient-to-b from-amber-50 to-stone-100 text-stone-800">

        {/* HERO */}
        <div
          id="hero"
          className="w-screen h-screen bg-cover bg-center flex flex-col items-center justify-end pb-20 relative -ml-6 -mr-6"
          style={{
            backgroundImage: `url(${sangarshBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark gradient overlay for better contrast */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.65))',
              zIndex: 2,
            }}
          />

          {/* Subtle golden texture overlay (soft grain / stripes) */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              backgroundImage:
                'repeating-radial-gradient(circle at 10% 10%, rgba(255,215,0,0.03) 0 1px, transparent 1px 6px), repeating-linear-gradient(135deg, rgba(255,215,0,0.02) 0 2px, transparent 2px 8px)',
              mixBlendMode: 'overlay',
              opacity: 0.9,
              zIndex: 3,
            }}
          />
         <img
  src={sangarshLogo}
  alt="SANGARSH Logo"
  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
             w-11/12 sm:w-10/12 md:w-3/4 lg:w-2/3 xl:w-1/2 max-w-5xl 
             z-10 pointer-events-none object-contain"
  style={{
    filter: `
      drop-shadow(0 0 25px rgba(255, 200, 80, 0.55))
      drop-shadow(0 0 60px rgba(255, 180, 60, 0.35))
    `
  }}
/>


          {/* Emotional hook / one-line purpose (adds contrast & meaning) */}
         <motion.p
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="z-10 text-center text-white text-lg sm:text-xl font-semibold mb-3"
  style={{
    animation: 'whiteWiggle 2.8s ease-in-out infinite'
  }}
>
  

            A musical evening where art becomes hope.
          </motion.p>

          <div className="flex justify-center items-center gap-3 text-amber-100 font-medium text-lg z-10">
            <Calendar size={20} /> March 22, 2026 · Vivekananda Auditorium
          </div>
          </div>
        

       {/* ABOUT – Split Cards */}
<div id="about" className="bg-stone-50 py-20 border-t border-stone-200">
  <div className="container mx-auto px-6 max-w-6xl">
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

      {/* Card 1 – What is Sangarsh */}
      <motion.div
        className="bg-white rounded-2xl shadow-sm p-8 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-amber-900 mb-4">
          What is SANGARSH?
        </h2>
        <p className="text-lg leading-relaxed text-stone-600">
          SANGARSH is the flagship charity concert of the Rotaract Club of the
          College of Engineering Guindy, Anna University. Since 2002, it has
          transformed music into meaningful action — uplifting lives through
          compassion, dignity, and opportunity.
        </p>
      </motion.div>

      {/* Card 2 – Sangarsh 26 */}
      <motion.div
        className="bg-white rounded-2xl shadow-sm p-8 flex flex-col justify-between"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div>
          <h2 className="text-3xl font-bold text-amber-900 mb-4">
            SANGARSH ’26
          </h2>
          <p className="text-stone-700 leading-relaxed mb-6">
We are coming together to support Aga Deepa Oli Trust, a home for visually challenged individuals who face everyday challenges with courage and resilience.
<br></br> While talent, hope, and determination are abundant, basic facilities are limited.<br></br>
  Simple necessities such as access to technology, clean drinking water, proper hygiene, and a safe living environment can transform their daily lives.
          </p>
        </div>

    
      </motion.div>

    </div>
  </div>
</div>

        {/* THE LIVES WE TRANSFORMED */}
<div id="transformed" className="bg-stone-50 py-12 border-t border-stone-200
">
  <div className="container mx-auto px-6 max-w-6xl">
    <h2 className="text-3xl font-bold text-center text-amber-900 mb-4">
     GLIMPSES OF THE LIVES WE TRANSFORMED
    </h2>

    <p className="text-center text-stone-600 max-w-3xl mx-auto mb-6">
      Stories of dignity, shelter, and renewed hope — a few moments captured.
    </p>

    {/* Grid layout */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
      {BENEFICIARIES.flatMap(b =>
        b.images.map((img, i) => (
          <motion.div
            key={`${b.year}-${i}`}
            className="relative group overflow-hidden rounded-md"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <img
              src={img}
              alt={`${b.year} beneficiary ${i + 1}`}
              className="w-full h-40 object-cover"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 flex items-end">
              <div className="w-full p-2 bg-black/70 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="font-semibold">{b.year}</p>
                <p className="leading-tight">{b.desc}</p>
              </div>
            </div>
          </motion.div>
        ))
      )}
    </div>
  </div>
</div>

        {/* PATRON VIDEOS */}
        <div id="patrons" className="bg-stone-50 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-amber-900 mb-3">Eminent Voices Supporting SANGARSH</h2>
            <p className="text-center text-stone-600 max-w-3xl mx-auto mb-10">
              Celebrated voices from cinema, music, and society who believe in the spirit of SANGARSH and its mission.
            </p>
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => scroll('left')}
                className="flex-shrink-0 p-3 rounded-full bg-white shadow-md hover:bg-amber-50 transition-colors text-amber-900 hover:text-amber-700"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="overflow-hidden w-full">
                <div
                  ref={scrollContainerRef}
                  className="flex gap-6 pb-4 overflow-x-hidden scroll-smooth"
                >
                  {[
                    { name: 'A.R. Rahman', video: 'ARR.mp4' },
                    { name: 'Kamal Hassan', video: 'Actor Kamal Hassan Sangarsh.mp4' },
                     { name: 'Hariharan', video: 'Singer Hariharan about Sangarsh.mp4' },
                    { name: 'Karthi', video: 'Actor Karthi about Sangarsh.mp4' },
                    
                     { name: 'Vishal', video: 'Actor Vishal about Sangarsh.mp4' },
                     { name: 'Simbu', video: 'Simbu.mp4' },
                    { name: 'Santhanam', video: 'Actor Santhanam about Sangarsh.mp4' },
                    
                    
                    { name: 'K. Bhagyaraj', video: 'Bhayaraj.mp4' },
                    { name: 'R. Parthiban', video: 'Parthiban.mp4' },
                    { name: 'Prakash Raj', video: 'Prakash Raj.mp4' },
                    
                   
                    { name: 'Srikanth', video: 'Srikanth.mp4' },
                    { name: 'Vetrimaran', video: 'Vetrimaran.mp4' },
                  ].map((patron, i) => (
                    <motion.div
                      key={i}
                      className="flex-shrink-0 w-72 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <video
                        src={`/src/assets/patrons/${patron.video}`}
                        className="w-full h-56 rounded-xl shadow-md object-cover"
                        controls
                        controlsList="nodownload"
                      />
                      <p className="mt-4 text-amber-900 font-semibold text-lg">{patron.name}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => scroll('right')}
                className="flex-shrink-0 p-3 rounded-full bg-white shadow-md hover:bg-amber-50 transition-colors text-amber-900 hover:text-amber-700"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>


        {/* LEGACY TIMELINE */}
        <div id="legacy" className="bg-stone-50 py-20">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl font-bold text-center text-amber-900 mb-16">Legacy of SANGARSH</h2>

            <div className="relative border-l-2 border-amber-300">
              {LEGACY.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="ml-8 mb-16"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="absolute -left-[10px] mt-2 h-5 w-5 rounded-full bg-amber-600" />

                  <h3 className="text-2xl font-bold text-amber-800">{item.year}</h3>
                  <p className="text-stone-700 mt-2"><strong>Beneficiary:</strong> {item.beneficiary}</p>
                  <p className="text-stone-600 mt-1"><strong>Project:</strong> {item.project}</p>
                  <p className="text-stone-500 mt-1 italic"><strong>Performers:</strong> {item.performers}</p>

                  {/* Horizontal image strip (no gaps) for this year */}
                  <div className="mt-4 flex gap-0 overflow-x-auto">
                    {(yearImagesMap[item.year] || []).map((img, imgIdx) => (
                      <img
                        key={`${item.year}-img-${imgIdx}`}
                        src={img}
                        alt={`${item.year} image ${imgIdx + 1}`}
                        className="h-40 object-cover flex-shrink-0"
                      />
                    ))}
                    {(!yearImagesMap[item.year] || yearImagesMap[item.year].length === 0) && (
                      <div className="h-40 bg-amber-100 rounded-xl flex items-center justify-center text-amber-700 font-semibold w-full">
                        Year-wise Image Placeholder
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <Contact />

      
      </section>
    </>
  );
};

export default SANGARSH;
