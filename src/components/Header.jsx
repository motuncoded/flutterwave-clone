import SidebarMenu from "./SidebarMenu";
import Search from "./Search";
import PropTypes from "prop-types";

const Header = ({ onOpen }) => {
  const data = [
    { label: "Payments", link: "/dashboard/payments" },
    { label: "Transactions", link: "/dashboard/transactions" },
    { label: "Settings", link: "/dashboard/settings" },
  ];
  return (
    <header className="flex justify-center items-center bg-[#fff] sticky top-0 left-0 z-50 w-full p-2 h-[70px] max-sm:flex max-sm:justify-between max-md:flex max-md:justify-between max-xl:flex max-xl:justify-between max-sm:px-0 ">
      <Search data={data} />
      <SidebarMenu onOpen={onOpen} />
    </header>
  );
};

Header.propTypes = {
  onOpen: PropTypes.func.isRequired,
};
export default Header;
