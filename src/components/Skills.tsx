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
                className="bg-white p-8 rounded-lg shadow-md w-[500px]"
            >
                {/* Full Name */}
                <div className="mb-4">
                    <label
                        htmlFor="fullName"
                        className="block text-sm font-semibold mb-1"
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
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {formik.errors.fullName && formik.touched.fullName ? (
                        <p className="text-red-500 text-xs">{formik.errors.fullName}</p>
                    ) : null}
                </div>

                {/* Job Position */}
                <div className="mb-4">
                    <label
                        htmlFor="jobPosition"
                        className="block text-sm font-semibold mb-1"
                    >
                        Job Position
                    </label>
                    <input
                        id="jobPosition"
                        name="jobPosition"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.jobPosition}
                        placeholder="e.g. Full Stack Developer"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Skills */}
                <div className="mb-4">
                    <label
                        htmlFor="skills"
                        className="block text-sm font-semibold mb-1"
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
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-gray-400 text-xs">Separate the skills with a comma</p>
                    {formik.errors.skills && formik.touched.skills ? (
                        <p className="text-red-500 text-xs">{formik.errors.skills}</p>
                    ) : null}
                </div>

                {/* Next Button */}
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
    )
}

export default Skills