import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Footer from "./Componants/Footer/Footer";
import Resume from "./Componants/Resume/Resume";
import Contact from "./Componants/Contact/Contact";
import MYNav from "./Componants/Nav/Nav";
import { Routes, Route } from "react-router-dom";
import About from "./Componants/About/About";
import Home from "./Componants/Home/Home";
function App() {
  return (
    <>
      <MYNav />
      <div className=" container-fluid  px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
