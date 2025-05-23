import React from 'react';
import {
  FaUserGraduate,
  FaSchool,
  FaBrain,
  FaChalkboardTeacher,
  FaClipboardList,
  FaGraduationCap
} from 'react-icons/fa';

const services = [
  {
    title: "Career Counselling",
    description: "Get expert guidance to choose the right career path tailored to your strengths.",
    icon: <FaUserGraduate className="w-6 h-6" />,
  },
  {
    title: "Admission Guidance",
    description: "End-to-end support for securing admission to top colleges and universities.",
    icon: <FaSchool className="w-6 h-6" />,
  },
  {
    title: "Psychometric Tests",
    description: "Assess your aptitude, personality, and interests with scientific evaluations.",
    icon: <FaBrain className="w-6 h-6" />,
  },
  {
    title: "Skill Training Courses",
    description: "Upskill with industry-relevant training and practical learning experiences.",
    icon: <FaChalkboardTeacher className="w-6 h-6" />,
  },
  {
    title: "Test Series",
    description: "Practice with structured test series to boost your exam readiness.",
    icon: <FaClipboardList className="w-6 h-6" />,
  },
  {
    title: "Online Degree",
    description: "Earn accredited online degrees from reputed institutions at your convenience.",
    icon: <FaGraduationCap className="w-6 h-6" />,
  },
];

const OurServices = () => {
  return (
    <section className="bg-[#f9f7d9] py-16">
  <div className="container mx-auto px-6">
    <h1 className="text-3xl md:text-4xl font-bold text-center text-[#001b48] leading-tight">
      Explore <br />
      <span className="text-[#ff4f00]">Our Services</span>
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-14">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl shadow-lg border border-[#001b48] p-8 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <div className="bg-gradient-to-tr from-[#ff4f00] to-[#ff9d3d] text-white p-4 rounded-full mb-4 shadow-md">
            {service.icon}
          </div>
          <h2 className="text-xl font-semibold text-[#001b48] mb-2">
            {service.title}
          </h2>
          <p className="text-gray-700 text-sm">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


  );
};

export default OurServices;
