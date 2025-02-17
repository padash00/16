"use client"

import React, { useState, useMemo, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const images = [
  {
    src: "https://i.postimg.cc/1RD1ZvR0/DSCF2899.png",
    alt: "Киберспортивный клуб с неоновым освещением",
    category: "zones",
  },
  {
    src: "https://i.postimg.cc/MKx2Z1XC/DSCF2900.png",
    alt: "Турнир по киберспорту",
    category: "tournaments",
  },
  {
    src: "https://i.postimg.cc/Hnwq4kvv/DSCF2902.png",
    alt: "Игроки за компьютерами",
    category: "players",
  },
  {
    src: "https://i.postimg.cc/kGPrbbst/DSCF2903.png",
    alt: "Игровые компьютеры с RGB подсветкой",
    category: "zones",
  },
  {
    src: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Геймеры в наушниках",
    category: "players",
  },
]

const FilterButton: React.FC<{ active: boolean; onClick: () => void; children: React.ReactNode }> = React.memo(
  ({ active, onClick, children }) => (
    <motion.button
      onClick={onClick}
      className={`font-rajdhani px-4 py-2 rounded-full transition duration-300 ${
        active ? "bg-neon-green text-dark-bg" : "bg-deep-purple text-white"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  ),
)

const GalleryImage: React.FC<{ image: (typeof images)[0]; onClick: () => void }> = React.memo(({ image, onClick }) => (
  <motion.div
    className="relative overflow-hidden rounded-lg cursor-pointer group"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    layout
  >
    <Image
      src={image.src || "/placeholder.svg"}
      alt={image.alt}
      width={400}
      height={300}
      className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
      onClick={onClick}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="text-white font-rajdhani text-lg bg-dark-bg bg-opacity-75 px-4 py-2 rounded-full">
        Увеличить
      </span>
    </div>
  </motion.div>
))

const Lightbox: React.FC<{ image: (typeof images)[0]; onClose: () => void }> = React.memo(({ image, onClose }) => (
  <motion.div
    className="fixed inset-0 bg-dark-bg bg-opacity-90 flex items-center justify-center z-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="max-w-4xl max-h-full relative">
      <Image
        src={image.src || "/placeholder.svg"}
        alt={image.alt}
        width={800}
        height={600}
        className="max-w-full max-h-full object-contain"
      />
      <button
        className="absolute top-4 right-4 text-white text-2xl bg-neon-green rounded-full w-10 h-10 flex items-center justify-center"
        onClick={onClose}
      >
        &times;
      </button>
    </div>
  </motion.div>
))

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState("all")
  const [selectedImage, setSelectedImage] = useState<(typeof images)[0] | null>(null)

  const filteredImages = useMemo(() => {
    return filter === "all" ? images : images.filter((img) => img.category === filter)
  }, [filter])

  const handleImageClick = useCallback((image: (typeof images)[0]) => {
    setSelectedImage(image)
  }, [])

  const handleCloseLightbox = useCallback(() => {
    setSelectedImage(null)
  }, [])

  return (
    <section id="gallery" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <h2 className="font-oswald text-4xl font-bold mb-12 text-center text-neon-green">Галерея</h2>
        <div className="flex flex-wrap justify-center mb-8 gap-4">
          <FilterButton active={filter === "all"} onClick={() => setFilter("all")}>
            Все
          </FilterButton>
          <FilterButton active={filter === "zones"} onClick={() => setFilter("zones")}>
            Игровые зоны
          </FilterButton>
          <FilterButton active={filter === "tournaments"} onClick={() => setFilter("tournaments")}>
            Турниры
          </FilterButton>
          <FilterButton active={filter === "players"} onClick={() => setFilter("players")}>
            Игроки
          </FilterButton>
        </div>
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <GalleryImage key={image.src} image={image} onClick={() => handleImageClick(image)} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <AnimatePresence>
        {selectedImage && <Lightbox image={selectedImage} onClose={handleCloseLightbox} />}
      </AnimatePresence>
    </section>
  )
}

export default React.memo(Gallery)

