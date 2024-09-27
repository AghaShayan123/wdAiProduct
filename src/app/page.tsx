"use client";
import AchievementsPage from "@/components/Achievements";
import Description from "@/components/Description";
import Experience from "@/components/Experience";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState<number>(0);

  const handleNavClick = (index: number) => {
    setActiveSection(index);
  };

  const handleGenerateDescription = () => {
    setActiveSection(4); // Set the active section to Description
  };

  return (
    <div className="bg-[#F7F7F7] h-full w-full overflow-hidden flex justify-center items-center flex-col">
      <Nav activeIndex={activeSection} handleNavClick={handleNavClick} />
      {activeSection === 0 && <Skills />}
      {activeSection === 1 && <Experience />}
      {activeSection === 2 && <Projects />}
      {activeSection === 3 && <AchievementsPage onGenerate={handleGenerateDescription} />} {/* Pass the function here */}
      {activeSection === 4 && <Description />} {/* Description page will be shown here */}
    </div>
  );
}
