const TechCareer: React.FC = () => {
    const { title, description, categories, featured, news } = careerData;

    return (
        <div className="bg-gray-50 py-10 px-4 md:px-10 lg:px-[10%]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-start">
                    {/* Left Content */}
                    <div className="w-full md:w-[40%]">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {title}
                        </h1>
                        <p className="text-gray-600 text-lg mb-6">{description}</p>

                        <h2 className="text-xl font-semibold mb-4">
                            Career Advice Categories
                        </h2>
                        <div className="flex flex-wrap gap-3 mb-8">
                            {categories.map((cat, idx) => (
                                <button
                                    key={idx}
                                    className="px-4 py-2 bg-white rounded-full text-sm border border-gray-300 hover:bg-blue-600 hover:text-white transition duration-200"
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition">
                            Get more career insights
                        </button>
                    </div>

                    {/* Right Featured Card */}

                    <div className="w-full md:w-[60%]">
                        <div className="bg-white rounded-md p-2 shadow-md overflow-hidden flex flex-col md:flex-row gap-6">
                            <img
                                src={featured.image}
                                alt="Featured"
                                className="w-full md:w-2/5 object-cover"
                            />
                            <div className="py-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {featured.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-2">{featured.description}</p>
                                <a
                                    href={featured.link}
                                    className="text-blue-600 text-sm font-medium hover:underline"
                                >
                                    {featured.linkText}
                                </a>
                            </div>
                        </div>

                        {/* News Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                            {news.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white p-2 rounded-xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-32 object-cover"
                                    />
                                    <div className="p-4">
                                        <h4 className=" text-sm font-semibold text-gray-900 mb-1">
                                            {item.title}
                                        </h4>
                                        <p className="text-xs text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>


            </div>
        </div>
    );
};


const careerData = {
    title: "Everything You Need for Your Tech Career: Advice, Tips, and More",
    description:
        "Discover Strategies for Job Searching, Company Assessment, Salary Negotiation, and Career Advancement.",
    categories: [
        "Job Hunting",
        "Resume Help",
        "Interview Tips",
        "Career Path",
        "Career Growth",
        "Diversity Equity and Inclusion",
        "Tech Connect Podcast",
    ],
    featured: {
        title:
            "Tech hiring stalls as AI hype, layoffs, tariffs, economic uncertainty, more collide",
        description:
            "The hint of optimism to be found in February's tech jobs numbers? Yeah, it's pretty much gone, according to multiple analyses of the latest data out from the US Bureau of Labor Statistics for March...",
        image:
            "./assets/images/news-pic1.svg",
        link: "#",
        linkText: "read the report",
    },
    news: [
        {
            title: "Future of Tech Recruiting: How AI Will Change Recruiting",
            description:
                "Automation has impacted recruiting for quite some time. However, the next several years...",
            image:
                "./assets/images/news-pic2.svg",
        },
        {
            title: "Building Resumes That Get Results in Tech",
            description:
                "Discover how to structure your resume to get noticed by recruiters and automated systems...",
            image:
                "./assets/images/news-pic2.svg",
        },
        {
            title: "5 Interview Tips from Senior Software Engineers",
            description:
                "Hear from seasoned developers about what they look for in candidates during tech interviews...",
            image:
                "./assets/images/news-pic2.svg",
        },
    ],
};

export default TechCareer;