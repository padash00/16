"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Зоны", href: "#zones" },
  { name: "Тарифы", href: "#pricing" },
  { name: "Галерея", href: "#gallery" },
  { name: "Контакты", href: "#contacts" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-dark-bg shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link
            href="/"
            className="font-orbitron text-xl sm:text-2xl font-bold text-neon-green hover:text-glow transition-all duration-300"
          >
            F16 Arena
          </Link>
          <div className="hidden md:flex space-x-4 lg:space-x-6 items-center">
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link 
                  href={item.href} 
                  className="font-orbitron text-sm lg:text-base text-white hover:text-neon-green transition-colors"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="#booking" 
                className="cyber-button text-sm lg:text-base px-4 py-2 lg:px-6 lg:py-3"
              >
                Забронировать
              </Link>
            </motion.div>
          </div>
          <motion.button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-dark-bg shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className="font-orbitron text-white hover:text-neon-green transition-colors block py-2"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2, delay: 0.2 }}
              >
                <Link 
                  href="#booking" 
                  className="cyber-button block text-center py-3"
                  onClick={closeMenu}
                >
                  Забронировать
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
