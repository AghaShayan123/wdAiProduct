import React, { useState } from 'react';
import { useFormik, FormikProvider, FieldArray } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    projects: yup.array().of(
        yup.object({
            projectTitle: yup.string().required('Project title is required'),
            projectLink: yup.string().url('Invalid URL').required('Live or demo link is required'),
            projectDescription: yup.string(),
        })
    ),
});

const TopProjects = () => {
    const formik = useFormik({
        initialValues: {
            projects: [
                {
                    projectTitle: '',
                    projectLink: '',
                    projectDescription: '',
                },
            ],
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('Form Values:', values);
        },
    });

    return (
        <FormikProvider value={formik}>
            <div className="flex justify-center items-center mt-10 mb-20">
                <form
                    onSubmit={formik.handleSubmit}
                    className="bg-white p-8 rounded-lg shadow-md w-[500px]"
                >
                    <h2 className="text-lg font-bold mb-4">Top Projects</h2>

                    <FieldArray name="projects">
                        {({ remove, push }) => (
                            <div>
                                {formik.values.projects.map((project, index) => (
                                    <div key={index} className="mb-8">
                                        {/* Project Title */}
                                        <div className="mb-4">
                                            <label
                                                htmlFor={`projects.${index}.projectTitle`}
                                                className="block text-sm font-semibold mb-1"
                                            >
                                                Enter your project title
                                            </label>
                                            <input
                                                id={`projects.${index}.projectTitle`}
                                                name={`projects.${index}.projectTitle`}
                                                type="text"
                                                onChange={formik.handleChange}
                                                value={project.projectTitle}
                                                placeholder="Enter your project title"
                                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                            {formik.errors.projects?.[index]?.projectTitle && formik.touched.projects?.[index]?.projectTitle ? (
                                                <p className="text-red-500 text-xs">{formik.errors.projects[index].projectTitle}</p>
                                            ) : null}
                                        </div>

                                        {/* Project Link */}
                                        <div className="mb-4">
                                            <label
                                                htmlFor={`projects.${index}.projectLink`}
                                                className="block text-sm font-semibold mb-1"
                                            >
                                                Enter live or demo link
                                            </label>
                                            <input
                                                id={`projects.${index}.projectLink`}
                                                name={`projects.${index}.projectLink`}
                                                type="url"
                                                onChange={formik.handleChange}
                                                value={project.projectLink}
                                                placeholder="Enter live or demo link"
                                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                            {formik.errors.projects?.[index]?.projectLink && formik.touched.projects?.[index]?.projectLink ? (
                                                <p className="text-red-500 text-xs">{formik.errors.projects[index].projectLink}</p>
                                            ) : null}
                                        </div>

                                        {/* Project Description */}
                                        <div className="mb-4">
                                            <label
                                                htmlFor={`projects.${index}.projectDescription`}
                                                className="block text-sm font-semibold mb-1"
                                            >
                                                Short description (optional)
                                            </label>
                                            <textarea
                                                id={`projects.${index}.projectDescription`}
                                                name={`projects.${index}.projectDescription`}
                                                onChange={formik.handleChange}
                                                value={project.projectDescription}
                                                placeholder="Short description (optional)"
                                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
                                            />
                                        </div>

                                        {/* Divider */}
                                        {index !== formik.values.projects.length - 1 && (
                                            <hr className="my-6 border-t border-gray-300" />
                                        )}
                                    </div>
                                ))}

                                {/* Add More Button */}
                                <div className="text-center">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            push({
                                                projectTitle: '',
                                                projectLink: '',
                                                projectDescription: '',
                                            })
                                        }
                                        className="text-blue-600 font-semibold"
                                    >
                                        Add More
                                    </button>
                                </div>
                            </div>
                        )}
                    </FieldArray>

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
        </FormikProvider>
    );
};

export default TopProjects;
