"use client"
import Achievements from "@/components/Achievements";
import Description from "@/components/Description";
import Experience from "@/components/Experience";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState<number>(0)

  const handleNavClick = (index: number) => {
    setActiveSection(index);
  };

  return (
    <div className="bg-[#F7F7F7] h-full w-full overflow-hidden flex justify-center items-center flex-col">
      <Nav activeIndex={activeSection} handleNavClick={handleNavClick} />
      {activeSection === 0 && <Skills />}
      {activeSection === 1 && <Experience />}
      {activeSection === 2 && <Projects />}
      {activeSection === 3 && <Achievements />}
      {/* <Description /> */}
    </div>
  )
}
