import { useNavigate } from "react-router-dom";

// Header
const Header = () => {
  const navigate = useNavigate();

  const handleLoginPage = () => {
    navigate("/");
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
          onClick={handleLoginPage}
        >
          {" "}
          Login
        </button>
      </div>
    </header>
  );
};
const NotFoundContent = () => {
  const navigate = useNavigate();

  const handleHomePage = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center flex-col w-[calc(100%    - 1rem)] max-w-[400px] m-[0_auto]">
      <h1 className="text-[6rem] font-bold">404</h1>
      <p className="text-[1rem] mb-6 text-center">
        {" "}
        Uh oh. It looks like you&apos;ve somehow managed to arrive at a terminal
        with no rails leading here. Please click the button below to go back to
        the homepage.
      </p>
      <button
        type="submit"
        className=" btn-primary py-[10px] px-4 text-[14px] rounded "
        onClick={handleHomePage}
      >
        Take the train home
      </button>
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
function NotFound() {
  return (
    <div className="home">
      <Header />
      <div className="min-h-[85vh] flex justify-between flex-col">
        <NotFoundContent />
        <Footer />
      </div>
    </div>
  );
}

export default NotFound;
