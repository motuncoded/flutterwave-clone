import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";

//Dashboard layout
const DashboardLayout = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sidebarWidth =
    (windowWidth < 768 && "0px") ||
    (windowWidth < 900 && "0px") ||
    (windowWidth > 900 &&
      "calc(13.45%)" &&
      windowWidth <= 1200 &&
      "calc(13.45%)") ||
    (windowWidth <= 1600 && "calc(8.67%)");

  const mainMarginLeft = sidebarWidth; // Use sidebar width for margin-left

  return (
    <div className="flex w-full">
      <div style={{ width: sidebarWidth }}>
        {" "}
        {/* Ensuring Sidebar has defined width */}
        <Sidebar />
      </div>
      <main
        style={{
          marginLeft: mainMarginLeft,
          width: `calc(100% - ${sidebarWidth})`,
          transition: "margin-left 0.3s ease-in-out",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
