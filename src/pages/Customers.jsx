import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import PropTypes from "prop-types";
import SidebarMobile from "../components/SidebarMobile";
import SidebarMenu from "../components/SidebarMenu";
import transactionsData from "../json/flutterwave_transactions.json"; // Import your data

// search functionality for all transactions
const Search = ({ transactions, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  const filteredData = transactions
    .filter(
      (item) =>
        item.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.transaction_id.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .slice(0, 5);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setTimeout(() => setIsFocused(false), 200);

  return (
    <form className="w-[600px] p-2 border-2 border-[#f2f2f2] rounded-sm max-sm:w-3/4">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="flex items-center">
        <FiSearch />
        <input
          id="search"
          type="text"
          placeholder="Search customers..."
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="ml-2 bg-inherit outline-none w-full"
          autoComplete="off"
        />
      </div>
      {isFocused && (
        <div className="mt-4 absolute bg-white  border border-gray-200 rounded shadow-md z-10 max-sm:w-2/3">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <table key={index} className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2 text-left">{item.customer_name}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="p-2">{item.transaction_id}</td>
                  </tr>
                </tbody>
              </table>
            ))
          ) : (
            <div className="p-2 text-gray-500">No results found.</div>
          )}
        </div>
      )}
    </form>
  );
};

Search.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      transaction_id: PropTypes.string.isRequired,
      customer_name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onSearch: PropTypes.func.isRequired,
};

//Header page for transaction
const Header = ({ onOpen, transactions, onSearch }) => {
  return (
    <header className="flex justify-center items-center bg-[#fff] sticky top-0 left-0 z-50 w-full p-2 h-[70px] max-sm:flex max-sm:justify-between max-md:flex max-md:justify-between max-xl:flex max-xl:justify-between max-sm:p-4">
      <Search transactions={transactions} onSearch={onSearch} />
      <SidebarMenu onOpen={onOpen} />
    </header>
  );
};

Header.propTypes = {
  onOpen: PropTypes.func.isRequired,
  transactions: PropTypes.array.isRequired,
  onSearch: PropTypes.func.isRequired,
};

const CustomersTable = ({ currentRows }) => {
  return (
    <div className="mt-4 max-md:mt-3 max-sm:mt-3">
      <table className="w-full rounded-xl">
        <thead>
          <tr className="bg-gray-100 ">
            <th className="p-4 text-left font-normal">Fullname</th>

            <th className="p-4 text-left font-normal">Email address</th>
            <th className="p-4 text-left font-normal">Date</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="p-4 flex flex-col">
                <span className="font-semibold">{item.customer_name}</span>
              </td>

              <td className="p-4">customers@gmail.com</td>

              <td className="p-4">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

CustomersTable.propTypes = {
  currentRows: PropTypes.array.isRequired,
};

function Customers() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const handleOpen = () => setIsSidebarOpen(true);
  const handleClose = () => setIsSidebarOpen(false);

  // Filter transactions based on search term
  const filteredTransactions = transactionsData.filter(
    (item) =>
      item.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.transaction_id.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredTransactions.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentRows = filteredTransactions.slice(
    startIndex,
    startIndex + rowsPerPage,
  );

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reset to first page on new search
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <Header
        onOpen={handleOpen}
        transactions={transactionsData}
        onSearch={handleSearch}
      />

      <div className="w-[calc(100% - 1rem)] max-w-full m-auto px-6 py-1 max-sm:px-[3px]">
        <h1 className="text-2xl font-semibold py-2 max-sm:px-3">
          {" "}
          All customers
        </h1>{" "}
        <CustomersTable currentRows={currentRows} />
        <div className="flex justify-between items-center mt-4 ">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
      <SidebarMobile isOpen={isSidebarOpen} onClose={handleClose} />
    </div>
  );
}

export default Customers;
