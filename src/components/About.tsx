import React from 'react';
import { Target, Lightbulb, Handshake } from 'lucide-react';
import pic from '../assets/grp_pic.jpg'; // replace with your image path
const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-stone-100 to-amber-50 overflow-hidden ">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 slide-left">
          <h2 className="text-5xl font-bold text-amber-900 mb-6">About Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-yellow-600 mx-auto mb-8"></div>
        </div>

        {/* Changed Layout: Image Left, Text Right */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl m-5">
          {/* Left: Image */}
          <div className="slide-left">
            <img
              src={pic} // replace with your image path
              alt="Rotaract Club"
              className="rounded-xl shadow-lg object-cover w-full h-full"
            />
          </div>

          {/* Right: Text */}
          <div className="slide-right">
            <h3 className="text-3xl font-semibold text-stone-800 mb-6">Theme : Insipire, Integrate, Innovate</h3>
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
             Rotaract Club of CEG stands as a beacon of service and leadership, driven by a vision to create lasting positive change. We are a dynamic community of young leaders dedicated to making a meaningful impact on society.
</p>
            <p className="text-lg text-stone-700 leading-relaxed mb-8">
            
Guided by the Rotary motto, Service Above Self, our initiatives span impactful community projects, professional growth opportunities, and international fellowship programs that connect us with Rotaractors around the globe.</p>

            {/* Stats */}
           
          </div>
        </div>

        {/* Mission, Vision, Values - stays below */}
       
        </div>

    </section>
  );
};

export default About;
