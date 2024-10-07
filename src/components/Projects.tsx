import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from './Button';
import AchievementsPage from '@/components/Achievements';
import { FormContext } from '@/app/context/formContext';

interface ProjectProps {
    setActiveIndex: (index: number) => void;
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

const TopProjects: React.FC<ProjectProps> = ({ setActiveIndex }) => {
    const [showAchievements, setShowAchievements] = useState(false);
    const formContext = useContext(FormContext);

    if (!formContext) {
        throw new Error('FormContext must be used within a FormProvider');
    }

    const { formData, setFormData } = formContext;

    const [projects, setProjects] = useState([
        { projectTitle: '', projectLink: '', projectDescription: '' },
    ]);

    const formik = useFormik({
        initialValues: {
            projects: formData.projects,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('Form Values:', values);
            setFormData({ ...formData, projects: values.projects });
            setActiveIndex(3);
            setShowAchievements(true);
        },
    });

    if (showAchievements) {
        return <AchievementsPage onGenerate={() => setActiveIndex(4)} />;
    }

    const handleAddMore = () => {
        setProjects([
            ...projects,
            { projectTitle: '', projectLink: '', projectDescription: '' },
        ]);
        formik.setFieldValue('projects', [
            ...formik.values.projects,
            { projectTitle: '', projectLink: '', projectDescription: '' },
        ]);
    };

    return (
        <div className="flex justify-center items-center mt-[20px] mb-[235px]">
            <form
                onSubmit={formik.handleSubmit}
                className="bg-white py-[50px] px-[10px] md:px-[50px] rounded-lg shadow-md sm:w-[500px] w-[300px]"
            >
                <p className="block text-[16px] font-[500] mb-[8px] leading-[24px]">Top Projects</p>

                {formik.values.projects.map((project, index) => (
                    <div key={index} className="mb-[20px]">
                        <div className="mb-[20px]">
                            <input
                                id={`projects[${index}].projectTitle`}
                                name={`projects[${index}].projectTitle`}
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.projects[index].projectTitle}
                                placeholder="Enter your project title"
                                className="w-full px-4 py-[10px] text-[14px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px] shadow-md"
                            />
                            {formik.errors.projects &&
                                formik.errors.projects[index] &&
                                (formik.errors.projects[index] as any)?.projectTitle &&
                                formik.touched.projects &&
                                formik.touched.projects[index] &&
                                formik.touched.projects[index]?.projectTitle && (
                                    <p className="text-red-500 text-xs">
                                        {(formik.errors.projects[index] as any)?.projectTitle}
                                    </p>
                                )}
                        </div>

                        <div className="mb-[20px]">
                            <input
                                id={`projects[${index}].projectLink`}
                                name={`projects[${index}].projectLink`}
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.projects[index].projectLink}
                                placeholder="Enter live or demo link"
                                className="w-full px-4 py-[10px] text-[14px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px] shadow-md"
                            />
                            {formik.errors.projects &&
                                formik.errors.projects[index] &&
                                (formik.errors.projects[index] as any)?.projectLink &&
                                formik.touched.projects &&
                                formik.touched.projects[index] &&
                                formik.touched.projects[index]?.projectLink && (
                                    <p className="text-red-500 text-xs">
                                        {(formik.errors.projects[index] as any)?.projectLink}
                                    </p>
                                )}
                        </div>

                        <div className="mb-[20px]">
                            <textarea
                                id={`projects[${index}].projectDescription`}
                                name={`projects[${index}].projectDescription`}
                                onChange={formik.handleChange}
                                value={formik.values.projects[index].projectDescription}
                                placeholder="Short description (optional)"
                                className="w-full px-4 py-[10px] sm:text-[14px] text-[12px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px] h-[110px] shadow-md"
                            />
                        </div>
                        <div className="w-[150px] h-[1px] bg-[#B1B1B1] mb-[30px] mt-[10px] mx-auto"></div>
                    </div>
                ))}

                <div className="flex justify-center mb-[30px]">
                    <div
                        className="font-[500] text-[14px] leading-[21px] text-[#2850C8] cursor-pointer"
                        onClick={handleAddMore}
                    >
                        Add More
                    </div>
                </div>

                <Button text="Next" />
            </form>
        </div>
    );
};

export default TopProjects;
