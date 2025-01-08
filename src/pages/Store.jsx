import { useState } from "react";

import SidebarMobile from "../components/SidebarMobile";
import SidebarMenu from "../components/SidebarMenu";
import Search from "../components/Search";
import PropTypes from "prop-types";

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
function StoreContainer() {
  return (
    <div>
      <h1>
        Set up your Flutterwave store in 3 easy ways and start selling right for
        your dashboard
      </h1>
    </div>
  );
}

function Store() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpen = () => setIsSidebarOpen(true);
  const handleClose = () => setIsSidebarOpen(false);

  return (
    <div className="flex flex-col">
      <Header onOpen={handleOpen} />
      <StoreContainer />
      <SidebarMobile isOpen={isSidebarOpen} onClose={handleClose} />
    </div>
  );
}
export default Store;
