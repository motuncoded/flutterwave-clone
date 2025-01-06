import { useState } from "react";
const StartedCards = () => {
  const datas = [
    {
      icon: "/lock.svg",
      heading: "Receive payment",
      description:
        "Create a payment link in just a few clicks and share the link with your customers—no code required.",
      link: "Create payment link",
    },
    {
      icon: "/book.svg",
      heading: "Create and send invoices",
      description:
        "Create a payment link in just a few clicks and share the link with your customers—no code required.",

      link: "Clear invoices",
    },
    {
      icon: "/store.svg",
      heading: "Start selling online",
      description:
        "Create a payment link in just a few clicks and share the link with your customers—no code required.",
      link: "Add products ",
    },
  ];
  return (
    <div className="flex gap-[14px] max-sm:flex-wrap max-md:grid max-md:grid-cols-1 max-xl:grid max-xl:grid-cols-2 ">
      {datas.map((data, index) => {
        return (
          <div
            key={index}
            className=" px-6 py-6 border-[#f2f2f2] border-2 rounded-sm"
          >
            <img src={data.icon} alt="overview_icon" className="mb-2" />
            <h2 className="text-[14px] font-semibold mb-1">{data.heading}</h2>
            <p className="text-gray-500 mb-4 font-medium leading--[18px]">
              {data.description}
            </p>
            <button className="border-[#121212] hover:bg-[#eee] border-2 py-1 px-4 w-full font-medium rounded text-[#333] max-xl:w-[200px]">
              {data.link}
            </button>
          </div>
        );
      })}
    </div>
  );
};

const GetStarted = () => {
  const [isCancel, setIsCancel] = useState(false); // State to manage modal visibility

  const handleCancel = () => {
    setIsCancel(true);
  };
  if (isCancel) {
    return null;
  }

  return (
    <section className={`px-4 py-6 ${isCancel ? "none" : ""}  `}>
      <div className="flex justify-between px-2 py-4">
        <h2 className="font-bold text-xl">Let&apos;s get you started</h2>
        <button type="submit" onClick={handleCancel} aria-label="Cancel">
          <img src="/cancel.svg" alt="cancel-icon" />
        </button>
      </div>
      <div className="flex w-[calc(100% -1rem)] max-w-[1000px] pl-2">
        <StartedCards />
      </div>
    </section>
  );
};

export default GetStarted;
