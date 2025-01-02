const OverviewAccount = () => {
  return (
    <div className="py-[32px] px-[14px] bg-orange-100 w-full">
      <h2 className="font-bold text-xl">Activate the account</h2>
      <div className="bg-white rounded mt-4 -mb-2 flex justify-between">
        <div className=" px-6 py-6">
          <img
            src="/lock.svg"
            alt="overview_icon"
            className="mb-2 w-[50px] h-[50px]"
          />
          <h2 className="text-[14px] font-semibold mb-1 w-3/4 max-sm:w-full">
            Activate your account and start receiving payments in a just few
            seconds
          </h2>
          <p className="text-gray-500 mb-4 font-medium leading--[18px]"></p>
          <button className="border-[#ff9b00] border-2 py-1 px-4 w-[200px] font-medium text-black max-xl:w-[200px]">
            Activate your account
          </button>
        </div>
        <div>
          <img src="/biglock.png" width="300" height="300" alt="lock-icon" />
        </div>
      </div>
    </div>
  );
};
export default OverviewAccount;
