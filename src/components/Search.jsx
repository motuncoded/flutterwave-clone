import { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import PropTypes from "prop-types";

//Search components
const Search = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase()),
  );
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
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={handleFocus}
          onBlur={handleBlur} // Delay to allow click on dropdown
          className="ml-2 bg-inherit outline-none"
          autoComplete="off"
        />
      </div>
      {isFocused && (
        <ul className="mt-4 absolute bg-background w-[calc(600px-1rem)] ">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <li key={index} className="p-2 hover:bg-gray-100 cursor-pointer">
                <Link to={item.link} key={index} className="p-2 ">
                  {item.label}
                </Link>
              </li>
            ))
          ) : (
            <li className="text-accentGray">No results found.</li>
          )}
        </ul>
      )}
    </form>
  );
};
Search.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Search;
