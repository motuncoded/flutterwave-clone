import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
const Header = () => {
  const [isCancel, setIsCancel] = useState(false); // State to manage modal visibility
  const navigate = useNavigate();

  const handleCancel = () => {
    setIsCancel(true);
  };
  if (isCancel) {
    return null;
  }

  const handlePrevious = (e) => {
    e.preventDefault();
    navigate("/accountsetup");
  };

  return (
    <header className="flex justify-between items-center gap-[32px] px-[24px] py-[20px] ">
      <button
        type="submit"
        onClick={handlePrevious}
        aria-label="Go to the previous step"
      >
        <img src="/arrow.svg" alt="arrow-icon" />
      </button>
      <div className="w-full mx-4 max-sm:mx-1">
        <div className="bg-[#b3b3b3] rounded  h-[12px] flex items-center ">
          <NavLink
            to="/accountstep"
            className={({ isActive }) =>
              `flex-1 h-[12px] rounded ${isActive ? "" : "bg-[#ff9b00]"}`
            }
          ></NavLink>

          <NavLink
            to="/details"
            className={({ isActive }) =>
              `bg-[#ff9b00] flex-1 h-[12px] rounded ${
                isActive ? "bg-[#ff9b00]" : ""
              }`
            }
          ></NavLink>
          <NavLink
            to="/"
            className="bg-[#b3b3b3] flex-1 h-[12px] rounded"
          ></NavLink>
        </div>
      </div>
      <button type="submit" onClick={handleCancel} aria-label="Cancel">
        <img src="/cancel.svg" alt="cancel-icon" />
      </button>
    </header>
  );
};

const OnboardingForm = () => {
  const [isSelected, setIsSelected] = useState(null); // State for radio selection
  const handleRadioSelect = (value) => {
    setIsSelected(value);
  };
  return (
    <section className="mx-auto max-w-[560px] p-[32px] pt-[32px] pb-[100px] w-full">
      <div className="">
        <h1 className=" mb-2 text-[2em] font-semibold">Confirm your details</h1>
      </div>

      <form className="mt-[32px]">
        <div className="">
          <label
            htmlFor="name"
            className="text-inherit block leading-[19px] py-1.5 font-medium pt-0 pb-2 text-[14px] "
          >
            Full name{" "}
          </label>

          <div className="flex gap-[24px]">
            <div className="w-1/2 border-2 border-[#e0e0e0] flex items-center transition-all duration-500 ease-in-out placeholder:text-gray-500 focus-within:border-transparent rounded">
              <input
                id="name"
                placeholder="John"
                className="p-4 w-full transparent placeholder:text-gray-500 focus:outline-none focus:border-[#ff9b00] focus:border-2 "
              />
            </div>

            <div className="w-1/2 border-2 border-[#e0e0e0] flex items-center transition-all duration-500 ease-in-out placeholder:text-gray-500 focus-within:border-transparent rounded">
              <input
                id="name"
                placeholder="Doe"
                className="p-4 w-full transparent placeholder:text-gray-500 focus:outline-none focus:border-[#ff9b00] focus:border-2"
              />{" "}
            </div>
          </div>
          <p className="mt-6 text-[#828282] font-medium">
            Please ensure this is first and last name on your Government ID
            document.
          </p>
          <div className="mt-[24px]">
            <label
              htmlFor="name"
              className="text-inherit block leading-[19px] py-1.5 font-medium pt-0 pb-2 text-[14px]"
            >
              Email
            </label>
            <div className="border-2 border-[#e0e0e0] flex items-center transition-all duration-500 ease-in-out placeholder:text-gray-500 focus-within:border-transparent rounded">
              <input
                id="name"
                placeholder="Email address"
                className="p-4 w-full transparent placeholder:text-gray-500 focus:outline-none focus:border-[#ff9b00] focus:border-2"
              />{" "}
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="name"
              className="text-inherit block leading-[19px] py-1.5 font-medium pt-0 pb-2 text-[14px]my-2"
            >
              Is your business incorporated with the Corporate Affairs
              Commission?
            </label>
            <div className="flex gap-[24px]">
              <div
                className={`flex justify-between h-max  relative w-full border rounded p-4 cursor-pointer ${
                  isSelected === "yes"
                    ? "bg-[#fff6e9] border-[#ff9b00]"
                    : "border-gray-300"
                }`}
                onClick={() => handleRadioSelect("yes")}
              >
                <label
                  htmlFor="yes"
                  className="text-inherit block leading-[19px] py-1.5 font-medium pt-0 pb-2 text-[14px]"
                >
                  Yes
                </label>
                <div>
                  <input
                    type="radio"
                    value="yes"
                    checked={isSelected === "yes"}
                    readOnly
                    className="peer appearance-none w-6 h-6 rounded-full border-gray-300 border-2 bg-white checked:border-4 checked:border-[#703e00] checked:bg-[#ff9b00]"
                  />
                </div>
              </div>
              <div
                className={`flex justify-between h-max relative w-full border rounded p-4 cursor-pointer ${
                  isSelected === "no"
                    ? "bg-[#fff6e9] border-[#ff9b00]"
                    : "border-gray-300"
                }`}
                onClick={() => handleRadioSelect("no")}
              >
                <label
                  htmlFor="no"
                  className="text-inherit block leading-[19px] py-1.5 font-medium pt-0 pb-2 text-[14px]"
                >
                  No
                </label>
                <div>
                  <input
                    type="radio"
                    value="no"
                    checked={isSelected === "no"}
                    readOnly
                    className="peer appearance-none w-6 h-6 rounded-full border-gray-300 border-2 bg-white checked:border-4 checked:border-[#703e00] checked:bg-[#ff9b00]"
                  />
                </div>
              </div>
            </div>
            <div className="mt-[24px]">
              <label
                htmlFor="business"
                className="text-inherit block leading-[19px] py-1.5 font-medium pt-0 pb-2 text-[14px]"
              >
                Business registration type
              </label>
              <select
                id="business"
                value="business"
                className={`w-full mt-2 px-2 py-3 border outline-none rounded-md  font-medium text-gray-500 focus:border-[#ff9b00]`}
              >
                <option value="" disabled>
                  --select an option
                </option>
                <option value="sole">Nigeria</option>
                <option value="Rwanda">Rwanda</option>
              </select>
              {/* {errors.country && (
                <p className="text-red-500 text-sm mt-1">{errors.country}</p>
              )} */}
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};
function Details() {
  return (
    <div>
      <Header />
      <OnboardingForm />
    </div>
  );
}

export default Details;
