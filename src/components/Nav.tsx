"use client"
import React from 'react';

interface NavProps {
    activeIndex: number;
    handleNavClick: (index: number) => void;
}

const Nav: React.FC<NavProps> = ({ activeIndex, handleNavClick }) => {
    const navItems = [
        { name: "Skills" },
        { name: "Experience" },
        { name: "Projects" },
        { name: "Achievements" },
    ];

    return (
        <div className='bg-[#ECECEC] flex flex-col justify-center items-center mt-[235px] mx-[390px] rounded-[10px]'>
            <div className='flex justify-center items-center gap-[5px] p-[5px] h-[50px] w-[500px]'>
                {navItems.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => handleNavClick(index)}  // Update the active section on click
                        className={`w-[120px] flex justify-center items-center text-center rounded-md transition-colors duration-300 h-[40px]
                            ${activeIndex === index ? 'bg-white' : 'bg-transparent'}
                        `}
                    >
                        {item.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Nav;
