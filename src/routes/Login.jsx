import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

// Header

const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/accountsetup");
  };

  return (
    <header className="grid grid-cols-2 items-center px-[26px] py-[32px] ">
      <a href="/">
        <img src="/flutterwave-logo.svg" alt="logo" />
      </a>
      <div className="flex justify-end">
        <button
          type="button"
          className="btn-primary py-[6px] px-[14px] tracking-tight hover:bg-[#cc7c00] "
          onClick={handleNavigate}
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log("Logging in with:", { email, password });
  };

  return (
    <div className=" slideIn bg-background m-[100px] py-8 px-6 rounded-lg  w-[340px] shadow-md max-sm:mx-2 max-sm:my-[75px]">
      <h1 className="text-[18px] font-medium  mb-[20px]">
        Login to your account
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="sr-only"></label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email address"
            className="mt-1  w-full p-2 border border-[#e0e0e0] placeholder-inherit transition-all focus:outline-none focus:border-[#ff9b00]
             rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="sr-only"></label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
              className="mt-1  w-full p-2 border border-[#e0e0e0] placeholder-inherit transition-all focus:outline-none focus:border-[#ff9b00]
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
        </div>
        <button
          type="submit"
          className=" btn-primary w-full py-[10px] px-4 text-[18px] font-extrabold rounded hover:bg-[#cc7c00] "
        >
          Login
        </button>
      </form>
      <p className="mt-4">
        <a href="#forgot-password" className="text-[#576ae6]">
          Forgot password?
        </a>
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className=" text-[12px] flex justify-between  py-8 font-medium px-8 max-sm:grid max-sm:grid-cols-[2fr_1fr_1fr] max-sm:place-items-center gap-4">
      <p>
        Flutterwave Technology Solutions Limited - Licensed by the Central Bank
        of Nigeria
      </p>
      <p>
        <a href="#privacy-policy">Privacy policy</a>
      </p>
      <p>
        {" "}
        <a href="#terms" className="">
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
      <div className="max-sm:grid max-sm:place-items-center ">
        <Account />
        <Footer />
      </div>
    </div>
  );
}

export default Login;
