import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Instagram } from 'lucide-react';
// import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-stone-100 to-amber-50">
      <div className="container mx-auto px-2 sm:px-4">
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

        <div className="max-w-6xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
              <a
                href="mailto:rotaractclubofcegau@gmail.com"
                className="flex items-center space-x-4 hover:scale-105 transition-transform"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-stone-800">Email</p>
                  <p className="text-stone-600">rotaractclubofcegau@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+919865253655"
                className="flex items-center space-x-4 hover:scale-105 transition-transform"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-stone-800">Phone</p>
                  <p className="text-stone-600">Ramajayam: +91 9865253655</p>
                </div>
              </a>

              <a
                href="tel:+918667762656"
                className="flex items-center space-x-4 hover:scale-105 transition-transform"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-stone-800">Phone</p>
                  <p className="text-stone-600">Sudharshan: +91 8667762656</p>
                </div>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=College+of+Engineering+Guindy,+Anna+University,+Chennai+-+600025,+Tamil+Nadu,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 hover:scale-105 transition-transform"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-stone-800">Address</p>
                  <p className="text-stone-600">
                    College of Engineering Guindy<br />
                    Anna University, Chennai - 600025<br />
                    Tamil Nadu, India
                  </p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/rotaract_club_of_ceg/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 hover:scale-105 transition-transform"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-stone-800">Instagram</p>
                  <p className="text-stone-600">@rotaract_club_of_ceg</p>
                </div>
              </a>
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

export default Contact;
