import React from "react";
import { motion } from "framer-motion";

const theories = [
  {
    title: "Person-Centered Theory",
    thinker: "Carl Rogers",
    description:
      "Carl Rogers proposed the Person-Centered Theory, emphasizing the importance of self-actualization, empathy, and unconditional positive regard. It focuses on the individual's capacity for personal growth and change.",
    image:
      "https://images.deepai.org/chat-style-image/e0b7429fe6914bed9a888fa49d895564/output.jpg",
  },
  {
    title: "Analytical Psychology",
    thinker: "Carl Jung",
    description:
      "Carl Jung developed Analytical Psychology, which introduced concepts such as the collective unconscious, archetypes, and individuation. It focuses on integrating different parts of the psyche to achieve wholeness.",
    image:
      "https://hemibooks.com/wp-content/uploads/UsersmaxDocumentsPythonbooksite2imagesbooks_carl_jung_548.jpg",
  },
  {
    title: "Theory of Perception and Consciousness",
    thinker: "Paul Valéry",
    description:
      "Though more a philosopher-poet, Valéry's reflections on consciousness challenge rigid scientific perspectives. He explored how subjective experience and creativity shape psychological understanding.",
    image:
      "https://th.bing.com/th/id/R.46d0a770e0e562675b2d38eed7cb882b?rik=28hTvrpLR39oHQ&riu=http%3a%2f%2fpalimpsestes.fr%2ftextes_divers%2fv%2fvalery%2fpaul_valery01_0.jpg&ehk=c7R9vzfJABozqpV%2bSL6RoaeWr2%2faCGkPt%2fTqZFucZhY%3d&risl=&pid=ImgRaw&r=0",
  },
];

const PsychologyTheories = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-sky-50 to-blue-100">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/30 via-white/10 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Core Theories from Pioneers in Psychology
        </motion.h2>

        <div className="space-y-20">
          {theories.map((theory, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                className={`flex flex-col md:flex-row items-center gap-10 ${
                  !isEven ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src={theory.image}
                  alt={theory.thinker}
                  className="w-64 h-64 object-cover rounded-2xl shadow-xl border-4 border-white"
                />
                <div className="max-w-xl">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{theory.title}</h3>
                  <p className="text-gray-700 mb-3">{theory.description}</p>
                  <p className="text-blue-700 font-semibold text-lg">– {theory.thinker}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PsychologyTheories;
