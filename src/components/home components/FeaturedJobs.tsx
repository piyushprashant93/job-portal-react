import React from 'react';
import { MapPin, Crown, Heart } from 'lucide-react'; // Optional icons, install if needed

interface JobCardProps {
  company: string;
  role: string;
  category: string;
  location: string;
  salary: string;
  daysLeft: number;
  remote: boolean;
  logo: string; 
}

const JobCard: React.FC<JobCardProps> = ({
  company,
  role,
  category,
  location,
  salary,
  daysLeft,
  remote,
  logo,
}) => {
  return (
    <div className="bg-white rounded-md shadow-md p-5 w-full flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
            <img src={logo} alt={`${company} logo`} className="w-10 h-10 rounded-full" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{role}</h3>
          <p className="text-sm">
            by <span className="font-semibold">{company}</span> in{' '}
            <span className="text-blue-600 font-medium cursor-pointer">{category}</span>
          </p>
        </div>
        <div className="ml-auto text-yellow-500">
          <Crown size={20} />
        </div>
        <div className="text-red-500">
          <Heart size={20} />
        </div>
      </div>
      <div className="flex flex-wrap gap-2 text-sm">
        {remote && (
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">Remote</span>
        )}
        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full flex items-center gap-1">
          <MapPin size={14} />
          {location}
        </span>
        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">{salary}</span>
      </div>
      <p className="text-sm ">
        <span className='text-blue-600 mr-1 font-medium'>{daysLeft}</span>
        days left to apply
    </p>
    </div>
  );
};

const FeaturedJobs: React.FC = () => {

    const jobData: JobCardProps[] = Array(6).fill({
        company: 'YOKO Soft',
        role: 'UX/UI Designer',
        category: 'Design & Creative',
        location: 'Mumbai',
        salary: '₹ 45K – 65K/month',
        daysLeft: 103,
        remote: true,
        logo: './assets/images/yoko-logo.svg',
    });

  return (
    <section className="bg-gray-50 py-10 px-4 sm:px-8 lg:px-[10%]">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold">Featured remote jobs</h2>
        <p className="text-gray-500 mt-2">Explore 1K+ remote job opportunities</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 justify-items-center">
        {jobData.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="px-8 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
          Load More
        </button>
      </div>
    </section>
  );
};

export default FeaturedJobs;