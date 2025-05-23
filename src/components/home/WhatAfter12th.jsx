import React from 'react';
import { motion } from 'framer-motion';

const WhatAfter12th = () => {
  return (
    <section className="text-center py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold leading-tight text-gray-800"
        >
          What After 12th?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-4 text-lg md:text-xl text-gray-700"
        >
          The decisions you make after your 12th grade can shape the rest of your career.
          Let us help you explore your options and guide you to the perfect path forward.
        </motion.p>

        {/* Centered image with animation */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.img
            src="/confusedstudent.png"
            alt="What After 12th"
            className="rounded-xl shadow-xl w-[300px] md:w-[500px] hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
          />
        </motion.div>

        <motion.button
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          onClick={() => window.location.href = "/career-paths"}
          className="mt-10 px-8 py-4 bg-gradient-to-r from-[#00c3ff] via-[#ff6a00] to-[#ff0066] text-white text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Explore Career Paths
        </motion.button>
      </div>
    </section>
  );
};

export default WhatAfter12th;
