import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isCancel, setIsCancel] = useState(false); // State to manage modal visibility

  const handleCancel = () => {
    setIsCancel(true);
  };
  if (isCancel) {
    return null;
  }

  return (
    <header className="flex justify-between items-center gap-[32px] px-[24px] py-[20px]">
      <a href="/">
        <img
          src="/flutterwave-logo.svg"
          width="250"
          height="250"
          alt="logo"
          className="w-full h-max"
        />
      </a>
      <div className="w-full mx-4 max-sm:mx-1">
        <div className="bg-[#b3b3b3] rounded h-[12px] flex items-center">
          <NavLink
            to="/accountsetup"
            className={({ isActive }) =>
              `flex-1 h-[12px] rounded ${
                isActive ? "bg-[#ff9b00]" : "bg-transparent"
              }`
            }
          ></NavLink>
          <NavLink
            to="/details"
            className={({ isActive }) =>
              `flex-1 h-[12px] rounded ${
                isActive ? "bg-[#ff9b00]" : "bg-transparent"
              }`
            }
          ></NavLink>
        </div>
      </div>
      <button type="submit" onClick={handleCancel} aria-label="Cancel">
        <img src="/cancel.svg" alt="cancel-icon" />
      </button>
    </header>
  );
};

const AccountType = ({
  icon,
  heading,
  paragraph,
  value,
  isSelected,
  onSelect,
}) => {
  return (
    <div
      className={`flex justify-between h-max mt-2 relative w-full border rounded p-4 cursor-pointer ${
        isSelected ? "bg-[#fff6e9] border-[#ff9b00]" : "border-gray-300"
      }`}
      onClick={() => onSelect(value)}
    >
      <img
        alt={heading}
        src={icon}
        className="max-h-full max-w-full h-[52px] w-[52px] mr-4"
      />
      <div className="w-full">
        <h2 className="font-bold">{heading}</h2>
        <p className="font-medium py-1 text-[#4f4f4f]">{paragraph}</p>
      </div>
      <div>
        <input
          type="radio"
          value={value}
          checked={isSelected}
          readOnly
          className="peer appearance-none w-6 h-6 rounded-full border-gray-300 border-2 bg-white checked:border-4 checked:border-[#703e00] checked:bg-[#ff9b00]"
        />
      </div>
    </div>
  );
};

const AccountSetup = () => {
  const [country, setCountry] = useState("");
  const [accountType, setAccountType] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleValidation = () => {
    const validationErrors = {};
    if (!country) {
      validationErrors.country = "Please select a country.";
    }
    if (!accountType) {
      validationErrors.accountType = "Please select an account type.";
    }
    return validationErrors;
  };

  const handleContinue = (e) => {
    e.preventDefault();

    const validationErrors = handleValidation();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set validation errors
    } else {
      setErrors({});
      navigate("/details");
    }
  };

  return (
    <div>
      <Header />

      <div className="flex items-center justify-center py-10 px-4">
        <form className="w-1/3 max-sm:w-10/12 max-md:w-10/12 max-xl:w-8/12">
          <h1 className="text-2xl font-bold">
            What type of account would you like to create?
          </h1>
          <p className="text-sm font-medium mb-8">
            Select the account type that best meets your needs.
          </p>

          {/* Country Selection */}
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            Country
          </label>
          <select
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className={`w-full mt-2 px-2 py-4 border outline-none rounded-md ${
              errors.country ? "border-red-500" : "border-gray-300"
            } font-medium text-gray-500 focus:border-[#ff9b00]`}
          >
            <option value="" disabled>
              Select your country
            </option>
            <option value="Nigeria">Nigeria</option>
            <option value="Rwanda">Rwanda</option>
          </select>
          {errors.country && (
            <p className="text-red-500 text-sm mt-1">{errors.country}</p>
          )}
          <p className="text-[12px] text-[#828282] mt-1.5 font-medium">
            For other countries click{" "}
            <a
              href="https://flutterwave.com/ng/contact-sales"
              className="text-blue-500"
            >
              here
            </a>
            .
          </p>

          {/* Account Type Selection */}
          <div className="my-6">
            <label
              htmlFor="entity"
              className="text-sm font-medium text-gray-700"
            >
              Select an account type
            </label>
            <div className="flex flex-col gap-6">
              <AccountType
                icon="https://rave-services.f4b-flutterwave.com/v1/services/filestack/download/Nvto5dksTyqmo05HPs2U/ed9954dcd2411292638e5d304a618c51c4527ec5e6bd9706187451e3063b516feb7044e8361ad4ae3f5302df8d23fde4000fa9db558fea5a2b83a4a41d03f788"
                heading="Business account"
                paragraph="For freelancers, sole traders, startups, small to medium businesses
                and enterprises."
                value="Business"
                isSelected={accountType === "Business"}
                onSelect={setAccountType}
              />
              <AccountType
                icon="https://rave-services.f4b-flutterwave.com/v1/services/filestack/download/4lMcDDgTHOsRoCIOwZxY/7434272c9459ab6e26f81771d64b6ca70a726bba5e8ca416232b80ac1eb60dbeb8408d31b87923c136109695d19e371d8ce841833103eeff550697b35bd3256c"
                heading="Other entities"
                paragraph="For charities, non-profits & religious institutions."
                value="Other"
                isSelected={accountType === "Other"}
                onSelect={setAccountType}
              />
            </div>
            {errors.accountType && (
              <p className="text-red-500 text-sm mt-1">{errors.accountType}</p>
            )}
          </div>

          {/* Continue Button */}
          <button
            type="button"
            onClick={handleContinue}
            className="my-6 w-full py-5 font-semibold rounded-lg bg-[#ffca7d] hover:bg-[#ff9b00]"
          >
            Continue
          </button>
          <p className="font-medium text-center">
            Already have an account?{" "}
            <a href="/login" className="text-[#576ae6]">
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

AccountType.propTypes = {
  icon: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default AccountSetup;
