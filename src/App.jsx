import React from "react";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Navaratri/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
