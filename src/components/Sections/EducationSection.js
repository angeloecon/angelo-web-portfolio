import SectionTitleHeader from "../Title/SectionTitleHeader";
import EduCard from '../Cards/EduCard'

const education = [
  {
    id: 1,
    school: "Holy Cross of Davao College",
    degree: "B.S. in Information Technology",
    year: "Current",
    details: "Specializing in Web Development and Systems Analysis."
  },
  {
    id: 2,
    school: "AMA Computer College (SHS)",
    degree: "Computer Programming (TVL)",
    year: "2018 - 2019",
    details: " Trained in programming and networking. "
  }, {
    id: 3,
    school: "Tech Academy",
    degree: "Full Stack Certification",
    year: "2022",
    details: "Intensive bootcamp focusing on MERN stack."
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="relative w-full max-w-7xl mx-auto py-20 px-6">

      <SectionTitleHeader
        title="ACADEMIC DATA"
        titleClassName="from-purple-400 to-pink-600 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]"
        underlineClassName="bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.map((edu, index) => (
          <EduCard key={edu.id} {...edu} index={index} />
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
