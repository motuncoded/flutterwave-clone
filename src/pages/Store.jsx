import { useState } from "react";

import SidebarMobile from "../components/SidebarMobile";
import Header from "../components/Header";

// Store page
function StoreContainer() {
  const data = [
    {
      label: "Motunrayo Grocery Store",
      description:
        "A one-stop shop for fresh produce, snacks, and household items.",
      products: [
        "Fresh fruits and vegetables",
        "Dairy products",
        "Beverages",
        "Snacks",
        "Household supplies",
      ],
    },
    {
      label: "Retail Electronics",
      description:
        "Your trusted source for the latest gadgets, appliances, and electronic accessories.",
      products: [
        "Smartphones",
        "Laptops",
        "Televisions",
        "Kitchen appliances",
        "Gaming consoles",
      ],
    },

    {
      label: "Dulf Bookstore",
      description:
        "A haven for book lovers, offering a wide range of books and stationery.",
      products: [
        "Fiction and non-fiction books",
        "Textbooks",
        "Stationery",
        "Magazines",
        "Children's books",
      ],
    },
  ];

  return (
    <div className="w-1/2 max-sm:w-full max-sm:px-4 ">
      {data.map((item, index) => (
        <div key={index} className="my-2 w-1/2 max-sm:w-full">
          <h2 className=" text-xl font-semibold mb-4 border-b-2">
            {item.label}
          </h2>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <h3 className="  flex mb-4 ">{item.description}</h3>
              <h3></h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Store() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpen = () => setIsSidebarOpen(true);
  const handleClose = () => setIsSidebarOpen(false);

  return (
    <div className="flex flex-col px-4 max-sm:px-0">
      <Header onOpen={handleOpen} />
      <div className="flex justify-between items-center max-sm:px-4">
        {" "}
        <h1 className="text-2xl font-semibold py-2">All stores</h1>
        <button
          className=" btn-primary py-[6px] px-[14px] rounded-sm my-8 bg-accentOrange "
          disabled
          aria-label="create subaccount"
        >
          Add store +
        </button>
      </div>
      <StoreContainer />
      <SidebarMobile isOpen={isSidebarOpen} onClose={handleClose} />
    </div>
  );
}
export default Store;
