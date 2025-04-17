import { FC } from "react";
import { Link } from "react-router-dom";
import { VscChromeClose } from "react-icons/vsc";

interface NavBarMobileViewProps {
    isOpen: boolean;
    setIsOpen: () => void;
    navLinks: {
        name: string;
        path: string;
    }[];
}

const NavBarMobileView: FC<NavBarMobileViewProps> = ({ isOpen, setIsOpen, navLinks }) => {
    return (
        <section
            className={`fixed top-0 right-0 w-[300px] h-screen bg-white text-black flex flex-col md:hidden z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                }`}
        >
            {/* Close Button */}
            <div className="flex justify-end pt-6 px-6">
                <button onClick={setIsOpen}>
                    <VscChromeClose className="text-2xl" />
                </button>
            </div>

            {/* Navigation Links */}
            <div className="px-6">
                {navLinks.map((link, index) => (
                    <div
                        key={link.name}
                        className={`flex justify-center items-center h-16 ${index < navLinks.length - 1 ? "border-b" : ""
                            } border-gray-300 hover:bg-gray-100 transition-colors`}
                    >
                        <Link
                            to={link.path}
                            className="w-full text-center text-base font-medium text-black"
                            onClick={setIsOpen}
                        >
                            {link.name}
                        </Link>
                    </div>
                ))}
            </div>

            <div className="mt-auto px-6 py-4 flex justify-center gap-6">
                <Link to="/" className="flex items-center text-[15px] font-medium bg-[#e2e6ee] px-4 py-2 rounded-3xl">
                    <img src="./assets/images/sign-in.svg" alt="Sign In" className="h-[14px] w-[14px] mr-1" />
                    Sign In
                </Link>
                <Link to="/" className="flex items-center text-[15px] font-medium bg-[#0368FF] px-4 py-2 rounded-3xl text-white">
                    <img src="./assets/images/upload-icon.svg" alt="Sign Up" className="h-[14px] w-[14px] mr-1" />
                    Upload CV
                </Link>
            </div>
        </section>
    );
};

export default NavBarMobileView;
