import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const featuredItems = [
  {
    title: "Free Career Counselling Sessions",
    description: "Book a free 1:1 call with our expert counsellors today.",
    cta: "Book Now",
    link: "#free-counselling",
    bgImage:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "MBBS Admissions Abroad",
    description: "Explore top universities overseas for MBBS admissions.",
    cta: "Explore MBBS",
    link: "#mbbs-abroad",
    bgImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Admission Guidance (Domestic/International)",
    description: "Get expert guidance for college admissions at home and abroad.",
    cta: "Get Guidance",
    link: "#admission-guidance",
    // Updated the image URL here (replaced broken URL)
    bgImage:
      "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Online Skill Enhancement Offers",
    description: "Get certified in trending skills from top instructors.",
    cta: "Start Learning",
    link: "#skill-enhancement",
    bgImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Mock Test Papers for School Level Students",
    description: "Prepare smartly with mock tests designed for school students.",
    cta: "Take Tests",
    link: "#mock-tests-school",
    bgImage:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Video Courses for School Students",
    description: "Engaging video courses to boost your school learning.",
    cta: "Watch Now",
    link: "#video-courses",
    bgImage:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
  },
  {
  title: "Entrance Exam / Govt Exam Test Series",
  description: "Practice and ace your entrance and government exams.",
  cta: "Practice Now",
  link: "#govt-exam-tests",
  bgImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",

},


  {
    title: "Psychometric Assessments",
    description: "Understand your strengths and career preferences better.",
    cta: "Take Assessment",
    link: "#psychometric-assessments",
    bgImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
  },
];

const FeaturedItemsSlider = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const bgControls = useAnimation();

  const startAutoSlide = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % featuredItems.length);
    }, 6000);
  }, []);

  const clearAutoSlide = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  useEffect(() => {
    startAutoSlide();
    return () => clearAutoSlide();
  }, [startAutoSlide, clearAutoSlide]);

  const handleNext = useCallback(() => {
    clearAutoSlide();
    setIndex((prev) => (prev + 1) % featuredItems.length);
    startAutoSlide();
  }, [clearAutoSlide, startAutoSlide]);

  const handlePrev = useCallback(() => {
    clearAutoSlide();
    setIndex((prev) => (prev - 1 + featuredItems.length) % featuredItems.length);
    startAutoSlide();
  }, [clearAutoSlide, startAutoSlide]);

  useEffect(() => {
    let isMounted = true;
    const animate = async () => {
      while (isMounted) {
        await bgControls.start({
          backgroundPosition: "100% 50%",
          transition: { duration: 10, ease: "easeInOut" },
        });
        if (!isMounted) break;
        await bgControls.start({
          backgroundPosition: "0% 50%",
          transition: { duration: 10, ease: "easeInOut" },
        });
      }
    };
    animate();

    return () => {
      isMounted = false;
    };
  }, [bgControls]);

  const currentItem = featuredItems[index];

  return (
    <section className="relative w-full py-24 overflow-hidden">
      {/* Animated Background */}
      <motion.div
        animate={bgControls}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url(${currentItem.bgImage})`,
          backgroundSize: "cover",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 dark:bg-black dark:bg-opacity-70 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.7 }}
            className="px-6 py-14 bg-black bg-opacity-30 dark:bg-opacity-40 backdrop-blur-md rounded-3xl shadow-xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#f7d088] dark:text-yellow-400">
              {currentItem.title}
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-200 dark:text-gray-300 max-w-3xl mx-auto">
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
          <button
            onClick={handlePrev}
            className="text-white hover:text-[#f7d088] dark:hover:text-yellow-400 transition"
            aria-label="Previous"
          >
            <FaArrowLeft size={28} />
          </button>
          <div className="flex space-x-2">
            {featuredItems.map((_, i) => (
              <div
                key={i}
                className={`h-2 w-8 rounded-full transition-all duration-300 ${
                  i === index ? "bg-[#ff4f00]" : "bg-gray-500 dark:bg-gray-700"
                }`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="text-white hover:text-[#f7d088] dark:hover:text-yellow-400 transition"
            aria-label="Next"
          >
            <FaArrowRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItemsSlider;
