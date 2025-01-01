import { useState } from "react";

function Currency() {
  const [selectedCurrency, setSelectedCurrency] = useState("NGN");

  const currencies = [
    { code: "USD" },
    { code: "NGN" },
    { code: "EUR" },
    { code: "JPY" },
    { code: "GBP" },
    { code: "AUD" },
    { code: "CAD" },
    { code: "CHF" },
    { code: "CNY" },
    { code: "SEK" },
    { code: "NZD" },
  ];
  const handleChange = (event) => {
    setSelectedCurrency(event.target.value);
  };
  return (
    <div className="">
      <label htmlFor="currency" className="sr-only">
        Select your currency:
      </label>
      <select
        id="currency"
        value={selectedCurrency}
        onChange={handleChange}
        className="p-2 border border-gray-400  rounded-md w-[100px] max-w-xs outline-none font-bold"
      >
        {currencies.map((currency) => (
          <option key={currency.code} value={currency.code}>
            {currency.code}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Currency;
