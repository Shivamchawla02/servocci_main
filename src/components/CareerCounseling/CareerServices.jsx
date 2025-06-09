import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Career Direction",
    desc: "Build a successful and fulfilling career.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80", // planning
  },
  {
    title: "Psychometric Assessments",
    desc: "Find careers aligned with your strengths.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80", // writing test
  },
  {
    title: "Expert Career Counselling",
    desc: "Get expert one-on-one guidance.",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=600&q=80", // coaching session
  },
  {
    title: "Passion Certificate",
    desc: "Add value with a certificate of passion.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80", // certificate
  },
  {
    title: "Stream & Course Selection",
    desc: "Choose the right subjects and courses.",
    image: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=600&q=80", // books and studying
  },
  {
    title: "Higher Education Planning",
    desc: "Decide between Indian and global options.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80", // globe & planning
  },
  {
    title: "Resume & Job Readiness",
    desc: "Ace interviews with the right tools.",
    image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=600&q=80", // resume on laptop
  },
  {
    title: "Mid-Career Guidance",
    desc: "Plan a transition to more rewarding roles.",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80", // business discussion
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.05, boxShadow: "0 10px 20px rgba(255, 79, 0, 0.4)" },
};

const CareerServices = () => {
  return (
    <section className="bg-[#f9f7d9] py-16 px-6 md:px-20">
      <h2
        className="text-4xl font-extrabold text-center mb-14"
        style={{ color: "#001b48" }}
      >
        How Do We Guide You to Career Success?
      </h2>
      <motion.div
        className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {services.map((srv, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl p-4 cursor-pointer border-2 border-transparent flex flex-col"
            variants={cardVariants}
            whileHover="hover"
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ borderColor: "#ff9d3d" }}
          >
            <img
              src={srv.image}
              alt={srv.title}
              className="rounded-lg h-40 w-full object-cover mb-4"
              loading="lazy"
            />
            <h4
              className="font-bold text-xl mb-3"
              style={{ color: "#ff4f00" }}
            >
              {srv.title}
            </h4>
            <p className="text-gray-700 flex-grow" style={{ color: "#430000" }}>
              {srv.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CareerServices;
