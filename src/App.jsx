import "./App.css";
import { Routes, Route } from "react-router-dom"; // Ensure you import from 'react-router-dom'
import Login from "./routes/Login";
import DashboardLayout from "./routes/DashboardLayout"; // New Layout
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import Customers from "./pages/Customers";
import Balances from "./pages/Balances";
import Store from "./pages/Store";
import Payments from "./pages/Payments";
import SubAccounts from "./pages/SubAccounts";
import Settings from "./pages/Settings";
import Details from "./components/Details";
import Register from "./routes/Register";
import NotFound from "./routes/NotFound";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/details" element={<Details />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index path="home" element={<Home />} />{" "}
        {/* Default child route */}
        <Route path="transactions" element={<Transactions />} />
        <Route path="customers" element={<Customers />} />
        <Route path="balances" element={<Balances />} />
        <Route path="store" element={<Store />} />
        <Route path="payments" element={<Payments />} />
        <Route path="subaccounts" element={<SubAccounts />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<NotFound />} />{" "}
    </Routes>
  );
}

export default App;
