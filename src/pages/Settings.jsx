import Header from "../components/Header";

const SettingForm = () => {
  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword((prevState) => !prevState);
  };

  return (
    <form action="" className=" my-8">
      <div className="flex justify-between w-1/2">
        <div className="w-full mr-4">
          <label
            htmlFor="firstName"
            className="text-inherit block leading-[19px] py-1.5 font-medium pt-0 pb-2 text-[14px] "
          >
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            className="py-3 px-4 border w-full transparent bg-[#eee] outline-none"
            autoComplete="new-password"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="firstName"
            className="text-inherit block leading-[19px] py-1.5 font-medium pt-0 pb-2 text-[14px] "
          >
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            className="py-3 px-4 border w-full transparent bg-[#eee] outline-none"
            autoComplete="new-password"
          />{" "}
        </div>
      </div>
      <div className="flex justify-between w-1/2">
        <div className="w-full mr-4">
          <label
            htmlFor="firstName"
            className="text-inherit block leading-[19px] py-1.5 font-medium pt-0 pb-2 text-[14px] "
          >
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            className="py-3 px-4 border w-full transparent bg-[#eee] outline-none"
            autoComplete="new-password"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="firstName"
            className="text-inherit block leading-[19px] py-1.5 font-medium pt-0 pb-2 text-[14px] "
          >
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            className="py-3 px-4 border w-full transparent bg-[#eee] outline-none"
            autoComplete="new-password"
          />{" "}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl">Paassword</h2>
        <div className="flex justify-between w-1/2">
          <div className="w-full mr-4">
            <label
              htmlFor="firstName"
              className="text-inherit block leading-[19px] py-1.5 font-medium pt-0 pb-2 text-[14px] "
            >
              First Name
            </label>
            <div className=" p-4 border border-border focus-within:border-accentOrange flex items-center transition-all duration-500 ease-in-out placeholder:text-accentGray  rounded">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="w-full  transparent rounded placeholder:text-accentGray focus:outline-none"
                autoComplete="new-password"
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
          </div>
          <div className="w-full">
            <label
              htmlFor="firstName"
              className="text-inherit block leading-[19px] py-1.5 font-medium pt-0 pb-2 text-[14px] "
            >
              Last Name
            </label>
            <div className=" p-4 border border-border focus-within:border-accentOrange flex items-center transition-all duration-500 ease-in-out placeholder:text-accentGray  rounded">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full  transparent rounded placeholder:text-accentGray focus:outline-none"
                autoComplete="new-password"
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
          </div>
        </div>
      </div>
    </form>
  );
};

function Settings() {
  return (
    <div>
      <Header />
      <div className="w-[calc(100% - 1rem)] max-w-full m-auto px-8 py-1 max-sm:px-[3px] ">
        <h1 className="text-2xl font-medium py-2"> Profile</h1>{" "}
        <h2 className="text-xl">Personal Information</h2>
        <SettingForm />
      </div>
    </div>
  );
}

export default Settings;
