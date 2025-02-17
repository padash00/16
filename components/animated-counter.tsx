"use client"

import type React from "react";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface CounterProps {
  end: number;
  duration: number;
  label: string;
}

const AnimatedCounter: React.FC<CounterProps> = ({ end, duration, label }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      let startTime: number;
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        setCount(Math.floor(percentage * end));
        if (percentage < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      requestAnimationFrame(animateCount);
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, end, duration, controls]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={controls} className="text-center">
      <span className="text-4xl font-bold text-neon-green">{count}</span>
      <p className="text-lg text-gray-300">{label}</p>
    </motion.div>
  );
};

export default AnimatedCounter;
