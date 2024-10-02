import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from './Button';
import JobExperiences from '@/components/Experience';

interface SkillsProps {
    setActiveIndex: (index: number) => void;
}

const validationSchema = yup.object({
    fullName: yup.string().required('Full Name is required'),
    jobPosition: yup.string(),
    skills: yup.string().required('Skills are required'),
});

const Skills: React.FC<SkillsProps> = ({ setActiveIndex }) => {
    const [showExperience, setShowExperience] = useState(false);

    const formik = useFormik({
        initialValues: {
            fullName: '',
            jobPosition: '',
            skills: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('Form Values:', values);
            setActiveIndex(1);
            setShowExperience(true);
        },
    });

    if (showExperience) {
        return <JobExperiences setActiveIndex={setActiveIndex} />;
    }

    return (
        <div className="flex justify-center items-center mt-[20px] mb-[233px]">
            <form
                onSubmit={formik.handleSubmit}
                className="bg-white py-[50px] px-[10px] md:px-[50px] rounded-[10px] shadow-md sm:w-[500px] w-[300px] h-[483px]"
            >
                <div className="mb-[30px]">
                    <label
                        htmlFor="fullName"
                        className="block text-[16px] font-[500] mb-[8px] leading-[24px]"
                    >
                        Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.fullName}
                        placeholder="Enter your name"
                        className="w-full px-4 py-[10px] text-[14px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px] shadow-md text-ellipsis"
                    />
                    {formik.errors.fullName && formik.touched.fullName ? (
                        <p className="text-red-500 text-xs">{formik.errors.fullName}</p>
                    ) : null}
                </div>
                <div className="mb-[30px]">
                    <label
                        htmlFor="jobPosition"
                        className="block text-[16px] font-[500] mb-[8px] leading-[24px]"
                    >
                        Job Position
                    </label>
                    <input
                        id="jobPosition"
                        name="jobPosition"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.jobPosition}
                        placeholder="Enter your current job position"
                        className="w-full px-4 py-[10px] text-[14px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px] shadow-md text-ellipsis"
                    />
                    <p className="text-[#B1B1B1] text-[10px] font-[300] leading-[15px]">e.g. Full Stack Developer</p>
                </div>
                <div className="mb-[30px]">
                    <label
                        htmlFor="skills"
                        className="block text-[16px] font-[500] mb-[8px] leading-[24px]"
                    >
                        Skills <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="skills"
                        name="skills"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.skills}
                        placeholder="Enter your skills e.g. React Js, Next Js"
                        className="w-full px-4 py-[10px] text-[14px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] shadow-md text-ellipsis"
                    />
                    <p className="text-[#B1B1B1] text-[10px] font-[300] leading-[15px]">Separate the skills with a comma</p>
                    {formik.errors.skills && formik.touched.skills ? (
                        <p className="text-red-500 text-xs">{formik.errors.skills}</p>
                    ) : null}
                </div>
                <Button text="Next" />
            </form>
        </div>
    );
};

export default Skills;
