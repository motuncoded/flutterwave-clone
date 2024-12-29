import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./routes/Home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
