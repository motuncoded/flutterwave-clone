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
  const filteredData = data.slice(0, 5);
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        width={900}
        height={350}
        data={filteredData}
        barSize={30}
        margin={{ top: 5, right: 10, bottom: 0, left: 0, padding: "20px" }}
      >
        <CartesianGrid />

        <Bar dataKey="amount" fill="#ff9b00" />
        <XAxis dataKey="date" />
        <YAxis datakey="amount" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default AccountGraph;
("");
