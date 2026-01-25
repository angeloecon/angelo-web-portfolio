"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {

  const targetText = "HI!, IM ANGELO";
  const cyclesPerLetter = 2;
  const shuffleSpeed = 50;
  const [cpuUsage, setCpuUsage] = useState(0);

  const [displayText, setDisplayText] = useState(targetText);
  const [isScrambling, setIsScrambling] = useState(true);

  useEffect(() => {
    let iteration = 0;

    const interval = setInterval(() => {
      setDisplayText((prev) =>
        targetText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return targetText[index];
            }
            return "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"[
              Math.floor(Math.random() * 36)
            ];
          })
          .join("")
      );

      if (iteration >= targetText.length) {
        clearInterval(interval);
        setIsScrambling(false);
      }

      iteration += 1 / cyclesPerLetter;
    }, shuffleSpeed);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpuUsage(Math.floor(Math.random() * 100));
    }, 2500);

    return () => clearInterval(interval);
  }, []);


  // Crosshair Variants, Separate variants
  const crossHairVariants = {
    inactive: {
      opacity: 0,
      y: -50
    },
    active: {
      opacity: 1,
      y: 0,
      viewport: { once: true },
    }
  };

  // para sa status (CPU, RAM, NET) section
  const statusVariant = {
    inactive: {
      opacity: 0,
      y: 50
    },
    active: {
      opacity: 1,
      y: 0,
      viewport: { once: true },
    }
  };

  return (
    <section id="home" className="w-full h-[80vh] flex flex-col justify-center items-center">

      <div className="relative z-20 flex flex-col items-center mb-16 ">

        <motion.div
          variants={statusVariant}
          animate={!isScrambling ? "active" : "inactive"}
          initial="inactive"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}>
          <div className="w-64 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-4 opacity-50" />
          <div
            className="font-scifi-reg flex justify-between w-64 text-[10px] font-mono text-cyan-500/60 mb-2 tracking-widest">
            <span className={cpuUsage > 80 ? "text-red-500" : "text-cyan-500"}>CPU: {cpuUsage}%</span>
            <span className="animate-pulse text-cyan-500">RAM: OPTIMAL</span>
            <span className="animate-pulse text-green-500">NET: SECURE</span>
          </div>
        </motion.div>


        <h1 className="font-scifi-header text-4xl sm:text-6xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)] font-mono text-center break-words w-full px-2">
          {" "}
          {displayText}

          <span className="inline-block w-3 h-8 md:h-12 bg-cyan-400 ml-2 animate-pulse align-middle" />
        </h1>

        <p
          className={`text-center text-sm mt-4 text-cyan-100/70 font-mono md:text-base tracking-wider transition-opacity duration-1000 ${isScrambling ? "opacity-0" : "opacity-100"
            }`}
        >
          Junior Web Developer | React Developer | Space Cadet
        </p>


        <motion.div
          variants={crossHairVariants}
          animate={!isScrambling ? "active" : "inactive"}
          initial="inactive"
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 flex items-center gap-4 opacity-50">
          <div className="w-15 h-[1px] bg-cyan-500" />
          <div className="w-2 h-2 border border-cyan-500 rotate-45" />
          <div className="w-15 h-[1px] bg-cyan-500" />
        </motion.div>

        <motion.div
          variants={crossHairVariants}
          animate={!isScrambling ? "active" : "inactive"}
          transition={{ duration: 0.8, delay: 0.4 }}
          initial="inactive"
          className="mt-4 flex items-center gap-2 opacity-50">
          <div className="w-12 h-[1px] bg-cyan-600" />
          <div className="w-12 h-[1px] bg-cyan-600" />
        </motion.div>
        <motion.div
          variants={crossHairVariants}
          animate={!isScrambling ? "active" : "inactive"}
          transition={{ duration: 0.8, delay: 0.6 }}
          initial="inactive"
          className="mt-4 flex items-center gap-2 opacity-50">
          <div className="w-6 h-[1px] bg-cyan-900" />
          <div className="w-6 h-[1px] bg-cyan-900" />
        </motion.div>
      </div>
    </section>

  );
};

export default HeroSection;
