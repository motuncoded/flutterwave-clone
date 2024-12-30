import { FiSearch } from "react-icons/fi";
const Search = () => {
  return (
    <form className="w-[600px] p-2  border-2 border-[#f2f2f2] rounded-sm">
      <label htmlFor="search" className="sr-only"></label>
      <div className="flex items-center ">
        <FiSearch />
        <input
          type="text"
          placeholder="Search"
          className="ml-2 bg-inherit outline-none "
        />
      </div>
    </form>
  );
};

const Header = () => {
  return (
    <header className="flex justify-center items-center bg-[#fff]  sticky top-0 left-0 z-100 w-full p-2 h-[70px] ">
      <Search />
    </header>
  );
};
const Account = () => {
  return (
    <div className="py-[32px] px-[24px] bg-orange-100">
      <h2 className="font-bold text-xl">Activate the account</h2>
      <div className="bg-white rounded h-[300px] mt-4 -mb-2"></div>
    </div>
  );
};

function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Account />
      <div className="py-[32px] px-[24px]">
        <h2 className="font-bold text-xl">Let&apos;s get started</h2>
      </div>
    </div>
  );
}

export default Home;
