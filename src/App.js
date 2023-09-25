import "./assets/global.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Information from "./pages/Information/Information";
import Price from "./pages/Prices/Price";
import Contact from "./pages/Contact/Contact";
import Background from "./components/Background/Webcontent";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/informatie" element={<Information />} />
        <Route path="/prijzen" element={<Price />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
