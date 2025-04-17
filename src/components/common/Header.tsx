import { Link } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";
import NavBarMobileView from "./NavBarMobileView";

const Header = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

    const navLinks = [
        {
            name: "Job search",
            path: "/",
        },
        {
            name: "Profile",
            path: "/",
        },
        {
            name: "Career advice",
            path: "/",
        },
        {
            name: "Explore companies",
            path: "/",
        }
    ]

    return (
        <nav className="py-3 px-8 lg:px-[8%] flex items-center justify-between sticky top-0 bg-white z-10">
            <div className="flex items-center mr-8">
                <img src="./assets/images/seva-logo.svg" alt="Seva Logo" className="h-20 w-16 mr-3" />
                <img src="./assets/images/jito-jobs-logo.svg" alt="Jito Jobs Logo" className="h-12 w-28" />
            </div>

            <MdOutlineMenu onClick={toggleMenu} className="text-3xl text-gray-700 cursor-pointer md:hidden" />
            <NavBarMobileView isOpen={isOpen} setIsOpen={closeMenu} navLinks={navLinks} />

            <ul className="space-x-6 lg:space-x-6 hidden md:flex">
                {
                    navLinks.map((link, index) => (
                        <li key={index} className="inline-block ">
                            <Link to={link.path} className="text-sm md:text-base font-medium">
                                {link.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>

            <div className="ml-auto hidden md:flex items-center space-x-4">
                <Link to="/" className="flex items-center text-[15px] font-medium">
                    <img src="./assets/images/sign-in.svg" alt="Sign In" className="h-[14px] w-[14px] mr-1" />
                    Sign In
                </Link>
                <Link to="/" className="flex items-center text-[15px] font-medium bg-[#0368FF] px-4 py-2 rounded-3xl text-white">
                    <img src="./assets/images/upload-icon.svg" alt="Sign Up" className="h-[14px] w-[14px] mr-1" />
                    Upload CV
                </Link>
            </div>
        </nav>
    )
}

export default Header;