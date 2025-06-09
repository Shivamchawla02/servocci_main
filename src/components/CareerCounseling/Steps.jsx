import React from 'react';
import { motion } from 'framer-motion';
import { FaClipboardCheck, FaComments, FaChartLine } from 'react-icons/fa';

const steps = [
  {
    title: "Evaluation",
    subtitle: "Career Tests & Reports",
    icon: <FaClipboardCheck className="text-4xl text-[#ff4f00]" />,
    description: "Take scientifically designed assessments that analyze your interests, aptitude, and personality.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Guidance",
    subtitle: "Report Analysis & Counselling",
    icon: <FaComments className="text-4xl text-[#ff4f00]" />,
    description: "Get 1-on-1 expert counselling sessions to decode your report and explore hidden strengths.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Strategizing",
    subtitle: "Career Options & Recommendations",
    icon: <FaChartLine className="text-4xl text-[#ff4f00]" />,
    description: "Receive a step-by-step action plan tailored for your goals, academics, and aspirations.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  }
];

const Steps = () => {
  return (
    <section className="py-16 px-4 bg-[#f9f7d9] dark:bg-[#001b48] transition-colors duration-300">
      <div className="text-center mb-12">
        <h3 className="text-xl font-bold text-[#2c6975] dark:text-[#f7d088] mb-2">HOW IT WORKS?</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-[#430000] dark:text-white">
          3 Steps to Find the Right Career Path for You
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-10">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="w-full md:w-80 p-6 rounded-2xl border border-[#f9e7a6] dark:border-[#2c6975] shadow-md bg-white dark:bg-[#002b5c] text-center transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <div className="mb-4">{step.icon}</div>
            <h4 className="text-lg font-semibold text-[#001b48] dark:text-[#f9e7a6]">{step.title}</h4>
            <p className="text-sm mt-1 mb-2 text-gray-700 dark:text-gray-300 font-medium">{step.subtitle}</p>
            <img src={step.image} alt={step.title} className="rounded-xl w-full h-40 object-cover mb-3" />
            <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-14 text-center">
        <h3 className="text-2xl font-semibold text-[#001b48] dark:text-[#f7d088] mb-4">Why Choose Us?</h3>
        <p className="max-w-3xl mx-auto text-md text-gray-700 dark:text-gray-300">
          Unlike generic counselling platforms, we combine cutting-edge psychometric testing with expert human guidance.
          Whether you're in school, college, or exploring a career change — our process is personalized, proven, and
          built to help you succeed in today's dynamic job landscape.
        </p>
      </div>
    </section>
  );
};

export default Steps;
