import React from 'react';
import { useNavigate } from 'react-router-dom';
import conclave from '../assets/conc.jpg';
import sangarsh from '../assets/sangarsh.jpg';
import vizhithiru from '../assets/vizhithiru.jpg';
import pp from '../assets/pp.jpg';

const Events = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-stone-100">
      <div className="container mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-5xl font-bold text-amber-900 mb-6">Signature Events</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-yellow-600 mx-auto mb-8"></div>
        </div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-4 gap-8">

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
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-stone-800 mb-3 group-hover:text-amber-800 transition-colors">
                  VIZHITHIRU 
                </h3>
                <p className="text-stone-600 mb-6 leading-relaxed">
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
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-stone-800 mb-3 group-hover:text-amber-800 transition-colors">
                 SANGARSH
                </h3>
                <p className="text-stone-600 mb-6 leading-relaxed">
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
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-stone-800 mb-3 group-hover:text-amber-800 transition-colors">
                 CONCLAVE
                </h3>
                <p className="text-stone-600 mb-6 leading-relaxed">
                Motivational talk show where students and professionals come together to share ideas.</p>
              </div>
            </div>
          </div>

          {/* Event 4 */}
          <div className="slide-up scale-in group">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={pp}
                  alt="CONCLAVE 2"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-stone-800 mb-3 group-hover:text-amber-800 transition-colors">
                  PATTANATHIL PATTIKAADU
                </h3>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Event that recreates traditional village games.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Events;
