import Header from "../components/Header";
import { useState, useEffect } from "react";
import SidebarMobile from "../components/SidebarMobile";

// Setting form in the Setting page
const SettingForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({}); // Initialize as an empty object

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword((prevState) => !prevState);
  };

  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleChangePassword = (e) => {
    e.preventDefault(); // Prevent default form submission
    const { currentPassword, newPassword } = formData;

    // Validate the password fields
    if (!currentPassword || !newPassword) {
      setError("Please fill in both password fields.");
      return;
    }

    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    const storedData = JSON.parse(localStorage.getItem("formData"));
    if (storedData.password !== currentPassword) {
      setError("Current password is incorrect.");
      return;
    }

    // Provide feedback to the user
    setMessage("Password changed successfully!"); // Example feedback
    // Reset the password fields if needed
    const updatedData = {
      ...formData,
      password: newPassword,
      currentPassword: "",
      newPassword: "",
    };
    setFormData(updatedData);
    localStorage.setItem("formData", JSON.stringify(updatedData));
  };

  return (
    <form action="" className="font-semibold my-8 max-w-2xl w-full">
      <div className="flex justify-between ">
        <div className="w-full mr-4">
          <label
            htmlFor="firstName"
            className="text-inherit block leading-[19px] py-1.5 pt-0 pb-2 text-[14px] "
          >
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            value={formData.firstName || ""} // Fallback to empty string
            onChange={handleChange}
            className="py-3 px-4 border w-full transparent  capitalize bg-[#eee] outline-none"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="lastName"
            className="text-inherit block leading-[19px] py-1.5  pt-0 pb-2 text-[14px] "
          >
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            value={formData.lastName || ""}
            onChange={handleChange}
            className="py-3 capitalize px-4 border w-full transparent bg-[#eee] outline-none"
          />
        </div>
      </div>
      <div className="flex justify-between my-7">
        <div className="mr-4 w-full">
          <label
            htmlFor="email"
            className="text-inherit block leading-[19px] py-1.5 font-medium pt-0 pb-2 text-[14px] "
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email || ""}
            onChange={handleChange}
            className="py-3 px-4 border w-full transparent bg-[#eee] outline-none"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="phoneNumber"
            className="text-inherit block leading-[19px] py-1.5 font-medium pt-0 pb-2 text-[14px] "
          >
            Phone Number
          </label>
          <input
            id="phoneNumber"
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber || "234"}
            onChange={handleChange}
            className="py-3 px-4 border w-full transparent bg-[#eee] outline-none"
          />
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl">Password</h2>
        <div className="flex justify-between my-6">
          <div className="w-full mr-4 flex flex-col">
            <label
              htmlFor="currentPassword"
              className="text-inherit block leading-[19px] py-1.5  pt-0 pb-2 text-[14px] "
            >
              Current Password
            </label>
            <div className="p-4 border border-border focus-within:border-accentOrange flex items-center transition-all duration-500 ease-in-out placeholder:text-accentGray rounded">
              <input
                type={showPassword ? "text" : "password"}
                id="currentPassword"
                name="currentPassword"
                value={formData.currentPassword || ""}
                onChange={handleChange}
                className="w-full transparent rounded placeholder:text-accentGray focus:outline-none"
              />
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
            {error && <p className="mt-1 text-error text-sm">{error}</p>}
            {message && (
              <p className="mt-1 text-green-500 text-sm">{message}</p>
            )}
          </div>
          <div className="w-full">
            <label
              htmlFor="newPassword"
              className="text-inherit block leading-[19px] py-1.5 font-medium pt-0 pb-2 text-[14px] "
            >
              New Password
            </label>
            <div className="p-4 border border-border focus-within:border-accentOrange flex items-center transition-all duration-500 ease-in-out placeholder:text-accentGray rounded">
              <input
                type={showPassword ? "text" : "password"}
                id="newPassword"
                name="newPassword"
                value={formData.newPassword || ""} // Correct binding
                onChange={handleChange}
                className="w-full transparent rounded placeholder:text-accentGray focus:outline-none"
              />
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
          </div>
        </div>
        <button
          type="submit"
          onClick={handleChangePassword}
          className=" mt-4 bg-accentGray px-4 py-2 rounded-md text-background"
        >
          Change password
        </button>
      </div>
    </form>
  );
};

// Setting page

function Settings() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpen = () => setIsSidebarOpen(true);
  const handleClose = () => setIsSidebarOpen(false);

  return (
    <div className="max-sm:px-2  max-xl:px-0">
      <Header onOpen={handleOpen} />
      <div className="w-[calc(100% - rem)] max-w-full m-auto px-8 py-1 max-sm:px-2 font-medium  max-lg:px-2 max-xl:px-4">
        <h1 className="text-2xl py-2">Profile</h1>
        <h2 className="text-xl">Personal Information</h2>
        <SettingForm />
      </div>
      <SidebarMobile isOpen={isSidebarOpen} onClose={handleClose} />
    </div>
  );
}

export default Settings;
