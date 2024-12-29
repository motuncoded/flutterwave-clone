import React, { useState } from "react";

// Header

const Header = () => {
  return (
    <header className="grid grid-cols-2 items-center px-[15px] py-[32px]">
      <a href="/">
        <img src="/flutterwave-logo.svg"></img>
      </a>
      <div className="flex justify-end">
        <button type="button" className="btn-primary">
          {" "}
          Create Account{" "}
        </button>
      </div>
    </header>
  );
};

//  Login

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log("Logging in with:", { email, password });
  };

  return (
    <div className=" bg-background p-8 rounded-lg shadow-md w-96">
      <h2 className="text-2xl font-bold text-center mb-4">
        Login to your account
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 px-3 text-gray-500"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-orange-500 text-white font-bold rounded hover:bg-orange-600"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-center">
        <a href="#forgot-password" className="text-accent hover:underline">
          Forgot password?
        </a>
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="flex justify-between font-medium px-8">
      <p>
        Flutterwave Technology Solutions Limited - Licensed by the Central Bank
        of Nigeria
      </p>
      <p>
        <a href="#privacy-policy">Privacy policy</a> |
        <a href="#terms" className="">
          Terms and conditions
        </a>
      </p>
    </footer>
  );
};
function Home() {
  return (
    <div className="home">
      <Header />
      <div>
        <Login />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
