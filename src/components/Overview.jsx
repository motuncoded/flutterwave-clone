import Days from "./Days";
import Currency from "./Currency.jsx";
import PropTypes from "prop-types";
import AccountGraph from "./AccountGraph.jsx";

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
    <div className="space-y-6">
      <h3 className=" text-gray-400 py-1">{heading}</h3>
      <h3 className="text-[18px] font-semibold">{value}</h3>
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
      <div className="flex justify-between max-sm:flex max-sm:flex-wrap">
        <div className="flex items-center space-x-4 mb-4">
          <h2 className="font-bold text-xl">Overview</h2>
          <Currency />
        </div>
        <div className="flex items-center space-x-4">
          <Days />
          <Dates datee="Jun 01 2024" dateee="Jun 08 2024" />
        </div>
      </div>
      <div
        className="grid grid-cols-[2fr_1fr] gap-4 border
      mx-2 mt-6"
      >
        <div className="px-4 py-6">
          <AccountGraph />
        </div>
        <div className="flex flex-col justify-center  ">
          <div className="divide-b-2 space-y-10">
            <Total heading="Total Value" value="NGN 76, 050.00" />
            <Total heading="Total Volume" value="1" />
          </div>
          <div className="">
            <Total heading="Total Value" value="NGN 76, 050.00" />
          </div>
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
