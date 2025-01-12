import { useState } from "react";

//Days option component
function Days() {
  const [selectedDays, setSelectedDays] = useState("NGN");

  const days = [
    { last: "Last 7 Days" },
    { last: "Today" },
    { last: "Yesterday" },
    { last: "Last 30 Days" },
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
