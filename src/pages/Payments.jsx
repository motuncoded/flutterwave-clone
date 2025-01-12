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
          placeholder="Search transactions"
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="ml-2 bg-inherit outline-none w-full"
          autoComplete="off"
        />
      </div>
      {isFocused && (
        <div className=" w-[300px] mt-4 absolute bg-white  border border-gray-200 rounded shadow-md z-10 max-sm:w-2/3">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <table key={index} className="w-full">
                <thead>
                  <tr className="hover:bg-gray-50">
                    <th className="p-2 text-left">{item.customer_name}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="p-2">{item.status}</td>
                    <td className="p-2">{item.date}</td>
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

// Header for Payment page
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

const TransactionsTable = ({ currentRows }) => {
  return (
    <div>
      <table className="w-full rounded-xl">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-4 text-left font-normal flex flex-col">
              Beneficiary
            </th>
            <th className="p-4 text-left font-normal">Amount</th>
            <th className="p-4 text-left font-normal">Date</th>

            <th className="p-4 text-left font-normal">Status</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="p-4 flex flex-col">{item.customer_name}</td>
              <td className="p-4">
                {" "}
                <span className="font-semibold">NGN {item.amount}</span>
              </td>

              <td className="p-4">{item.date}</td>
              <td className="p-4">
                <span
                  className={`${item.status === "Success" ? "text-green-800 p-2 font-medium bg-green-200 rounded-lg" : ""}
                  ${item.status === "Failed" ? "text-pink-800 p-2 font-medium bg-pink-200 rounded-lg" : ""}`}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TransactionsTable.propTypes = {
  currentRows: PropTypes.array.isRequired,
};

function Payments() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("asc"); // State for sorting order
  const [filterStatus, setFilterStatus] = useState(""); // State for filtering by status
  const rowsPerPage = 10;

  const handleOpen = () => setIsSidebarOpen(true);
  const handleClose = () => setIsSidebarOpen(false);

  const filteredTransactions = transactionsData.filter((item) => {
    const matchesSearchTerm =
      item.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.transaction_id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus ? item.status === filterStatus : true; // Apply status filter if set
    return matchesSearchTerm && matchesStatus;
  });

  // Sort transactions based on selected sort order
  const sortedTransactions = filteredTransactions.sort((a, b) => {
    if (sortOrder === "asc") {
      return new Date(a.date) - new Date(b.date); // Sort by date ascending
    } else {
      return new Date(b.date) - new Date(a.date); // Sort by date descending
    }
  });

  const totalPages = Math.ceil(sortedTransactions.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentRows = sortedTransactions.slice(
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
  const handleSortToggle = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc")); // Toggle sort order
  };

  const handleFilterStatus = (status) => {
    setFilterStatus(status); // Set the filter status
    setCurrentPage(1); // Reset to first page on new filter
  };
  const defaultTransactions = transactionsData
    .filter(
      (item) =>
        item.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.transaction_id.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .slice(startIndex, startIndex + rowsPerPage);
  return (
    <div>
      <Header
        onOpen={handleOpen}
        transactions={transactionsData}
        onSearch={handleSearch}
      />

      <div className="w-[calc(100% - 1rem)] max-w-full m-auto px-8 py-1 max-sm:px-[3px]">
        <div className="flex justify-between items-center flex-wrap mb-4">
          <h1 className="text-2xl font-semibold py-2 max-sm:px-2">
            {" "}
            All Payments
          </h1>{" "}
          <div className=" max-sm:px-2 flex justify-center items-center">
            <button
              className="mr-2  rounded-md bg-[#121212]  hover:bg-accentOrange  text-background px-4 py-2 "
              onClick={() => handleFilterStatus("Success")}
            >
              Filter by Success
            </button>
            <button
              className="mx-2  rounded-md bg-[#121212] hover:bg-accentOrange   text-background px-4 py-2"
              onClick={() => handleFilterStatus("Failed")}
            >
              Filter by Failed
            </button>
            <button
              className="mx-2 max-sm:my-2 rounded-md bg-[#121212] hover:bg-accentOrange    text-background px-4 py-2"
              onClick={handleSortToggle}
            >
              Sort by Date {sortOrder === "asc" ? "↑" : "↓"}
            </button>
          </div>
        </div>
        <TransactionsTable
          currentRows={filterStatus ? currentRows : defaultTransactions}
        />
        <div className="flex justify-between items-center mt-4">
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

export default Payments;
