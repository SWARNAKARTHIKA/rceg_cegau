import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Priya Sharma",
      position: "President",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300",
      email: "president@rotaractceg.org",
      phone: "+91 9876543210",
      linkedin: "priya-sharma-rotaract"
    },
    {
      id: 2,
      name: "Arjun Kumar",
      position: "Vice President",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300",
      email: "vp@rotaractceg.org",
      phone: "+91 9876543211",
      linkedin: "arjun-kumar-rotaract"
    },
    {
      id: 3,
      name: "Meera Patel",
      position: "Secretary",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300",
      email: "secretary@rotaractceg.org",
      phone: "+91 9876543212",
      linkedin: "meera-patel-rotaract"
    },
    {
      id: 4,
      name: "Rajesh Menon",
      position: "Treasurer",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300",
      email: "treasurer@rotaractceg.org",
      phone: "+91 9876543213",
      linkedin: "rajesh-menon-rotaract"
    },
    {
      id: 5,
      name: "Sneha Reddy",
      position: "Community Service Director",
      image: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=300",
      email: "community@rotaractceg.org",
      phone: "+91 9876543214",
      linkedin: "sneha-reddy-rotaract"
    },
    {
      id: 6,
      name: "Vikram Singh",
      position: "Club Service Director",
      image: "https://images.pexels.com/photos/2625122/pexels-photo-2625122.jpeg?auto=compress&cs=tinysrgb&w=300",
      email: "clubservice@rotaractceg.org",
      phone: "+91 9876543215",
      linkedin: "vikram-singh-rotaract"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-stone-100 to-amber-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-5xl font-bold text-amber-900 mb-6">Our Team</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-yellow-600 mx-auto mb-8"></div>
          <p className="text-xl text-stone-700 max-w-3xl mx-auto">
            Meet the dedicated leaders who drive our mission of service and community impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id} 
              className="slide-up scale-in group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="relative mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-amber-200 group-hover:border-amber-400 transition-colors shadow-lg"
                    />
                    <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-to-t from-amber-600/20 to-transparent group-hover:from-amber-600/40 transition-all"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-stone-800 mb-2 group-hover:text-amber-800 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-amber-700 font-semibold mb-6 text-lg">
                    {member.position}
                  </p>
                  
                  <div className="space-y-3">
                    <a 
                      href={`mailto:${member.email}`}
                      className="flex items-center justify-center gap-3 text-stone-600 hover:text-amber-700 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">{member.email}</span>
                    </a>
                    <a 
                      href={`tel:${member.phone}`}
                      className="flex items-center justify-center gap-3 text-stone-600 hover:text-amber-700 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">{member.phone}</span>
                    </a>
                    <a 
                      href={`https://linkedin.com/in/${member.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 text-stone-600 hover:text-amber-700 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;