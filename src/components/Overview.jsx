import Days from "./Days";
import Currency from "./Currency.jsx";
import PropTypes from "prop-types";
import AccountGraph from "./AccountGraph.jsx";
import data from "../json/flutterwave_transactions.json";
const Dates = ({ datee, dateee }) => {
  return (
    <div className=" border border-gray-400 rounded-md font-bold flex items-center divide-x-2">
      <span className="p-2">{datee}</span>
      <span className="p-2">{dateee}</span>
    </div>
  );
};

const Total = ({ heading, value }) => {
  return (
    <div className="">
      <h3 className=" text-gray-400 py-1">{heading}</h3>
      <h3 className="text-[18px] font-semibold">{value}</h3>
    </div>
  );
};
const Amount = () => {
  const totalAmount = data.reduce((sum, data) => sum + data.amount, 0);
  return (
    <div className="">
      <h3 className=" text-gray-400 py-1">Total transactions</h3>
      <h3 className="text-[18px] font-semibold">NGN {totalAmount}.00</h3>
    </div>
  );
};
const Revenue = () => {
  const totalRevenue = data
    .filter((transaction) => transaction.status === "Success") // Only successful transactions
    .reduce((sum, transaction) => sum + transaction.amount, 0); // Sum the amounts
  return (
    <div className="">
      <h3 className=" text-gray-400 py-1">Total revenue</h3>
      <h3 className="text-[18px] font-semibold">NGN {totalRevenue}</h3>
    </div>
  );
};

const Failed = () => {
  const totalRevenue = data
    .filter((transaction) => transaction.status === "Failed") // Only successful transactions
    .reduce((sum, transaction) => sum + transaction.amount, 0); // Sum the amounts
  return (
    <div className="">
      <h3 className=" text-gray-400 py-1">Total failed</h3>
      <h3 className="text-[18px] font-semibold">NGN {totalRevenue}</h3>
    </div>
  );
};
const Pending = () => {
  const totalRevenue = data
    .filter((transaction) => transaction.status === "Pending") // Only successful transactions
    .reduce((sum, transaction) => sum + transaction.amount, 0); // Sum the amounts
  return (
    <div className="">
      <h3 className=" text-gray-400 py-1">Total pending</h3>
      <h3 className="text-[18px] font-semibold">NGN {totalRevenue}</h3>
    </div>
  );
};

Total.propTypes = {
  heading: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
const Overview = () => {
  return (
    <section className="px-4 py-6">
      <div className="flex justify-between items-center max-sm:flex max-sm:flex-wrap">
        <div className="flex items-center space-x-4 mb-8">
          <h2 className="font-bold text-xl">Overview</h2>
          <Currency />
        </div>
        <div className="flex items-center space-x-4 mb-8">
          <Days />
          <Dates datee="Jun 01 2024" dateee="Jun 08 2024" />
        </div>
      </div>
      <div
        className="grid grid-cols-[2fr_1fr] place-items-center gap-4 border divide-x-2
         max-sm:grid-cols-[1fr] max-sm:divide-x-0 max-sm:flex max-sm:flex-wrap
          max-md:grid-cols-[1fr] max-md:divide-x-0 max-md:flex max-md:flex-wrap  "
      >
        <div className="px-4 py-6  w-full max-sm:px-2 max-sm:border-b-2 max-md:px-2 max-md:border-b-2 ">
          <AccountGraph />
        </div>
        <div className="flex flex-col justify-center space-y-6 px-5 py-6 ">
          <Amount />
          <Revenue />

          <div className="border"></div>
          <Failed />
          <Pending />

          <a href="#" className="text-[#ff9b00] font-bold">
            See all transactions
          </a>
        </div>
      </div>
    </section>
  );
};
Dates.propTypes = {
  datee: PropTypes.string.isRequired,
  dateee: PropTypes.string.isRequired,
};

export default Overview;
