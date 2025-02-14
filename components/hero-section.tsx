"use client"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import type React from "react"
import ParticleBackground from "./particle-background"

const HeroSection: React.FC = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <Image
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Киберспортивный клуб с неоновым освещением"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-bg opacity-90"></div>
      </motion.div>
      <div className="absolute inset-0 z-10">
        <ParticleBackground />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-center px-4"
      >
        <motion.h1
          className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-neon-green cyber-heading glitch"
          data-text="F16 Arena"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          F16 Arena
        </motion.h1>
        <motion.p
          className="font-play text-xl md:text-3xl mb-8 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Погрузись в мир киберспорта на максимальной скорости!
        </motion.p>
        <motion.p
          className="font-play text-lg md:text-xl mb-8 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Ультрасовременное оборудование • Турниры 24/7 • Уникальная атмосфера
        </motion.p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="#booking" className="cyber-button w-full sm:w-48 font-play">
              Забронировать
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="#pricing" className="glow-button w-full sm:w-48 font-play">
              Тарифы
            </Link>
          </motion.div>
        </div>
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-dark-bg to-transparent"></div>
    </section>
  )
}

export default HeroSection

