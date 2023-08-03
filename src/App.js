import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="project" element={<Project/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
