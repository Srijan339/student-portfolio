import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/20 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text">
              <TypeAnimation
                sequence={[
                  'SRIJAN',
                  2000,
                  'an Aspiring Developer',
                  2000,
                  'an Aspiring Data Scientist',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Computer Science and Engineering Student at VIT University
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-gray-400">
              <Mail size={20} />
              <a href="mailto:srijan4446@gmail.com" className="hover:text-orange-500 transition-colors">
                srijan4446@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span>Hyderabad, Telangana</span>
            </div>
          </div>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/srijan" target="_blank" rel="noopener noreferrer" 
               className="social-icon-link">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/srijan" target="_blank" rel="noopener noreferrer" 
               className="social-icon-link">
              <Linkedin size={24} />
            </a>
            <a href="mailto:srijan4446@gmail.com" 
               className="social-icon-link">
              <Mail size={24} />
            </a>
            <a href="https://instagram.com/srijan__33" target="_blank" rel="noopener noreferrer" 
               className="social-icon-link">
              <Instagram size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;