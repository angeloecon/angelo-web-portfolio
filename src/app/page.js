'use client'
import Starfield from "@/components/Starfield";
import HoloCard from "@/components/HoloCard";
import NavigatorGem from "@/components/NavigatorGem";
import SpaceCursor from "@/components/SpaceCursor"; // <--- Import this
import HeroHUD from "@/components/HeroHUD";
import SpaceAudio from "@/components/SpaceAudio";
import SpaceNav from "@/components/SpaceNav";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <main className="min-h-screen relative text-white overflow-hidden">
      <Starfield />
      <SpaceCursor />
      <NavigatorGem />
      <SpaceAudio/>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen gap-10 p-4">
 
        <HeroHUD />
        <SpaceNav activeTab={activeTab} setActiveTab={setActiveTab} />
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
           
          <HoloCard>
            <h2 className=" font-scifi-header text-2xl font-bold mb-4 text-cyan-400 uppercase tracking-widest">
              // Mission Log
            </h2>
            <p className=" font-scifi-reg text-cyan-100/80 leading-relaxed text-sm">
              Pilot identified. Specialized in Full-Stack Navigation. Currently
              traversing the Next.js sector.
            </p>
          </HoloCard>

    
          <HoloCard>
            <h2 className="text-2xl font-bold mb-4 text-cyan-400 uppercase tracking-widest">
              // Deployed Modules
            </h2>
            <ul className="space-y-3 text-sm">
              <li className="p-3 border border-cyan-500/30 bg-cyan-900/20 hover:bg-cyan-500/20 transition cursor-pointer flex justify-between items-center group">
                <span>Anime_Watchlist.exe</span>
                <span className="opacity-0 group-hover:opacity-100 text-cyan-400">
                  {">>"}
                </span>
              </li>
              <li className="p-3 border border-cyan-500/30 bg-cyan-900/20 hover:bg-cyan-500/20 transition cursor-pointer flex justify-between items-center group">
                <span>Android_Auth_System.apk</span>
                <span className="opacity-0 group-hover:opacity-100 text-cyan-400">
                  {">>"}
                </span>
              </li>
            </ul>
          </HoloCard>
        </div> */}
      </div>
    </main>
  );
}
