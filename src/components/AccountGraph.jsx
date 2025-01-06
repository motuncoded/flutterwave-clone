import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  ResponsiveContainer,
} from "recharts";
import data from "../json/flutterwave_transactions.json";

function AccountGraph() {
  const filteredData = data.slice(0, 6).map((item) => {
    // Convert the date to a numeric format (e.g., YYYYMMDD)
    const dateObj = new Date(item.date); // Assuming item.date is in a recognized date format
    const numericDate =
      dateObj.getFullYear() * 10000 +
      (dateObj.getMonth() + 1) * 100 +
      dateObj.getDate();

    return {
      ...item,
      date: numericDate, // Assign the numeric date back to the object
    };
  });

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        height={350}
        data={filteredData}
        barSize={30}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      >
        <CartesianGrid />
        <XAxis
          dataKey="date"
          tickFormatter={(tick) => {
            // Format the tick as a readable date
            const year = Math.floor(tick / 10000);
            const month = Math.floor((tick % 10000) / 100);
            const day = tick % 100;
            return `${day} ${new Date(year, month - 1).toLocaleString("default", { month: "long" })} ${year}`;
          }}
        />
        <YAxis dataKey="amount" />
        <Bar dataKey="amount" fill="#ff9b00" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default AccountGraph;
