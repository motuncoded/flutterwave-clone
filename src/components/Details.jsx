import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
const Header = () => {
  const [isCancel, setIsCancel] = useState(false); // State to manage modal visibilit
  const navigate = useNavigate();

  const handleCancel = (e) => {
    e.preventDefault();
    setIsCancel(true);
    navigate("/accountsetup");
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
        type="button"
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
        </div>
      </div>
      <button type="button" onClick={handleCancel} aria-label="Cancel">
        <img src="/cancel.svg" alt="cancel-icon" />
      </button>
    </header>
  );
};

const OnboardingForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    isBusinessRegistered: null,
    businessType: "",
    password: "",
    termsAccepted: false,
    newsAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Field can not be empty";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Field can not be empty";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Field can not be empty";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address.";
    }
    if (formData.isBusinessRegistered === null) {
      newErrors.isBusinessRegistered = "Please select an option.";
    }
    if (
      formData.isBusinessRegistered === "yes" &&
      !formData.businessType.trim()
    ) {
      newErrors.businessType = "Business type is required.";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Field can not be empty.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }
    if (!formData.termsAccepted) {
      newErrors.termsAccepted =
        "You must accept the terms and conditions to proceed.";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setTimeout(() => {
        setErrors({});
      }, 3000); // Timeout set to 5 seconds
    }
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form data submitted:", formData);
      navigate("/home"); // Redirect on successful submission
    }
  };

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword((prevState) => !prevState);
  };

  return (
    <section className="mx-auto max-w-[560px] p-[32px] pt-[32px] pb-[100px] w-full">
      <div className="">
        <h1 className=" mb-2 text-[2em] font-semibold">Confirm your details</h1>
      </div>

      <form className="mt-[32px] " onSubmit={handleSubmit}>
        <div className="">
          <label
            htmlFor="firstName"
            className="text-inherit block leading-[19px] py-1.5 font-medium pt-0 pb-2 text-[14px] "
          >
            Full name{" "}
          </label>

          <div className="flex gap-[24px]">
            <div className="w-1/2  flex items-center transition-all duration-500 ease-in-out placeholder:text-gray-500 focus-within:border-transparent rounded">
              <div className="flex flex-col">
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  className="py-3 px-4 border w-full transparent placeholder:text-gray-500 focus:outline-none focus:border-[#ff9b00] focus:bg-white "
                  autoComplete="new-password"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
              </div>
            </div>

            <div className="w-1/2   flex items-center transition-all duration-500 ease-in-out placeholder:text-gray-500 focus-within:border-transparent rounded">
              <div className="flex flex-col">
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  className="py-3 px-4 border w-full rounded transparent placeholder:text-gray-500 focus:outline-none focus:border-[#ff9b00] "
                  autoComplete="new-password"
                />{" "}
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </div>
            </div>
          </div>
          <p className="mt-6 text-[#828282] font-medium">
            Please ensure this is first and last name on your Government ID
            document.
          </p>
          <div className="mt-[24px]">
            <label
              htmlFor="email"
              className="text-inherit block leading-[19px] py-1.5 font-medium pt-0 pb-2 text-[14px]"
            >
              Email
            </label>
            <div className="flex  flex-col transition-all duration-500 ease-in-out placeholder:text-gray-500 focus-within:border-transparent rounded">
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@gmail.com"
                autoComplete="new-password"
                className="py-3 px-4 border w-full transparent rounded placeholder:text-gray-500 focus:outline-none focus:border-[#ff9b00] "
              />{" "}
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="business"
              className="text-inherit block leading-[19px] py-1.5 font-medium pt-0 pb-2 text-[14px]my-2"
            >
              Is your business incorporated with the Corporate Affairs
              Commission?
            </label>
            <div className="flex flex-col ">
              <div className="flex justify-between gap-[24px]">
                <div
                  className={`flex justify-between h-max  relative w-full border rounded p-3 cursor-pointer ${
                    formData.isBusinessRegistered === "yes"
                      ? "bg-[#fff6e9] border-[#ff9b00]"
                      : "border-[#e0e0e0] border-2"
                  }`}
                >
                  <label
                    htmlFor="yes"
                    className="text-inherit block leading-[19px] py-1.5 font-medium text-[14px]"
                  >
                    Yes
                  </label>
                  <div>
                    <input
                      type="radio"
                      value="yes"
                      name="isBusinessRegistered"
                      checked={formData.isBusinessRegistered === "yes"}
                      onChange={handleChange}
                      className="peer appearance-none  w-6 h-6 rounded-full border-gray-300 border-2 bg-white checked:border-4 checked:border-[#703e00] checked:bg-[#ff9b00]"
                    />
                  </div>
                </div>
                <div
                  className={`flex justify-between h-max relative w-full border rounded p-3 cursor-pointer ${
                    formData.isBusinessRegistered === "no"
                      ? "bg-[#fff6e9] border-[#ff9b00]"
                      : "border-[#e0e0e0] border-2"
                  }`}
                >
                  <label
                    htmlFor="no"
                    className="text-inherit block leading-[19px] py-1.5 font-medium text-[14px]"
                  >
                    No
                  </label>
                  <div>
                    <input
                      type="radio"
                      value="no"
                      name="isBusinessRegistered"
                      checked={formData.isBusinessRegistered === "no"}
                      onChange={handleChange}
                      className="peer appearance-none w-6 h-6 rounded-full border-gray-300 border-2 bg-white checked:border-4 checked:border-[#703e00] checked:bg-[#ff9b00]"
                    />
                  </div>
                </div>
              </div>
              {errors.isBusinessRegistered && (
                <p className="text-red-500 text-sm">
                  {errors.isBusinessRegistered}
                </p>
              )}
            </div>
            {formData.isBusinessRegistered === "yes" && (
              <div className="mt-6">
                <label
                  htmlFor="businessType"
                  className="text-inherit block leading-[19px]  font-medium text-[14px]"
                >
                  Business registration type
                </label>
                <select
                  id="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className={`w-full mt-2  p-4 border outline-none rounded-md  font-medium text-gray-500 focus:border-[#ff9b00]`}
                >
                  <option value="" disabled hidden>
                    --select an option
                  </option>
                  <option value="sole">Sole Properietorship</option>
                  <option value="limited">Limited Company</option>
                </select>
                {errors.businessType && (
                  <p className="text-red-500 text-sm">{errors.businessType}</p>
                )}
              </div>
            )}

            <div className="mt-[24px]">
              <label
                htmlFor="password"
                className="text-inherit block leading-[19px] py-1.5 font-medium pt-0 pb-2 text-[14px]"
              >
                Choose a Password
              </label>
              <div className="p-4 border border-[#e0e0e0] focus:border-[#ff9b00] flex items-center transition-all duration-500 ease-in-out placeholder:text-gray-500  rounded">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full  transparent rounded placeholder:text-gray-500 focus:outline-none"
                />{" "}
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <img
                    src={showPassword ? "/closeeye.svg" : "/openeye.svg"}
                    alt={showPassword ? "Hide password" : "Show password"}
                  />
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>

            <div className=" mt-6 flex flex-col  w-full ">
              <label htmlFor="termsAccepted" className="sr-only"></label>
              <div className="flex justify-between">
                <div>
                  <input
                    id="termsAccepted"
                    type="checkbox"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleChange}
                    className="appearance-none mr-3  w-5 h-5 relative rounded-md border focus:outline-none focus:before:text-[#ff9b00] focus:before:px-1  focus:before:absolute  border-[#ff9b00] focus:before:content-['✓']"
                  />
                </div>
                <p className="font-medium">
                  I acknowledge that I have read, understood, and agree to be
                  bound by Flutterwave&apos;s{" "}
                  <a
                    className="text-[#576ae6] "
                    href="/links/f4b/onboarding/agreement?country=NG"
                    target="_blank"
                    rel="noopener"
                  >
                    Merchant Services Agreement (MSA)
                  </a>
                  ,{" "}
                  <a
                    className="text-[#576ae6] "
                    href="/links/website/terms"
                    target="_blank"
                    rel="noopener"
                  >
                    Terms and Conditions
                  </a>
                  , and{" "}
                  <a
                    className="text-[#576ae6] "
                    href="/links/website/privacy-policy"
                    target="_blank"
                    rel="noopener"
                  >
                    Privacy Notice
                  </a>
                  .
                </p>
              </div>
              {errors.termsAccepted && (
                <p className="text-red-500 text-sm">{errors.termsAccepted}</p>
              )}
            </div>
            <div className="mt-6 flex justify-between w-full ">
              <label htmlFor="newsAccepted" className="sr-only"></label>

              <div>
                <input
                  id="newsAccepted"
                  type="checkbox"
                  name="newsAccepted"
                  checked={formData.newsAccepted}
                  onChange={handleChange}
                  className="appearance-none mr-3  w-5 h-5 relative rounded-md border focus:outline-none focus:before:text-[#ff9b00] focus:before:px-1  focus:before:absolute  border-[#ff9b00] focus:before:content-['✓']"
                />
              </div>
              <p className="font-medium text-[14px]">
                I agree to receive news, offers, and promotional materials from
                Flutterwave.
              </p>
            </div>

            <button
              type="sumbit"
              className="my-5 w-full py-5 font-semibold rounded-lg bg-[#ffca7d] hover:bg-[#ff9b00]"
            >
              Create your account
            </button>
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
