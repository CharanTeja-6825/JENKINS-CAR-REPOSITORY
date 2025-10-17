import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddProduct from "./components/AddProduct";
import Manage from "./components/Manage";
import FindByName from "./components/FindByName";

function App() {
  return (
    <BrowserRouter basename="/carfrontend">
      <center><h1 className="text-4xl font-bold">Product Manager</h1></center>
      <Navbar />
      <Routes>
        <Route path="/" element={<AddProduct />} />
        <Route path="/manage" element={<Manage />} />
        <Route path="/find" element={<FindByName />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
