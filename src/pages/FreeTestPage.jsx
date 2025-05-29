import React from "react";
import { motion } from "framer-motion";

const FreeTestPage = () => {
  return (
    <section className="min-h-screen bg-offWhite dark:bg-dark py-10 px-4 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full bg-light dark:bg-dark-2 rounded-2xl shadow-lg p-6 md:p-10"
      >
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/LogoWhite.jpg"
            alt="Logo"
            className="h-16 md:h-20 object-contain"
          />
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-dark dark:text-white mb-6 text-center">
          Welcome to the Free Psychometric Test
        </h1>

        {/* Instructions */}
        <div className="text-base text-dark dark:text-dark-6 leading-relaxed space-y-4">
          <p>
            This assessment consists of <strong>80 questions</strong>. But in true sense, this is not a test – there are no right or wrong answers.
          </p>
          <p>
            You’ll rank each statement from 1 to 4 based on your agreement:
            <br />
            <strong>1</strong>: Strongly Disagree<br />
            <strong>2</strong>: Slightly Disagree<br />
            <strong>3</strong>: Slightly Agree<br />
            <strong>4</strong>: Strongly Agree
          </p>
          <p>
            <strong>There is no time limit</strong>. Make your choice carefully and proceed – you <strong>cannot go back</strong> to change your answers.
          </p>
          <p>
            This test is for individuals aged <strong>8 years and above</strong>. Read each question properly and respond based on your current mindset and situation.
          </p>
          <p>
            Feel free to take help if you don’t understand any question.
          </p>
        </div>

        {/* Begin Button */}
        <div className="mt-10 text-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf8KNTYpaLejza5GEWxMQZDFePdLlc5wfN9w4R3ICZjgDi1XQ/viewform?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary/90 text-white text-lg font-semibold px-6 py-3 rounded-lg transition duration-300"
          >
            Begin Test
          </a>
        </div>

        {/* Note */}
        <div className="mt-8 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-100 p-4 rounded-lg text-sm">
          <strong>Note:</strong> Your test result will be sent to the <strong>email address</strong> you provide in the form. Please make sure it is correct before submitting.
        </div>
      </motion.div>
    </section>
  );
};

export default FreeTestPage;
