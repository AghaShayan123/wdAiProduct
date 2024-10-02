import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Image from 'next/image';
import Calender from '../assets/Calendar.svg';
import Button from './Button';
import TopProjects from '@/components/Projects';

interface ExperienceProps {
    setActiveIndex: (index: number) => void;
}

const validationSchema = yup.object({
    experiences: yup.array().of(
        yup.object({
            companyName: yup.string().required('Company name is required'),
            joiningDate: yup.date().required('Joining date is required'),
            leavingDate: yup.date().required('Leaving date is required'),
            achievements: yup.string(),
        })
    ),
});

const JobExperiences: React.FC<ExperienceProps> = ({ setActiveIndex }) => {
    const [showProject, setShowProject] = useState(false);
    const [experiences, setExperiences] = useState([
        { companyName: '', joiningDate: null, leavingDate: null, achievements: '' },
    ]);

    const handleAddMore = () => {
        setExperiences([...experiences, { companyName: '', joiningDate: null, leavingDate: null, achievements: '' }]);
    };

    const formik = useFormik({
        initialValues: {
            experiences,
        },
        validationSchema,
        onSubmit: (values) => {
            console.log('Form Values:', values);
            setActiveIndex(2);
            setShowProject(true);
        },
    });

    if (showProject) {
        return <TopProjects setActiveIndex={setActiveIndex} />;
    }

    const handleDateChange = (index: number, field: string, date: Date | null) => {
        formik.setFieldValue(`experiences.${index}.${field}`, date);
    };

    return (
        <div className="flex justify-center items-center mt-[20px] mb-[233px]">
            <form
                onSubmit={formik.handleSubmit}
                className="bg-white py-[50px] px-[10px] md:px-[50px] rounded-[10px] shadow-md sm:w-[500px] w-[300px]"
            >
                <p className='block text-[16px] font-[500] mb-[8px] leading-[24px]'>Job Experiences</p>
                {experiences.map((experience, index) => (
                    <div key={index}>
                        <div className="mb-[20px] relative">
                            <input
                                id={`experiences.${index}.companyName`}
                                name={`experiences.${index}.companyName`}
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.experiences[index]?.companyName || ''}
                                placeholder="Enter your company name"
                                className="w-full px-4 py-[10px] text-[14px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px] shadow-md h-[40px]"
                            />
                            <p className="text-[#B1B1B1] text-[10px] font-[300] leading-[15px]">e.g. Google</p>
                            {formik.errors.experiences &&
                                formik.errors.experiences[index] &&
                                (formik.errors.experiences[index] as any)?.companyName &&
                                formik.touched.experiences &&
                                formik.touched.experiences[index] &&
                                formik.touched.experiences[index]?.companyName && (
                                    <p className="text-red-500 text-xs">
                                        {(formik.errors.experiences[index] as any)?.companyName}
                                    </p>
                                )}
                        </div>

                        <div className="mb-[20px] relative">
                            <DatePicker
                                selected={formik.values.experiences[index].joiningDate || null}
                                onChange={(date) => handleDateChange(index, 'joiningDate', date)}
                                dateFormat="MMMM yyyy"
                                placeholderText="Select your joining date"
                                showMonthYearPicker
                                wrapperClassName="w-full"
                                className="w-full text-[14px] border px-4 border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px] shadow-md h-[40px]"
                            />
                            <Image
                                src={Calender}
                                alt="Calendar Icon"
                                width={20}
                                height={20}
                                className="absolute right-4 top-[15%]  pointer-events-none"
                            />

                            <p className="text-[#B1B1B1] text-[10px] font-[300] leading-[15px]">e.g. April 2020</p>
                            {formik.errors.experiences &&
                                formik.errors.experiences[index] &&
                                (formik.errors.experiences[index] as any)?.joiningDate &&
                                formik.touched.experiences &&
                                formik.touched.experiences[index] &&
                                formik.touched.experiences[index]?.joiningDate && (
                                    <p className="text-red-500 text-xs">
                                        {(formik.errors.experiences[index] as any)?.joiningDate}
                                    </p>
                                )}
                        </div>

                        <div className="mb-[20px] relative">
                            <DatePicker
                                selected={formik.values.experiences[index].leavingDate || null}
                                onChange={(date) => handleDateChange(index, 'leavingDate', date)}
                                dateFormat="MMMM yyyy"
                                placeholderText="Select your leaving date"
                                showMonthYearPicker
                                wrapperClassName="w-full"
                                className="w-full text-[14px] px-4 border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px] shadow-md h-[40px]"
                            />
                            <Image
                                src={Calender}
                                alt="Calendar Icon"
                                width={20}
                                height={20}
                                className="absolute right-4 top-[15%] pointer-events-none"
                            />

                            <p className="text-[#B1B1B1] text-[10px] font-[300] leading-[15px]">e.g. April 2021</p>
                            {formik.errors.experiences &&
                                formik.errors.experiences[index] &&
                                (formik.errors.experiences[index] as any)?.leavingDate &&
                                formik.touched.experiences &&
                                formik.touched.experiences[index] &&
                                formik.touched.experiences[index]?.leavingDate && (
                                    <p className="text-red-500 text-xs">
                                        {(formik.errors.experiences[index] as any)?.leavingDate}
                                    </p>
                                )}
                        </div>

                        <div className="mb-[20px]">
                            <textarea
                                id={`experiences.${index}.achievements`}
                                name={`experiences.${index}.achievements`}
                                onChange={formik.handleChange}
                                value={formik.values.experiences[index].achievements || ''}
                                placeholder="What's your achievements in that company (optional)"
                                className="w-full px-4 py-[10px] sm:text-[14px] text-[12px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px] h-[110px] shadow-md"
                            />
                        </div>
                        <div className='w-[150px] h-[1px] bg-[#B1B1B1] mb-[30px] mt-[10px] mx-auto'></div>
                    </div>
                ))}

                <div className="flex justify-center mb-[30px]">
                    <div onClick={handleAddMore} className='font-[500] text-[14px] leading-[21px] text-[#2850C8] cursor-pointer'>
                        Add More
                    </div>
                </div>

                <Button text="Next" />
            </form>
        </div>
    );
};

export default JobExperiences;
