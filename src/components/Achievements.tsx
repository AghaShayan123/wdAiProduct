import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    achievement: yup.string().required('Please enter your achievement'),
});

const AchievementsPage = () => {
    const formik = useFormik({
        initialValues: {
            achievement: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // You can handle the LinkedIn description generation here
            console.log('Achievement:', values.achievement);
        },
    });

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form
                onSubmit={formik.handleSubmit}
                className="bg-white p-8 rounded-lg shadow-md w-[400px]"
            >
                <h2 className="text-lg font-bold mb-4">Your Achievements</h2>

                {/* Textarea for Achievements */}
                <div className="mb-4">
                    <label
                        htmlFor="achievement"
                        className="block text-sm font-semibold mb-1"
                    >
                        Enter your achievement briefly
                    </label>
                    <textarea
                        id="achievement"
                        name="achievement"
                        placeholder="Enter your achievement briefly"
                        value={formik.values.achievement}
                        onChange={formik.handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
                    />
                    {formik.errors.achievement && formik.touched.achievement ? (
                        <p className="text-red-500 text-xs">{formik.errors.achievement}</p>
                    ) : null}
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    >
                        Generate LinkedIn Description
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AchievementsPage;
