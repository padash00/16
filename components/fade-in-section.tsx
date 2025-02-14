"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import type React from "react" // Added import for React

interface FadeInSectionProps {
  children: React.ReactNode
}

export const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

