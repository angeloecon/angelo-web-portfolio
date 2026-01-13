"use client";
import { useState } from "react";

const NavigatorGem = () => {
  const [message, setMessage] = useState("System Online");
  const [isHovered, setIsHovered] = useState(false);

  const messages = [
    "Warp Drive: Active",
    "React v19: Loaded",
    "Course: Portfolio",
    "Shields: 100%",
    "Scanning for bugs...",
    "Hello, Pilot!",
  ];

  const handleClick = () => {
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    setMessage(randomMsg);
  };

  return (
<div className="fixed bottom-4 right-4 md:bottom-10 md:right-10 z-50 flex flex-col items-center justify-center scale-75 md:scale-100 origin-bottom-right">      
 
      <div 
        className={`mb-4 px-4 py-2 bg-slate-900/80 border border-cyan-500/30 rounded-full text-cyan-300 text-xs font-mono tracking-widest uppercase backdrop-blur-md transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
      >
        {message}
      </div>
 
      <div 
        className="relative w-16 h-16 cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        style={{ perspective: "1000px" }}
      >
        <div className="w-full h-full animate-float">
          <div className="relative w-full h-full transform-style-3d animate-spin-slow">
 
            <div className="absolute w-0 h-0 border-l-[32px] border-r-[32px] border-b-[48px] border-l-transparent border-r-transparent border-b-cyan-500/60 opacity-80 origin-bottom transform rotate-x-[30deg] translate-z-[16px]" />
            <div className="absolute w-0 h-0 border-l-[32px] border-r-[32px] border-b-[48px] border-l-transparent border-r-transparent border-b-cyan-400/60 opacity-80 origin-bottom transform rotate-y-[90deg] rotate-x-[30deg] translate-z-[16px]" />
            <div className="absolute w-0 h-0 border-l-[32px] border-r-[32px] border-b-[48px] border-l-transparent border-r-transparent border-b-cyan-500/60 opacity-80 origin-bottom transform rotate-y-[180deg] rotate-x-[30deg] translate-z-[16px]" />
            <div className="absolute w-0 h-0 border-l-[32px] border-r-[32px] border-b-[48px] border-l-transparent border-r-transparent border-b-cyan-400/60 opacity-80 origin-bottom transform rotate-y-[270deg] rotate-x-[30deg] translate-z-[16px]" />

            <div className="absolute top-[46px] w-0 h-0 border-l-[32px] border-r-[32px] border-t-[48px] border-l-transparent border-r-transparent border-t-cyan-500/60 opacity-80 origin-top transform rotate-x-[-30deg] translate-z-[16px]" />
            <div className="absolute top-[46px] w-0 h-0 border-l-[32px] border-r-[32px] border-t-[48px] border-l-transparent border-r-transparent border-t-cyan-400/60 opacity-80 origin-top transform rotate-y-[90deg] rotate-x-[-30deg] translate-z-[16px]" />
            <div className="absolute top-[46px] w-0 h-0 border-l-[32px] border-r-[32px] border-t-[48px] border-l-transparent border-r-transparent border-t-cyan-500/60 opacity-80 origin-top transform rotate-y-[180deg] rotate-x-[-30deg] translate-z-[16px]" />
            <div className="absolute top-[46px] w-0 h-0 border-l-[32px] border-r-[32px] border-t-[48px] border-l-transparent border-r-transparent border-t-cyan-400/60 opacity-80 origin-top transform rotate-y-[270deg] rotate-x-[-30deg] translate-z-[16px]" />
            
   
            <div className="absolute top-1/2 left-1/2 w-8 h-8 -mt-4 -ml-4 bg-cyan-100 rounded-full blur-md animate-pulse" />
          </div>
        </div>
 
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-12 h-2 bg-cyan-500/20 blur-md rounded-full animate-pulse" />
      </div>
    </div>
  );
};

export default NavigatorGem;