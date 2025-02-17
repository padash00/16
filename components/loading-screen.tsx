"use client"

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type React from "react";

const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds loading screen

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark-bg"
        >
          <div className="relative w-full h-full">
            <Image
              src="https://sjc.microlink.io/aO2Ny7qy-bcj858ITMDwR5Nm_w6znqhH68NEgencGrpn-6buTyAxJTACStQUP-gNsawnhb-wpoZjZPBFS6E34w.jpeg"
              alt="F16 Arena Background"
              fill={true}
              objectFit="cover"
              className="opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent opacity-80" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-md mx-auto"
              >
                <h1
                  className="font-cyberpunk text-4xl md:text-6xl lg:text-7xl text-neon-green mb-4 glitch"
                  data-text="F16 ARENA"
                >
                  F16 ARENA
                </h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-lg md:text-2xl text-cyber-blue mb-6"
                >
                  Лучшая киберспортивная арена в городе
                </motion.p>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="w-12 h-12 border-t-2 border-neon-green rounded-full animate-spin"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
