"use client"
import React, { useState } from 'react';
import Nav from '@/components/Nav';
import Skills from '@/components/Skills';
import TopProjects from '@/components/Projects';
import AchievementsPage from '@/components/Achievements';
import Description from '@/components/Description';
import JobExperiences from '@/components/Experience';

const App: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleGenerateDescription = () => {
    setActiveIndex(4);
  };

  return (
    <div className='bg-[#F7F7F7] h-full w-full overflow-hidden flex justify-center items-center flex-col'>
      <Nav activeIndex={activeIndex} />
      {activeIndex === 0 && <Skills setActiveIndex={setActiveIndex} />}
      {activeIndex === 1 && <JobExperiences setActiveIndex={setActiveIndex} />}
      {activeIndex === 2 && <TopProjects setActiveIndex={setActiveIndex} />}
      {activeIndex === 3 && <AchievementsPage onGenerate={handleGenerateDescription} />}
      {activeIndex === 4 && <Description />}
    </div>
  );
};

export default App;
