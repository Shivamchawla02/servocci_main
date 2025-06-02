import React from "react";
import {
  FaUserGraduate,
  FaSchool,
  FaBrain,
  FaChalkboardTeacher,
  FaClipboardList,
  FaGraduationCap,
} from "react-icons/fa";

const services = [
  {
    title: "Career Counselling",
    description:
      "Get expert guidance to choose the right career path tailored to your strengths.",
    icon: <FaUserGraduate className="text-2xl" />,
  },
  {
    title: "Admission Guidance",
    description:
      "End-to-end support for securing admission to top colleges and universities.",
    icon: <FaSchool className="text-2xl" />,
  },
  {
    title: "Psychometric Tests",
    description:
      "Assess your aptitude, personality, and interests with scientific evaluations.",
    icon: <FaBrain className="text-2xl" />,
  },
  {
    title: "Skill Training Courses",
    description:
      "Upskill with industry-relevant training and practical learning experiences.",
    icon: <FaChalkboardTeacher className="text-2xl" />,
  },
  {
    title: "Test Series",
    description: "Practice with structured test series to boost your exam readiness.",
    icon: <FaClipboardList className="text-2xl" />,
  },
  {
    title: "Online Degree",
    description:
      "Earn accredited online degrees from reputed institutions at your convenience.",
    icon: <FaGraduationCap className="text-2xl" />,
  },
];

const OurServices = () => {
  return (
    <section className="bg-[#f9f7d9] dark:bg-[#1a1a2e] py-16">
      <div className="container max-w-7xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#001b48] dark:text-[#f9f7d9] leading-tight">
          Explore <br />
          <span className="text-[#ff4f00]">Our Services</span>
        </h1>

        <div role="list" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-14">
          {services.map((service, index) => (
            <article
              role="listitem"
              key={index}
              className="bg-white dark:bg-[#16213e] rounded-3xl shadow-lg border border-[#001b48] p-8 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="bg-gradient-to-tr from-[#ff4f00] to-[#ff9d3d] text-white p-4 rounded-full mb-4 shadow-md">
                {service.icon}
              </div>
              <h2 className="text-xl font-semibold text-[#001b48] dark:text-[#f9f7d9] mb-2">
                {service.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
