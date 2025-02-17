"use client"

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { src: "https://i.postimg.cc/1RD1ZvR0/DSCF2899.png", alt: "Киберспортивный клуб с неоновым освещением", category: "zones" },
  { src: "https://i.postimg.cc/MKx2Z1XC/DSCF2900.png", alt: "Турнир по киберспорту", category: "tournaments" },
  { src: "https://i.postimg.cc/Hnwq4kvv/DSCF2902.png", alt: "Игроки за компьютерами", category: "players" },
  { src: "https://i.postimg.cc/kGPrbbst/DSCF2903.png", alt: "Игровые компьютеры с RGB подсветкой", category: "zones" },
  { src: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", alt: "Геймеры в наушниках", category: "players" },
];

const FILTERS = [
  { label: "Все", value: "all" },
  { label: "Игровые зоны", value: "zones" },
  { label: "Турниры", value: "tournaments" },
  { label: "Игроки", value: "players" },
];

const Gallery = () => {
  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = filter === "all" ? images : images.filter((img) => img.category === filter);

  return (
    <section id="gallery" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-neon-green mb-8">Галерея</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {FILTERS.map(({ label, value }) => (
            <motion.button
              key={value}
              onClick={() => setFilter(value)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                filter === value ? "bg-neon-green text-dark-bg" : "bg-deep-purple text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {label}
            </motion.button>
          ))}
        </div>
        
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                key={image.src}
                className="relative overflow-hidden rounded-lg cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                layout
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-lg bg-dark-bg bg-opacity-75 px-4 py-2 rounded-full">Увеличить</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-dark-bg bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl max-h-full relative">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain"
              />
              <button
                className="absolute top-4 right-4 text-white text-2xl bg-neon-green rounded-full w-10 h-10 flex items-center justify-center"
              >
                &times;
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default React.memo(Gallery);
