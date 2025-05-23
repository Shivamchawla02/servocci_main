import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15,
    },
  },
};

const HomeTagline = () => {
  const handleClick = () => {
    window.location.href = "/psychometric-tests";
  };

  return (
    <section
  className="relative text-center pt-36 md:pt-48 pb-28 md:pb-40 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/confusion.jpg')"
  }}
>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      {/* Animated Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
  variants={itemVariants}
  className="text-4xl md:text-5xl font-bold leading-tight"
>
  Confused about your career? <br />
  <span className="bg-gradient-to-r from-[#00c3ff] via-[#ff6a00] to-[#ff0066] text-transparent bg-clip-text">
    We have the answer.
  </span>
</motion.h1>


       <motion.ul
  variants={itemVariants}
  className="mt-6 space-y-2 text-base md:text-lg text-left text-gray-100 max-w-xl mx-auto"
>
  <li className="flex items-start gap-2">
    <FaCheckCircle className="text-green-400 mt-1" />
    Personalized career roadmap based on your strengths
  </li>
  <li className="flex items-start gap-2">
    <FaCheckCircle className="text-green-400 mt-1" />
    1-on-1 sessions with certified career counsellors
  </li>
  <li className="flex items-start gap-2">
    <FaCheckCircle className="text-green-400 mt-1" />
    Scientifically designed psychometric assessments  
  </li>
</motion.ul>
{/* //remove hyperlink */}
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
          className="mt-8 px-6 py-3 bg-gradient-to-r from-[#00c3ff] via-[#ff6a00] to-[#ff0066] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-transform duration-300"
        >
          Start Your Journey
        </motion.button>

        <motion.p
          variants={itemVariants}
          className="mt-4 text-sm md:text-base text-gray-300 italic"
        >
          Helping students across <span className="font-semibold text-white">India</span> discover their true potential.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HomeTagline;
