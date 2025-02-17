"use client"
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import type React from "react";
import ParticleBackground from "./particle-background";

const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <Image
          src="https://i.postimg.cc/Hnwq4kvv/DSCF2902.png"
          alt="Киберспортивный клуб с неоновым освещением"
          fill={true}
          objectFit="cover"
          objectPosition="center"
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
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 text-center px-4"
      >
        <motion.h1
          className="font-orbitron text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 text-neon-green cyber-heading glitch"
          data-text="F16 Arena"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          F16 Arena
        </motion.h1>
        <motion.p
          className="font-play text-lg sm:text-2xl mb-6 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Погрузись в мир киберспорта на максимальной скорости!
        </motion.p>
        <motion.p
          className="font-play text-base sm:text-lg mb-6 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Ультрасовременное оборудование • Турниры 24/7 • Уникальная атмосфера
        </motion.p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.3 }}>
            <Link href="#booking" className="cyber-button w-full sm:w-48 font-play">
              Забронировать
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.3 }}>
            <Link href="#pricing" className="glow-button w-full sm:w-48 font-play">
              Тарифы
            </Link>
          </motion.div>
        </div>
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-dark-bg to-transparent"></div>
    </section>
  );
};

export default HeroSection;
