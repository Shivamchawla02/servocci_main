import React from 'react';
import { motion } from 'framer-motion';

const WhatAfter12th = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Image Section */}
          <motion.div
            className="flex-shrink-0 w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src="/confusedstudent.png"
              alt="Confused Student"
              className="rounded-2xl shadow-xl w-[300px] md:w-[100%] hover:shadow-2xl transition-shadow duration-300 object-contain"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </motion.div>

          {/* Text Section */}
          <div className="text-center md:text-left md:w-1/2">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              What After 12th?
            </motion.h2>

            <motion.p
              className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              The decisions you make after your 12th grade can shape the rest of your career.
              Let us help you explore your options and guide you to the perfect path forward.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              onClick={() => window.location.href = "/career-paths"}
              className="mt-8 px-8 py-4 bg-gradient-to-r from-[#00c3ff] via-[#ff6a00] to-[#ff0066] text-white text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Explore Career Paths
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatAfter12th;
