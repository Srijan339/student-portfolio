import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Database, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-8 h-8" />,
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML5/CSS3"]
    },
    {
      title: "Backend Development",
      icon: <Database className="w-8 h-8" />,
      skills: ["Node.js", "Python", "PostgreSQL", "RESTful APIs", "GraphQL"]
    },
    {
      title: "Programming Languages",
      icon: <Code2 className="w-8 h-8" />,
      skills: ["JavaScript", "Python", "Java", "C++", "SQL"]
    },
    {
      title: "Machine Learning",
      icon: <Brain className="w-8 h-8" />,
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Computer Vision", "NLP"]
    }
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text">
          Technical Skills
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise and professional capabilities
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700/50 transition-colors"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-gray-700/30 rounded-lg p-3 text-center hover:bg-gray-700/50 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;