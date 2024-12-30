import { useState } from "react";

// Header

const Header = () => {
  return (
    <header className="grid grid-cols-2 items-center px-[15px] py-[32px]">
      <a href="/">
        <img src="/flutterwave-logo.svg"></img>
      </a>
      <div className="flex justify-end">
        <button type="button" className="btn-primary py-2 px-4">
          {" "}
          Login to account
        </button>
      </div>
    </header>
  );
};

//  Login

const Login = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log("Logging in with:", { email });
  };

  return (
    <div className=" bg-background m-[100px] py-8 px-6 rounded-lg  w-[340px]">
      <h1 className="text-[18px] line font-medium  mb-[20px]">
        Forget Password?
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

        <button
          type="submit"
          className=" btn-primary w-full py-[7.5px] px-4 text-[18px] font-bold rounded"
        >
          Reset Password
        </button>
      </form>
      <p className="mt-4">
        <a href="/" className="text-[#576ae6]">
          Remember your password?
        </a>
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="flex justify-between  py-8 font-medium px-8">
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
function Home() {
  return (
    <div className="home">
      <Header />
      <div className="">
        <Login />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
