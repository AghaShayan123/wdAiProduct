import React from 'react';

interface ButtonProps {
    text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
    return (
        <div className="mt-[30px]">
            <button
                type="submit"
                className="w-full h-[40px] py-[10px] bg-[#2850C8] text-white rounded-[5px] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors shadow-md"

            >
                <span className='font-[500] text-[14px] leading-[21px] text-center flex justify-center items'>
                    {text}
                </span>
            </button>
        </div>
    );
};

export default Button;
