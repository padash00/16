"use client"

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Cpu, MemoryStick, Gamepad, Monitor, Headphones, Mouse } from "lucide-react";

const zones = [
  { name: "Standart", cpu: "i3-12100F", ram: "16GB", gpu: "GTX 1660 Ti", monitor: "144Hz", headset: "HyperX Cloud 2", mouse: "Attack Shark X3", description: "Идеальное начало твоего пути в мире киберспорта.", image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=1024&q=80" },
  { name: "Standart PRO", cpu: "i5-12400F", ram: "16GB", gpu: "RTX 3060", monitor: "240Hz", headset: "HyperX Cloud 2", mouse: "HyperX Haste 2 Wireless", description: "Ощути настоящую мощь с RTX 3060.", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1024&q=80" },
  { name: "Standart Premium", cpu: "i5-13400F", ram: "16GB", gpu: "RTX 4060", monitor: "280Hz", headset: "HyperX Cloud 2", mouse: "HyperX Haste 2 Wireless", description: "Погрузись в мир ультрасовременного гейминга.", image: "https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?auto=format&fit=crop&w=1024&q=80" },
  { name: "Next Level", cpu: "i5-13400F", ram: "16GB", gpu: "RTX 4060 Ti", monitor: "360Hz", headset: "HyperX Cloud 2", mouse: "Logitech G PRO", description: "Преодолей все границы с RTX 4060 Ti.", image: "https://images.unsplash.com/photo-1600861194942-f883de0dfe96?auto=format&fit=crop&w=1024&q=80" },
  { name: "PRO Zone", cpu: "i7-13700F", ram: "32GB", gpu: "RTX 4070 Super", monitor: "540Hz", headset: "Logitech G PRO 2", mouse: "Logitech Superlight 2", description: "Элитная зона для профессионалов.", image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=1024&q=80" },
];

const ZoneButton = ({ name, isActive, onClick }) => (
  <motion.button
    onClick={onClick}
    className={`px-3 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm md:px-6 md:py-3 md:text-base rounded-full transition ${isActive ? "bg-neon-green text-dark-bg" : "bg-deep-purple text-white hover:bg-deep-purple/80"}`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {name}
  </motion.button>
);

const SpecItem = ({ icon: Icon, label, value }) => (
  <div className="flex items-center space-x-2">
    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-neon-green" />
    <span className="text-neon-green font-mono text-xs sm:text-sm md:text-base">
      <strong>{label}:</strong> {value}
    </span>
  </div>
);

const ZoneDetails = ({ zone }) => (
  <motion.div
    className="cyber-card relative rounded-xl border border-neon-green overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    <Image src={zone.image} alt={zone.name} width={1024} height={576} className="object-cover w-full max-w-full h-56 sm:h-64 md:h-72" />
    <div className="p-4">
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-neon-green">{zone.name}</h3>
      <p className="text-white text-xs sm:text-sm md:text-base mb-4">{zone.description}</p>
      <div className="grid grid-cols-2 gap-4">
        <SpecItem icon={Cpu} label="CPU" value={zone.cpu} />
        <SpecItem icon={MemoryStick} label="RAM" value={zone.ram} />
        <SpecItem icon={Gamepad} label="GPU" value={zone.gpu} />
        <SpecItem icon={Monitor} label="Монитор" value={zone.monitor} />
        <SpecItem icon={Headphones} label="Гарнитура" value={zone.headset} />
        <SpecItem icon={Mouse} label="Мышь" value={zone.mouse} />
      </div>
      <Link href="#booking" className="block mt-4 text-center py-2 px-4 text-xs sm:text-sm md:text-base bg-neon-green text-dark-bg rounded-full">Забронировать место</Link>
    </div>
  </motion.div>
);

const GameZones = () => {
  const [activeZone, setActiveZone] = useState(0);

  return (
    <section className="py-12 sm:py-16 md:py-20 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neon-green mb-6">Выбери свою арену</h2>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6">
        {zones.map((zone, index) => (
          <ZoneButton key={zone.name} name={zone.name} isActive={activeZone === index} onClick={() => setActiveZone(index)} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <ZoneDetails key={zones[activeZone].name} zone={zones[activeZone]} />
      </AnimatePresence>
    </section>
  );
};

export default GameZones;
