import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

const HomeTagline = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/psychometric-tests");
  };

  return (
    <section
      className="relative pt-36 md:pt-48 pb-28 md:pb-40 bg-cover bg-right bg-no-repeat"
      style={{
        backgroundImage: "url('/webbanner.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 z-0" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 flex items-center">
        <motion.div
          className="w-full md:w-1/2 text-white text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Discover your{" "}
            <span className="bg-gradient-to-r from-[#00c3ff] via-[#ff6a00] to-[#ff0066] text-transparent bg-clip-text">
              Dream Career
            </span>
          </motion.h1>

          <motion.ul
            variants={itemVariants}
            className="mt-6 space-y-2 text-base md:text-lg text-gray-100 dark:text-gray-300"
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

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
            aria-label="Start your career journey"
            className="mt-8 px-6 py-3 bg-gradient-to-r from-[#00c3ff] via-[#ff6a00] to-[#ff0066] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-transform duration-300"
          >
            Start Your Journey
          </motion.button>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-sm md:text-base text-gray-300 dark:text-gray-400 italic"
          >
            Helping students across{" "}
            <span className="font-semibold text-white">India</span> discover
            their true potential.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeTagline;
