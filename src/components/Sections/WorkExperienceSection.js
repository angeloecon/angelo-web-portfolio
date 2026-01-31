import SectionTitleHeader from "../Title/SectionTitleHeader";
import WorkExCard from "../Cards/WorkExCard";

const experiences = [
  {
    id: 1,
    role: "Freelancer",
    company: "Self-Employed",
    period: "2020 - 2021",
    description: "Maintaining Small Businesses Websites",
    tech: ["HTML/CSS", "JavaScript", "React"]
  }
];

const WorkExperienceSection = () => {
  return (
    <section id="experience" className="relative w-full max-w-7xl mx-auto py-20 px-6">

      <SectionTitleHeader
        title="Experience LOG"
        titleClassName="from-cyan-400 to-blue-600 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]"
        underlineClassName="bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
      />

      <div className="relative border-l-2 border-cyan-500/30 ml-4 md:ml-8 space-y-12">
        {experiences.map((exp, index) => (
          <WorkExCard key={index} {...exp} index={index} />
        ))}
      </div>

    </section>
  );
};

export default WorkExperienceSection;
