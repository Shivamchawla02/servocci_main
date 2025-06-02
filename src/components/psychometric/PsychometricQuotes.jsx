import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const theories = [
  {
    title: "RIASEC Theory",
    thinker: "John L. Holland",
    sections: {
      "What It Is":
        "The RIASEC Theory categorizes people and work environments into six types: Realistic, Investigative, Artistic, Social, Enterprising, and Conventional. It helps individuals find careers that match their personality.",
      "How It Helps":
        "It guides students and professionals in discovering career paths aligned with their strengths and interests.",
      "Real World Example":
        "A person with high Artistic and Social scores might thrive in careers like counseling through the arts or teaching creative subjects.",
    },
    image: "https://th.bing.com/th/id/OIP.XZek5DgdztXLWGn2h2oBMAHaHa?r=0&rs=1&pid=ImgDetMain",
  },
  {
    title: "Multiple Intelligences Theory",
    thinker: "Howard Gardner",
    sections: {
      "What It Is":
        "This theory suggests that intelligence is not singular but includes Linguistic, Logical, Spatial, Musical, Bodily-Kinesthetic, Interpersonal, Intrapersonal, and Naturalistic intelligences.",
      "How It Helps":
        "It enables more inclusive education systems, helping learners succeed based on their unique strengths.",
      "Real World Example":
        "A student with strong Bodily-Kinesthetic intelligence might do better learning math through physical activities than through traditional classroom instruction.",
    },
    image: "https://66.media.tumblr.com/6377d0e5f13aeeffa9e8cabb6a19cb9f/tumblr_nj7w73Rpl21qfvq9bo1_r1_1280.jpg",
  },
  {
    title: "Time Management Matrix",
    thinker: "Alec Mackenzie",
    sections: {
      "What It Is":
        "Also known as the Time Management Matrix, this theory divides tasks into four quadrants based on urgency and importance, helping prioritize effectively.",
      "How It Helps":
        "It reduces burnout and enhances productivity by distinguishing between what’s truly important and what just feels urgent.",
      "Real World Example":
        "A student learns to prioritize studying for finals (important but not urgent) over responding to constant group chat notifications (urgent but not important).",
    },
    image: "https://th.bing.com/th/id/OIP.VOCWhJQ2M0ll_BXj1RyPewHaFj?r=0&rs=1&pid=ImgDetMain",
  },
];

const PsychologyTheories = () => {
  const [modalImage, setModalImage] = useState(null);

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-sky-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/30 via-white/10 to-transparent dark:from-black/40 dark:via-black/30 dark:to-transparent" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Foundational Theories in Career Psychology
        </motion.h2>

        <div className="flex flex-col gap-16">
          {theories.map((theory, index) => {
            const isImageLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row ${
                  !isImageLeft ? "lg:flex-row-reverse" : ""
                } items-center gap-10 bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-6 md:p-10`}
              >
                <img
                  src={theory.image}
                  alt={theory.title}
                  onClick={() => setModalImage(theory.image)}
                  className="w-full max-w-xs cursor-pointer rounded-2xl shadow-md border-4 border-white dark:border-gray-700 transition-transform hover:scale-105"
                />
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                      {theory.title}
                    </h3>
                    <p className="text-sm italic text-gray-600 dark:text-gray-400 mb-2">
                      — {theory.thinker}
                    </p>
                  </div>

                  {Object.entries(theory.sections).map(([sectionTitle, content]) => (
                    <div key={sectionTitle}>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                        {sectionTitle}
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">{content}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalImage(null)}
          >
            <motion.img
              src={modalImage}
              alt="Expanded view"
              className="max-w-full max-h-full rounded-xl shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PsychologyTheories;
