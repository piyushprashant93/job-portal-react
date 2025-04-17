import React from "react";

const users = [
    { id: 1, img: "./assets/images/user1.svg" },
    { id: 2, img: "./assets/images/user2.svg" },
    { id: 3, img: "./assets/images/user3.svg" },
    { id: 4, img: "./assets/images/user4.svg" },
    { id: 5, img: "./assets/images/user5.svg" },
    { id: 6, img: "./assets/images/user6.svg" },
];

const companies = [
    { id: 1, img: "./assets/images/company1.svg" },
    { id: 2, img: "./assets/images/company2.svg" },
    { id: 3, img: "./assets/images/company3.svg" },
    { id: 4, img: "./assets/images/company4.svg" },
    { id: 5, img: "./assets/images/company5.svg" },
    { id: 6, img: "./assets/images/company6.svg" },
    { id: 7, img: "./assets/images/company7.svg" },
    { id: 8, img: "./assets/images/company8.svg" },
    { id: 9, img: "./assets/images/company9.svg" },
]

const HiringBanner: React.FC = () => {
    return (
        <div className="px-4 py-12 text-center bg-white">

            <div className="flex items-center justify-center flex-wrap gap-4 mb-8">
                {
                    companies.map((company) => (
                        <img
                            key={company.id}
                            src={company.img}
                            alt={`Company ${company.id}`}
                            className="object-cover mx-2 "
                        />
                    ))
                }
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-gray-800 max-w-3xl mx-auto">
                Explore thousands of employees hired by top tech employers on{" "}
                <span className="text-blue-600 font-bold">Jito Jobs</span>
            </h2>

            <div className="mt-8 flex items-center flex-wrap gap-4 justify-center">
                {users.map((user) => (
                    <div key={user.id} className="flex items-center flex-wrap justify-center">
                        <img
                            src={user.img}
                            alt={`User ${user.id}`}
                            className="w-28 h-28 object-cover shadow-md"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HiringBanner;