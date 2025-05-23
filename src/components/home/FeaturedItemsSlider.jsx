import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const featuredItems = [
  {
    title: "Top Colleges for Engineering",
    description: "Explore the best colleges with high placement and industry exposure.",
    cta: "Explore Colleges",
    link: "#explore-colleges",
  },
  {
    title: "Free Career Counselling Session",
    description: "Book a free 1:1 call with our expert counsellors today.",
    cta: "Book Now",
    link: "#book-session",
  },
  {
    title: "Online Skill Training Offers",
    description: "Get certified in trending skills from top instructors.",
    cta: "Start Learning",
    link: "#skill-training",
  },
  {
    title: "Mock Test Series 2025",
    description: "Prepare smartly for upcoming entrance exams.",
    cta: "Take Test",
    link: "#mock-tests",
  },
];

const FeaturedItemsSlider = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % featuredItems.length);
    }, 6000);
  };

  const handleNext = () => {
    clearInterval(intervalRef.current);
    setIndex((prev) => (prev + 1) % featuredItems.length);
    startAutoSlide();
  };

  const handlePrev = () => {
    clearInterval(intervalRef.current);
    setIndex((prev) => (prev - 1 + featuredItems.length) % featuredItems.length);
    startAutoSlide();
  };

  const currentItem = featuredItems[index];

  const bgControls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      while (true) {
        await bgControls.start({ backgroundPosition: "100% 50%", transition: { duration: 10, ease: "easeInOut" } });
        await bgControls.start({ backgroundPosition: "0% 50%", transition: { duration: 10, ease: "easeInOut" } });
      }
    };
    animate();
  }, [bgControls]);

  return (
    <section className="relative w-full py-24 overflow-hidden">
      {/* Animated Background */}
      <motion.div
        animate={bgControls}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.7 }}
            className="px-6 py-14 bg-black bg-opacity-30 backdrop-blur-md rounded-3xl shadow-xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#f7d088]">
              {currentItem.title}
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              {currentItem.description}
            </p>
            <a
              href={currentItem.link}
              className="inline-block mt-8 px-6 py-3 bg-[#ff4f00] hover:bg-[#e64a00] text-white text-lg font-semibold rounded-full shadow-lg transition duration-300"
            >
              {currentItem.cta}
            </a>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex justify-between items-center mt-10 px-4 md:px-10">
          <button onClick={handlePrev} className="text-white hover:text-[#f7d088] transition">
            <FaArrowLeft size={28} />
          </button>
          <div className="flex space-x-2">
            {featuredItems.map((_, i) => (
              <div
                key={i}
                className={`h-2 w-8 rounded-full transition-all duration-300 ${
                  i === index ? "bg-[#ff4f00]" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
          <button onClick={handleNext} className="text-white hover:text-[#f7d088] transition">
            <FaArrowRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItemsSlider;
