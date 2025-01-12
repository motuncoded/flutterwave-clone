import { useState } from "react";
import GetStarted from "../components/GetStarted";
import OverviewAccount from "../components/OverviewAccount";
import Overview from "../components/Overview";
import SidebarMobile from "../components/SidebarMobile";
import Header from "../components/Header";

// Dashboard Home component
function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpen = () => setIsSidebarOpen(true);
  const handleClose = () => setIsSidebarOpen(false);

  return (
    <div className="flex flex-col ">
      <Header onOpen={handleOpen} />
      <OverviewAccount />
      <GetStarted />
      <Overview />
      <SidebarMobile isOpen={isSidebarOpen} onClose={handleClose} />
    </div>
  );
}

export default Home;
