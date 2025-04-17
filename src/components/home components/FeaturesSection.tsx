import React from "react";
import { FaPlay } from "react-icons/fa";

const features = [
    {
        title: "Managing your time effectively",
        desc: "We collaborate every day to help make the world run better and improve people's lives.",
    },
    {
        title: "Make an offer they can't refuse",
        desc: "We collaborate every day to help make the world run better and improve people's lives.",
    },
    {
        title: "Maintain your hiring bar at scale",
        desc: "We collaborate every day to help make the world run better and improve people's lives.",
    },
];

const stats = [
    { value: "20K+", label: "Job Openings" },
    { value: "6K+", label: "Companies connected" },
    { value: "10K+", label: "Employees placed" },
    { value: "2K+", label: "Partnership established" },
];

const FeaturesSection: React.FC = () => {
    return (
        <section className="bg-[#020E1A] text-white px-[12%] py-16">

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                {features.map((feature, idx) => (
                    <div
                        key={idx}
                        className="bg-[#1A222B] p-6 flex flex-col items-start shadow-sm hover:shadow-md transition"
                    >
                        <div className="w-20 h-20 mb-4 flex items-center justify-center bg-[#3e4042] rounded-full text-white text-lg font-bold">
                            <img src="./assets/images/feature-icon.svg" alt="Feature Icon" className="w-9 h-9" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-400 text-sm">{feature.desc}</p>
                    </div>
                ))}
            </div>

            <div className="flex items-start justify-between">
                <div>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-2">We only deliver results.</h2>
                    <p className="text-gray-400 mb-10">
                        We don’t use excuse or something. Okay maybe sometimes.
                    </p>
                </div>

                <div className="flex justify-center gap-4 flex-wrap">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-blue-700 transition">
                        <FaPlay className="w-3 h-3" />
                        Demo
                    </button>
                    <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition">
                        Get Started
                    </button>
                </div>
            </div>

            <div className="text-center mx-auto">

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-left mb-10">
                    {stats.map((stat, index) => (
                        <div key={index}>
                            <div className="text-blue-500 text-2xl font-bold">{stat.value}</div>
                            <div className="font-medium">{stat.label}</div>
                            <p className="text-sm text-gray-400">
                                We collaborate every day to help make the world run better and improve people's lives.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;