import React, { useState } from "react";

const HeroSection: React.FC = () => {

  const [activeTab, setActiveTab] = useState<"candidate" | "employer">("candidate");
  const [inputText, setInputText] = useState("");

  return (
    <div className="flex flex-col justify-center items-center bg-[#f9f9f9] px-4 text-center py-14">
      <span className="bg-black text-white px-4 py-1 rounded-full text-sm mb-4">
        Exciting Job Opportunity
      </span>
      <h1 className="text-4xl font-semibold mb-6">Find a job you’ll love</h1>

      <div className="flex justify-center bg-white rounded-full shadow-md p-1 relative top-5">
          <button
            onClick={() => setActiveTab("candidate")}
            className={`px-5 md:px-10 py-2 cursor-pointer rounded-full font-medium mr-0 sm:mr-4 md:mr-8 ${
              activeTab === "candidate"
                ? "bg-blue-600 text-white"
                : "text-black"
            }`}
          >
            Candidate
          </button>
          <button
            onClick={() => setActiveTab("employer")}
            className={`px-5 md:px-10 py-2 cursor-pointer rounded-full font-medium ml-2 ${
              activeTab === "employer"
                ? "bg-blue-600 text-white"
                : "text-black"
            }`}
          >
            Employer
          </button>
        </div>

      <div className="bg-white rounded-xl shadow-md w-full max-w-xl px-6 pt-12 py-4">
        <textarea
          className="w-full border border-gray-300 rounded-md p-4 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          rows={3}
          maxLength={500}
          placeholder="Tell us a bit about yourself so we can help you find the right job! For example: 'I'm an MBA grad with 3 years in sales, now looking to move into a management role where I can grow and lead a team.'"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
        <div className="text-right text-gray-400 text-xs mt-1">{inputText.length}/500</div>
      </div>

      <div className="bg-blue-600 mt-6 p-0.5 rounded-full">
        <button className=" bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 border border-white rounded-full text-sm font-medium shadow-md transition-all">
          <img src="./assets/images/star-icon.svg" alt="AI Assistant" className="inline-block h-6 w-5 mr-4" />
          AI Assistant
        </button>
      </div>

      {/* Footer Text */}
      <p className="mt-4 text-sm text-gray-600">
        Search 40,666 new jobs – 2,320 added in the last 24 hours
      </p>
    </div>
  );
};

export default HeroSection;
