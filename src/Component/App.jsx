import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";   // same folder me hain
import Signup from "./Signup"; // same folder me hain
import Home from "./Home";
import Contact from "./Contact"
import About from "./About";
import Skill from "./Skill";
import Experience from "./Experience";
import Header from "./Header";
import Project from "./Project";
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="project" element={<Project/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/Skill" element={<Skill/>}/>
      <Route path="/Experience" element={<Experience/>}/>
    </Routes>
    </>
  );
}

export default App;
