"use client"

import React, { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Cpu, MemoryStick, Gamepad, Monitor, Headphones, Mouse } from "lucide-react"

const zones = [
  {
    name: "Standart",
    cpu: "i3-12100F",
    ram: "16GB",
    gpu: "GTX 1660 Ti",
    monitor: "144Hz",
    headset: "HyperX Cloud 2",
    mouse: "Attack Shark X3",
    description: "Идеальное начало твоего пути в мире киберспорта. Мощь и скорость для уверенных побед.",
    image:
      "https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2048&q=80",
  },
  {
    name: "Standart PRO",
    cpu: "i5-12400F",
    ram: "16GB",
    gpu: "RTX 3060",
    monitor: "240Hz",
    headset: "HyperX Cloud 2",
    mouse: "HyperX Haste 2 Wireless",
    description: "Ощути настоящую мощь с RTX 3060. Плавный геймплей и потрясающая графика ждут тебя.",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    name: "Standart Premium",
    cpu: "i5-13400F",
    ram: "16GB",
    gpu: "RTX 4060",
    monitor: "280Hz",
    headset: "HyperX Cloud 2",
    mouse: "HyperX Haste 2 Wireless",
    description: "Погрузись в мир ультрасовременного гейминга. RTX 4060 и 280Hz монитор - твой путь к вершине.",
    image:
      "https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    name: "Next Level",
    cpu: "i5-13400F",
    ram: "16GB",
    gpu: "RTX 4060 Ti",
    monitor: "360Hz",
    headset: "HyperX Cloud 2",
    mouse: "Logitech G PRO",
    description: "Преодолей все границы с RTX 4060 Ti и 360Hz монитором. Здесь рождаются легенды киберспорта.",
    image:
      "https://images.unsplash.com/photo-1600861194942-f883de0dfe96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  },
  {
    name: "PRO Zone",
    cpu: "i7-13700F",
    ram: "32GB",
    gpu: "RTX 4070 Super",
    monitor: "540Hz",
    headset: "Logitech G PRO 2",
    mouse: "Logitech Superlight 2",
    description:
      "Элитная зона для профессионалов. Непревзойденная мощь RTX 4070 Super и молниеносный 540Hz монитор. Здесь куются чемпионы.",
    image:
      "https://images.unsplash.com/photo-1592840496694-26d035b52b48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
]
const ZoneButton = React.memo(({ name, isActive, onClick }) => (
  <motion.button
    onClick={onClick}
    className={`font-orbitron px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base rounded-full transition duration-300 ${
      isActive
        ? "bg-neon-green text-dark-bg shadow-lg shadow-neon-green/50"
        : "bg-deep-purple text-white hover:bg-deep-purple/80"
    }`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {name}
  </motion.button>
))

const SpecItem = ({ icon: Icon, label, value }) => (
  <div className="flex items-center space-x-2">
    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-neon-green" />
    <span className="text-neon-green font-mono text-xs sm:text-sm">
      <span className="font-semibold">{label}:</span> {value}
    </span>
  </div>
)

const ZoneDetails = React.memo(({ zone }) => (
  <motion.div
    className="cyber-card overflow-hidden relative rounded-xl sm:rounded-2xl border border-neon-green"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    <div className="relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
      <Image
        src={zone.image || "/placeholder.svg"}
        alt={`Игровая зона ${zone.name}`}
        fill
        className="object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/80 to-transparent" />
    </div>
    <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end">
      <motion.h3
        className="font-orbitron text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-neon-green drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {zone.name}
      </motion.h3>
      <motion.p
        className="text-white mb-4 sm:mb-6 text-sm sm:text-xl font-medium drop-shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {zone.description}
      </motion.p>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 mb-4 sm:mb-8 bg-dark-bg/60 p-3 sm:p-6 rounded-lg sm:rounded-xl backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="space-y-2 sm:space-y-3">
          <SpecItem icon={Cpu} label="CPU" value={zone.cpu} />
          <SpecItem icon={MemoryStick} label="RAM" value={zone.ram} />
          <SpecItem icon={Gamepad} label="GPU" value={zone.gpu} />
        </div>
        <div className="space-y-2 sm:space-y-3">
          <SpecItem icon={Monitor} label="Монитор" value={zone.monitor} />
          <SpecItem icon={Headphones} label="Гарнитура" value={zone.headset} />
          <SpecItem icon={Mouse} label="Мышь" value={zone.mouse} />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Link
          href="#booking"
          className="cyber-button inline-flex items-center space-x-2 text-sm sm:text-lg px-4 sm:px-8 py-2 sm:py-3 rounded-full"
        >
          <span>Забронировать место</span>
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </Link>
      </motion.div>
    </div>
  </motion.div>
))

const GameZones = () => {
  const [activeZone, setActiveZone] = useState(0)
  const currentZone = useMemo(() => zones[activeZone], [activeZone])

  return (
    <section id="zones" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-dark-bg">
      <div className="container mx-auto px-4">
        <motion.h2
          className="cyber-heading text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Выбери свою арену
        </motion.h2>
        <motion.p
          className="text-center text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          От новичка до профессионала - у нас есть идеальная зона для каждого геймера. Погрузись в мир высоких
          технологий и непревзойденного комфорта.
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {zones.map((zone, index) => (
            <ZoneButton
              key={zone.name}
              name={zone.name}
              isActive={activeZone === index}
              onClick={() => setActiveZone(index)}
            />
          ))}
        </motion.div>
        <AnimatePresence mode="wait">
          <ZoneDetails key={currentZone.name} zone={currentZone} />
        </AnimatePresence>
      </div>
    </section>
  )
}

export default React.memo(GameZones)
