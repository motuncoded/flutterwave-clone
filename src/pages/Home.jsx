import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import GetStarted from "../components/GetStarted";
import OverviewAccount from "../components/OverviewAccount";
import PropTypes from "prop-types";
import Overview from "../components/Overview";
// Search component
const Search = () => {
  return (
    <form className="w-[600px] p-2 border-2 border-[#f2f2f2] rounded-sm max-sm:w-3/4">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="flex items-center">
        <FiSearch />
        <input
          id="search"
          type="text"
          placeholder="Search"
          className="ml-2 bg-inherit outline-none"
        />
      </div>
    </form>
  );
};
// Sidebar component that displays navigation links
const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-[#f4f6f8] shadow-md z-50 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 w-4/6 max-w-sm`}
    >
      <div className="flex justify-between items-center p-6 max-sm:px-4">
        <div className="flex justify-between">
          <span className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white bg-[#ff9b00]">
            MA
          </span>
          <div className="ml-2">
            <h1 className="text-[14px]">Motunrayo Adeneye</h1>
            <h2 className="text-[10px] text-[#828282]">
              Merchant ID: <span className="text-[#576ae6]">View here</span>
            </h2>
          </div>
        </div>
        <button onClick={onClose} aria-label="Close menu" className="text-xl">
          <AiOutlineClose />
        </button>
      </div>
      <nav className="p-4">
        <ul className="">
          {[
            { name: "Home", to: "/dashboard/home" },
            { name: "Transactions", to: "/dashboard/transactions" },
            { name: "Customers", to: "/dashboard/customers" },
            { name: "Balances", to: "/dashboard/balances" },
            { name: "Store", to: "/dashboard/store" },
            { name: "Payments", to: "/dashboard/payments" },
            { name: "Subaccounts", to: "/dashboard/subaccounts" },
            { name: "Settings", to: "/dashboard/settings" },
          ].map((item) => (
            <li
              key={item.to}
              className=" py-1.5 text-2xl leading-[34px] font-medium relative"
            >
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#ff9b00] relative after:content-[''] after:block after:w-full after:h-0.5 after:bg-[#ff9b00] after:absolute after:left-full after:top-1/2 after:ml-2"
                    : "text-black"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

// SidebarMenu component to manage opening/closing the sidebar based on screen size

const SidebarMenu = ({ isOpen, onOpen, onClose }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div style={windowWidth > 768 ? { display: "none" } : {}}>
      <button onClick={onOpen} aria-label="Open menu" className="text-xl">
        <AiOutlineMenu size="24" />
      </button>
      <Sidebar isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

SidebarMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

// Header component containing search and sidebar menu

const Header = ({ onOpen }) => {
  return (
    <header className="flex justify-center items-center bg-[#fff] sticky top-0 left-0 z-100 w-full p-2 h-[70px] max-sm:flex max-sm:justify-between max-md:flex max-md:justify-between">
      <Search />
      <SidebarMenu onOpen={onOpen} />
    </header>
  );
};

Header.propTypes = {
  onOpen: PropTypes.func.isRequired,
};

// Main Home component
function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpen = () => setIsSidebarOpen(true);
  const handleClose = () => setIsSidebarOpen(false);

  return (
    <div className="flex flex-col">
      <Header onOpen={handleOpen} />
      <OverviewAccount />
      <GetStarted />
      <Overview />
      <Sidebar isOpen={isSidebarOpen} onClose={handleClose} />
    </div>
  );
}

export default Home;
