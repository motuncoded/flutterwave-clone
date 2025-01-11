import { AiOutlineClose } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const SidebarMobile = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState(null);
  const [merchantID, setMerchantID] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("formData"));
    if (!user) {
      navigate("/login"); // Redirect if no user is logged in
    }
  }, [navigate]);

  const handleSignOut = () => {
    localStorage.removeItem("formData");
    navigate("/");
  };
  useEffect(() => {
    // Check if Merchant ID already exists in localStorage
    const storedID = localStorage.getItem("merchantID");

    if (storedID) {
      // Use the existing ID if it exists
      setMerchantID(storedID);
    } else {
      // Generate a new random ID and store it
      const randomID = Math.floor(Math.random() * 1000000); // Generate a number between 0 and 999999
      setMerchantID(randomID);
      localStorage.setItem("merchantID", randomID);
    }
  }, []);
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-[#f4f6f8] shadow-md z-50 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 w-4/6 max-w-sm`}
    >
      <div className="flex justify-between items-center p-6 max-sm:px-4">
        <div className="flex justify-between">
          <span className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-background bg-accentOrange capitalize">
            {formData && formData.firstName.charAt(0)}
            {formData && formData.lastName.charAt(0)}{" "}
          </span>
          <div className="ml-2">
            {formData && (
              <h1 className="text-[12px] capitalize font-medium">
                {formData.firstName} {formData.lastName}
              </h1>
            )}
            <h2 className="text-[10px] text-accentGray">
              Merchant ID: <span className="text-[#576ae6]">{merchantID}</span>
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
            { name: "SubAccounts", to: "/dashboard/subaccounts" },
            { name: "Settings", to: "/dashboard/settings" },
          ].map((item) => (
            <li
              key={item.to}
              className=" py-1.5 text-2xl leading-[34px] font-medium relative"
            >
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive ? "" : "text-[#121212] hover:text-accentOrange"
                }
              >
                {item.name}
                <span></span>
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={handleSignOut}
          className="text-2xl mt-16 leading-[34px] font-medium text-[#cc7c00] hover:text-accentOrange "
        >
          Sign Out
        </button>
      </nav>
    </div>
  );
};

SidebarMobile.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SidebarMobile;
