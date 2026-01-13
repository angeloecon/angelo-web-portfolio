const SpaceNav = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "projects", label: "PROJECTS" },
    { id: "certificates", label: "CERTIFICATES" },
    { id: "education", label: "EDUCATION" },
  ];

  const handleHover = () => {
    if (window.playHoverSound) window.playHoverSound();
  };

  const handleClick = (id) => {
    if (window.playClickSound) window.playClickSound();
    setActiveTab(id);
  };

  return (
    <div className="flex justify-center w-full mb-8">
      <div className="flex gap-2 md:gap-4 p-2 bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md rounded-xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onMouseEnter={handleHover}
            onClick={() => handleClick(tab.id)}
            className={`relative px-2 md:px-6 py-2 font-mono text-sm  transition-all duration-300 rounded-lg overflow-hidden group ${
              activeTab === tab.id
                ? "text-slate-900 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)] font-bold"
                : "text-cyan-400/70 hover:text-cyan-300 hover:bg-cyan-900/30"
            }`}
          >
 
            <span className="relative z-10">{tab.label}</span>
            {activeTab === tab.id && (
               <div className="absolute inset-0 bg-white/20 animate-pulse" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SpaceNav;