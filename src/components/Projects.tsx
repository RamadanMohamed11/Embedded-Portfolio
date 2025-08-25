import React from 'react';
import { ExternalLink, Github, Cpu, Zap, Wifi, Gauge, Shield, Radio } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Smart Home Automation System",
      description: "Comprehensive IoT-based home automation system using ESP32 microcontrollers with real-time monitoring, mobile app control, and voice command integration. Features include lighting control, security monitoring, and energy management.",
      technologies: ["ESP32", "C++", "WiFi", "MQTT", "Mobile App", "Voice Control", "Sensors"],
      icon: <Wifi className="w-8 h-8 text-blue-400" />,
      image: "https://images.pexels.com/photos/159201/circuit-circuit-board-resistor-computer-159201.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "#",
      demo: "#"
    },
    {
      title: "Industrial Motor Control System",
      description: "Advanced motor control system with PID algorithms, speed regulation, and safety monitoring. Implemented using STM32 microcontroller with CAN bus communication for industrial applications.",
      technologies: ["STM32", "C", "PID Control", "PWM", "CAN Bus", "Industrial Protocols", "Safety Systems"],
      icon: <Gauge className="w-8 h-8 text-green-400" />,
      image: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "#",
      demo: "#"
    },
    {
      title: "Wireless Sensor Network",
      description: "Multi-node wireless sensor network for environmental monitoring with mesh topology, low-power design, and cloud integration. Deployed for agricultural and industrial monitoring applications.",
      technologies: ["LoRa", "Mesh Network", "Low Power Design", "Cloud Integration", "Data Analytics"],
      icon: <Radio className="w-8 h-8 text-purple-400" />,
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "#",
      demo: "#"
    },
    {
      title: "Security Access Control System",
      description: "RFID-based access control system with biometric authentication, real-time logging, and remote monitoring capabilities. Features encrypted communication and tamper detection.",
      technologies: ["RFID", "Biometric", "Encryption", "Real-time Logging", "Security Protocols"],
      icon: <Shield className="w-8 h-8 text-red-400" />,
      image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "#",
      demo: "#"
    },
    {
      title: "Power Management PCB Design",
      description: "Multi-rail power management system with efficient DC-DC converters, battery charging circuits, and intelligent power monitoring. Optimized for renewable energy applications.",
      technologies: ["Altium Designer", "Power Electronics", "Battery Management", "DC-DC Converters", "Renewable Energy"],
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "#",
      demo: "#"
    },
    {
      title: "Real-Time Data Acquisition",
      description: "High-speed multi-channel data acquisition system with real-time processing, USB communication, and advanced signal conditioning for research and industrial applications.",
      technologies: ["ARM Cortex-M", "High-Speed ADC", "Real-time Processing", "USB", "Signal Conditioning"],
      icon: <Cpu className="w-8 h-8 text-cyan-400" />,
      image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8 animate-pulse"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing innovative embedded systems and electrical engineering solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-black/50 rounded-xl border border-gray-800 overflow-hidden hover:border-blue-400/50 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm p-2 rounded-lg group-hover:animate-pulse">
                  {project.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-800 text-blue-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <Github size={18} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-all duration-300 hover:scale-110"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm font-medium">Details</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}