"use client";
import { useState, useEffect } from "react";

const HeroHUD = () => {
 
  const targetText = "WELCOME, IM ANGELO"; 
  const cyclesPerLetter = 2; 
  const shuffleSpeed = 50; 

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
            return "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"[
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

  return (
    <div className="relative z-20 flex flex-col items-center mb-12 mt-20 md:mt-0">
 
      <div className="w-64 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-4 opacity-50" />
      <div className="font-scifi-reg flex justify-between w-64 text-[10px] font-mono text-cyan-500/60 mb-2 tracking-widest">
        <span>CPU: 34%</span>
        <span>RAM: OPTIMAL</span>
        <span>NET: SECURE</span>
      </div>
 
      <h1 className="font-scifi-header   sm:text-3xl md:text-6xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)] font-mono text-center break-words w-full px-2">
        {" "}
        {displayText}
 
        <span className="inline-block w-3 h-8 md:h-12 bg-cyan-400 ml-2 animate-pulse align-middle" />
      </h1>
 
      <p
        className={`text-center text-sm mt-4 text-cyan-100/70 font-mono md:text-base tracking-wider transition-opacity duration-1000 ${
          isScrambling ? "opacity-0" : "opacity-100"
        }`}
      >
        Front-End Engineer | React Specialist | Space Cadet
      </p>
 
      <div className="mt-8 flex items-center gap-4 opacity-50">
        <div className="w-12 h-[1px] bg-cyan-500" />
        <div className="w-2 h-2 border border-cyan-500 rotate-45" />
        <div className="w-12 h-[1px] bg-cyan-500" />
      </div>
    </div>
  );
};

export default HeroHUD;
