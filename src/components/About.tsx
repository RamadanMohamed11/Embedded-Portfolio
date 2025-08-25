import React from 'react';
import { Cpu, Zap, Code, Wrench, Award, Users } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Cpu className="w-8 h-8 text-blue-400" />,
      title: "Embedded Systems",
      description: "Expert in microcontroller programming, real-time systems, and embedded software development"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Electrical Design",
      description: "Proficient in circuit design, PCB layout, power systems, and electrical troubleshooting"
    },
    {
      icon: <Code className="w-8 h-8 text-green-400" />,
      title: "Programming",
      description: "Skilled in C/C++, Python, and various embedded development frameworks"
    },
    {
      icon: <Wrench className="w-8 h-8 text-purple-400" />,
      title: "Problem Solving",
      description: "Strong analytical skills with experience in debugging complex hardware-software interactions"
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-6 h-6 text-yellow-400" />,
      title: "IEEE Student Member",
      description: "Active participation in professional development"
    },
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: "Community Volunteer",
      description: "Contributing to educational and technical initiatives"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8 animate-pulse"></div>
        </div>

        {/* Personal Image and Education */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="relative inline-block mb-8">
            <img
              src="https://res.cloudinary.com/dhjyfpw6f/image/upload/v1756157492/2_eolxkn.png"
              alt="Ramadan Mohamed"
              className="w-80 h-80 rounded-full object-cover border-4 border-blue-400 shadow-2xl hover:scale-105 transition-all duration-300 mx-auto"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600/20 to-transparent"></div>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-400/50 transition-all duration-300 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-2">Education & Background</h3>
            <div className="flex items-center justify-center gap-3 mb-2">
              <Award className="w-6 h-6 text-blue-400" />
              <h4 className="text-xl text-white font-medium">Bachelor of Computer and Control Engineering</h4>
            </div>
            <p className="text-gray-300 text-lg">Assiut University, Egypt (October 2020 - July 2025)</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Bridging Hardware and Software
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I graduated from the Faculty of Engineering, Assiut University, specializing in Computer and Control
              Engineering. My academic background equipped me with a strong foundation in C, C++, Electronics, and
              Embedded Systems, along with hands-on experience in Arduino, Raspberry Pi, microcontrollers, and PCB
              design.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I have worked on various projects that enhanced my practical skills in hardware design, programming,
              and system integration. My expertise spans across multiple microcontroller platforms including
              Arduino, ESP, AVR, PIC, STM32, and Raspberry Pi.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I am passionate about embedded systems engineering and committed to applying my
              expertise to develop innovative, reliable, and efficient solutions that address real-world challenges.
            </p>
          </div>

          <div className="grid gap-6 animate-fade-in-right">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-gray-700 hover:border-blue-400/50 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-4 group-hover:animate-pulse">{highlight.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {highlight.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}