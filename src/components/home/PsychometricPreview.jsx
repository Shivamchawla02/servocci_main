import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Brain, Star, SearchCheck } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const PsychometricPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-[85vh] flex items-center justify-center text-center overflow-hidden bg-gray-100 dark:bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=2000&q=80"
          alt="Psychometric Background"
          className="absolute inset-0 object-cover w-full h-full opacity-40"
        />
        <div className="absolute inset-0 bg-black/70 dark:bg-black/80 z-10" />
      </div>

      {/* Foreground Content */}
      <motion.div
        className="relative z-20 max-w-5xl px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight drop-shadow-md">
          <Typewriter
            words={[
              "Know Yourself.",
              "Understand Your Strengths.",
              "Shape Your Future.",
            ]}
            loop={0} // 0 means infinite
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Take our scientific psychometric test and unlock your true potential —
          discover who you are and what path suits you best.
        </p>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6 text-white">
          <HighlightCard
            icon={<Brain className="text-orange-400 h-7 w-7" />}
            title="Understand Yourself"
            text="Learn how your mind works best and where you shine."
          />
          <HighlightCard
            icon={<Star className="text-yellow-300 h-7 w-7" />}
            title="Find Your Strengths"
            text="Get clarity on what makes you unique and confident."
          />
          <HighlightCard
            icon={<SearchCheck className="text-green-400 h-7 w-7" />}
            title="Make Smart Choices"
            text="Plan your career with insights from psychological science."
          />
        </div>

        {/* CTA Button */}
        <motion.button
          onClick={() => navigate("/psychometric-tests")}
          className="mt-10 px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition"
          whileHover={{ scale: 1.05 }}
        >
          🚀 Know More & Take the Test
        </motion.button>
      </motion.div>
    </section>
  );
};

export default PsychometricPreview;

const HighlightCard = ({ icon, title, text }) => (
  <motion.div
    className="flex flex-col items-center text-center bg-white/10 dark:bg-white/5 backdrop-blur-md p-5 rounded-xl border border-white/20 shadow-md"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <div className="mb-3">{icon}</div>
    <h3 className="text-lg font-semibold mb-1">{title}</h3>
    <p className="text-sm text-gray-300">{text}</p>
  </motion.div>
);
