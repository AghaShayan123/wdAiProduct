import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from './Button';


interface AchievementsPageProps {
    onGenerate: () => void;
}

const validationSchema = yup.object({
    achievement: yup.string().required('Please enter your achievement'),
});

const AchievementsPage: React.FC<AchievementsPageProps> = ({ onGenerate }) => {
    const formik = useFormik({
        initialValues: {
            achievement: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('Achievement:', values.achievement);
            onGenerate();
        },
    });

    return (
        <div className="flex justify-center items-center mt-[20px] mb-[235px]">
            <form
                onSubmit={formik.handleSubmit}
                className="bg-white py-[50px] px-[10px] md:px-[50px] rounded-[10px] shadow-md w-[300px] sm:w-[500px]"
            >
                <p className="block text-[16px] font-[500] mb-[8px] leading-[24px]">Your Achievements</p>


                <div className="mb-[20px]">
                    <textarea
                        id="achievement"
                        name="achievement"
                        placeholder="Enter your achievement briefly"
                        value={formik.values.achievement}
                        onChange={formik.handleChange}
                        className="w-full px-4 py-[10px] sm:text-[14px] text-[12px] border border-[#B1B1B1] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#B1B1B1] leading-[21px] h-[232px] shadow-md"
                    />
                    {formik.errors.achievement && formik.touched.achievement ? (
                        <p className="text-red-500 text-xs">{formik.errors.achievement}</p>
                    ) : null}
                </div>
                <Button text='Generate Linkedin Description' />
            </form>
        </div>
    );
};

export default AchievementsPage;
