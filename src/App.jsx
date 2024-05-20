import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Cars from "./pages/Cars.jsx";
import Motorcycles from "./pages/Motorcycles.jsx";
import Printers from "./pages/Printers.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/cars" element={<Cars />} />
        <Route exact path="/motorcycles" element={<Motorcycles />} />
        <Route exact path="/printers" element={<Printers />} />
      </Routes>
    </Router>
  );
}

export default App;