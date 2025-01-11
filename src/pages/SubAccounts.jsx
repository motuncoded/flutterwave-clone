import SidebarMobile from "../components/SidebarMobile";
import { useState } from "react";
import Header from "../components/Header";

const SubAccount = () => {
  const data = ["USD", "NGN", "KES", "GHS", "UGX", "TZS", "ZAR"];
  return (
    <div className="w-1/2 max-sm:w-full">
      {data.map((item, index) => (
        <div key={index} className="my-6 ">
          <h2 className="border-b-2 text-xl font-semibold mb-4">{item}</h2>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <h3 className="  flex mb-4 ">Total value </h3>
              <h3>{item} 0.00</h3>
            </div>
            <div className="flex justify-between">
              <h3 className="flex mb-4">Total commissions earned</h3>
              <h3>{item} 0.00</h3>
            </div>
            <div className="flex justify-between">
              <h3 className="flex mb-4">Total Transactions</h3>
              <h3>{item} 0.00</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

function SubAccounts() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpen = () => setIsSidebarOpen(true);
  const handleClose = () => setIsSidebarOpen(false);
  return (
    <div className="px-6 max-sm:px-2">
      <Header onOpen={handleOpen} />
      <div className="flex justify-between items-center">
        {" "}
        <h1 className="text-xl font-semibold py-2">Overview</h1>
        <button
          className=" btn-primary py-[6px] px-[14px] rounded-sm my-8 bg-accentOrange "
          disabled
          aria-label="create subaccount"
        >
          Add subaccounts +
        </button>
      </div>

      <div className="flex flex-col">
        <SubAccount />
      </div>
      <SidebarMobile isOpen={isSidebarOpen} onClose={handleClose} />
    </div>
  );
}

export default SubAccounts;
