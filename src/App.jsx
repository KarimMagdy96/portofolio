import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Footer from "./Componants/Footer/Footer";
import Resume from "./Componants/Resume/Resume";
import MYNav from "./Componants/Nav/Nav";
import { Routes, Route } from "react-router-dom";
import About from "./Componants/About/About";
import Home from "./Componants/Home/Home";
function App() {
  const dot = useRef(null);
  const endX= useRef(window.innerWidth/2)
  const endY= useRef(window.innerHeight/2)
  const mouseMoveEnent=e=>{
    endX.current=e.pageX;
    endY.current=e.pageY;
    dot.current.style.top=endY.current+"px";
    dot.current.style.left=endX.current+"px";

  }
  useEffect(() => { 
    document.addEventListener("mousemove", mouseMoveEnent)
  
    return () => {
      document.removeEventListener("mousemove", mouseMoveEnent);
    }
  }, [])
  
  return (
    <>
      <div ref={dot} className="dot"></div>
      <div className="pad"></div>
      <MYNav />
      <div className=" container-fluid  px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
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
