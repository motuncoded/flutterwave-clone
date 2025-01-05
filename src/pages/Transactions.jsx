import { useState } from "react";

import PropTypes from "prop-types";
import SidebarMobile from "../components/SidebarMobile";
import SidebarMenu from "../components/SidebarMenu";
import Search from "../components/Search";
import transactions from "../json/flutterwave_transactions.json";
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

const TransactionsTable = () => {
  return (
    <table className="w-full  border-collapse border border-gray-200">
      <thead>
        <tr className="bg-gray-100 sticky top-50 left-0 bottom-0 z-10">
          <th className=" px-4 py-2 text-left">Beneficiary</th>
          <th className=" px-4 py-2 text-left">Amount</th>
          <th className=" px-4 py-2 text-left">Date</th>{" "}
          <th className=" px-4 py-2 text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((item, index) => (
          <tr key={index} className="hover:bg-gray-50">
            <td className="border border-gray-300 px-4 py-2">
              {item.customer_name}
            </td>
            <td className="border border-gray-300 px-4 py-2">{item.amount}</td>
            <td className="border border-gray-300 px-4 py-2">
              {item.date}
            </td>{" "}
            <td className="border border-gray-300 px-4 py-2">{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionsTable.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      transaction_id: PropTypes.string.isRequired,
      customer_name: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

function Transactions() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpen = () => setIsSidebarOpen(true);
  const handleClose = () => setIsSidebarOpen(false);
  return (
    <div>
      <Header onOpen={handleOpen} />
      <div className="w-[calc(100% - 2rem)] max-w-full m-auto p-8">
        <TransactionsTable />
      </div>
      <SidebarMobile isOpen={isSidebarOpen} onClose={handleClose} />
    </div>
  );
}

export default Transactions;
