import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const SidebarMobile = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
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
              Merchant ID: <span className="text-accentLink">View here</span>
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
            // { name: "Subaccounts", to: "/dashboard/subAccounts" },
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
                    ? "text-accentOrange relative after:content-[''] after:block after:w-full after:h-0.5 after:bg-accentOrange after:absolute after:left-full after:top-1/2 after:ml-2"
                    : "text-[#121212] hover:text-accentOrange"
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

SidebarMobile.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SidebarMobile;
