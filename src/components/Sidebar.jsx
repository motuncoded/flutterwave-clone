import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// the sidebar component  view for Desktop in the dashboard
const Sidebar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [formData, setFormData] = useState(null);
  const [merchantID, setMerchantID] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      role="sidebar"
      style={
        (windowWidth <= 768 || windowWidth <= 900 ? { display: "none" } : {}) ||
        (windowWidth >= 900 && { display: "none" })
      }
      className="fixed left-0 top-0 bottom-0 w-1/6 max-w-full bg-[#f4f6f8] z-[100] max-sm:w-1/4 max-md:w-2/4 max-xl:w-1/4"
    >
      <div className="relative overflow-hidden h-[calc(100vh-2px)] p-6">
        <div className="flex px-4">
          <div className="flex justify-between space-x-2">
            <span className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-background bg-accentOrange capitalize">
              {formData && formData.firstName.charAt(0)}
              {formData && formData.lastName.charAt(0)}
            </span>
            <div className="">
              {formData && (
                <h1 className="text-[12px] capitalize font-medium">
                  {formData.firstName} {formData.lastName}
                </h1>
              )}
              <h2 className="text-[10px] text-[#828282]">
                Merchant ID:{" "}
                <span className="text-[#576ae6]">{merchantID}</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="absolute top-[100px]">
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
                className=" my-1.5 text-2xl leading-[34px] font-medium relative"
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-accentOrange   "
                      : "text-[#121212] hover:text-accentOrange"
                  }
                >
                  {item.name}
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
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
