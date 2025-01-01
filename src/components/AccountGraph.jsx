import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import data from "../json/flutterwave_transactions.json";

function AccountGraph() {
  return (
    <LineChart
      width={900}
      height={300}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0, padding: "20px" }}
    >
      <Line type="monotone" dataKey="amount" stroke="#ff9b00" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="date" />
      <YAxis datakey="amount" />
    </LineChart>
  );
}

export default AccountGraph;
