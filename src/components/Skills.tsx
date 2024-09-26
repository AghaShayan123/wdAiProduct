import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    fullName: yup.string().required('Full Name is required'),
    jobPosition: yup.string(),
    skills: yup.string().required('Skills are required'),
});

const Skills = () => {
    const formik = useFormik({
        initialValues: {
            fullName: '',
            jobPosition: '',
            skills: '',
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
                className="bg-white p-[50px] rounded-[10px] shadow-md w-[500px] h-[483px]"
            >
                {/* Full Name */}
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
                        className="w-full px-4 py-[10px] text-[14px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px]"
                    />
                    {formik.errors.fullName && formik.touched.fullName ? (
                        <p className="text-red-500 text-xs">{formik.errors.fullName}</p>
                    ) : null}
                </div>

                {/* Job Position */}
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
                        className="w-full px-4 py-[10px] text-[14px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px]"
                    />
                    <p className="text-[#BCBCBC] text-[10px] font-[300] leading-[15px]">e.g. Full Stack Developer</p>
                </div>

                {/* Skills */}
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
                        className="w-full px-4 py-[10px] text-[14px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1]"
                    />
                    <p className="text-[#BCBCBC] text-[10px] font-[300] leading-[15px]">Separate the skills with a comma</p>
                    {formik.errors.skills && formik.touched.skills ? (
                        <p className="text-red-500 text-xs">{formik.errors.skills}</p>
                    ) : null}
                </div>

                {/* Next Button */}
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
    )
}

export default Skills