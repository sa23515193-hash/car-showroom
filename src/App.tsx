import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import CarDetail from "./pages/CarDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/cars/:id" element={<CarDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          {/* hashrouter,routers*/}
        </Routes>
      </main>
      <footer className="bg-gray-900 text-gray-300 text-center py-6">
        © {new Date().getFullYear()} Car Showroom. All rights reserved.
      </footer>
    </div>
  );
};


export default App;
