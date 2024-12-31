import { FiSearch } from "react-icons/fi";
import GetStarted from "../components/GetStarted";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";

import OverviewAccount from "../components/OverviewAccount";
const Search = () => {
  return (
    <form className="w-[600px] p-2  border-2 border-[#f2f2f2] rounded-sm max-sm:w-3/4">
      <label htmlFor="search" className="sr-only"></label>
      <div className="flex items-center ">
        <FiSearch />
        <input
          type="text"
          placeholder="Search"
          className="ml-2 bg-inherit outline-none "
        />
      </div>
    </form>
  );
};
const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-white shadow-md z-50 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 w-3/4 max-w-sm`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-bold">Menu</h2>
        <button onClick={onClose} aria-label="Close menu" className="text-xl">
          <AiOutlineClose />
        </button>
      </div>
      <nav className="p-4">
        <ul className="space-y-4">
          <li>
            <a href="#overview" className="text-gray-700 hover:text-black">
              Overview
            </a>
          </li>
          <li>
            <a href="#account" className="text-gray-700 hover:text-black">
              Account
            </a>
          </li>
          <li>
            <a href="#get-started" className="text-gray-700 hover:text-black">
              Get Started
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const SidebarMenu = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div style={windowWidth > 768 ? { display: "none" } : {}} className="">
      <button onClick={onClose} aria-label="Close menu" className="text-xl">
        <AiOutlineMenu size="24" />
      </button>
    </div>
  );
};
const Header = ({ onOpen }) => {
  return (
    <header className="flex justify-center items-center bg-[#fff]  sticky top-0 left-0 z-100 w-full p-2 h-[70px] max-sm:flex max-sm:justify-between max-md:flex max-md:justify-between ">
      <Search />
      <SidebarMenu onOpen={onOpen} />
    </header>
  );
};

const Overview = () => {
  return (
    <div>
      <h2 className="font-bold text-xl">Overview</h2>
    </div>
  );
};

function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <OverviewAccount />
      <GetStarted />
      <Overview />
    </div>
  );
}

export default Home;
