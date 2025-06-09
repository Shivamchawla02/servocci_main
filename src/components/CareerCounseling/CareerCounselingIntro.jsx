import React from 'react';
import { motion } from 'framer-motion';

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const textVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const CareerCounselingIntro = () => {
  return (
    <section className="bg-[#f9f7d9] dark:bg-[#001b48] text-[#001b48] dark:text-white py-16 px-6 md:px-20 transition-colors duration-300">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT TEXT SECTION */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-5 leading-snug text-[#ff4f00] dark:text-[#ff9d3d]">
            Personalized Career Counselling for Students & Professionals
          </h2>
          <p className="mb-4 text-lg text-[#2c6975] dark:text-[#f9e7a6]">
            Whether you're a school student, college graduate, or a working professional — discover your best-fit
            career paths with the help of our expert counsellors.
          </p>
          <p className="mb-6 text-[#430000] dark:text-[#f9f7d9]">
            Build confidence and clarity with guidance tailored to your strengths, interests, and goals.
          </p>
          <button className="bg-[#ff4f00] hover:bg-[#430000] text-white transition px-6 py-3 rounded-md font-semibold shadow-md">
            Talk With Our Experts
          </button>
        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.img
            variants={imageVariants}
            src="/schoolstudent.jpg"           // Note the leading slash for public folder
            alt="School Student"
            className="rounded-lg shadow-lg object-cover h-48 w-full"
            />
          <motion.img
            variants={imageVariants}
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=500&q=80"
            alt="Working Professional"
            className="rounded-lg shadow-lg object-cover h-48 w-full"
          />
          <motion.img
            variants={imageVariants}
            src="/group.jpg"
            alt="Group Discussion"
            className="rounded-lg shadow-lg object-cover h-48 w-full"
          />
          <motion.img
            variants={imageVariants}
            src="/mentorship.jpg"
            alt="Mentorship Session"
            className="rounded-lg shadow-lg object-cover h-48 w-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CareerCounselingIntro;
