import React from 'react';
import { useFormik, FormikProvider, FieldArray } from 'formik';
import * as yup from 'yup';

// Define the type for project object
interface Project {
    projectTitle: string;
    projectLink: string;
    projectDescription: string;
}

// Define the type for the form values
interface FormValues {
    projects: Project[];
}

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
    const formik = useFormik<FormValues>({
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
                    className="bg-white p-8 rounded-lg shadow-md sm:w-[500px] w-[300px]"
                >
                    <p className="block text-[16px] font-[500] mb-[8px] leading-[24px]">Top Projects</p>

                    <FieldArray name="projects">
                        {({ remove, push }) => (
                            <div>
                                {formik.values.projects.map((project, index) => (
                                    <div key={index} className="mb-8">
                                        {/* Project Title */}
                                        <div className="mb-[20px]">
                                            <input
                                                id={`projects.${index}.projectTitle`}
                                                name={`projects.${index}.projectTitle`}
                                                type="text"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur} // For touched state
                                                value={project.projectTitle}
                                                placeholder="Enter your project title"
                                                className="w-full px-4 py-[10px] text-[14px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px] shadow-md"
                                            />
                                            {/* Error Handling */}
                                            {formik.touched.projects?.[index]?.projectTitle &&
                                                (formik.errors.projects && Array.isArray(formik.errors.projects) &&
                                                    formik.errors.projects[index]?.projectTitle) ? (
                                                <p className="text-red-500 text-xs">
                                                    {formik.errors.projects[index].projectTitle}
                                                </p>
                                            ) : null}
                                        </div>

                                        {/* Project Link */}
                                        <div className="mb-4">
                                            <input
                                                id={`projects.${index}.projectLink`}
                                                name={`projects.${index}.projectLink`}
                                                type="url"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur} // For touched state
                                                value={project.projectLink}
                                                placeholder="Enter live or demo link"
                                                className="w-full px-4 py-[10px] text-[14px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px] shadow-md"
                                            />
                                            {/* Error Handling */}
                                            {formik.touched.projects?.[index]?.projectLink &&
                                                (formik.errors.projects && Array.isArray(formik.errors.projects) &&
                                                    formik.errors.projects[index]?.projectLink) ? (
                                                <p className="text-red-500 text-xs">
                                                    {formik.errors.projects[index].projectLink}
                                                </p>
                                            ) : null}
                                        </div>

                                        {/* Project Description */}
                                        <div className="mb-4">
                                            <textarea
                                                id={`projects.${index}.projectDescription`}
                                                name={`projects.${index}.projectDescription`}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={project.projectDescription}
                                                placeholder="Short description (optional)"
                                                className="w-full px-4 py-[10px] text-[14px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px] h-[110px] shadow-md"
                                            />
                                        </div>
                                        <div className='w-[150px] h-[1px] bg-[#B1B1B1] mb-[30px] mt-[10px] mx-auto'></div>
                                        <div className="mb-[20px]">
                                            <input
                                                id={`projects.${index}.projectTitle`}
                                                name={`projects.${index}.projectTitle`}
                                                type="text"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur} // For touched state
                                                value={project.projectTitle}
                                                placeholder="Enter your project title"
                                                className="w-full px-4 py-[10px] text-[14px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px] shadow-md"
                                            />
                                            {/* Error Handling */}
                                            {formik.touched.projects?.[index]?.projectTitle &&
                                                (formik.errors.projects && Array.isArray(formik.errors.projects) &&
                                                    formik.errors.projects[index]?.projectTitle) ? (
                                                <p className="text-red-500 text-xs">
                                                    {formik.errors.projects[index].projectTitle}
                                                </p>
                                            ) : null}
                                        </div>
                                        <div className="mb-4">
                                            <input
                                                id={`projects.${index}.projectLink`}
                                                name={`projects.${index}.projectLink`}
                                                type="url"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur} // For touched state
                                                value={project.projectLink}
                                                placeholder="Enter live or demo link"
                                                className="w-full px-4 py-[10px] text-[14px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px] shadow-md"
                                            />
                                            {/* Error Handling */}
                                            {formik.touched.projects?.[index]?.projectLink &&
                                                (formik.errors.projects && Array.isArray(formik.errors.projects) &&
                                                    formik.errors.projects[index]?.projectLink) ? (
                                                <p className="text-red-500 text-xs">
                                                    {formik.errors.projects[index].projectLink}
                                                </p>
                                            ) : null}
                                        </div>
                                        <div className="mb-4">
                                            <textarea
                                                id={`projects.${index}.projectDescription`}
                                                name={`projects.${index}.projectDescription`}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={project.projectDescription}
                                                placeholder="Short description (optional)"
                                                className="w-full px-4 py-[10px] text-[14px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px] h-[110px] shadow-md"
                                            />
                                        </div>
                                        {/* Divider */}
                                        {index !== formik.values.projects.length - 1 && (
                                            <hr className="my-6 border-t border-gray-300" />
                                        )}
                                    </div>
                                ))}

                                {/* Add More Button */}
                                <div className="flex justify-center mb-[30px]">
                                    <div className='font-[500] text-[14px] leading-[21px] text-[#2850C8] cursor-pointer '>
                                        Add More
                                    </div>
                                </div>
                            </div>
                        )}
                    </FieldArray>

                    {/* Next Button */}
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
        </FormikProvider>
    );
};

export default TopProjects;
