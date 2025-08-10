import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ArrowLeft, Calendar, MapPin, Users, Heart, Stethoscope, Activity, Award } from 'lucide-react';

const HealthCampDetail = () => {
  const navigate = useNavigate();
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Page entrance animation
      gsap.fromTo('.page-enter', 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" }
      );

      // Stats counter animation
      gsap.fromTo('.stat-number', 
        { textContent: 0 },
        { 
          textContent: (i, target) => target.getAttribute('data-value'),
          duration: 2,
          ease: "power2.out",
          snap: { textContent: 1 },
          delay: 0.5
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: Users, label: "People Served", value: "500+", color: "text-blue-600" },
    { icon: Stethoscope, label: "Medical Checkups", value: "350+", color: "text-green-600" },
    { icon: Heart, label: "Health Screenings", value: "200+", color: "text-red-600" },
    { icon: Award, label: "Volunteer Hours", value: "150+", color: "text-amber-600" }
  ];

  const activities = [
    {
      title: "General Health Checkups",
      description: "Comprehensive health assessments including blood pressure, weight, and basic vitals monitoring for all age groups.",
      image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Eye Care Services",
      description: "Free eye examinations and vision testing with distribution of reading glasses for elderly participants.",
      image: "https://images.pexels.com/photos/5752242/pexels-photo-5752242.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Dental Care",
      description: "Basic dental checkups, oral health education, and distribution of dental hygiene kits to promote oral health.",
      image: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Health Education",
      description: "Interactive sessions on nutrition, hygiene, and preventive healthcare practices for sustainable health improvement.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <div ref={pageRef} className="min-h-screen bg-stone-50 font-visual-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 page-enter">
        <div className="container mx-auto px-6 py-4">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-3 text-amber-800 hover:text-amber-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-100 to-stone-200">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center page-enter">
            <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6">
              Community Health Camp
            </h1>
            <p className="text-xl text-stone-700 mb-8 leading-relaxed">
              A comprehensive healthcare initiative bringing essential medical services to underserved communities in Chennai
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <Calendar className="w-5 h-5 text-amber-600" />
                <span className="text-stone-800 font-medium">March 15, 2024</span>
              </div>
              <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <MapPin className="w-5 h-5 text-amber-600" />
                <span className="text-stone-800 font-medium">Tambaram Community Center</span>
              </div>
              <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <Users className="w-5 h-5 text-amber-600" />
                <span className="text-stone-800 font-medium">200+ Volunteers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 page-enter">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-stone-50 p-8 rounded-2xl shadow-lg">
                <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  <span className="stat-number" data-value={stat.value.replace('+', '')}>0</span>
                  {stat.value.includes('+') && '+'}
                </div>
                <div className="text-stone-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-b from-stone-50 to-amber-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="page-enter mb-16">
              <h2 className="text-4xl font-bold text-amber-900 mb-8 text-center">Event Overview</h2>
              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
                <p className="text-lg text-stone-700 leading-relaxed mb-6">
                  Our Community Health Camp was a landmark initiative that brought together medical professionals, 
                  volunteers, and community members to address healthcare accessibility in underserved areas of Chennai. 
                  This comprehensive health screening and awareness program was designed to provide essential medical 
                  services to families who might otherwise lack access to quality healthcare.
                </p>
                <p className="text-lg text-stone-700 leading-relaxed">
                  The event featured multiple medical stations staffed by qualified doctors, nurses, and medical students 
                  from various institutions. Beyond immediate healthcare services, we focused on health education and 
                  preventive care to create lasting positive impact in the community.
                </p>
              </div>
            </div>

            <div className="page-enter">
              <h3 className="text-3xl font-bold text-amber-900 mb-12 text-center">Services Provided</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {activities.map((activity, index) => (
                  <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                    <img 
                      src={activity.image} 
                      alt={activity.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-stone-800 mb-3">{activity.title}</h4>
                      <p className="text-stone-600 leading-relaxed">{activity.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-br from-amber-900 to-stone-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center page-enter">
            <h2 className="text-4xl font-bold mb-8">Community Impact</h2>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <p className="text-xl leading-relaxed mb-6">
                "This health camp was a blessing for our community. Many elderly residents received their first 
                comprehensive health checkup in years, and the health education sessions have helped families 
                adopt better healthcare practices."
              </p>
              <div className="text-amber-200 font-semibold">
                - Community Leader, Tambaram
              </div>
            </div>
            
            <div className="mt-12">
              <button 
                onClick={() => navigate('/')}
                className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-8 py-4 rounded-full font-semibold hover:from-amber-700 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore More Events
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthCampDetail;