"use client";
import React from 'react';

interface NavProps {
    activeIndex: number;
}

const Nav: React.FC<NavProps> = ({ activeIndex }) => {
    const navItems = [
        { name: "Skills" },
        { name: "Experience" },
        { name: "Projects" },
        { name: "Achievements" },
    ];

    return (
        <div className='bg-[#ECECEC] flex flex-col justify-center items-center mt-[233px] rounded-[10px] w-[300px] sm:w-[500px] shadow-md'>
            <div className='flex justify-center items-center gap-[5px] p-[5px] h-[50px] w-[300px] sm:w-[500px]'>
                {navItems.map((item, index) => (
                    <button
                        key={index}
                        className={`w-[100px] sm:w-[120px] text-[12px] font-[300] sm:text-[14px] sm:font-[500] px-[5px] flex justify-center items-center text-center rounded-md transition-colors duration-300 h-[40px]
                            ${activeIndex === index ? 'bg-[#ffffff]' : 'bg-transparent'}
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
