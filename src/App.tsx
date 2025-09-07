import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Index";
import Home from "./pages/Home/Index";
import Income from "./pages/Income/Index";
import Expense from "./pages/Expense/Index";
import Settings from "./pages/Settings/Index";

const App = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/income" element={<Income />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
