import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text">
            About Me
          </h2>
          
          <div className="space-y-6 text-gray-300">
            <p>
              I'm a Computer Science and Engineering student specializing in Data Science at VIT University. 
              I'm passionate about technology and developing innovative solutions to complex problems.
            </p>
            
            <p>
              My goal is to build applications that are not only functional but also user-friendly and 
              visually appealing. I strive to create solutions that make a positive impact on people's lives.
            </p>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-4">Languages</h3>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full text-black font-medium">
                  English
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full text-black font-medium">
                  Telugu
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full text-black font-medium">
                  Hindi
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;