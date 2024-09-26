import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    companyName: yup.string().required('Company name is required'),
    jobTitle: yup.string().required('Job title is required'),
    joiningDate: yup.string().required('Joining date is required'),
    leavingDate: yup.string().required('Leaving date is required'),
    achievements: yup.string(),
});

const JobExperiences = () => {
    const formik = useFormik({
        initialValues: {
            companyName: '',
            jobTitle: '',
            joiningDate: '',
            leavingDate: '',
            achievements: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('Form Values:', values);
        },
    });

    return (
        <div className="flex justify-center items-center mt-[20px] mb-[235px]">
            <form
                onSubmit={formik.handleSubmit}
                className="bg-white p-[50px] rounded-[10px] shadow-md w-[500px]"
            >
                <p className='block text-[16px] font-[500] mb-[8px] leading-[24px]'>Job Experiences</p>
                {/* Company Name */}
                <div className="mb-[20px]">
                    <input
                        id="companyName"
                        name="companyName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.companyName}
                        placeholder="Enter your company name"
                        className="w-full px-4 py-[10px] text-[14px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px]"
                    />
                    <p className="text-[#BCBCBC] text-[10px] font-[300] leading-[15px]">e.g. Google</p>
                    {formik.errors.companyName && formik.touched.companyName ? (
                        <p className="text-red-500 text-xs">{formik.errors.companyName}</p>
                    ) : null}
                </div>

                {/* Job Title */}
                <div className="mb-[20px]">
                    <input
                        id="jobTitle"
                        name="jobTitle"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.jobTitle}
                        placeholder="Enter your job title"
                        className="w-full px-4 py-[10px] text-[14px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px]"
                    />
                    <p className="text-[#BCBCBC] text-[10px] font-[300] leading-[15px]">e.g. Full Stack Developer</p>
                    {formik.errors.jobTitle && formik.touched.jobTitle ? (
                        <p className="text-red-500 text-xs">{formik.errors.jobTitle}</p>
                    ) : null}
                </div>

                {/* Joining Date */}
                <div className="mb-[20px]">
                    <input
                        id="joiningDate"
                        name="joiningDate"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.joiningDate}
                        placeholder="Select your joining date"
                        className="w-full px-4 py-[10px] text-[14px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px]"
                    />
                    <p className="text-[#BCBCBC] text-[10px] font-[300] leading-[15px]">e.g. April 2020</p>
                    {formik.errors.joiningDate && formik.touched.joiningDate ? (
                        <p className="text-red-500 text-xs">{formik.errors.joiningDate}</p>
                    ) : null}
                </div>

                {/* Leaving Date */}
                <div className="mb-[20px]">
                    <input
                        id="leavingDate"
                        name="leavingDate"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.leavingDate}
                        placeholder="Select your leaving date"
                        className="w-full px-4 py-[10px] text-[14px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px]"
                    />
                    <p className="text-[#BCBCBC] text-[10px] font-[300] leading-[15px]">e.g. April 2021</p>
                    {formik.errors.leavingDate && formik.touched.leavingDate ? (
                        <p className="text-red-500 text-xs">{formik.errors.leavingDate}</p>
                    ) : null}
                </div>

                {/* Achievements (Optional) */}
                <div className="mb-[20px]">
                    <textarea
                        id="achievements"
                        name="achievements"
                        onChange={formik.handleChange}
                        value={formik.values.achievements}
                        placeholder="What's your achievements in that company (optional)"
                        className="w-full px-4 py-[10px] text-[14px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px] h-[110px]"
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
                        className="w-full px-4 py-[10px] text-[14px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px]"
                    />
                    <p className="text-[#BCBCBC] text-[10px] font-[300] leading-[15px]">e.g. Google</p>
                    {formik.errors.companyName && formik.touched.companyName ? (
                        <p className="text-red-500 text-xs">{formik.errors.companyName}</p>
                    ) : null}
                </div>
                <div className="mb-[20px]">
                    <input
                        id="jobTitle"
                        name="jobTitle"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.jobTitle}
                        placeholder="Enter your job title"
                        className="w-full px-4 py-[10px] text-[14px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px]"
                    />
                    <p className="text-[#BCBCBC] text-[10px] font-[300] leading-[15px]">e.g. Full Stack Developer</p>
                    {formik.errors.jobTitle && formik.touched.jobTitle ? (
                        <p className="text-red-500 text-xs">{formik.errors.jobTitle}</p>
                    ) : null}
                </div>
                <div className="mb-[20px]">
                    <input
                        id="joiningDate"
                        name="joiningDate"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.joiningDate}
                        placeholder="Select your joining date"
                        className="w-full px-4 py-[10px] text-[14px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px]"
                    />
                    <p className="text-[#BCBCBC] text-[10px] font-[300] leading-[15px]">e.g. April 2020</p>
                    {formik.errors.joiningDate && formik.touched.joiningDate ? (
                        <p className="text-red-500 text-xs">{formik.errors.joiningDate}</p>
                    ) : null}
                </div>
                <div className="mb-[20px]">
                    <input
                        id="leavingDate"
                        name="leavingDate"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.leavingDate}
                        placeholder="Select your leaving date"
                        className="w-full px-4 py-[10px] text-[14px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px]"
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
                        className="w-full px-4 py-[10px] text-[14px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px] h-[110px]"
                    />
                </div>
                <div className="flex justify-center mb-[30px]">
                    <div className='font-[500] text-[14px] leading-[21px] text-[#2850C8] cursor-pointer'>
                        Add More
                    </div>
                </div>
                {/* Submit Button */}
                <div className="mt-[30px]">
                    <button
                        type="submit"
                        className="w-full h-[40px] py-[10px] bg-[#2850C8] text-white rounded-[5px] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    >
                        <span className='font-[500] text-[14px] leading-[21px] text-center'> Next</span>

                    </button>
                </div>
            </form>
        </div>
    );
};

export default JobExperiences;
