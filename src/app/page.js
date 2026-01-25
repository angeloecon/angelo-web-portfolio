'use client'
import { WorkExperienceSection, EducationSection, ProjectsSection, AboutSection, HeroSection } from "@/components/Sections";
import { Starfield, NavigatorGem, SpaceCursor, SpaceNav, SpaceFooter } from "@/components/UI";
import { useState, useEffect } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Home");

  useEffect(() => {
    // Observer ni, For tracking current tabs
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = ["home", "projects", "experience", "education"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen relative text-white overflow-hidden scroll-smooth">

      <Starfield />
      <SpaceCursor />
      <NavigatorGem />

      <SpaceNav activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="relative z-10 flex flex-col items-center justify-center gap-10 p-4 pt-20">

        <HeroSection />
        <AboutSection />
        <WorkExperienceSection />
        <ProjectsSection />
        <EducationSection />

      </div>

      <SpaceFooter />

    </main>
  );
}
