import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Free Counseling and Guidance",
    text: "We offer free counseling and guidance to students, showcasing our dedication to their well-being and success. Our unbiased support helps students make informed decisions about their education and careers.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Comprehensive Educational Services",
    text: "From educational consultancy and placement support to skill development programs, we provide a one-stop solution for students.",
    image: "https://amsindia.co.in/wp-content/uploads/2024/10/ce6cff14d5-750x420.jpg",
  },
  {
    title: "Global Educational Opportunities",
    text: "Through our strong partnerships with both international and domestic universities, we offer students access to diverse academic paths and global exposure.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Inclusive Career Opportunities",
    text: "Whether you're a 10th/12th pass student, a diploma holder, or a graduate, we help connect you with job opportunities that match your level.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Tailored Skill Development",
    text: "Every individual is different. That's why we offer personalized skill development plans designed to strengthen your core capabilities.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Our Expert Team",
    text: "Our team comprises seasoned experts from educational and placement backgrounds, guiding you with genuine insights and proven strategies.",
    image: "https://images.unsplash.com/photo-1603415526960-f8f0bfb9f65c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "A Holistic Approach",
    text: "We nurture soft skills, confidence, and personal growth, ensuring you're not only career-ready but also life-ready.",
    image: "https://images.unsplash.com/photo-1560264418-c4445382edbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Client Success Stories",
    text: "Our real success stories feature students and professionals who have transformed their lives through our services — and you could be next!",
    image: "https://images.unsplash.com/photo-1601933470928-c110261bbee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Long-Term Support",
    text: "We don't walk away once a goal is reached. Our team offers continuous support to help you thrive in the long run.",
    image: "https://images.unsplash.com/photo-1601233748529-8c5f3f71a8e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Ethical & Transparent Guidance",
    text: "We believe in building trust through transparent and ethical practices. You'll receive honest advice and a clear path forward.",
    image: "https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];


const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800 px-4 py-12 max-w-7xl mx-auto">
      <motion.h1
        className="text-4xl font-bold mb-12 text-center text-[#001b48]"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Us
      </motion.h1>

      {sections.map((section, index) => (
        <motion.div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          } items-center gap-8 mb-16`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={section.image}
            alt={section.title}
            className="w-full md:w-1/2 h-64 object-cover rounded-2xl shadow-lg"
          />
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-[#ff4f00] mb-3">
              {section.title}
            </h2>
            <p className="text-lg leading-relaxed">{section.text}</p>
          </div>
        </motion.div>
      ))}

      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-lg font-semibold text-[#001b48]">
          Join us at <strong>Servocci Counsellors</strong> — where your journey to success truly begins.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutUs;
