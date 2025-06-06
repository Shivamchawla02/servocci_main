import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  User,
  ListChecks,
  CheckCircle,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";

const PsychometricFAQ = () => {
  const faqs = [
    {
      q: "What exactly is a psychometric test?",
      a: "It’s a scientific assessment that measures your cognitive abilities, personality traits and work-style preferences using standardised questions.",
      icon: Brain,
    },
    {
      q: "Who should take one?",
      a: "Students (Grade 9-12), college goers, career switchers—anyone who wants crystal-clear insight into their strengths and ideal career fit.",
      icon: User,
    },
    {
      q: "What does it measure?",
      a: "A blend of reasoning ability, personality dimensions, interests and core skills—giving a 360° snapshot of your unique profile.",
      icon: ListChecks,
    },
    {
      q: "How will this test help me?",
      a: "You’ll receive a personalised, easy-to-read report plus tailored career and course recommendations, so you can make decisions with confidence.",
      icon: CheckCircle,
    },
    {
      q: "Is it accurate and secure?",
      a: "Absolutely. We use globally validated tools and all data is encrypted—your results are shared only with you and your counsellor.",
      icon: ShieldCheck,
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      className="relative py-20 bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-500"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center mb-10 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Find Answers to Common Questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map(({ q, a, icon: Icon }, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={q}
                layout
                initial={{ borderRadius: 16 }}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-300"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 text-lg sm:text-xl font-medium text-gray-900 dark:text-white">
                    <Icon className="h-6 w-6 shrink-0 text-orange-500 dark:text-orange-400" />
                    {q}
                  </div>
                  <ChevronDown
                    className={`h-6 w-6 transform transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    } text-gray-700 dark:text-gray-300`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="px-6 pb-6 text-gray-700 dark:text-gray-300 overflow-hidden text-base leading-relaxed"
                    >
                      {a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PsychometricFAQ;
