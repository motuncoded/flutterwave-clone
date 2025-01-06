import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import OnboardingForm from "./OnboardingForm";
//Header
const Header = () => {
  const [isCancel, setIsCancel] = useState(false); // State to manage cancellation
  const navigate = useNavigate();

  //to manage cancellation
  const handleCancel = (e) => {
    e.preventDefault();
    setIsCancel(true);
    navigate("/register");
  };
  if (isCancel) {
    return null;
  }
  // to manage Previous page
  const handlePrevious = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  return (
    <header className="flex justify-between items-center gap-[32px] px-[24px] py-[20px] ">
      <button
        type="button"
        onClick={handlePrevious}
        aria-label="Go to the previous step"
      >
        <img src="/arrow.svg" alt="arrow-icon" />
      </button>
      <div className="w-full mx-4 max-sm:mx-1">
        <div className="bg-[#b3b3b3] rounded  h-[12px] flex items-center ">
          <NavLink
            to="/register"
            className={({ isActive }) =>
              `flex-1 h-[12px] rounded ${isActive ? "" : "bg-accentOrange"}`
            }
          ></NavLink>

          <NavLink
            to="/details"
            className={({ isActive }) =>
              `bg-accentOrange flex-1 h-[12px] rounded ${
                isActive ? "bg-accentOrange" : ""
              }`
            }
          ></NavLink>
        </div>
      </div>
      <button type="button" onClick={handleCancel} aria-label="Cancel">
        <img src="/cancel.svg" alt="cancel-icon" />
      </button>
    </header>
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
