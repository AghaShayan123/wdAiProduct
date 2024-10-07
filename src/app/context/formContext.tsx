"use client"
import React, { createContext, useState, ReactNode } from 'react';

interface Experience {
    companyName: string;
    joiningDate: Date | null;
    leavingDate: Date | null;
    achievements: string;
}
interface Project {
    projectTitle: string;
    projectLink: string;
    projectDescription: string;
}
// Define the shape of the form data
interface FormData {
    fullName: string;
    jobPosition: string;
    skills: string;
    experiences: Experience[];
    projects: Project[];
}

// Define the context value shape
interface FormContextType {
    formData: FormData;
    setFormData: (data: FormData) => void;
}

// Create the FormContext with default values
export const FormContext = createContext<FormContextType | undefined>(undefined);

// Create the provider component
export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        jobPosition: '',
        skills: '',
        experiences: [{ companyName: '', joiningDate: null, leavingDate: null, achievements: '' }],
        projects: [{ projectTitle: '', projectLink: '', projectDescription: '' }],
    });


    return (
        <FormContext.Provider value={{ formData, setFormData }}>
            {children}
        </FormContext.Provider>
    );
};
