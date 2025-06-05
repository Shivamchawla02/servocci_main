import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserGraduate,
  FaUniversity,
  FaBriefcase,
} from "react-icons/fa";
import { motion } from "framer-motion";

const options = [
  {
    label: "Student",
    icon: <FaUserGraduate size={40} />,
    route: "/register/student",
  },
  {
    label: "Institution",
    icon: <FaUniversity size={40} />,
    route: "/register/institution",
  },
  {
    label: "Career Professional",
    icon: <FaBriefcase size={40} />,
    route: "/register/professional",
  },
];

const GetStarted = () => {
  const nav = useNavigate();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-light dark:bg-gray-900 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-primary dark:text-light">
        I am a…
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
        {options.map(({ label, icon, route }) => (
          <motion.button
            key={label}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => nav(route)}
            className="flex flex-col items-center justify-center p-8 rounded-xl shadow-md bg-white dark:bg-gray-800 hover:bg-accent hover:text-light transition-colors"
          >
            <div className="mb-4">{icon}</div>
            <span className="text-lg font-medium">{label}</span>
          </motion.button>
        ))}
      </div>
    </section>
  );
};

export default GetStarted;
