import React from "react";
import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "About Us",
    links: [
      { title: "About Us", url: "/" },
      { title: "Management", url: "/" },
      { title: "FAQ's", url: "/" },
      { title: "Careers", url: "/" },
    ],
  },
  {
    title: "Top Companies",
    links: [
      { title: "Dell", url: "/l" },
      { title: "Microsoft", url: "/" },
      { title: "Sony", url: "/" },
      { title: "Acer", url: "/" },
    ],
  },
  {
    title: "Job Seekers",
    links: [
      { title: "Job search", url: "/" },
      { title: "Applied jobs", url: "/" },
      { title: "Recommended jobs", url: "/" },
      { title: "Saved searches", url: "/" },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="text-white">
      {/* Call to Action Section */}
      <div className="px-4 md:px-[10%] py-14 bg-[#010101]">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Want to find out more about JITO JOBS
          </h2>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-black px-6 py-2 rounded-full flex items-center gap-2 hover:bg-gray-100">
              <Phone className="w-4 h-4" />
              Call us
            </button>
            <button className="bg-white text-black px-6 py-2 rounded-full flex items-center gap-2 hover:bg-gray-100">
              <Mail className="w-4 h-4" />
              Email us
            </button>
          </div>
        </div>

        {/* Link Sections */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 text-sm text-center lg:text-left">
          {[...sections, ...sections].map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-2">{section.title}</h3>
              <ul className="space-y-1">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.url} className="hover:underline">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="px-4 md:px-[10%] flex flex-col lg:flex-row gap-8 items-center justify-between">
        {/* Logos */}
        <div className="flex flex-col items-center lg:items-center py-8 gap-2">
          <img
            src="./assets/images/seva-logo.svg"
            alt="Seva Logo"
            className="w-20 h-auto"
          />
          <img
            src="./assets/images/jito-jobs-logo.svg"
            alt="JITO Logo"
            className="w-32 h-auto"
          />
        </div>

        {/* Disclaimer Text */}
        <div className="text-[#353535] text-xs text-left max-w-3xl">
          <p>
            Jito Jobs is a platform that provides job listings and related
            career opportunities for informational purposes only. While we
            strive to ensure that all job postings and company information are
            accurate and up to date, Jito Jobs does not guarantee the
            authenticity, accuracy, or reliability of any listing or employer.
          </p>
          <p className="mt-2">
            We are not involved in the recruitment process and do not endorse
            any specific employer or job listing featured on our platform. Users
            are advised to conduct their own research and verify all job details
            directly with the employer before taking any action.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-4 md:px-[10%] mb-10 pb-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-xs text-center sm:text-left">
          © Copyright 2025 JITO™. All Rights Reserved.
        </p>

        <div className="text-gray-500 text-xs flex flex-wrap justify-center gap-4">
          <Link to="/" className="hover:underline">
            Privacy Policy
          </Link>
          <Link to="/" className="hover:underline">
            Terms & Conditions
          </Link>
          <Link to="/" className="hover:underline">
            Disclaimer
          </Link>
          <Link to="/" className="hover:underline">
            Sitemap
          </Link>
          <Link to="/" className="hover:underline">
            Cookies Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
