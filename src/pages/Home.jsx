import { useState } from "react";
import GetStarted from "../components/GetStarted";
import OverviewAccount from "../components/OverviewAccount";
import PropTypes from "prop-types";
import Overview from "../components/Overview";
import SidebarMobile from "../components/SidebarMobile";
import SidebarMenu from "../components/SidebarMenu";
import Search from "../components/Search";

// Header component containing search and sidebar menu

const Header = ({ onOpen }) => {
  const data = [
    { label: "Payments", link: "/dashboard/payments" },
    { label: "Transactions", link: "/dashboard/transactions" },
    { label: "Settings", link: "/dashboard/settings" },
  ];
  return (
    <header className="flex justify-center items-center bg-[#fff] sticky top-0 left-0 z-50 w-full p-2 h-[70px] max-sm:flex max-sm:justify-between max-md:flex max-md:justify-between max-xl:flex max-xl:justify-between">
      <Search data={data} />
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
      <SidebarMobile isOpen={isSidebarOpen} onClose={handleClose} />
    </div>
  );
}

export default Home;
