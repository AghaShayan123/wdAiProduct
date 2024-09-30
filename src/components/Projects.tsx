import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    projectTitle: yup.string().required('Project title is required'),
    projectLink: yup.string().url('Invalid URL').required('Live or demo link is required'),
    projectDescription: yup.string(),
});

const TopProjects = () => {
    const formik = useFormik({
        initialValues: {
            projectTitle: '',
            projectLink: '',
            projectDescription: '',

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
                className="bg-white p-8 rounded-lg shadow-md sm:w-[500px] w-[300px]"
            >
                <p className="block text-[16px] font-[500] mb-[8px] leading-[24px]">Top Projects</p>

                <div className="mb-[20px]">
                    <input
                        id="projectTitle"
                        name="projectTitle"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.projectTitle}
                        placeholder="Enter your project title"
                        className="w-full px-4 py-[10px] text-[14px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px] shadow-md"
                    />
                    {formik.errors.projectTitle && formik.touched.projectTitle ? (
                        <p className="text-red-500 text-xs">{formik.errors.projectTitle}</p>
                    ) : null}
                </div>
                <div className="mb-[20px]">
                    <input
                        id="projectLink"
                        name="projectLink"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.projectLink}
                        placeholder="Enter live or demo link"
                        className="w-full px-4 py-[10px] text-[14px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px] shadow-md"
                    />
                    {formik.errors.projectLink && formik.touched.projectLink ? (
                        <p className="text-red-500 text-xs">{formik.errors.projectLink}</p>
                    ) : null}
                </div>
                <div className="mb-[20px]">
                    <textarea
                        id="projectDescription"
                        name="projectDescription"
                        onChange={formik.handleChange}
                        value={formik.values.projectDescription}
                        placeholder="Short description (optional)"
                        className="w-full px-4 py-[10px] sm:text-[14px] text-[12px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px] h-[110px] shadow-md"

                    />
                </div>
                <div className='w-[150px] h-[1px] bg-[#B1B1B1] mb-[30px] mt-[10px] mx-auto'></div>
                <div className="mb-[20px]">
                    <input
                        id="projectTitle"
                        name="projectTitle"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.projectTitle}
                        placeholder="Enter your project title"
                        className="w-full px-4 py-[10px] text-[14px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px] shadow-md"
                    />
                    {formik.errors.projectTitle && formik.touched.projectTitle ? (
                        <p className="text-red-500 text-xs">{formik.errors.projectTitle}</p>
                    ) : null}
                </div>
                <div className="mb-[20px]">
                    <input
                        id="projectLink"
                        name="projectLink"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.projectLink}
                        placeholder="Enter live or demo link"
                        className="w-full px-4 py-[10px] text-[14px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px] shadow-md"
                    />
                    {formik.errors.projectLink && formik.touched.projectLink ? (
                        <p className="text-red-500 text-xs">{formik.errors.projectLink}</p>
                    ) : null}
                </div>
                <div className="mb-[20px]">
                    <textarea
                        id="projectDescription"
                        name="projectDescription"
                        onChange={formik.handleChange}
                        value={formik.values.projectDescription}
                        placeholder="Short description (optional)"
                        className="w-full px-4 py-[10px] sm:text-[14px] text-[12px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px] h-[110px] shadow-md"

                    />
                </div>
                <div className="flex justify-center mb-[30px]">
                    <div className='font-[500] text-[14px] leading-[21px] text-[#2850C8] cursor-pointer '>
                        Add More
                    </div>
                </div>
                <div className="mt-6">
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors shadow-md"
                    >
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TopProjects;
