//  the overview account component in the dashboard page

const OverviewAccount = () => {
  return (
    <div className="py-[22px] px-[14px] bg-[#FFF6E9] w-full ">
      <h2 className="font-bold text-xl">Activate the account</h2>
      <div className="bg-white rounded relative mt-4 -mb-2 flex justify-between max-sm:flex-col">
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
          <button className="bg-[#FFF6E9] border-accentOrange border-2 py-1 px-4 w-[200px] font-medium text-[#703e00] rounded-sm max-xl:w-[200px]">
            Activate your account
          </button>
        </div>
        <div className="absolute right-0 -top-20 bottom-0 max-sm:hidden  max-xl:hidden">
          <img
            src="	https://app.flutterwave.com/_nuxt/img/payment-protection.564b36c.png"
            width="350"
            height="350"
            alt="lock-icon"
          />
        </div>
      </div>
    </div>
  );
};
export default OverviewAccount;
