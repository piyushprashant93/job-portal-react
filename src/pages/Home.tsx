import HeroSection from "../components/home components/HeroSection";
import HiringBanner from "../components/home components/HiringBanner";
import FeaturesSection from "../components/home components/FeaturesSection";
import JobCategories from "../components/home components/JobCategories";
import FeaturedJobs from "../components/home components/FeaturedJobs";
import JobSteps from "../components/home components/JobSteps";
import TechCareer from "../components/home components/TechCareer"
import FAQs from "../components/home components/FAQs";

const Home = () => {
    return (
        <div className="">
            <HeroSection />
            <HiringBanner />
            <FeaturesSection />
            <JobCategories />
            <FeaturedJobs />
            <JobSteps />
            <TechCareer />
            <FAQs />
        </div>
    );
}

export default Home;