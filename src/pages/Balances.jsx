import SidebarMobile from "../components/SidebarMobile";
import { useState } from "react";
import Header from "../components/Header";

// Balance page

const Balances = () => {
  const data = ["USD", "NGN", "KES", "GHS"];
  return (
    <div className="w-1/2 max-sm:w-full">
      {data.map((item, index) => (
        <div key={index} className="my-6 ">
          <div className="mb-4 flex border-b-2 pb-2 justify-between items-center">
            {" "}
            <h2 className=" text-2xl font-bold">{item} balance</h2>
            <div>
              <button
                type="button"
                className="py-2 px-3 bg-accentGray text-white ml-2 font-medium rounded-md"
              >
                Set low limit
              </button>
              <button
                type="button"
                className="py-2 px-3 bg-accentOrange ml-2 font-medium rounded-md"
                disabled
              >
                Fund balance
              </button>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex justify-between">
              <h3 className="  flex mb-4  font-medium ">Collection balance </h3>
              <h3 className="font-medium">{item} 0.00</h3>
            </div>
            <div className="flex justify-between">
              <h3 className="flex mb-4  font-medium">Payout balance</h3>
              <h3 className="font-medium">{item} 0.00</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

function Balance() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpen = () => setIsSidebarOpen(true);
  const handleClose = () => setIsSidebarOpen(false);
  return (
    <div className="px-6 max-sm:px-2">
      <Header onOpen={handleOpen} />
      <h1 className="text-xl font-semibold py-2">All balances</h1>

      <div className="flex flex-col">
        <Balances />
      </div>
      <SidebarMobile isOpen={isSidebarOpen} onClose={handleClose} />
    </div>
  );
}

export default Balance;
