import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Brain, Star, ShieldCheck } from "lucide-react";

const PsychometricIntro = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const playPromise = videoRef.current?.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <section className="relative h-[90vh] overflow-hidden text-white">
      {/* Background video
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/psychometric-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* Foreground content */}
      <div className="relative z-20 container mx-auto px-6 py-24 text-center flex flex-col justify-center items-center h-full">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold md:text-5xl leading-tight max-w-3xl"
        >
          Discover Your Strengths with Psychometric Testing
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl max-w-2xl"
        >
          Get scientific insights into your personality, interests, and aptitude — and take the guesswork out of your career.
        </motion.p>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left w-full max-w-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <Card
            icon={<Brain className="text-primary h-8 w-8" />}
            title="What Are Psychometric Tests?"
            description="Standardized assessments measuring your thinking style, emotional makeup, and behavioral tendencies."
          />
          <Card
            icon={<Star className="text-primary h-8 w-8" />}
            title="Why Are They Important?"
            description="They help you discover your most suitable career path and make well-informed academic or professional decisions."
          />
          <Card
            icon={<ShieldCheck className="text-primary h-8 w-8" />}
            title="Why Choose Us?"
            description="We provide expert-designed tests, personalized guidance, and in-depth reports trusted by thousands of students and professionals."
          />
        </motion.div>

        <motion.a
          href="#pricing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-10 px-6 py-3 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition"
        >
          Explore Plans
        </motion.a>
      </div>
    </section>
  );
};

export default PsychometricIntro;

const Card = ({ icon, title, description }) => (
  <motion.div
    className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white shadow-lg"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-sm leading-relaxed">{description}</p>
  </motion.div>
);
