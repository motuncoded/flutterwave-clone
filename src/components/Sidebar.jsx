import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
const Sidebar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      role="sidebar"
      style={windowWidth < 768 ? { display: "none" } : {}}
      className="fixed left-0 top-0 bottom-0 w-1/6 max-w-full bg-[#f4f6f8] z-[100] max-md:w-1/4 "
    >
      <div className="relative overflow-hidden h-[calc(100vh-2px)] p-6">
        <div className="flex justify-center items-center ">
          <div className="flex justify-between space-x-2">
            <span className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white bg-[#ff9b00]">
              MA
            </span>
            <div className="">
              <h1 className="text-[14px]">Motunrayo Adeneye</h1>
              <h2 className="text-[10px] text-[#828282]">
                Merchant ID: <span className="text-[#576ae6]">View here</span>
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
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
