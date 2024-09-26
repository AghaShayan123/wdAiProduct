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
                className="bg-white p-8 rounded-lg shadow-md w-[500px]"
            >
                {/* Company Name */}
                <div className="mb-4">
                    <label
                        htmlFor="companyName"
                        className="block text-sm font-semibold mb-1"
                    >
                        Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="companyName"
                        name="companyName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.companyName}
                        placeholder="Enter your company name"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {formik.errors.companyName && formik.touched.companyName ? (
                        <p className="text-red-500 text-xs">{formik.errors.companyName}</p>
                    ) : null}
                </div>

                {/* Job Title */}
                <div className="mb-4">
                    <label
                        htmlFor="jobTitle"
                        className="block text-sm font-semibold mb-1"
                    >
                        Job Title <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="jobTitle"
                        name="jobTitle"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.jobTitle}
                        placeholder="Enter your job title"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {formik.errors.jobTitle && formik.touched.jobTitle ? (
                        <p className="text-red-500 text-xs">{formik.errors.jobTitle}</p>
                    ) : null}
                </div>

                {/* Joining Date */}
                <div className="mb-4">
                    <label
                        htmlFor="joiningDate"
                        className="block text-sm font-semibold mb-1"
                    >
                        Joining Date <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="joiningDate"
                        name="joiningDate"
                        type="date"
                        onChange={formik.handleChange}
                        value={formik.values.joiningDate}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {formik.errors.joiningDate && formik.touched.joiningDate ? (
                        <p className="text-red-500 text-xs">{formik.errors.joiningDate}</p>
                    ) : null}
                </div>

                {/* Leaving Date */}
                <div className="mb-4">
                    <label
                        htmlFor="leavingDate"
                        className="block text-sm font-semibold mb-1"
                    >
                        Leaving Date <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="leavingDate"
                        name="leavingDate"
                        type="date"
                        onChange={formik.handleChange}
                        value={formik.values.leavingDate}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {formik.errors.leavingDate && formik.touched.leavingDate ? (
                        <p className="text-red-500 text-xs">{formik.errors.leavingDate}</p>
                    ) : null}
                </div>

                {/* Achievements (Optional) */}
                <div className="mb-4">
                    <label
                        htmlFor="achievements"
                        className="block text-sm font-semibold mb-1"
                    >
                        Achievements (Optional)
                    </label>
                    <textarea
                        id="achievements"
                        name="achievements"
                        onChange={formik.handleChange}
                        value={formik.values.achievements}
                        placeholder="What did you achieve in this role?"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
                    />
                </div>

                {/* Submit Button */}
                <div className="mt-6">
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    >
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
};

export default JobExperiences;
