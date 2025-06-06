import React from "react";
import { FaCheckCircle, FaUniversity, FaSchool } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

/**  Adjust this if your header gets taller / shorter (px) */
const HEADER_SPACE = 104;   // 40 (top strip) + 64 (nav)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
};

const HomeTagline = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/get-started");

  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
      /* “100 vh minus header” keeps the hero flush with the top of the page */
      style={{
        backgroundImage: "url('/webbanner.png')",
        minHeight: `calc(100vh - ${HEADER_SPACE}px)`,
      }}
    >
      {/* Dark overlay — dialed down to 50 % so the banner is visible */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />

      {/* ----  CONTENT  ---- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center md:items-start gap-12">
        <motion.div
          className="w-full md:w-1/2 text-white"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-extrabold leading-tight mb-4"
          >
            Discover your{" "}
            <span className="bg-gradient-to-r from-[#00c3ff] via-[#ff6a00] to-[#ff0066] text-transparent bg-clip-text">
              Dream&nbsp;Career
            </span>
          </motion.h1>

          {/* animated sub-heading */}
          <motion.h3
            variants={itemVariants}
            className="text-xl md:text-2xl font-semibold text-gray-300 mb-6"
          >
            <Typewriter
              words={[
                "50+ Partner Schools",
                "80+ Partner Universities",
                "Join the Future Leaders",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </motion.h3>

          {/* bullet list */}
          <motion.ul
            variants={itemVariants}
            className="space-y-3 text-base md:text-lg text-gray-100 dark:text-gray-300"
          >
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-green-400" />
              Personalized career roadmap based on your strengths
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-green-400" />
              1-on-1 sessions with certified career counsellors
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-green-400" />
              Scientifically designed psychometric assessments
            </li>
          </motion.ul>

          {/* CTA button */}
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
            aria-label="Start your career journey"
            className="mt-8 px-8 py-3 bg-gradient-to-r from-[#00c3ff] via-[#ff6a00] to-[#ff0066] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-transform duration-300"
          >
            Start Your Journey
          </motion.button>

          {/* partner stats */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap gap-8 text-gray-300"
          >
            <div className="flex items-center gap-2">
              <FaSchool className="text-blue-400 text-2xl" />
              <span className="text-lg font-medium">50+ Schools</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUniversity className="text-yellow-400 text-2xl" />
              <span className="text-lg font-medium">80+ Universities</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeTagline;
