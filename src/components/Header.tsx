import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-md z-50 border-b border-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-white animate-pulse">
            Ramadan Mohamed
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110">
              Contact
            </button>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125 hover:rotate-12">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:rotate-12">
              <Linkedin size={20} />
            </a>
            <a href="mailto:ramadan.mohamed@example.com" className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:scale-125 hover:rotate-12">
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2">
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-left text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2">
                Skills
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-left text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2">
                Contact
              </button>
            </nav>
            <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-800">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125">
                <Linkedin size={20} />
              </a>
              <a href="mailto:ramadan.mohamed@example.com" className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:scale-125">
                <Mail size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}