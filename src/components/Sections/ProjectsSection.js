import { motion } from "framer-motion";

import EventManagement from '../../../public/Assets/Images/EventManagement.png'
import Animain from "../../../public/Assets/Images/AniMain.png";
import SectionTitleHeader from "../Title/SectionTitleHeader";
import ProjectCard from "../Cards/ProjectCard";

const projects = [
  {
    title: "ANIME WATCHLIST",
    description: "A full-stack tracking database featuring user authentication, user dashboards, and live API integration.",
    tech: ["Next.js", "GraphQL", "Tailwind", "Firebase Auth", " Firebase Firestore", "Apollo"],
    image: Animain,
    link: "https://animain.vercel.app/"
  }, {
    title: "CAMPUS EVENT MANAGER",
    description: "Native Android application with secure Firebase login and role-based access control.",
    tech: ["Java", "Firebase", "Android Studio"],
    image: EventManagement,
    link: "https://github.com/angeloecon/campus-event-management-app"
  }
]

const ProjectSection = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div id="projects" className="w-full max-w-7xl mx-auto py-20 px-6 scroll-mt-24">

      <SectionTitleHeader
        title="PROJECT DEPLOYMENTS"
        titleClassName="from-cyan-400 to-blue-600 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]"
        underlineClassName="bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map(project => (

          <ProjectCard
            key={project.title}
            {...project}
            itemVariants={itemVariants}
          />

        ))}
      </motion.div>

    </div>
  );
};

export default ProjectSection;
