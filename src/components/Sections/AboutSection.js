import HoloCard from "../Cards/HoloCard";

const AboutSection = () => {
  return (
    <HoloCard className="mb-10 w-full max-w-7xl mx-auto">

      <h2 className="font-scifi-header text-xl md:text-2xl font-bold mb-4 text-cyan-400 uppercase tracking-widest flex items-center gap-3">
        <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
        MISSION_LOG: ACTIVE
      </h2>

      <div className="space-y-4 text-cyan-100/80 font-mono text-sm leading-relaxed">
        <p>
          <strong className="font-scifi-reg text-cyan-300">IDENTITY:</strong> Aspiring Full-Stack Developer with a background in networking, based in the Philippines.
        </p>
        <p>
          <strong className="font-scifi-reg text-cyan-300">CURRENT OBJECTIVE:</strong>{" "}
          Building dynamic web applications using <span className="text-white">React and Next.js</span>, and developing functional mobile apps with <span className="text-white">Android and Firebase</span>. Actively seeking junior-level opportunities to grow my skills and write clean, efficient code.

        </p>
        <p>
          <strong className="font-scifi-reg text-cyan-300">STATUS:</strong> Currently
          completing a <span className="text-white">B.S. in Information Technology</span> at Holy Cross of Davao College while deploying personal
          projects to the global network.
        </p>
      </div>

    </HoloCard>
  );
};

export default AboutSection;
