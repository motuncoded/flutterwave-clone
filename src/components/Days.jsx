import { useState } from "react";

function Days() {
  const [selectedDays, setSelectedDays] = useState("NGN");

  const days = [
    { last: "Last 7 Days" },
    { last: "Last 14 Days" },
    { last: "Last 21 Days" },
    { last: "Last 27 Days" },
  ];
  const handleChange = (event) => {
    setSelectedDays(event.target.value);
  };
  return (
    <div className="">
      <label htmlFor="days" className="sr-only">
        Select your days
      </label>
      <select
        id="currency"
        value={selectedDays}
        onChange={handleChange}
        className="p-2 border border-gray-400 outline-none rounded-md font-bold"
      >
        {days.map((day) => (
          <option key={day.last} value={day.code}>
            {day.last}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Days;
