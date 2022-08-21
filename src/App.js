import React from "react";
import "./app.css";
import Main from "./components/main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Home /> */}
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/main" element={<Main />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
