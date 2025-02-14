"use client"

import type React from "react"
import { MapPin, Phone, Clock, Mail, Instagram, Youtube, PhoneIcon as WhatsApp } from 'lucide-react'
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import Link from "next/link"

const Map = dynamic(() => import("@/components/map"), { ssr: false })

interface ContactItemProps {
  icon: React.ElementType;
  children: React.ReactNode;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon: Icon, children }) => (
  <motion.div
    className="flex items-center space-x-3 mb-4"
    whileHover={{ x: 5 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <div className="bg-neon-green p-2 rounded-full">
      <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-dark-bg" />
    </div>
    <span className="font-rajdhani text-sm sm:text-lg">{children}</span>
  </motion.div>
)

interface SocialLinkProps {
  href: string;
  icon: React.ElementType;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  icon: Icon,
  label,
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 text-cyber-blue hover:text-neon-green transition-colors duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
    <span className="font-rajdhani text-sm sm:text-base">{label}</span>
  </motion.a>
)

export default function ContactLocation() {
  return (
    <section id="contacts" className="py-12 sm:py-20 bg-dark-bg-alt">
      <div className="container mx-auto px-4">
        <motion.h2
          className="font-orbitron text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-neon-green"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Найди нас на карте киберспорта
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            className="cyber-card p-6 sm:p-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-orbitron text-xl sm:text-2xl font-semibold mb-6 text-neon-green">Контактная информация</h3>
            <ContactItem icon={MapPin}>г. Усть-Каменогорск, ул. 30 гвардейской дивизии 24/1, 1 этаж</ContactItem>
            <ContactItem icon={Phone}>
              <Link href="tel:+77080161720" className="hover:text-neon-green transition-colors duration-300">
                +7 (708) 016 17 20
              </Link>
            </ContactItem>
            <ContactItem icon={Clock}>Работаем 24/7</ContactItem>
            <ContactItem icon={Mail}>
              <Link href="mailto:fog_fog@internet.ru" className="hover:text-neon-green transition-colors duration-300">
                fog_fog@internet.ru
              </Link>
            </ContactItem>

            <div className="mt-8">
              <h4 className="font-orbitron text-lg sm:text-xl font-semibold mb-4 text-neon-green">Мы в социальных сетях</h4>
              <div className="flex flex-wrap gap-4">
                <SocialLink href="https://instagram.com/f16arena_" icon={Instagram} label="Instagram" />
                <SocialLink href="https://www.youtube.com/@F16arena" icon={Youtube} label="Youtube" />
                <SocialLink href="https://api.whatsapp.com/send/?phone=77080161720&text&type=phone_number&app_absent=0" icon={WhatsApp} label="WhatsApp" />
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <motion.a
                href="tel:+77080161720"
                className="cyber-button font-rajdhani px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Позвонить</span>
              </motion.a>
              <motion.a
                href="https://2gis.kz/ust_kamenogorsk/firm/70000001018097883"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button font-rajdhani px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Проложить маршрут</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="cyber-card p-2 h-[300px] sm:h-[400px] md:h-full relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Map />
            <div className="absolute inset-0 pointer-events-none border-4 border-neon-green rounded-lg"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
