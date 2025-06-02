import React from "react";
import { motion } from "framer-motion";
import { Brain, Star, ShieldCheck } from "lucide-react";

const PsychometricIntro = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-300 dark:from-[#1e293b] dark:to-[#0f172a]">
      <div className="absolute inset-0 bg-black bg-opacity-10 dark:bg-opacity-60 z-10" />
      <div className="relative z-20 container mx-auto px-6 py-16 md:py-24 text-center flex flex-col justify-center items-center min-h-[90vh]">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl tracking-wide text-gray-900 dark:text-white"
        >
          Discover Your True Potential
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl max-w-2xl tracking-wide text-gray-700 dark:text-gray-300"
        >
          Quick, scientific insights into your personality and skills — plan your future with confidence.
        </motion.p>

        <motion.div
          className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 text-left w-full max-w-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.25 } },
          }}
        >
          <Card
            icon={<Brain className="text-orange-500 dark:text-orange-400 h-9 w-9" />}
            title="What Are Psychometric Tests?"
            description="Fast tests that reveal how your mind works and what makes you unique."
          />
          <Card
            icon={<Star className="text-orange-500 dark:text-orange-400 h-9 w-9" />}
            title="Why They Matter"
            description="Find the career and studies that truly fit your strengths and interests."
          />
          <Card
            icon={<ShieldCheck className="text-orange-400 dark:text-orange-300 h-9 w-9" />}
            title="Why Servocci?"
            description="Expert tests + personalized reports + ongoing career support — made just for you."
          />
        </motion.div>

        {/* Explanatory text below cards */}
        <motion.div
          className="mt-10 max-w-4xl text-center text-lg sm:text-xl tracking-wide leading-relaxed text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          <p>
            Join thousands of students who have unlocked their potential with Servocci. Our trusted, science-backed tests and expert guidance help you choose the path that’s right for YOU.
          </p>
        </motion.div>

        <motion.a
          href="#pricing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-10 sm:mt-12 px-8 py-3 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-shadow shadow-md hover:shadow-lg"
        >
          Explore Plans
        </motion.a>
      </div>
    </section>
  );
};

export default PsychometricIntro;

const Card = ({ icon, title, description }) => (
  <motion.div
    className="bg-white dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-40 backdrop-blur-md rounded-2xl p-7 text-gray-900 dark:text-white shadow-xl hover:shadow-2xl transition-shadow cursor-default"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    <div className="mb-5">{icon}</div>
    <h3 className="text-2xl font-semibold mb-4 tracking-wide">{title}</h3>
    <div className="text-base leading-relaxed text-gray-800 dark:text-gray-300">{description}</div>
  </motion.div>
);
