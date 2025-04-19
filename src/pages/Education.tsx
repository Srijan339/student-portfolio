import React from 'react';
import { motion } from 'framer-motion';

function Education() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering with Data Science",
      institution: "VIT Vellore",
      location: "Vellore, India",
      year: "2023 - 2027 (Expected)",
      description: "Currently pursuing B.Tech in Computer Science with specialization in Data Science."
    },
    {
      degree: "Intermediate",
      institution: "Narayana Junior College",
      location: "Madhapur, India",
      year: "2021 - 2023",
      description: "Completed intermediate education with focus on Mathematics, Physics, and Chemistry."
    },
    {
      degree: "School Education",
      institution: "DAV Public School",
      location: "Telangana, India",
      year: "2010 - 2021",
      description: "Completed primary and secondary education with excellent academic performance."
    }
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text">
          Education
        </h1>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-orange-500">{edu.degree}</h3>
              <p className="text-pink-400 mt-1">{edu.institution}</p>
              <p className="text-gray-400 mt-1">{edu.location}</p>
              <p className="text-gray-500 mt-1">{edu.year}</p>
              <p className="text-gray-300 mt-3">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Education;