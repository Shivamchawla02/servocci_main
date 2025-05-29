import React from "react";
import { motion } from "framer-motion";

const quotes = [
  {
    text: "The good life is a process, not a state of being. It is a direction, not a destination.",
    author: "Carl Rogers",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328f18d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    text: "Until you make the unconscious conscious, it will direct your life and you will call it fate.",
    author: "Carl Jung",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    text: "The aim of psychology is to give us a completely different idea of the things we know best.",
    author: "Paul Valéry",
    image: "https://images.unsplash.com/photo-1628890920210-0a9d8dfc264c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
];

const PsychometricQuotes = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-sky-50 to-blue-100">
      {/* Optional gradient overlay for aesthetic depth */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/30 via-white/10 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Quotes from Great Thinkers in Psychology
        </motion.h2>

        <div className="space-y-20">
          {quotes.map((quote, idx) => {
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
                {/* Image */}
                <img
                  src={quote.image}
                  alt={quote.author}
                  className="w-64 h-64 object-cover rounded-2xl shadow-xl border-4 border-white"
                />

                {/* Text */}
                <div className="max-w-xl">
                  <p className="text-xl text-gray-700 italic mb-4 leading-relaxed">"{quote.text}"</p>
                  <p className="text-blue-700 font-semibold text-lg">– {quote.author}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PsychometricQuotes;
