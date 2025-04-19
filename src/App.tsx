import React from 'react';
import { motion } from 'framer-motion';
import { Toaster } from 'sonner';
import { Github, Linkedin, Mail, Instagram, Code2, Layout, Database, Brain } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white animated-bg">
      <Toaster position="top-right" />
      {/* Header */}
      <header className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text hover:scale-105 transition-transform cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              SRIJAN
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex gap-4"
            >
              <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
              <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
              <button onClick={() => scrollToSection('education')} className="nav-link">Education</button>
              <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
              <button onClick={() => scrollToSection('portfolio')} className="nav-link">Portfolio</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
            </motion.div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-400">
        <p>© 2025 K Srijan. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;