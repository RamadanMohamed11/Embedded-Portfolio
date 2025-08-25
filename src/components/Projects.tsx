import React from 'react';
import { ExternalLink, Github, Cpu, Zap, Wifi, Shield, Bot, Lock } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Touchless & 2-wire data/power bus Elevator System",
      description: "Smart elevator system using PIC microcontrollers with touchless buttons, 2-wire data/power bus, 60V retiring cam via boost converter, and desktop simulator. Includes Maintainer Unit for real-time diagnostics, Phase Correction Module for AC safety, and PC-based Sniffer for debugging and system control.",
      technologies: ["PIC Microcontroller", "Boost Converter", "Touchless Interface", "Real-time Diagnostics", "AC Safety", "Desktop Simulator", "System Control"],
      icon: <Zap className="w-8 h-8 text-blue-400" />,
      image: "https://images.pexels.com/photos/159201/circuit-circuit-board-resistor-computer-159201.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "#",
      demo: "#",
      type: "Graduation Project"
    },
    {
      title: "Minesweeper Robot",
      description: "Mine-detecting robot using Raspberry Pi and ROS2 Humble. Features magnetic coil for detection, proximity sensors for surface/underground mine identification, gripper with limit switches for pickup, and siren/flash with speaker alerts for safety notifications.",
      technologies: ["Raspberry Pi", "ROS2 Humble", "Magnetic Coil", "Proximity Sensors", "Gripper Control", "Limit Switches", "Audio/Visual Alerts"],
      icon: <Bot className="w-8 h-8 text-green-400" />,
      image: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "#",
      demo: "#",
      type: "ROS2 Project"
    },
    {
      title: "Sumo Robot",
      description: "Autonomous Sumo robot built for competition using ESP32 with advanced sensor integration. Features 5 ultrasonic sensors and 4 IR sensors for opponent tracking and edge detection, with 2 DC motors providing real-time control for ring-based competition scenarios.",
      technologies: ["ESP32", "Ultrasonic Sensors", "IR Sensors", "DC Motors", "Opponent Tracking", "Edge Detection", "Real-time Control"],
      icon: <Cpu className="w-8 h-8 text-purple-400" />,
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "#",
      demo: "#",
      type: "Competition Project"
    },
    {
      title: "Electronic Lock System",
      description: "Password-protected electronic lock system using ATmega32 microcontroller with keypad input and LCD display. Features voice feedback for user interaction, audio/visual confirmation, password change capability, and secure system unlocking upon correct input verification.",
      technologies: ["ATmega32", "Keypad Interface", "LCD Display", "Voice Feedback", "Audio/Visual Alerts", "Password Management", "Security System"],
      icon: <Lock className="w-8 h-8 text-red-400" />,
      image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "#",
      demo: "#",
      type: "ITI Project"
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
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>
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