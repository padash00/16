"use client"

import React from "react"
import { Cpu, Clock, Users, Wifi, RockingChairIcon as ChairOffice, Gamepad2 } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import AnimatedCounter from "./animated-counter"

const features = [
  { icon: Cpu, title: "65 мощных компьютеров", description: "5 уникальных игровых зон для геймеров любого уровня" },
  { icon: Clock, title: "Работаем 24/7", description: "Играй когда хочешь, сколько хочешь - мы всегда открыты" },
  { icon: Users, title: "Для всех геймеров", description: "От новичков до профессионалов - каждый найдет свое место" },
  { icon: Wifi, title: "Сверхбыстрый интернет", description: "Скорость до 1 Гбит/с - забудь о лагах и пинге" },
  {
    icon: ChairOffice,
    title: "Максимальный комфорт",
    description: "Эргономичные кресла и топовые аксессуары для долгих игровых сессий",
  },
  { icon: Gamepad2, title: "Топовое оборудование", description: "Мощные ПК и периферия от лучших производителей" },
]

const FeatureCard: React.FC<{ feature: (typeof features)[0]; index: number }> = React.memo(({ feature, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      className="cyber-card p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(205, 233, 1, 0.3)" }}
    >
      <feature.icon className="w-12 h-12 mb-4 text-neon-green" />
      <h3 className="font-orbitron text-xl font-semibold mb-2">{feature.title}</h3>
      <p className="text-gray-300">{feature.description}</p>
    </motion.div>
  )
})

const AboutClub: React.FC = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, -200])

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-dark-bg-alt relative overflow-hidden" ref={ref}>
      <motion.div
        className="absolute inset-0 z-0 opacity-10"
        style={{ y }}
        initial={{ backgroundPosition: "0px 0px" }}
        animate={{ backgroundPosition: "0px -200px" }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 20, ease: "linear" }}
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "url('/matrix-background.png')",
            backgroundRepeat: "repeat",
          }}
        />
      </motion.div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="cyber-heading text-4xl mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Добро пожаловать в будущее киберспорта
        </motion.h2>
        <motion.p
          className="text-center text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          F16 Arena - это не просто компьютерный клуб. Это ультрасовременный киберспортивный комплекс, где каждый геймер
          найдет все необходимое для погружения в мир виртуальных баталий и достижения новых высот в любимых играх.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <AnimatedCounter end={100000} duration={2000} label="Счастливых геймеров" />
          <AnimatedCounter end={2} duration={2000} label="Эпических турниров" />
          <AnimatedCounter end={24} duration={2000} label="Часа драйва ежедневно" />
          <AnimatedCounter end={65} duration={2000} label="Боевых машин" />
        </motion.div>
      </div>
    </section>
  )
}

export default React.memo(AboutClub)

