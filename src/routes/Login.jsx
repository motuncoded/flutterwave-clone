import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

// Header
const Header = () => {
  const navigate = useNavigate();

  const handleRegisterPage = () => {
    navigate("/register");
  };

  return (
    <header className="grid grid-cols-2 items-center px-[26px] py-[32px] ">
      <a href="/">
        <img src="/flutterwave-logo.svg" alt="logo" />
      </a>
      <div className="flex justify-end">
        <button
          type="button"
          className="btn-primary py-[6px] px-[14px] tracking-tight hover:bg-accentHover "
          onClick={handleRegisterPage}
        >
          {" "}
          Create account{" "}
        </button>
      </div>
    </header>
  );
};

//  Login

const Account = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find user by email
    const user = users.find((user) => user.email === email);

    // Validate email and password
    if (!user) {
      setErrorMessage("Email not registered. Please sign up.");
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }

    if (user.password !== password) {
      setErrorMessage("Incorrect password. Please try again.");
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }

    // Save formData for displaying user info in the dashboard
    localStorage.setItem("formData", JSON.stringify(user));

    // Successful login
    console.log("Login successful:", { email });
    navigate("/dashboard/home");
  };

  return (
    <div className="slideIn bg-background m-[100px] py-8 px-6 rounded-lg  w-[340px] shadow-md max-sm:mx-2 max-sm:my-[75px]">
      <h1 className="text-[18px] font-medium  mb-[20px]">
        Login to your account
      </h1>
      <form onSubmit={handleLoginSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="sr-only"></label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email address"
            className="mt-1  w-full p-2 border border-border placeholder-inherit transition-all focus:outline-none focus:border-accentOrange
             rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="sr-only"></label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
              className="mt-1  w-full p-2 border border-border placeholder-inherit transition-all focus:outline-none focus:border-accentOrange
        rounded"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 px-3 "
            >
              {showPassword ? (
                <IoEyeOffOutline size="24" />
              ) : (
                <IoEyeOutline size="24" />
              )}
            </button>
          </div>
          {errorMessage && <p className="text-error text-sm">{errorMessage}</p>}
        </div>
        <button
          type="submit"
          className=" btn-primary w-full py-[10px] px-4 text-[18px] font-extrabold rounded hover:bg-[#cc7c00] "
        >
          Login
        </button>
      </form>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="text-[13px]  flex justify-between  py-6 font-medium px-8 max-sm:grid max-sm:grid-cols-[2fr_1fr_1fr] max-sm:place-items-center gap-4 ">
      <p>
        Flutterwave Technology Solutions Limited - Licensed by the Central Bank
        of Nigeria
      </p>
      <p>
        <a href="https://flutterwave.com/ng/privacy-policy">Privacy policy</a>
      </p>
      <p>
        {" "}
        <a href="https://flutterwave.com/ng/terms" className="">
          Terms and conditions
        </a>
      </p>
    </footer>
  );
};
function Login() {
  return (
    <div className="home">
      <Header />
      <div className="min-h-[85vh] flex justify-between flex-col max-sm:grid max-sm:place-items-center">
        <Account />
        <Footer />
      </div>
    </div>
  );
}

export default Login;
