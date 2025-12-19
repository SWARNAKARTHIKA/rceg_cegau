import React from "react";
import { motion } from "framer-motion";
import { Instagram, Youtube, Mail, Phone, MapPin, ExternalLink, Facebook } from "lucide-react";

const Contact = () => {
  // Using a simplified Google Maps URL that targets the specific location of CEG Anna University
  const mapUrl = "https://maps.google.com/maps?q=College%20of%20Engineering%20Guindy%20Anna%20University&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-stone-100 to-amber-50 text-stone-900">
      <div className="max-w-7xl mx-auto px-4">
         <motion.div
                  className="text-center mb-16"
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <h2 className="text-5xl font-extrabold text-amber-900 mb-3">
                    CONTACT US
                  </h2>
                  <div className="relative w-32 h-1 mx-auto mb-8 overflow-hidden rounded-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 animate-[move_3s_linear_infinite]" />
                  </div>
                </motion.div>
        {/* Official Status Badge */}
       

        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* 1. Organization Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-amber-900 mb-4 uppercase">Rotaract CEG</h3>
            <p className="text-stone-700 text-sm leading-relaxed">
              The premier student-led service organization of the <strong>College of Engineering, Guindy</strong>. 
              Chartered under Rotary International, we lead service projects at <strong>Anna University</strong>.
            </p>
          </motion.div>

          {/* 2. Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-amber-900 mb-4 border-b border-amber-200 w-fit">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/" className="text-stone-700 hover:text-amber-900 flex items-center gap-2 transition"><ExternalLink size={14}/> Home</a></li>
              <li><a href="#about" className="text-stone-700 hover:text-amber-900 flex items-center gap-2 transition"><ExternalLink size={14}/> About Us</a></li>
              <li><a href="#events" className="text-stone-700 hover:text-amber-900 flex items-center gap-2 transition"><ExternalLink size={14}/> Events</a></li>
              <li><a href="#contact" className="text-stone-700 hover:text-amber-900 flex items-center gap-2 transition"><ExternalLink size={14}/> Contact</a></li>
            </ul>
          </motion.div>

          {/* 3. Official Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-amber-900 mb-4 border-b border-amber-200 w-fit">Contact</h4>
            <ul className="space-y-4 text-sm text-stone-700">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-amber-700 mt-1 shrink-0" />
                <a href="mailto:rotaractclubofcegau@gmail.com" className="hover:text-amber-900 break-all">
                  rotaractclubofcegau@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-amber-700 mt-1 shrink-0" />
                <div>
                  <a href="tel:+919865253655" className="block hover:text-amber-900">Ramajayam: +91 98652 53655</a>
                  <a href="tel:+918667762656" className="block hover:text-amber-900 mt-1">Sudharshan: +91 86677 62656</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-amber-700 mt-1 shrink-0" />
                <span>
                  <strong>CEG Campus</strong><br />
                  Anna University, Chennai - 600025
                </span>
              </li>
            </ul>
          </motion.div>

          {/* 4. Social & Connect */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold text-amber-900 mb-4 border-b border-amber-200 w-fit">Connect</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/rotaract_club_of_ceg" 
                target="_blank" 
                rel="noreferrer"
                className="w-11 h-11 flex items-center justify-center bg-amber-600/10 rounded-xl hover:bg-amber-600/20 text-amber-900 transition-all"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/rotaractceg/"
                target="_blank"
                rel="noreferrer"
                aria-label="Rotaract CEG Facebook"
                className="w-11 h-11 flex items-center justify-center bg-amber-600/10 rounded-xl hover:bg-amber-600/20 text-amber-900 transition-all"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://www.youtube.com/@RotaractCEG" 
                target="_blank" 
                rel="noreferrer"
                className="w-11 h-11 flex items-center justify-center bg-amber-600/10 rounded-xl hover:bg-amber-600/20 text-amber-900 transition-all"
              >
                <Youtube size={24} />
              </a>
            </div>
            <p className="text-[10px] text-stone-500 mt-4 uppercase tracking-tighter">Follow for updates: @rotaract_club_of_ceg</p>
          </motion.div>
        </div>

        {/* Google Maps Section - Final Bulletproof Embed */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="rounded-2xl overflow-hidden shadow-xl h-80 md:h-96 w-full border border-stone-200 relative">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CEG Map Location"
            ></iframe>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="border-t border-stone-300 pt-8 text-center text-stone-600 text-sm">
          <p>© 2025 Rotaract Club of CEG. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;