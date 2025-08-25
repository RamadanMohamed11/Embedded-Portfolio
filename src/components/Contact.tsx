import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8 animate-pulse"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on your next embedded systems project? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-semibold text-white mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center group">
                <div className="bg-blue-600/20 p-3 rounded-lg mr-4 group-hover:bg-blue-600/40 transition-all duration-300 group-hover:scale-110">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">Email</h4>
                  <a href="mailto:ramadan.work010@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                    ramadan.work010@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="bg-green-600/20 p-3 rounded-lg mr-4 group-hover:bg-green-600/40 transition-all duration-300 group-hover:scale-110">
                  <Phone className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white group-hover:text-green-400 transition-colors">WhatsApp</h4>
                  <a href="https://wa.me/2001505599648" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                    01505599648
                  </a>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="bg-purple-600/20 p-3 rounded-lg mr-4 group-hover:bg-purple-600/40 transition-all duration-300 group-hover:scale-110">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white group-hover:text-purple-400 transition-colors">Location</h4>
                  <p className="text-gray-400">Available for remote work worldwide</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-medium text-white mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/ramadan-mohamed-31624a220/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110 hover:rotate-12"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:rotate-12"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-right">
            <form 
              action="mailto:ramadan.work010@gmail.com" 
              method="post" 
              encType="text/plain"
              onSubmit={handleSubmit} 
              className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-blue-400/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-white placeholder-gray-400"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}