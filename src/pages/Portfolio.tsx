import React from 'react';
import { motion } from 'framer-motion';

function Portfolio() {
  const projects = [
    {
      title: "AI-Powered Data Analysis Platform",
      description: "A machine learning platform that analyzes large datasets and provides predictive insights using Python, TensorFlow, and scikit-learn.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=2070",
      technologies: ["Python", "TensorFlow", "scikit-learn", "Flask"],
      link: "https://github.com"
    },
    {
      title: "Smart Healthcare Analytics",
      description: "Healthcare data visualization and analysis system using machine learning to predict patient outcomes.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070",
      technologies: ["Python", "PyTorch", "Pandas", "React"],
      link: "https://github.com"
    },
    {
      title: "Modern E-Learning Platform",
      description: "An interactive learning platform with real-time collaboration features and AI-powered content recommendations.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=2070",
      technologies: ["React", "Node.js", "MongoDB", "WebSocket"],
      link: "https://github.com"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text">
          My Portfolio
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Portfolio