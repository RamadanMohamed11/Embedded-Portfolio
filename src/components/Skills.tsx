import React from 'react';
import { Microwave as Microchip, Wrench, Code2, Database, Wifi, Settings } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: <Microchip className="w-8 h-8 text-blue-400" />,
      title: "Microcontrollers & Processors",
      skills: ["Arduino", "ESP32/ESP8266", "AVR", "PIC", "STM32", "Raspberry Pi", "ARM Cortex-M"]
    },
    {
      icon: <Code2 className="w-8 h-8 text-green-400" />,
      title: "Programming Languages",
      skills: ["C/C++", "Embedded C", "Python"]
    },
    {
      icon: <Wrench className="w-8 h-8 text-orange-400" />,
      title: "Electronics & PCB Design",
      skills: ["PCB Design", "Circuit Design & Debugging", "Electronics","Hardware Testing", "Proteus","LTSpice","Multisim", "Eagle PCB", "EasyEDA"]
    },
    {
      icon: <Wifi className="w-8 h-8 text-cyan-400" />,
      title: "Communication Protocols",
      skills: ["UART", "I2C", "SPI", "CAN", "WiFi"]
    },
    {
      icon: <Settings className="w-8 h-8 text-purple-400" />,
      title: "Systems & Integration",
      skills: ["RTOS", "Sensors & Actuators", "Hardware Testing", "Troubleshooting", "System Integration", "Control Systems"]
    },
    {
      icon: <Database className="w-8 h-8 text-red-400" />,
      title: "Soft Skills",
      skills: ["Problem-solving", "Analytical Thinking", "Collaboration", "Teamwork", "Communication", "Project Management"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8 animate-pulse"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for embedded systems development and electrical engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-blue-400/50 hover:bg-gray-900 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center mb-6 group-hover:animate-pulse">
                {category.icon}
                <h3 className="text-xl font-semibold text-white ml-3 group-hover:text-blue-400 transition-colors">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-default transform hover:scale-110 hover:rotate-1"
                    style={{ animationDelay: `${skillIndex * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}