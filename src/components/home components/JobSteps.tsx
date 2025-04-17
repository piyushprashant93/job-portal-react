// components/JobSteps.tsx
import React from 'react';

const steps = [
    {
        id: '01',
        title: 'Account',
        description: 'Make an account to control your application, monitor your progress, and get information for your job hunt.',
    },
    {
        id: '02',
        title: 'CV/Resume',
        description: 'Make an account to control your application, monitor your progress, and get information for your job hunt.',
    },
    {
        id: '03',
        title: 'Quick Jobs',
        description: 'Make an account to control your application, monitor your progress, and get information for your job hunt.',

    },
    {
        id: '04',
        title: 'Apply Them',
        description: 'Make an account to control your application, monitor your progress, and get information for your job hunt.',

    },
];

const JobSteps: React.FC = () => {
    return (
        <div className="w-full px-4 md:px-[10%] py-10 md:py-16 bg-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get your Dream Job and Make your Own Goals
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-10 max-w-2xl mx-auto">
                To obtain the job you desire, follow these procedures. We’ll assist you in locating a career that aligns with your interests.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {steps.map((step) => (
                    <div
                        key={step.id}
                        className="rounded-sm text-left border p-6 h-full transition-all duration-300 ease-in-out hover:bg-[#0368FF] hover:text-white"
                    >
                        <div
                            className="text-7xl font-bold mb-4 text-[#D9D9D9] w-full text-right"
                        >
                            {step.id}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-sm md:text-base leading-relaxed">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobSteps;
