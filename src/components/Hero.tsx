import React from 'react';
import { ChevronDown, Download, Zap } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-green-500/10 rounded-full blur-2xl animate-bounce delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-glow">
              Ramadan Mohamed
            </h1>
          </div>
          
          <div className="animate-fade-in-up delay-300">
            <h2 className="text-2xl md:text-3xl text-blue-400 font-semibold mb-8 flex items-center justify-center gap-2">
              <Zap className="w-8 h-8 animate-pulse" />
              Embedded System & Electrical Engineer
            </h2>
          </div>
          
          <div className="animate-fade-in-up delay-500">
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Passionate about designing innovative embedded systems and electrical solutions. 
              Specializing in microcontroller programming, circuit design, and IoT applications 
              that bridge the gap between hardware and software.
            </p>
          </div>
          
          <div className="animate-fade-in-up delay-700">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button
                onClick={scrollToAbout}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 animate-pulse-slow"
              >
                Explore My Work
              </button>
              <a
                href="/Ramadan_Mohamed_Electrical & Embedded System Engineer_resume.pdf"
                download
                className="flex items-center gap-2 border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-400/25"
              >
                <Download size={20} className="animate-bounce" />
                Download CV
              </a>
            </div>
          </div>

          <div className="animate-fade-in-up delay-1000">
            <button
              onClick={scrollToAbout}
              className="animate-bounce text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}