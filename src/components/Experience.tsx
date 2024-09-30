import React, { useRef } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Image from 'next/image';
import Calender from '../assets/Calendar.svg';

const validationSchema = yup.object({
    companyName: yup.string().required('Company name is required'),
    joiningDate: yup.date().required('Joining date is required'),
    leavingDate: yup.date().required('Leaving date is required'),
    achievements: yup.string(),
});

const JobExperiences = () => {
    const formik = useFormik({
        initialValues: {
            companyName: '',
            joiningDate: null,
            leavingDate: null,
            achievements: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('Form Values:', values);
        },
    });

    const joiningDateRef = useRef<DatePicker>(null);
    const leavingDateRef = useRef<DatePicker>(null);

    return (
        <div className="flex justify-center items-center mt-[20px] mb-[235px]">
            <form
                onSubmit={formik.handleSubmit}
                className="bg-white p-[50px] rounded-[10px] shadow-md sm:w-[500px] w-[300px]"
            >
                <p className='block text-[16px] font-[500] mb-[8px] leading-[24px]'>Job Experiences</p>
                <div className="mb-[20px]">
                    <input
                        id="companyName"
                        name="companyName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.companyName}
                        placeholder="Enter your company name"
                        className="w-full px-4 py-[10px] text-[14px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px] shadow-md text-ellipsis h-[40px]"
                    />
                    <p className="text-[#BCBCBC] text-[10px] font-[300] leading-[15px]">e.g. Google</p>
                    {formik.errors.companyName && formik.touched.companyName ? (
                        <p className="text-red-500 text-xs">{formik.errors.companyName}</p>
                    ) : null}
                </div>
                <div className="mb-[20px]">
                    <DatePicker
                        ref={joiningDateRef}
                        selected={formik.values.joiningDate}
                        onChange={(date) => formik.setFieldValue('joiningDate', date)}
                        dateFormat="MMMM yyyy"
                        placeholderText="Select your joining date"
                        icon={
                            <Image
                                src={Calender}
                                alt="Calendar Icon"
                                width={20}
                                height={20}
                            />
                        }
                        showIcon
                        showMonthYearPicker
                        wrapperClassName="w-full relative"
                        className="w-full text-[14px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px] shadow-md h-[40px]"
                        calendarIconClassName="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
                    />
                    <p className="text-[#BCBCBC] text-[10px] font-[300] leading-[15px]">e.g. April 2020</p>
                    {formik.errors.joiningDate && formik.touched.joiningDate ? (
                        <p className="text-red-500 text-xs">{formik.errors.joiningDate}</p>
                    ) : null}
                </div>
                <div className="mb-[20px]">
                    <DatePicker
                        ref={leavingDateRef}
                        selected={formik.values.leavingDate}
                        onChange={(date) => formik.setFieldValue('joiningDate', date)}
                        dateFormat="MMMM yyyy"
                        placeholderText="Select your leaving date"
                        icon={
                            <Image
                                src={Calender}
                                alt="Calendar Icon"
                                width={20}
                                height={20}
                            />
                        }
                        showIcon
                        showMonthYearPicker
                        wrapperClassName="w-full relative"
                        className="w-full text-[14px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px] shadow-md h-[40px]"
                        calendarIconClassName="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
                    />
                    <p className="text-[#BCBCBC] text-[10px] font-[300] leading-[15px]">e.g. April 2021</p>
                    {formik.errors.leavingDate && formik.touched.leavingDate ? (
                        <p className="text-red-500 text-xs">{formik.errors.leavingDate}</p>
                    ) : null}
                </div>
                <div className="mb-[20px]">
                    <textarea
                        id="achievements"
                        name="achievements"
                        onChange={formik.handleChange}
                        value={formik.values.achievements}
                        placeholder="What's your achievements in that company (optional)"
                        className="w-full px-4 py-[10px] sm:text-[14px] text-[12px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px] h-[110px] shadow-md"

                    />
                </div>
                <div className='w-[150px] h-[1px] bg-[#B1B1B1] mb-[30px] mt-[10px] mx-auto'></div>
                <div className="mb-[20px]">
                    <input
                        id="companyName"
                        name="companyName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.companyName}
                        placeholder="Enter your company name"
                        className="w-full px-4 py-[10px] text-[14px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px] shadow-md text-ellipsis"
                    />
                    <p className="text-[#BCBCBC] text-[10px] font-[300] leading-[15px]">e.g. Google</p>
                    {formik.errors.companyName && formik.touched.companyName ? (
                        <p className="text-red-500 text-xs">{formik.errors.companyName}</p>
                    ) : null}
                </div>
                <div className="mb-[20px]">
                    <DatePicker
                        ref={joiningDateRef}
                        selected={formik.values.joiningDate}
                        onChange={(date) => formik.setFieldValue('joiningDate', date)}
                        dateFormat="MMMM yyyy"
                        placeholderText="Select your joining date"
                        icon={
                            <Image
                                src={Calender}
                                alt="Calendar Icon"
                                width={20}
                                height={20}
                            />
                        }
                        showIcon
                        showMonthYearPicker
                        wrapperClassName="w-full relative"
                        className="w-full text-[14px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px] shadow-md h-[40px]"
                        calendarIconClassName="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
                    />
                    <p className="text-[#BCBCBC] text-[10px] font-[300] leading-[15px]">e.g. April 2021</p>
                    {formik.errors.joiningDate && formik.touched.joiningDate ? (
                        <p className="text-red-500 text-xs">{formik.errors.joiningDate}</p>
                    ) : null}
                </div>
                <div className="mb-[20px]">
                    <DatePicker
                        ref={leavingDateRef}
                        selected={formik.values.leavingDate}
                        onChange={(date) => formik.setFieldValue('joiningDate', date)}
                        dateFormat="MMMM yyyy"
                        placeholderText="Select your leaving date"
                        icon={
                            <Image
                                src={Calender}
                                alt="Calendar Icon"
                                width={20}
                                height={20}
                            />
                        }
                        showIcon
                        showMonthYearPicker
                        wrapperClassName="w-full relative"
                        className="w-full text-[14px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px] shadow-md h-[40px]"
                        calendarIconClassName="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
                    />
                    <p className="text-[#BCBCBC] text-[10px] font-[300] leading-[15px]">e.g. April 2021</p>
                    {formik.errors.leavingDate && formik.touched.leavingDate ? (
                        <p className="text-red-500 text-xs">{formik.errors.leavingDate}</p>
                    ) : null}
                </div>
                <div className="mb-[20px]">
                    <textarea
                        id="achievements"
                        name="achievements"
                        onChange={formik.handleChange}
                        value={formik.values.achievements}
                        placeholder="What's your achievements in that company (optional)"
                        className="w-full px-4 py-[10px] sm:text-[14px] text-[12px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px] h-[110px] shadow-md"

                    />
                </div>
                <div className="flex justify-center mb-[30px]">
                    <div className='font-[500] text-[14px] leading-[21px] text-[#2850C8] cursor-pointer '>
                        Add More
                    </div>
                </div>
                <div className="mt-[30px]">
                    <button
                        type="submit"
                        className="w-full h-[40px] py-[10px] bg-[#2850C8] text-white rounded-[5px] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors shadow-md text-ellipsis"
                    >
                        <span className='font-[500] text-[14px] leading-[21px] text-center'> Next</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default JobExperiences;
