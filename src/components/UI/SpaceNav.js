import useSpaceAudio from "../../hooks/useSpaceAudio";
import { HamburgerIcon, CloseIcon } from '../Icons';
import SpaceAudioButton from "./SpaceAudioButton";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";


const SpaceNav = ({ activeTab, setActiveTab }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { engineOn, toggleEngine } = useSpaceAudio();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tabs = [
    { id: "home", label: "HOME" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "projects", label: "PROJECTS" },
    { id: "education", label: "EDUCATION" },
  ];

  const handleHover = () => {
    if (window.playHoverSound) window.playHoverSound();
  };

  const handleClick = (id) => {
    if (window.playClickSound) window.playClickSound();
    setActiveTab(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || isOpen
          ? "bg-slate-900/90 backdrop-blur-md border-b border-cyan-500/30 py-3"
          : "bg-transparent py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* GELOOOOOOO*/}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="font-scifi-header text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)] cursor-pointer relative z-50 pr-2"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ANGELO.DEV
          </motion.div>

          {/* Navi Menu's */}
          <div className="hidden md:flex gap-4 px-2 lg:gap-10 items-center">
            {tabs.map((tab, index) => (
              <motion.button
                key={tab.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                onMouseEnter={handleHover}
                onClick={() => handleClick(tab.id)}
                className={`relative font-mono text-sm tracking-widest transition-colors duration-300 ${activeTab === tab.id ? "text-cyan-400" : "text-slate-400 hover:text-cyan-300"
                  }`}
              >
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="activeTab"
                    className="font-scifi-regular absolute -bottom-2 left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                  />
                )}
                {tab.label}
              </motion.button>
            ))}
          </div>

          {/* Right Side: Audio & Mobile Toggle */}
          <div className="flex items-center gap-4 relative z-50">
            <SpaceAudioButton className="hidden md:flex" engineOn={engineOn} toggleEngine={toggleEngine} />

            {/* Mobile menu minute burger */}
            <button
              className="md:hidden text-cyan-400 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <CloseIcon className="w-8 h-8" />
              ) : (
                <HamburgerIcon className="w-8 h-8" />
              )}

            </button>
          </div>

        </div>
      </motion.nav>

      {/* Mobile Menu Overlay, Full display on movile */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleClick(tab.id)}
            className={`text-2xl font-scifi-header tracking-widest whitespace-nowrap ${activeTab === tab.id ? "text-cyan-400" : "text-white/70"}`}
          >
            {tab.label}
          </button>
        ))}

        <div className="mt-8">
          <SpaceAudioButton engineOn={engineOn} toggleEngine={toggleEngine} />
        </div>
      </motion.div>
    </>
  );
};

export default SpaceNav;