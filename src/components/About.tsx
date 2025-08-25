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
      description: "Skilled in C/C++, Python, Assembly, and various embedded development frameworks"
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Bridging Hardware and Software
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              As an Embedded System and Electrical Engineer, I specialize in creating innovative solutions 
              that seamlessly integrate hardware and software components. My passion lies in developing 
              efficient, reliable, and scalable embedded systems for various applications.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              With extensive experience in microcontroller programming, circuit design, and system 
              optimization, I bring a comprehensive understanding of both the electrical and software 
              aspects of modern embedded systems.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm constantly exploring new technologies and methodologies to stay at the forefront 
              of embedded systems development, from IoT applications to industrial automation solutions.
            </p>

            {/* Achievements */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-4">Achievements & Involvement</h4>
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                >
                  {achievement.icon}
                  <div>
                    <h5 className="text-white font-medium">{achievement.title}</h5>
                    <p className="text-gray-400 text-sm">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 animate-fade-in-right">
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